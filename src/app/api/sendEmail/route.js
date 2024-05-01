import nodemailer from "nodemailer";

export async function POST(request) {
  const { subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "zoho",
    host: "smtpro.zoho.in",
    port: 587,
    secure: false,
  });


  const mailOption
}
