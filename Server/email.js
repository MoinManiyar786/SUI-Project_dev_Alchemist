import nodemailer from "nodemailer";  

export const sendMail = async (name, email) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'rushikeshkharat703@gmail.com',
            pass: 'sqdb blgz legx esxo'
        }
    });
    const info = await transporter.sendMail({
        from: '"Rushikesh" <rushikeshkharat703@gmail.com>',
        to: email,
        subject: "Verification mail",
        html: '<p>Hi!!' + name + 'Please click here to <a href="http://localhost:5173/verifyEmail">Verify</a> your mail and to visit our Site</p>',
    });
    console.log("Message sent: %s", info.messageId);
};


export const resetPasswordMail = async (email) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'rushikeshkharat703@gmail.com',
            pass: 'sqdb blgz legx esxo'
        }
    });
    const info = await transporter.sendMail({
        from: '"Samarth" <rushikeshkharat703@gmail.com>',
        to: email,
        subject: "Verification mail",
        html: 'To Change your password click on<a href="http://localhost:5173/resetPassword">Change Password</a></p>',
    });
    console.log("Message sent: %s", info.messageId);
};
 
 