const express = require('express')
const app = express()
const port = 4000

const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const bodyParser = require("body-parser");
7 //Here we are configuring express to use body-parser as
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting to MongoDB using mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@advancedatabase.tryeiys.mongodb.net/?retryWrites=true&w=majority');
  //added my database from mongodb with my username and password
}


  const bookSchema = new mongoose.Schema({ //this is a schema that defines the title,author and cover
    title: String,
    author: String,
    cover: String
  });

  const bookModel = mongoose.model('books',bookSchema); //creates a model based on the schema


// Handling POST requests to add a book to the database
app.post('/api/books', (req, res) => {
    console.log(req.body);
    //creating a new book instance and saving it to database
    bookModel.create({
      title:req.body.title,
      author:req.body.autor,
      cover:req.body.cover
    })
    .then(()=>{res.send("Book Added")})
    .catch(()=>{res.send("Book Not Added")});
  })

  //handling GET request to retrieve all books from database
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//basic route for testing server
app.get('/api/books', async (req, res) => {
    let books = await bookModel.find({}) 
    res.json(books)
  
})
//startin the express app and listening on the port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})