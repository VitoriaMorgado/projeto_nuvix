// app/api/send/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `Nuvix Team <${process.env.EMAIL_FROM}>`,
    to: body.email,
    subject: "Recuperação de Senha de email Nuvix",
    html: `
      <h1>Olá usuário Nuvix,</h1>
      <p>Recebemos uma solicitação para redefinir sua senha.</p>
      <p>Se você não solicitou essa alteração, por favor, ignore este email.</p>
      <p>Para redefinir sua senha, clique no link abaixo:</p>
      <p><a href="${"projeto-nuvix.vercel.app/senha_verificada"}">Redefinir Senha</a></p>
      <p>Atenciosamente,<br/>Equipe Nuvix</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "E-mail enviado com sucesso!" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
