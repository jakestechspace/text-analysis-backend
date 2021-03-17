function getParams(text) {
  const body = {
    documents: [
      {
        language: process.env.LANGUAGE,
        id: "1",
        text
      }
    ]
  }

  const urlParams = {
    showStats: true,
  }

  const endpoint = "/text/analytics/v3.1-preview.1/sentiment?"
  const searchParams = new URLSearchParams(urlParams)

  return {
    url: `${process.env.BASE_URL}${endpoint}${searchParams}`,
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      "Ocp-Apim-Subscription-Key": process.env.API_KEY
    },
    body: JSON.stringify(body)
  }
}

module.exports = getParams