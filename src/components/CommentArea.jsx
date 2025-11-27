import { useState, useEffect } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from "./Loading"
import Error from "./Error"

const CommentArea = function ({ asin }) {
  // state = {
  //   comments: [],
  //   isLoading: true,
  //   isError: false,
  // }

  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYThlN2Y0YmQ0NzAwMTU4NWIxZDEiLCJpYXQiOjE3NjM5ODc1ODMsImV4cCI6MTc2NTE5NzE4M30.yvSHyY3iqe5rOfokKMGgvd-Sq8hzlXgg3N9T377ZgDs",
          },
        }
      )
      console.log(response)
      if (response.ok) {
        let comments = await response.json()
        setComments(comments)
        setIsLoading(false)
        setIsError(false)
      } else {
        setIsLoading(false)
        setIsError(true)
      }
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setIsError(true)
    }
  }

  // componentDidMount() {
  //   if (this.props.asin) {
  //     //se c'è un asin carico i commenti
  //     this.fetchComments()
  //     console.log("COMPONENTDIDMOUNT")
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     //se l'asin cambia, rifaccio la fetch
  //     this.fetchComments()
  //     console.log("COMPONENTDIDUPDATE")
  //   }
  // }

  useEffect(() => {
    if (asin) {
      //se c'è un asin carico i commenti
      fetchComments()
      console.log("COMPONENTDIDMOUNT")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asin])

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
