# to set up locally

``` npm install ```

Create a file at the project's root named .env and add the following values:

PORT=3000  
ENV=dev  
LANGUAGE=en  

API_KEY=REPLACE_HERE  
BASE_URL=REPLACE_HERE  

You'll need to sign up for an Azure account to get the <a href="https://docs.microsoft.com/en-us/azure/search/search-security-api-keys" target="_blank">api key</a> and base url but fortunately there's a free tier of 5,000 requests per month.

# scripts

start:  
```npm start```

watch mode:  
```npm run start:watch```

=================  
uses <a href="https://eastus.dev.cognitive.microsoft.com/docs/services/TextAnalytics-v3-1-Preview-1/operations/Sentiment#xml" target="_blank">Microsoft's CognitiveServices TextAnalytics API</a>