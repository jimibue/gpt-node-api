const router = require("express").Router();
const { createChatCompletion } = require("../helpers/openaiHelper");
const { GENERAL_SOCIALIZER } = require("./roles");


router.post("/socialize", async (req, res) => {
    try {
      const { messages } = req.body;
      console.log({messages})
      console.log({GENERAL_SOCIALIZER})
      const result = await createChatCompletion(messages, GENERAL_SOCIALIZER );
      res.json(result);
    } catch (err) {
      res.status(500).json({ err: err });
    }
});

module.exports = router;