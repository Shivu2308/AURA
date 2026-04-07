// import nodemailer from "nodemailer"
// import SibApiV3Sdk from '@getbrevo/brevo';
// import dotenv from "dotenv"
// dotenv.config()
// // Create a test account or replace with real credentials.
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   // host: "smtp.gmail.com",
//   // port: 587,
//   // secure: false, 
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASS,
//   },
// });



// // Wrap in an async IIFE so we can use await.

// export const sendMail = async (to, otp) => {
//     await transporter.sendMail({
//     from: `"Aura Support" <${process.env.EMAIL}>`,
//     to,
//     subject: "Reset your password",
//     html:`
//       <div style="font-family: Arial, sans-serif; padding:20px; background-color:#f9f9f9;">
//         <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:8px; border:1px solid #ddd;">
          
//           <h2 style="text-align:center; color:#4F46E5;">Aura Password Reset</h2>
          
//           <p style="font-size:16px; color:#333;">
//             You recently requested to reset your password. Use the OTP below to proceed:
//           </p>
          
//           <div style="text-align:center; margin:20px 0;">
//             <span style="font-size:24px; font-weight:bold; color:#111; letter-spacing:3px; border:2px dashed #4F46E5; padding:10px 20px; border-radius:6px; display:inline-block;">
//               ${otp}
//             </span>
//           </div>
          
//           <p style="font-size:15px; color:#555;">
//             ⚠️ This OTP will expire in <b>5 minutes</b>. Do not share it with anyone for your account security.
//           </p>
          
//           <p style="font-size:14px; color:#888; margin-top:30px; text-align:center;">
//             If you did not request a password reset, you can safely ignore this email.
//           </p>
          
//         </div>
//       </div>
//     `,
//   });
// }
// // export default sendMail;




// // export const sendVerificationMail = async (to, otp) => {
// //   try {
// //     const info = await transporter.sendMail({
// //       from: `"Aura Verification" <${process.env.EMAIL}>`,
// //       to,
// //       subject: "Verify your Aura Account ✅",
// //       html: `
// //         <div style="font-family: Arial, sans-serif; padding:20px; background-color:#f9f9f9;">
// //           <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:8px; border:1px solid #ddd;">
            
// //             <h2 style="text-align:center; color:#4F46E5;">Verify your Aura Account</h2>
            
// //             <p style="font-size:16px; color:#333;">
// //               Welcome to <b>Aura</b>! 🎉  
// //               To complete your registration, please verify your email using the OTP below:
// //             </p>
            
// //             <div style="text-align:center; margin:20px 0;">
// //               <span style="font-size:24px; font-weight:bold; color:#111; letter-spacing:3px; border:2px dashed #4F46E5; padding:10px 20px; border-radius:6px; display:inline-block;">
// //                 ${otp}
// //               </span>
// //             </div>
            
// //             <p style="font-size:15px; color:#555;">
// //               ⚠️ This OTP will expire in <b>5 minutes</b>. Do not share it with anyone.
// //             </p>
            
// //             <p style="font-size:14px; color:#888; margin-top:30px; text-align:center;">
// //               Didn’t create an account? You can ignore this email.
// //             </p>
            
// //           </div>
// //         </div>
// //       `,
// //     });

// //     console.log("Verification email sent: %s", info.messageId);
// //     return info;
// //   } catch (error) {
// //     console.error("Error sending verification email:", error);
// //     throw new Error("Failed to send verification email");
// //   }
// // };

// // export default sendVerificationMail;



// const brevo = new SibApiV3Sdk.TransactionalEmailsApi();
// brevo.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVOMAIL_API_KEY);

