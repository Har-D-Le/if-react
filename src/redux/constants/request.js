const urlWithParams = (urlStr, queryParamsObj) => {
  const url = new URL(urlStr)

  Object.entries(queryParamsObj).forEach(([key, value]) => {
    return url.searchParams.set(`${key}`, `${value}`)
  })

  return url
}

export const httpGet = (url, queryParams = '') => {
  return fetch(urlWithParams(url, queryParams))
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err))
}
