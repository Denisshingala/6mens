import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");
// import { Resend } from "resend";

// OLD: const resend = new Resend('re_QiYe3nUQ_AvGV9vJgC2iB9dfBpbKBSW75');
// New: const resend = new Resend("re_14saPjYD_K7gr3aNhD5D6xBwYotR5v13h");



export async function POST(request: Request) {
  const getEmailHTMLContent = (name: string, email: string, subject: string, referenceBy: string, message: string) => {
    return (`
        <html>
          <head>
            <style>
              .emailContainer {
                font-family: Arial, sans-serif;
              }
  
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 8px;
              }
  
              .message {
                margin-top: 20px;
                padding: 10px;
                background-color: #f9f9f9;
                border-radius: 8px;
              }
  
              .message p {
                margin: 0;
              } 
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="container">
                <h2>Hello Admin, new message received</h2>
                <div class="message">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Subject:</strong> ${subject}</p>
                  <p><strong>Message:</strong></p>
                  <p>${message}</p>
                  <p><strong>Reference:</strong> ${referenceBy}</p>
                </div>
              </div>
            </div>
          </body>
        </html>`
    );
  }

  try {
    const username = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
    const password = process.env.NEXT_PUBLIC_PERSONAL_PASSWORD;
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,
      auth: {
        user: username,
        pass: password,
      },
    });

    const htmlContent = getEmailHTMLContent(
      data?.name,
      data?.email,
      data?.subject,
      data?.referenceBy,
      data?.message
    );

    const mail = await transporter.sendMail({
      from: "no-reply<noreply@6mensinfotech.com>",
      to: "inquiry@6mensinfotech.com",
      subject: "Client requirement.",
      html: htmlContent
    });

    return NextResponse.json(mail);

    // const { data, error } = await resend.emails.send({
    //   from: "inquiry@6mensinfotech.com",
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
    //   return NextResponse.json({ error });
    // }

    // return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  } 
}

