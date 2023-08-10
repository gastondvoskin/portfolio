const { Router } = require("express");
const sendEmailHandler = require("../handlers/contactHandlers");
const contactRouter = Router();


contactRouter.get("/",sendEmailHandler)

module.exports = {contactRouter}