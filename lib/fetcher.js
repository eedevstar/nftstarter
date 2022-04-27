import { getSession } from 'next-auth/react'

const apiHost = process.env.API_HOST

export default async function fetcher(url, method = 'GET', params = {}) {
  const session = await getSession()
  let token = session?.accessToken
  token = token || params.accessToken
  delete params.accessToken
  const form = params.form
  delete params.form

  const headers = {
    'Content-Type': 'application/json'
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const apiUrl = `${apiHost}${url}`
  let options = {
    method,
  }

  if (form) {
    const formData = new FormData()
    Object.keys(params).forEach(key => formData.append(key, params[key]))
    options.body = formData
    delete headers['Content-Type']
  } else {
    if (method === 'POST' || method === 'PUT') {
      options.body = JSON.stringify(params)
    }
  }

  options.headers = headers

  return fetch(apiUrl, options).then(res => res.json())
}
