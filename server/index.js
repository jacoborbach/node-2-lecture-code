const express = require('express');
const app = express();
const port = 3001;
const ctrl = require('./controller');


//top level middleware
app.use(express.json()) //this translates JSON to Javascript

//Endpoints, always include /api
app.get('/api/books', ctrl.getBooks);
app.post('/api/book', ctrl.addBook);
app.put('/api/book/:id', ctrl.updateBook)
app.delete('/api/book/:id', ctrl.deleteBook)
//3001-8000 is where you can run ports
app.listen(port, () => console.log(`Server is running on ${port}`))