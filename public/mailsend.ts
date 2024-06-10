import type { NextApiRequest, NextApiResponse } from "next";
import EmailTemplate from "@/app/components/EmailTemplate/EmailTemplate";
import { Resend } from "resend";
const nodemailer = require("nodemailer");

// const resend = new Resend("re_14saPjYD_K7gr3aNhD5D6xBwYotR5v13h");

export async function mailsend(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
    const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
    console.log(username, password, myEmail);
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      secure: true,
      auth: {
        user: username,
        pass: password,
      },
    });

    // const { data, error } = await resend.emails.send({
    //   from: "denisshingala@gmail.com",
    //   to: "denisshingala@gmail.com",
    //   subject: "Client message.",
    //   react: EmailTemplate({
    //     name: request.body?.name,
    //     email: request.body?.email,
    //     subject: request.body?.subject,
    //     message: request.body?.message,
    //   }),
    // });

    // if (error) {
    //   return response.status(500).json({ error });
    // }

    const mail = await transporter.sendMail({
      from: username,
      to: "denisshingala@gmail.com",
      subject: "Client message from website.",
      html: EmailTemplate({
        name: request.body?.name,
        email: request.body?.email,
        subject: request.body?.subject,
        message: request.body?.message,
      }),
    });

    return response.json(mail);
  } catch (error) {
    return response.status(500).json({ error });
  }
}
