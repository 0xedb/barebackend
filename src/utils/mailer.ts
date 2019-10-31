import nodeMailer from 'nodemailer';

export interface MailerOptions {  
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
}

export interface TransporterOptions {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export default async (transport: TransporterOptions, mail: MailerOptions) => {
  nodeMailer
    .createTransport(transport)
    .sendMail(mail)
    .then(a => console.log('sent'))
    .catch(error => console.log(error));
};
