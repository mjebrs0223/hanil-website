import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const reportType = String(formData.get("reportType") || "");
    const title = String(formData.get("title") || "");
    const content = String(formData.get("content") || "");

    if (!name || !email || !phone || !reportType || !title || !content) {
      return NextResponse.json(
        { message: "필수 항목을 모두 입력해 주세요." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"HANIL Report" <${process.env.SMTP_USER}>`,
      to: process.env.REPORT_TO,
      replyTo: email,
      subject: `[신고접수] ${title}`,
      html: `
        <h2>신고접수</h2>
        <p><b>이름:</b> ${name}</p>
        <p><b>이메일:</b> ${email}</p>
        <p><b>연락처:</b> ${phone}</p>
        <p><b>제보유형:</b> ${reportType}</p>
        <p><b>제목:</b> ${title}</p>
        <hr />
        <p><b>제보내용</b></p>
        <p>${content.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({
      message: "신고가 정상적으로 접수되었습니다.",
    });

  } catch (error) {
    console.error("메일 발송 오류:", error);

    return NextResponse.json(
      { message: "메일 발송 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}