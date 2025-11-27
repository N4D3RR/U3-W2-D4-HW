import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
// import AllTheBooks from './components/AllTheBooks'
import { Col, Container, Row } from "react-bootstrap"
import BookList from "./components/BookList"

import fantasy from "./data/fantasy.json"
import { useState } from "react"
import CommentArea from "./components/CommentArea"

const App = function () {
  // state = {
  //   selectedAsin: null, // parto da null, nessun asin selezionato
  // }
  const [selectedAsin, setSelectedAsin] = useState(null)

  const changeSelectedBook = (asin) => {
    setSelectedAsin(asin)
  }
  // changeSelectedBook = (asin) => {
  //   this.setState({
  //     selectedAsin: asin, //quando seleziono un libro, aggiorno lo stato con l'asin selezionato da single book
  //   })
  // }

  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <Row>
          <Col xs={8}>
            <BookList
              books={fantasy} //passo a booklist
              selectedBook={changeSelectedBook} //cambio l'asin selezionato al click di singlebook
              selectedAsin={selectedAsin} //imposto l'asin come quello selezionato
            />
          </Col>

          <Col xs={4}>
            <h2 className="mt-5">Recensioni </h2>
            {selectedAsin ? (
              //se c'è un asin mostro i commenti di quell'asin selezionato
              <CommentArea asin={selectedAsin} />
            ) : (
              // se non c'è un asin mostro questo messaggio
              <p className="mt-3">
                Seleziona un libro per leggere le recensioni
              </p>
            )}
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  )
}

export default App
