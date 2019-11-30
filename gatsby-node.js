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
  data.dragonflies.species.forEach(context => {
    actions.createPage({
      path: `/species/${context.scientific_name}/`,
      component: path.resolve(`./src/components/Specie.js`),
      context
    })
  })
}
