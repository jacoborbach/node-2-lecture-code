const books = [{ id: 0, title: 'Origin', author: 'Dan Brown' }];
let id = 1;

module.exports = {
    //req (request) always goes first. Even if you write res first that will be considered the req
    getBooks: (req, res) => {
        res.status(200).send(books)
    },
    addBook: (req, res) => {
        const { title, author } = req.body;

        let book = {
            id: id,
            title: title,
            author: author
        }

        books.push(book);
        id++;

        res.status(200).send(books);
    },
    updateBook: (req, res) => {
        const { id } = req.params;
        //+id changes a string id into a number id
        let editBookIndex = books.findIndex(element => element.id === +id);
        books[editBookIndex] = {
            id: books[editBookIndex].id,
            title: req.body.title || books[editBookIndex].title,
            author: req.body.author || books[editBookIndex].author
        }

        res.sendStatus(200);

    },
    deleteBook: (req, res) => {
        const { id } = req.params;

        let bookId = books.findIndex(element => element.id === +id);
        books.splice(bookId, 1)

        res.sendStatus(200);
    }
}