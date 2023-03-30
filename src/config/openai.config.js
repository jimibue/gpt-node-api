const { Configuration, OpenAIApi } = require("openai");
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const configuration = new Configuration({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = openai;