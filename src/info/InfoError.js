import { Link, useRouteError } from "react-router-dom"

export default function InfoError() {
  const error = useRouteError()

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Вернуться</Link>
    </div>
  )
}
