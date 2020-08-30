// faker.js -> gerar dados reais aleatórios
import crypto from 'crypto'

export const stringGenerator = (
  length = 8,
  chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
) =>
  crypto.randomBytes(length).reduce(
    (acc, byte) => {
      const entropy = acc.entropy + byte
      const char = chars[entropy % chars.length]

      return {
        string: acc.string.concat(char),
        entropy
      }
    },
    { string: '', entropy: 0 }
  ).string

export const emailGenerator = (length = 5) => {
  const string = stringGenerator(length)
  const domain = stringGenerator(5)

  return `${string}@${domain}.com`
}

export const cpfGenerator = () => {
  const cpf = stringGenerator(11, '0123456789')

  return cpf
}

export const foneGenerator = () => {
  const fone = stringGenerator(8, '0123456789')

  return `53${fone}`
}
