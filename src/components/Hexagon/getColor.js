const cache = {}
let idx = 0

const palette = [
  {
    name: 'Aeshnidae green',
    color: '#8aa22a',
    border: '#7c9125',
    text: '#404000'
  },
  {
    name: 'Calopteryx Blue',
    color: '#4363d8',
    border: '#2b4fd2',
    text: '#fff'
  },
  {
    name: 'Coenagrionidae Cyan',
    color: '#42d4f4',
    border: '#0dc2ea',
    text: '#1c363c'
  },

  {
    name: 'Colegastridae Brown',
    color: '#9A6324',
    border: '#7b4f1c',
    text: '#fff'
  },
  {
    name: 'Cordulidae Olive',
    color: '#808000',
    border: '#666600',
    text: '#fff'
  },
  {
    name: 'euphaeidae Teal',
    color: '#469990',
    border: '#387a73',
    text: '#fff'
  },
  {
    name: 'Gomphidae Yellow',
    color: '#ffe119',
    border: '#e0c200',
    text: '#000'
  },
  {
    name: 'Lime',
    color: '#cdf075',
    border: '#a8e118',
    text: '#374908'
  },
  {
    name: 'Lestidae Green',
    color: '#54943f',
    border: '#4b8538',
    text: '#fff'
  },
  {
    name: 'Orange',
    color: '#f58231',
    border: '#f37014',
    text: '#fff'
  },
  {
    name: 'Apricot',
    color: '#ffd8b1',
    border: '#fec285',
    text: '#000'
  },
  {
    name: 'Platychnemidae blue',
    color: '#74d1e6',
    border: '#56c7e0',
    text: '#000'
  }
]

const getColor = family => {
  if (cache[family]) {
    return cache[family]
  }

  const color = palette[idx]
  idx++
  cache[family] = color

  return color
}

export default getColor
