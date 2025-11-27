import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"

const SingleBook = function ({ selectedBook, book, isSelected }) {
  return (
    <>
      <Card
        onClick={() => selectedBook(book.asin)} //richiamo la funzione da app con l'asin come parametro
        style={{ border: isSelected ? "3px solid red" : "none" }} //bordo rosso solo su quello selezionato ricavato da bookList ricavato da App
        className="h-100"
      >
        <Card.Img variant="top" src={book.img} className="h-75" />
        <Card.Body className="h-25">
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook
