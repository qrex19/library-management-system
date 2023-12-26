const express = require("express");
const app = express();
const port = 3000; //port

/**
 * functionalities:
 * -add a book(title, description, issueStatus, author)!(post)
 * -generate a bookId associated to every book stored!(functionality)
 * -remove a book!(delete)
 * -change book's issue status!(put)
 * -retrieve all book's of an author in the library(get)
 */

//dataBase
let books = [
  {
    title: "the book",
    description: "the description",
    issueStatus: false,
    authorName: "arundhati roy",
  },
];

app.post("/add", (req, res) => {});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
