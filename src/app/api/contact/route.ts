import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType, name, phone, email, goal, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Imię i telefon są wymagane.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    const brandColor = '#E3000F';
    const bgColor = '#111111';
    const textColor = '#ffffff';

    let subjectOwner = '';
    let htmlContentOwner = '';

    if (formType === 'trial') {
      subjectOwner = `🔥 Nowe zgłoszenie: DARMOWY TRENING - ${name}`;
      htmlContentOwner = `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background-color: ${bgColor}; color: ${textColor}; border: 1px solid #333; border-radius: 8px; overflow: hidden;">
          <div style="background-color: ${brandColor}; padding: 20px; text-align: center;">
            <h1 style="margin: 0; color: #fff; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">DARMOWY TRENING</h1>
          </div>
          <div style="padding: 30px;">
            <p style="font-size: 16px; color: #ccc;">Otrzymano nowe zgłoszenie z formularza na stronie głównej:</p>
            <div style="background-color: #1a1a1a; padding: 20px; border-left: 4px solid ${brandColor}; margin-top: 20px;">
              <p style="margin: 0 0 10px 0;"><strong>Imię:</strong> <span style="color: #fff;">${name}</span></p>
              <p style="margin: 0 0 10px 0;"><strong>Telefon:</strong> <span style="color: #fff;">${phone}</span></p>
              <p style="margin: 0;"><strong>E-mail:</strong> <span style="color: #fff;">${email || 'Nie podano'}</span></p>
            </div>
            <p style="margin-top: 30px; font-size: 14px; color: #888; text-align: center;">Wiadomość wygenerowana automatycznie.</p>
          </div>
        </div>
      `;
    } else if (formType === 'consultation') {
      subjectOwner = `💪 Nowe zgłoszenie: KONSULTACJA TRENERSKA - ${name}`;
      htmlContentOwner = `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background-color: ${bgColor}; color: ${textColor}; border: 1px solid #333; border-radius: 8px; overflow: hidden;">
          <div style="background-color: ${brandColor}; padding: 20px; text-align: center;">
            <h1 style="margin: 0; color: #fff; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">KONSULTACJA TRENERSKA</h1>
          </div>
          <div style="padding: 30px;">
            <p style="font-size: 16px; color: #ccc;">Otrzymano nowe zgłoszenie na darmową konsultację:</p>
            <div style="background-color: #1a1a1a; padding: 20px; border-left: 4px solid ${brandColor}; margin-top: 20px;">
              <p style="margin: 0 0 10px 0;"><strong>Imię:</strong> <span style="color: #fff;">${name}</span></p>
              <p style="margin: 0 0 10px 0;"><strong>Telefon:</strong> <span style="color: #fff;">${phone}</span></p>
              <p style="margin: 0 0 10px 0;"><strong>E-mail:</strong> <span style="color: #fff;">${email || 'Nie podano'}</span></p>
              <p style="margin: 0 0 10px 0;"><strong>Cel:</strong> <span style="color: #fff;">${goal || 'Nie podano'}</span></p>
              <p style="margin: 0;"><strong>Wiadomość:</strong> <span style="color: #fff;">${message || 'Brak'}</span></p>
            </div>
            <p style="margin-top: 30px; font-size: 14px; color: #888; text-align: center;">Wiadomość wygenerowana automatycznie.</p>
          </div>
        </div>
      `;
    } else {
      return NextResponse.json({ error: 'Nieprawidłowy typ formularza.' }, { status: 400 });
    }

    // 1. Wyślij maila do właściciela
    await transporter.sendMail({
      from: `"Ground Zero System" <${process.env.EMAIL_USER}>`,
      to: 'groundzero.niemodlin@gmail.com',
      subject: subjectOwner,
      html: htmlContentOwner,
    });

    // 2. Wyślij autoresponder do klienta (jeśli podał maila)
    if (email) {
      const subjectClient = `Dziękujemy za zgłoszenie - Ground Zero`;
      const typeText = formType === 'trial' ? 'odbioru darmowego treningu' : 'rezerwacji bezpłatnej konsultacji trenerskiej';
      
      const htmlContentClient = `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background-color: ${bgColor}; color: ${textColor}; border: 1px solid #333; border-radius: 8px; overflow: hidden;">
          <div style="background-color: ${brandColor}; padding: 20px; text-align: center;">
            <h1 style="margin: 0; color: #fff; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">GROUND ZERO NIEMODLIN</h1>
          </div>
          <div style="padding: 30px;">
            <h2 style="color: #fff; margin-top: 0;">Cześć ${name.split(' ')[0]}!</h2>
            <p style="font-size: 16px; color: #ccc; line-height: 1.6;">
              Potwierdzamy otrzymanie Twojego zgłoszenia w sprawie ${typeText}.
            </p>
            <p style="font-size: 16px; color: #ccc; line-height: 1.6;">
              Nasz zespół wkrótce skontaktuje się z Tobą telefonicznie na podany numer, aby ustalić szczegóły i potwierdzić dogodny dla Ciebie termin.
            </p>
            <p style="font-size: 16px; color: #ccc; line-height: 1.6; margin-top: 30px;">
              Do zobaczenia w klubie!<br/>
              <strong>Ekipa Ground Zero</strong>
            </p>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Ground Zero Niemodlin" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: subjectClient,
        html: htmlContentClient,
      });
    }

    return NextResponse.json({ success: true, message: 'Wiadomości wysłane pomyślnie.' });
  } catch (error) {
    console.error('Błąd podczas wysyłania e-maili:', error);
    return NextResponse.json({ error: 'Wystąpił błąd podczas wysyłania.' }, { status: 500 });
  }
}
