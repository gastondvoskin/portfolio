const { Router } = require("express");
const sendEmailHandler = require("../handlers/contactHandlers");
const contactRouter = Router();


contactRouter.post("/",sendEmailHandler)

module.exports = {contactRouter}