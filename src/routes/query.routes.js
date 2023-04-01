const { createChatCompletion } = require("../helpers/openaiHelper");
const { QUERY_TEST, GENERAL_SOCIALIZER, HAS_MESSAGES_TEST } = require("./roles");

const router = require("express").Router();

router.post("/query", async (req, res) => {
  try {
    const { messages,options } = req.body;
    console.log(req.params);
    res.json({ original:  QUERY_TEST, options: options, messages });
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

router.post("/prompt", async (req, res) => {
    try {
      const { messages, system, options } = req.body;
      const results = await createChatCompletion(messages, system );
      res.json({ original:  QUERY_TEST, result: results, messages });
    } catch (err) {
      res.status(500).json({ err: err });
    }
  });



router.post("/math", async (req, res) => {
    try {
      const { messages } = req.body;
  
      const result = await createChatCompletion(messages, HAS_MESSAGES_TEST);
      res.json(result);
    } catch (err) {
      res.status(500).json({ err: err });
    }
});

router.post("/chuck", async (req, res) => {
    try {
      const { messages, system } = req.body;
  
      const result = await createChatCompletion(messages, system);
      res.json(result);
    } catch (err) {
      res.status(500).json({ err: err });
    }
});
module.exports = router;
