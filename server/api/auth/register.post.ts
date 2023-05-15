export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, email, password, repeatPassword, name } = body
  if (!username || !email || !password || !repeatPassword || !name)
    throw createError({ statusCode: 400, statusMessage: 'Invalid params' })
  if (password !== repeatPassword)
    throw createError({ statusCode: 400, statusMessage: 'Passwords do not match' })
})
