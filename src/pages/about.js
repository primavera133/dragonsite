import React from 'react'
import { graphql } from 'gatsby'
import { getNamesList } from '../utils/getNamesList'
import { Layout } from '../components/Layout'
import { Search } from '../components/Search'

export default ({ data }) => (
  <Layout
    head={
      <>
        <Search names={getNamesList(data.dragonflies.species)} />
      </>
    }
  >
    <h1>About this site</h1>
    <p>
      This is a site about the dragonflies of Europe. The data for the site
      comes from this API: https://dragonsgraphqlapi.jonasmyrenas.now.sh/. The
      code for this site is open source and can be found on{' '}
      <a href="https://github.com/primavera133/dragonsite">Github</a>
    </p>
    <h2>Main sources</h2>
    <ul>
      <li>
        Atlas of the European Dragonflies and Damselflies, Jean-Pierre
        Boudot(Editor), Vincent J Kalkman(Editor), Fons Peels(Illustrator)
      </li>
      <li>
        Dragonflies and Damselflies of Europe: A scientific approach to the
        identification of European Odonata without capture, Galliani, C.;
        Scherini, R.; Piglia, A.
      </li>
      <li>
        Field guide to the dargonflies of Brittain and Europe, Klaas-Douwe B
        Dijkstra.
      </li>
      <li>Nordens trollsländor, M. Billqvist, D. Andersson, C. Bergendorff</li>
    </ul>
    <p>These are all excellent books, go get them if you don't have them.</p>
    <h2>Contribute</h2>
    <p>
      This is a work in continuous progress. Help with proof-reading and editing descriptions is appreciated.
      Finding good images is also something I would appreciate help with. All images need to have usable licenses, Creative Commons or equivalent.
      
      If you would like to contribute, please contact jonas@myrenas.se.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    dragonflies {
      species {
        items_id
        scientific_name
        local_names
      }
    }
  }
`
