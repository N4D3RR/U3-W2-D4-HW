import { Spinner } from "react-bootstrap"

const Loading = () => (
  <Spinner
    animation="border"
    variant="success"
    className="mt-2"
    data-testid="loading-spinner"
  />
)

export default Loading
