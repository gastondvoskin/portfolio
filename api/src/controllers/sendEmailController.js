
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailController = async (name, email, message) => {

  const msg = {
    to: process.env.EMAIL_USERNAME, 
    from:  process.env.EMAIL_USERNAME, 
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
  };

  try {
    await sgMail.send(msg);
    return "Consulta enviada"

  } catch (error) {
    throw new Error('No se pudo enviar el correo');
  }

};

module.exports = { sendEmailController };
