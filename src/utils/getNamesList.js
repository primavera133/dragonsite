export const getNamesList = species => {
  const names = []
  species.forEach(specie => {
    names.push([specie.scientific_name, specie.scientific_name])
    specie.local_names.forEach(ln => names.push([ln, specie.scientific_name]))
  })
  return names
}
