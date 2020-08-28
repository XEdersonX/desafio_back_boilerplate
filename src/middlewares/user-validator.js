import User from 'models/User'
import { BadRequest } from 'helpers'

export const validatorCreateUser = async (ctx, next) => {
  const { body } = ctx.request

  let checkUserExistsEmail = null

  try {
    checkUserExistsEmail = await User.query().findOne({
      email: body.email
    })
  } catch {}

  if (checkUserExistsEmail) throw BadRequest('Email address already used.')

  let checkUserExistsCpf = null

  try {
    checkUserExistsCpf = await User.query().findOne({
      cpf: body.cpf
    })
  } catch {}

  if (checkUserExistsCpf) throw BadRequest('Cpf address already used.')

  return next()
}

export const validatorUpdateUser = async (ctx, next) => {
  const { body } = ctx.request

  let checkUserExistsEmail = null

  try {
    checkUserExistsEmail = await User.query().findOne({
      email: body.email
    })
  } catch {}

  if (checkUserExistsEmail && checkUserExistsEmail.email !== body.email)
    throw BadRequest('Email address already used.')

  let checkUserExistsCpf = null

  try {
    checkUserExistsCpf = await User.query().findOne({
      cpf: body.cpf
    })
  } catch {}

  if (checkUserExistsCpf && checkUserExistsCpf.cpf !== body.cpf)
    throw BadRequest('Cpf address already used.')

  return next()
}
