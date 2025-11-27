import { useState, useEffect } from "react"
import SingleBook from "./SingleBook"
import { Col, Form, Row } from "react-bootstrap"

const BookList = function ({ books, selectedBook, selectedAsin }) {
  // state = {
  //   searchQuery: "",
  // }

  const [searchQuery, setSearchQuery] = useState("")

  console.log("RENDER")
  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        {books
          .filter((b) =>
            b.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((b) => (
            <Col xs={12} md={4} key={b.asin}>
              <SingleBook
                book={b}
                selectedBook={selectedBook} //richiamo la funzinoe da app changeselectedbook
                isSelected={selectedAsin === b.asin} //controllo che l'asin del libro selezionato di App sia quello del libro che sto mappando. true o false quindi posso selezionare solo un libro alla volta
              />
            </Col>
          ))}
      </Row>
    </>
  )
}

export default BookList
