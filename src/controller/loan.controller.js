    import loanService from "../service/loan.service.js";
    import bookRepositories from "../repositories/book.repositories.js";

    async function createLoanController(req, res) {
    const { bookId, dueDate } = req.body;
    const userId = req.userId;

    try {
        const bookExist = await bookRepositories.findBookByIdRepository(bookId);
        if(!bookExist) throw new Error("Book not found");
        const createdLoan = await loanService.createLoanService(
        userId,
        bookId,
        dueDate
        );
        res.status(201).send(createdLoan);
    } catch (error) {
        return res.status(400).send(error.message);
    }
    }

    async function findAllLoansController(req, res) {
    try {
        const loans = await loanService.findAllLoansService();
        res.send(loans);
    } catch (err) {
        res.status(404).send(err.message);
    }
    }

    async function findLoanByIdController(req, res){
        const loanId = req.params.id;

        try{
            const loan = await loanService.findLoanByIdService(loanId);
            return res.send(loan);    
        }catch(err){
            return res.status(400).send(err.message);
        }
    }

    async function deleteLoanController(req, res){
        const loanId = req.params.id;
        const userId = req.userId;
        try{
            const response = await loanService.deleteLoanService(loanId, userId);
            return res.send(response);
        }catch(err){
            return res.status(400).send(err.message);
        }
    }
    export default {
    createLoanController,
    findAllLoansController,
    deleteLoanController,
    findLoanByIdController
    };
