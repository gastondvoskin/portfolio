const { Router } = require("express");
const { contactRouter } = require("./contactRouter");
const router = Router();

router.use("/contact",contactRouter)

module.exports = router;