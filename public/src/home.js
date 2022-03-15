function getTotalBooksCount(books) {
    return books.length;
}

function getTotalAccountsCount(accounts) {
    return accounts.length;
}

function getBooksBorrowedCount(books) {
    const notReturned = books.filter((book) => book.borrows[0].returned === false);
    return notReturned.length;
}

function getMostCommonGenres(books) {
    let result = {};
    // loop through books to check if genre already defined ? then store
    books.forEach((book) => {
        if (result[book.genre] === undefined) {
            result[book.genre] = 1;
        } else {
            result[book.genre] += 1;
        }
    });
    return formatByCount(result);
}

function getMostPopularBooks(books) {
    let result = {};
    // store value into key
    books.forEach((book) => result[book.title] = book.borrows.length);
    return formatByCount(result);
}

function getMostPopularAuthors(books, authors) {
    let result = {};
    //loop
    authors.forEach((author) => {
        // store name 
        let fullname = author.name.first + " " + author.name.last;
        books.forEach((book) => {
            //check if author id is matched
            if (book.authorId === author.id) {
                //check if result follow name is created ? 
                if (result[fullname] === undefined) {
                    result[fullname] = book.borrows.length;
                } else {
                    result[fullname] += book.borrows.length;
                }
            }
        })
    });
    return formatByCount(result);
}

//helper function format
const formatByCount = (result) => {
    // Map object to new array
    const formatted = Object.keys(result).map((key) => {
        return { name: key, count: result[key] };
    });
    // Sort and cut 
    return formatted.sort((a, b) => b.count - a.count).slice(0, 5)
}

module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
};