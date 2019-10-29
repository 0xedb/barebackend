import nodeMailer from 'nodemailer';   


 

// interface MailerOptions {
//   email: string;
//   code: string;
//   from: string;
//   to: string;
//   subject: string;
//   html: string;
//   text: string;
// }

// interface TransporterOptions {
//   host: string;
//   port: number;
//   secure: boolean;
//   user: string;
//   pass: string;
// }

// async function sendEmail({
//   email,
//   code,
//   from,
//   to,
//   subject,
//   text,
//   html,
// }: MailerOptions) {
//   let transporter = ({
//     host,
//     port = 465,
//     secure = true,
//     user,
//     pass,
//   }: TransporterOptions): Mail =>
//     nodeMailer.createTransport({
//       host,
//       port,
//       secure,
//       auth: {
//         user,
//         pass,
//       },
//     });

//   let mailOptions = {
//     from,
//     to,
//     subject,
//     text,
//     html,
//   };
  
// transporter.sendMail(mailOptions, (err, info) => {
//     if (err) return console.log(err);
//     console.log('Message sent: %s', info.messageId);
//   });
 
 
// from: '"FundUs 👻" <fundus.flask@gmail.com>', // sender address
//     to: 'edohbruno@gmail.com', // list of receivers
//     subject: 'Login Code ✔', // Subject line
//     text: `Login code is: ${code}`, // plain text body
//     html: `Login code is: <b><pre>${code}</pre></b>`, // html body
