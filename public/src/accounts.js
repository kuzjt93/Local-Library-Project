function findAccountById(accounts, id) {
    return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
    accounts.sort((accA, accB) =>
        accA.name.last.toLowerCase() < accB.name.last.toLowerCase() ? -1 : 1
    );
    return accounts;
}

function getTotalNumberOfBorrows(account, books) {
    const result = books.reduce((acc, x) => {
        //store by length of filter + previous acc
        return x.borrows.filter((y) => y.id === account.id).length + acc;
    }, 0)

    /*
    let result = 0;
    //use forEach to check id
    books.forEach((book) => {
        book.borrows.forEach((borrow) => {
            if (borrow.id === account.id) result += 1;

        })
    })
    */
    return result;
}

function getBooksPossessedByAccount(account, books, authors) {
    let result = [];
    //use forEach to store match id and checked out
    books.forEach((book) => {
        book.borrows.forEach((borrow) => {
            if (borrow.id === account.id && borrow.returned === false) {
                result.push(book);
            }
        })
    })

    //use forEach to add author
    result.forEach((book) => {
        authors.forEach((author) => {
            if (book.authorId === author.id) {
                book.author = author;
            }
        })
    })
    return result;
};


module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
};