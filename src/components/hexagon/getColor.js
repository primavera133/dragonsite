const cache = {}
let idx = 0

const palette = [
  {
    name: 'Aeshnidae green',
    bg: '#dbe4b5',
    color: '#dbe4b573',
    border: '#7c9125',
    text: '#404000'
  },
  {
    name: 'Calopteryx Blue',
    bg: '#bec6e461',
    color: '#4363d8',
    border: '#2b4fd2',
    text: '#fff'
  },
  {
    name: 'Coenagrionidae Cyan',
    bg: '#b7edf978',
    color: '#42d4f4',
    border: '#0dc2ea',
    text: '#1c363c'
  },

  {
    name: 'Colegastridae Brown',
    bg: '#caae8f4d',
    color: '#9A6324',
    border: '#7b4f1c',
    text: '#fff'
  },
  {
    name: 'Cordulidae Olive',
    bg: '#c1c1976e',
    color: '#808000',
    border: '#666600',
    text: '#fff'
  },
  {
    name: 'euphaeidae Teal',
    bg: '#bedcd9',
    color: '#469990',
    border: '#387a73',
    text: '#fff'
  },
  {
    name: 'Gomphidae Yellow',
    bg: '#f8f9c6',
    color: '#ffe119',
    border: '#e0c200',
    text: '#000'
  },
  {
    name: 'Lime',
    bg: '#cedaaf',
    color: '#cdf075',
    border: '#a8e118',
    text: '#374908'
  },
  {
    name: 'Lestidae Green',
    bg: '#afde9f78',
    color: '#54943f',
    border: '#4b8538',
    text: '#fff'
  },
  {
    name: 'Orange',
    bg: '#f5d7c26e',
    color: '#f58231',
    border: '#f37014',
    text: '#fff'
  },
  {
    name: 'Apricot',
    bg: '#ffd8b1',
    color: '#ffd8b1',
    border: '#fec285',
    text: '#000'
  },
  {
    name: 'Platychnemidae blue',
    bg: '#bce2ea6b',
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
