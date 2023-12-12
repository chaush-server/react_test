import { Link, useLoaderData } from "react-router-dom"

export default function InfoBody() {
  const status = useLoaderData()

  return (
    <div className="info">
      {status}
    </div>
  )
}

// data loader
export const infoLoader = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/')

  if (!res.ok) {
    throw Error('Ошибка при запросе')
  }

  return 200
}