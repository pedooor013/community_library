import cron from 'node-cron';
import moment from 'moment';
import sendEmail from "./email.service.js"
import loanRepository from "../repositories/loan.repositories.js"

cron.schedule("0 9 * * * ", async () =>{    
    console.log("Running daily job to check for due dates")

    const loans = await loanRepository.findAllLoansRepository();
    const today = moment().startOf("day");

    loans.forEach(async (loan) => {
        const dueDate = moment(loan.dueDate).startOf("day");
        const reminderDueDate = moment(dueDate).subtract(1, "days");
        const loanUser = loan.username;
        const loanUserEmail = loan.email;
        const bookLoan = loan.title;
        if(today.isSame(reminderDueDate)){
            sendEmail(loanUserEmail, loanUser ,bookLoan, loan.dueDate);
        }
    }); 
});