// export const sendVerificationMail = async (to, otp) => {
//   try {
//     const emailData = {
//       sender: {
//         name: 'Aura Verification',
//         email: 'heyaura23@gmail.com', // Ye email Brevo me verified honi chahiye
//       },
//       to: [{ email: to }],
//       subject: 'Verify your Aura Account ✅',
//       htmlContent: `
//         <div style="font-family: Arial, sans-serif; padding:20px; background-color:#f9f9f9;">
//           <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:8px; border:1px solid #ddd;">
//             <h2 style="text-align:center; color:#4F46E5;">Verify your Aura Account</h2>
//             <p style="font-size:16px; color:#333;">
//               Welcome to <b>Aura</b>! 🎉  
//               Use the OTP below to verify your email:
//             </p>
//             <div style="text-align:center; margin:20px 0;">
//               <span style="font-size:24px; font-weight:bold; color:#111; letter-spacing:3px; border:2px dashed #4F46E5; padding:10px 20px; border-radius:6px; display:inline-block;">
//                 ${otp}
//               </span>
//             </div>
//             <p style="font-size:15px; color:#555;">
//               ⚠️ This OTP will expire in <b>5 minutes</b>. Do not share it with anyone.
//             </p>
//           </div>
//         </div>
//       `,
//     };

//     const response = await brevo.sendTransacEmail(emailData);
//     console.log('✅ Brevo email sent successfully:', response.messageId || response);
//     return response;
//   } catch (error) {
//     console.error('❌ Error sending email via Brevo:', error.response?.body || error);
//     throw new Error('Failed to send verification email');
//   }
// };



































































import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Transporter Setup
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,      // Aapka Gmail (e.g., heyaura23@gmail.com)
//     pass: process.env.EMAIL_PASS, // Aapka 16-digit Google App Password
//   },
// });

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,  // or 465
  secure: true, // 465 ke liye true, 587 ke liye false
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  // Connection stability ke liye ye settings zaroori hain:
  connectionTimeout: 60000, // 10 seconds wait karega connect hone ke liye
  greetingTimeout: 60000,
  socketTimeout: 60000,

  // Ye line Render/Production ke liye zaroori hai
  tls: {
    rejectUnauthorized: false 
  }
});

/**
 * 1. Password Reset Mail
 */
export const sendMail = async (to, otp) => {
  try {
    const info = await transporter.sendMail({
      from: `"Aura Support" <${process.env.EMAIL}>`,
      to,
      subject: "Reset your password",
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px; background-color:#f9f9f9;">
          <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:8px; border:1px solid #ddd;">
            <h2 style="text-align:center; color:#4F46E5;">Aura Password Reset</h2>
            <p style="font-size:16px; color:#333;">
              You recently requested to reset your password. Use the OTP below to proceed:
            </p>
            <div style="text-align:center; margin:20px 0;">
              <span style="font-size:24px; font-weight:bold; color:#111; letter-spacing:3px; border:2px dashed #4F46E5; padding:10px 20px; border-radius:6px; display:inline-block;">
                ${otp}
              </span>
            </div>
            <p style="font-size:15px; color:#555;">
              ⚠️ This OTP will expire in <b>5 minutes</b>.
            </p>
          </div>
        </div>
      `,
    });
    console.log("✅ Password Reset Email Sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error in sendMail:", error);
    throw error;
  }
};

/**
 * 2. Registration Verification Mail
 */
export const sendVerificationMail = async (to, otp) => {
  try {
    const info = await transporter.sendMail({
      from: `"Aura Verification" <${process.env.EMAIL}>`,
      to,
      subject: "Verify your Aura Account ✅",
      html:`
         <div style="font-family: Arial, sans-serif; padding:20px; background-color:#f9f9f9;">
           <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:8px; border:1px solid #ddd;">
            
             <h2 style="text-align:center; color:#4F46E5;">Verify your Aura Account</h2>
            
             <p style="font-size:16px; color:#333;">
               Welcome to <b>Aura</b>! 🎉  
               To complete your registration, please verify your email using the OTP below:
             </p>
            
             <div style="text-align:center; margin:20px 0;">
               <span style="font-size:24px; font-weight:bold; color:#111; letter-spacing:3px; border:2px dashed #4F46E5; padding:10px 20px; border-radius:6px; display:inline-block;">
                 ${otp}
               </span>
             </div>
            
             <p style="font-size:15px; color:#555;">
               ⚠️ This OTP will expire in <b>5 minutes</b>. Do not share it with anyone.
             </p>
            
             <p style="font-size:14px; color:#888; margin-top:30px; text-align:center;">
               Didn’t create an account? You can ignore this email.
             </p>
            
           </div>
         </div>
       `,
    });
    console.log("✅ Verification Email Sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error in sendVerificationMail:", error);
    throw new Error("Failed to send verification email");
  }
};