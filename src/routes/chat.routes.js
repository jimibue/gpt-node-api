const openai = require("../config/openai.config");
const router = require("express").Router();
const { createChatCompletion } = require("../helpers/openaiHelper");
const { JESUS } = require("./roles");

router.get("/", (req, res) => {
  res.send("Hello World!");
});


router.post("/jesus", async (req, res) => {
    try {
      const { messages } = req.body;
      const result = await createChatCompletion(messages, JESUS);
      res.json(result);
    } catch (err) {
      res.status(500).json({ err: err });
    }
});

router.get("/test", async (req, res) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "why is the sky blue" }],
  });

  res.json({ completion: completion.data.choices[0].message });
});

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("message", message);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    res.json({ completion: completion.data.choices[0].message });
  } catch (err) {
    res.status(500).json({ err: err });
  }
});






module.exports = router;
