function findAuthorById(authors, id) {
    return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
    return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
    let result = [];
    //check status of book
    const notReturned = books.filter((book) => book.borrows[0].returned === false);
    const returned = books.filter((book) => book.borrows[0].returned === true);
    //push into new array
    result.push(notReturned);
    result.push(returned);
    return result;
}

function getBorrowersForBook(book, accounts) {
    //store new array from book with id: and return:
    const borrowsIds = book.borrows.map((borrow) => ({
        id: borrow.id,
        returned: borrow.returned,
    }));

    //declare new key for object
    let result = [];
    accounts.forEach((account) => {
        borrowsIds.forEach((borrow) => {
            if (borrow.id === account.id) {
                account.returned = borrow.returned;
                result.push(account);
            }
        })
    })
    console.log(result);
    return result.slice(0, 10);
}

module.exports = {
    findAuthorById,
    findBookById,
    partitionBooksByBorrowedStatus,
    getBorrowersForBook,
};