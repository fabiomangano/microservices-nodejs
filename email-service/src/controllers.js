import nodemailer from 'nodemailer';

export default {
  createEmail: async (req, res) => {
    const {
      id,
      name,
      lastName,
      email,
      movie,
      time,
      room
    } = req.body;
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'zietto100@gmail.com',
        pass: 'tibiaomero@0801'
      }
    });

    const mailOptions = {
      from: 'CinemaDemo <noreply.cinemademo@gmail.com>',
      replyTo: 'noreply.cinemademo@gmail.com',
      to: `${email}`,
      subject: 'Conferma acquisto online ticket',
      text: `Gentile ${name} ${lastName},\nti confermiamo che la tua prenotazione per film "${movie}", alle ore ${time} sala ${room}, è stata creata con successo.\nIl tuo codice prenotazione è "${id}".`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(200).end();
  },
};