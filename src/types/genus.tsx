import { ID } from './id'
import { Specie } from './specie'

export type Genus = {
  family_name: string
  genus_name: ID
  species: [Specie]
}
