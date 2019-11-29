const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      dragonflies {
        species {
          items_id
          scientific_name
          description
        }
      }
    }
  `)
  data.dragonflies.species.forEach(
    ({ items_id, scientific_name, description }) => {
      actions.createPage({
        path: `/species/${items_id}/`,
        component: path.resolve(`./src/components/Specie.js`),
        context: {
          items_id,
          scientific_name,
          description
        }
      })
    }
  )
}
