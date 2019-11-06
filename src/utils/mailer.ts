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
  const transporter = nodeMailer.createTransport(transport);
  const response = await transporter
    .sendMail(mail)
    .then(() => 1)
    .catch(error => {
      console.log(error);
      return 0;
    });
  return response;
};
