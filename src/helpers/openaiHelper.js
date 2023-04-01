const openai = require("../config/openai.config"); // Make sure to install and import the openai package

async function createChatCompletion(messages, systemContent) {
    console.log('-------------')
    console.log('systemContent', systemContent)
    console.log('messages', messages)
    console.log('-------------')
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemContent,
        },
        ...messages,
      ],
    });

    return { completion: completion.data.choices[0].message };
  } catch (err) {
    throw err;
  }
}

async function createPrompt(messages, systemContent) {
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: systemContent,
          },
          ...messages,
        ],
      });
  
      return { completion: completion.data.choices[0].message };
    } catch (err) {
      throw err;
    }
  }
  

module.exports = {
  createChatCompletion,
};
