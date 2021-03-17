function getParams() {
  const body = {
    "documents": [
      {
        "language": "en",
        "id": "1",
        "text": "you are amazing"
      },
      {
        "language": "en",
        "id": "2",
        "text": "you are not amazing"
      }
    ]
  }

  const urlParams = {
    showStats: true,
  }

  const endpoint = "/text/analytics/v3.1-preview.1/sentiment?"

  return {
    url: `${process.env.BASE_URL}${endpoint}${new URLSearchParams(urlParams)}`,
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      "Ocp-Apim-Subscription-Key": process.env.API_KEY
    },
    body: JSON.stringify(body)
  }
}

module.exports = getParams