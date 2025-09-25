import loanRepositories  from "../repositories/loan.repositories.js";  

async function createLoanService(userId, bookId, dueDate){
    const createdLoan = await loanRepositories.createLoanRepository(userId, bookId, dueDate);

    if (!createdLoan) throw new Error("Error creating loan");
    return(createdLoan);
}

async function findAllLoansRepository(){
    const loans = await loanRepositories.findAllLoansRepository();
    return loans;
}

export default {
    createLoanService,
    findAllLoansRepository
}