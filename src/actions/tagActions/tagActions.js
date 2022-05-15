const postTag = async (tag) => {
  const response = await fetch(`http://localhost:8081/api/v1/save/tag`,
  {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(tag)
  })
  const data = await response.json()
  return data
}

export {postTag}