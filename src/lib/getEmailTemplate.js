export function getEmailtemplate(name, email, businessDetails, message) {
  return `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Query</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
    }
    .email-container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      color: #333333;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
      color: #000000;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
      color: #333333;
      margin-bottom: 20px;
    }
    .highlight {
      font-weight: bold;
      color: #555555;
    }
    ul {
      padding-left: 20px;
    }
    li {
      font-size: 16px;
      line-height: 1.6;
      color: #333333;
    }
    .footer {
      text-align: center;
      font-size: 14px;
      color: #777777;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <h2>Thank you for reaching out to UXpo!</h2>
    <p>
      Hi <span class="highlight">${name}</span>,
    </p>
    <p>
      We have received your inquiry and are excited to learn more about your business needs.
    </p>
    <p>
      Here's a summary of the information you provided:
    </p>
    <ul>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Business Details:</strong> ${businessDetails}</li>
      <li><strong>Message:</strong> ${message}</li>
    </ul>
    <p>
      Our team will review your details and get back to you shortly. Thank you for considering us for your digital solutions needs!
    </p>
    <div class="footer">
      &copy; 2024 UXpo | All rights reserved.
    </div>
  </div>
</body>
</html>
    `;
}
