interface Headers {
  authorization?: string
  Authorization?: string
  [key: string]: unknown
}

export const getUsernameAndPasswordFromAuthBasic = (headers: Headers) => {
  const authHeader = headers.authorization ?? headers.Authorization
  if (!authHeader || !authHeader.includes('Basic ')) {
    throw new Error('Invalid or Missing Authorization header')
  }

  // verify auth credentials
  const base64Credentials = authHeader.split(' ')[1]
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
  const [username, password] = credentials.split(':')
  return {username, password}
}

export const getAuthBasicFromUsernameAndPassword = (
  username: string,
  password: string,
) => {
  const encode = Buffer.from(`${username}:${password}`).toString('base64')
  return `Basic ${encode}`
}
