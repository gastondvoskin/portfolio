const {sendEmailController} = require('../controllers/sendEmailController')
const sendEmailHandler = async (req,res) => {
    const { name, email, message } = req.body;
    try {
        const response = await sendEmailController( name, email, message )
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}

module.exports = sendEmailHandler