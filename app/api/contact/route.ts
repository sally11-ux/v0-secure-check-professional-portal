import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, telefono, email, curso, mensaje } = body

    // Validate required fields
    if (!nombre || !telefono || !email || !curso) {
      return NextResponse.json(
        { error: "Todos los campos obligatorios deben ser completados." },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El email proporcionado no es valido." },
        { status: 400 }
      )
    }

    // Send email using Resend
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set")
      return NextResponse.json(
        { error: "Error de configuracion del servidor. Contacte por telefono." },
        { status: 500 }
      )
    }

    const htmlContent = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0e1a; color: #e8e9ed; padding: 0;">
        <div style="background: linear-gradient(135deg, #c9a84c, #d4b85e); padding: 30px 40px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; color: #0a0e1a; font-weight: 700;">SecureCheck</h1>
          <p style="margin: 5px 0 0; font-size: 13px; color: #0a0e1a; opacity: 0.8;">Nueva solicitud de informacion</p>
        </div>
        
        <div style="padding: 40px;">
          <h2 style="color: #c9a84c; font-size: 20px; margin: 0 0 24px; border-bottom: 1px solid #1e2540; padding-bottom: 16px;">Datos del Cliente</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; color: #8a8fa3; font-size: 14px; width: 120px; vertical-align: top;">Nombre:</td>
              <td style="padding: 12px 0; color: #e8e9ed; font-size: 14px; font-weight: 600;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #8a8fa3; font-size: 14px; vertical-align: top;">Telefono:</td>
              <td style="padding: 12px 0; color: #e8e9ed; font-size: 14px; font-weight: 600;">${telefono}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #8a8fa3; font-size: 14px; vertical-align: top;">Email:</td>
              <td style="padding: 12px 0; color: #e8e9ed; font-size: 14px; font-weight: 600;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #8a8fa3; font-size: 14px; vertical-align: top;">Curso:</td>
              <td style="padding: 12px 0; color: #c9a84c; font-size: 14px; font-weight: 600;">${curso}</td>
            </tr>
            ${mensaje ? `
            <tr>
              <td style="padding: 12px 0; color: #8a8fa3; font-size: 14px; vertical-align: top;">Mensaje:</td>
              <td style="padding: 12px 0; color: #e8e9ed; font-size: 14px; line-height: 1.6;">${mensaje}</td>
            </tr>
            ` : ""}
          </table>
        </div>
        
        <div style="padding: 20px 40px; background-color: #111627; text-align: center; border-top: 1px solid #1e2540;">
          <p style="margin: 0; font-size: 12px; color: #8a8fa3;">SecureCheck — Centro de Formacion en Seguridad Privada</p>
          <p style="margin: 4px 0 0; font-size: 12px; color: #8a8fa3;">Calle Julio Burel 43, Linares, Jaen</p>
        </div>
      </div>
    `

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "SecureCheck <onboarding@resend.dev>",
        to: "davidlopezz1342@gmail.com",
        subject: `Nueva solicitud: ${curso} - ${nombre}`,
        html: htmlContent,
        reply_to: email,
      }),
    })

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json()
      console.error("Resend API error:", errorData)
      return NextResponse.json(
        { error: "Error al enviar el correo. Intentelo de nuevo." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: "Mensaje enviado correctamente." })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    )
  }
}
