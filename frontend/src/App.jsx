import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get(process.env.BACKEND_URL + '/api/jokes').then((res) => {
      setJokes(res.data)
      setLoading(false)
    })
      .catch((err) => {
        console.log(err)
        setError(true)
      })
  }, [])

  return (
    <>
      <h1>Hello from frontend</h1>
      {loading ? (
        <div>
          {!error ? (<p>Loading backend...</p>):(<p>Something went wrong</p>)}
        </div>
      ) : (
        <div>
          <h3>Jokes from backend</h3>
          <p>Total jokes: {jokes.length}</p>
          {
            jokes.map((joke, index) => (
              <div key={joke.id}>
                <h3>{joke.title}</h3>
                <p>{joke.content}</p>
              </div>
            ))
          }
        </div>
      )}
    </>
  )
}

export default App
