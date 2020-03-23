const path = require(`path`)

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /leaflet/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      dragonflies {
        genera {
          genus_name
          species {
            scientific_name
          }
        }
        species {
          items_id
          scientific_name
          author_citation
          behaviour
          description
          distribution
          flight_period
          habitat
          images {
            cloud_name
            all {
              public_id
              caption
              license
              lic_url
              by
              url
            }
          }
          local_names
          red_list {
            EU27_endemic
            habitats_directive
            red_list_EU27
            red_list_europe_endemic
            red_list_europe
            red_list_mediterranean
            trend_europe
          }
          similar_species
          size {
            length
            wingspan
          }
          sources
          links {
            label
            link
          }
          meta {
            label
            value
          }
        }
        taxonomy {
          families {
            family_name
            genera {
              genus_name
              species {
                scientific_name
              }
            }
          }
        }
      }
    }
  `)

  const names = []
  data.dragonflies.species.forEach(specie => {
    names.push([specie.scientific_name, specie.scientific_name])
    specie.local_names.forEach(ln => names.push([ln, specie.scientific_name]))
  })

  data.dragonflies.species.forEach(context => {
    actions.createPage({
      path: `/species/${context.scientific_name}/`,
      component: path.resolve(`./src/dynamicPages/SpeciePage.js`),
      context: {
        names,
        ...context,
      },
    })
  })

  await Promise.all(
    data.dragonflies.genera.map(async context => {
      const { data: genusData } = await graphql(
        `
          query aboutGenus($genus_name: String!) {
            dragonflies {
              aboutGenus(name: $genus_name) {
                title
                author_citation
                description
                sources
              }
            }
          }
        `,
        { genus_name: context.genus_name }
      )
      const { aboutGenus } = genusData.dragonflies
      const species = data.dragonflies.genera || []

      actions.createPage({
        path: `/genera/${context.genus_name}`,
        component: path.resolve('./src/dynamicPages/GenusPage.js'),
        context: {
          names,
          species,
          ...context,
          ...aboutGenus,
        },
      })
    })
  )

  await Promise.all(
    data.dragonflies.taxonomy.families.map(async context => {
      const { data: familyData } = await graphql(
        `
          query GetFamilySpecies($family_name: String!) {
            dragonflies {
              familySpecies(name: $family_name) {
                scientific_name
                local_names
              }
              aboutFamily(name: $family_name) {
                title
                author_citation
                description
                sources
              }
            }
          }
        `,
        { family_name: context.family_name }
      )
      const species = familyData.dragonflies.familySpecies || []
      const aboutFamily = familyData.dragonflies.aboutFamily

      actions.createPage({
        path: `/families/${context.family_name}`,
        component: path.resolve('./src/dynamicPages/FamilyPage.js'),
        context: {
          names,
          species,
          ...context,
          ...aboutFamily,
        },
      })
    })
  )
}
