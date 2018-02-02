export const name = 'luke'
export const getName = () => {
  return name
}

const age = 2

export {
  name as name2,
  getName as getName2,
  age
}
