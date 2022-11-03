// const { where } = require("sequelize/types");
const { Books } = require("../models");
const book = require("../routes/book");

async function updateBooks(req, res) {
  const bookData = req.body;
  try {
    const title = bookData.title;
    const price = bookData.price;
    const author = bookData.author;
    const pulishedDate = bookData.pulishedDate;

    const result = await Books.create({ title, price, author, pulishedDate });
    res.send({ msg: "Book create Succesfull", result });
  } catch (err) {
    res.status(500).send({ msg: "internal error", err });
    console.log(err);
  }
}

async function getAllBook(req, res) {
  try {
    const result = await Books.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.send(result);
  } catch (err) {
    res.status(400).send({ msg: "interner errr" }, err);
    console.log(err);
  }
}

async function Upbook(req, res) {
  const bookData = req.body;
  const bookId = req.params.id;

  try {
    const title = bookData.title;
    const price = bookData.price;
    const author = bookData.author;
    const pulishedDate = bookData.pulishedDate;

    const book = await Books.findOne({
      where: {
        id: bookId,
      },
    });
    if (book) {
      book.title = title;
      book.author = author;
      book.price = price;
      book.pulishedDate = pulishedDate;

      book.save();
      res.send({ msg: "book Update sucessfull" });
    } else {
      res.status(400).send({ msg: "books id does not exist" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "internal error" });
  }
}
async function Deletbook(req, res) {
  await Books.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send({ msg: `Book Id: ${req.params.id} Deleted` });
}

async function searchBook(req, res) {
  const titleName = req.params.title;
  try {
    const result = await Books.findOne({
      where: {
        title: titleName,
      },
    });
    res.send(result);
  } catch (err) {
    console.log("error", err);
    res.status(500).send({ msg: "internal error" });
  }
}
module.exports = {
  updateBooks,
  getAllBook,
  Upbook,
  Deletbook,
  searchBook,
};
