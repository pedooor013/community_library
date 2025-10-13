import nodemailer from 'nodemailer';
import 'dotenv/config.js'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

function sendEmail(email, bookTittle, dueDate){
    const mailOptions = {
        from: '',
        to: email,
        subject: 'Reminder: Book Due Date Approaching',
        html:` <div style="font-family: Arial, sans-serif; color: #333; font-size: 16px;"> 
        <h2>Lembrete da Biblioteca Comunitária</h2>
        <p>Olá,</p> <p>Este é um lembrete para a devolução do livro "${bookTittle}".</p>
        <p>Data de devolução: ${dueDate}</p>
        <p>Por favor, devolva o livro até a data indicada.</p>
        <p>Obrigado por utilizar nossa biblioteca!</p> 
        </div> `
    }
    transporter.sendMail(mailOptions, (err, info) =>{
        if(err){
            console.log('Error sending email:', err);
        }else{
            console.log('Email sent: ', info.response);
        }
    });
}


export default sendEmail;