export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate the data
    if (!data.name || !data.email || !data.message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email configuration (replace with actual email service)
    // For now, this will just log the message
    console.log('New contact form submission:', data);

    // TODO: Implement actual email sending with nodemailer or service like SendGrid
    // Example:
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS
    //   }
    // });
    //
    // await transporter.sendMail({
    //   to: 'Jacksonconstructioninc350@gmail.com',
    //   subject: `New Contact Form Submission from ${data.name}`,
    //   text: `
    //     Name: ${data.name}
    //     Email: ${data.email}
    //     Phone: ${data.phone}
    //     Message: ${data.message}
    //   `
    // });

    return Response.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
