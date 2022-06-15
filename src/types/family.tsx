import { ID } from './id'
import { Genus } from './genus'

export type Family = {
  family_name: ID
  genera: [Genus]
}
