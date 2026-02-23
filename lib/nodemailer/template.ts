export const LOGIN_THANK_YOU_EMAIL_TEMPLATE = (name:string,intro:string)=> `
<div style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;background:#eef2f7">
    <tr>
      <td align="center">

        <table width="620" cellpadding="0" cellspacing="0"
               style="background:#ffffff;border-radius:12px;overflow:hidden;
               box-shadow:0 6px 25px rgba(0,0,0,0.08)">

          <!-- Top Banner -->
          <tr>
            <td style="background:#2563eb;padding:35px;text-align:center;color:#ffffff">
              <h1 style="margin:0;font-size:30px;letter-spacing:0.5px">
                Welcome to the Journey 🎉
              </h1>
              <p style="margin:10px 0 0;font-size:14px;opacity:.9">
                Your account is ready to explore
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding:35px;color:#333333">
              <h2 style="margin-top:0">Hello ${name},</h2>

              <p style="font-size:15px;line-height:1.7">
                We’re glad you decided to join us. Your registration was successful,
                and everything is set for you to begin.
              </p>

              <p style="font-size:15px;line-height:1.7">
                Inside your account, you’ll discover tools and features designed to
                make your experience smoother, faster, and more enjoyable.
              </p>
              
              <p style="font-size:15px;line-height:1.7">
              ${intro}
</p>
              <!-- CTA -->
              <div style="text-align:center;margin:35px 0">
                <a href="http://localhost:3000"
                   style="background:#2563eb;color:#ffffff;padding:15px 34px;
                          text-decoration:none;border-radius:8px;
                          font-weight:bold;font-size:15px;
                          display:inline-block">
                   Start Exploring
                </a>
              </div>

              <p style="font-size:14px;color:#555;line-height:1.6">
                If you ever need assistance, simply reply to this email.
                We’re here to help you every step of the way.
              </p>

              <p style="margin-top:30px">
                Warm regards,<br>
                <strong>Your Team</strong>
              </p>
            </td>
          </tr>

          <!-- Info Strip -->
          <tr>
            <td style="background:#f8fafc;padding:18px;text-align:center;
                       font-size:13px;color:#666">
              Tip: Bookmark our website for quick access anytime.
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:22px;text-align:center;font-size:12px;color:#9aa0a6">
              © ${new Date().getFullYear()} Your Company Name<br/>
              Built with care for our community
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</div>
`;