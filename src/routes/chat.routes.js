const openai = require("../config/openai.config");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/test", async (req, res) => {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: 'why is the sky blue' }],
    });
  
    res.json({ completion: completion.data.choices[0].message });
  });

router.post("/", async (req, res) => {
  const { message } = req.body;
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  });

  res.json({ completion: completion.data.choices[0].message });
});

router.post("/multiple", async (req, res) => {
    const { messages } = req.body;
    // https://platform.openai.com/docs/guides/chat/introduction
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      
      messages: [
        {"role": "system", "content": "You are giving people life advice through the lens of christianity. You are a christian. You are Jesus. "},
        ...messages
      ],
    });
  
    res.json({ completion: completion.data.choices[0].message });
  });

module.exports = router;