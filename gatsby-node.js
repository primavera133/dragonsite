const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      dragonflies {
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
      component: path.resolve(`./src/components/Specie.js`),
      context: {
        names,
        ...context
      }
    })
  })
}
