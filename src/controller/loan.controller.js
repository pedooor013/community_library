import loanService from "../service/loan.service.js";

async function createLoanController(req,res){
    const { bookId, dueDate } = req.body;

    const userId = req.userId;

    try{
        const createdLoan = await loanService.createLoanService(
            userId,
            bookId,
            dueDate
        );
        res.status(201).send(createdLoan);
    }catch(err){
        res.status(400).json(err); 
    }
}

async function findAllLoansController(req,res){
    try{
        const loans = await loanService.findAllLoansRepository();
        res.send(loans);
    }catch(err){
        res.status(404).send(err.message);
    }
}

export default{
    createLoanController,
    findAllLoansController
}