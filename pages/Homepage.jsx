import { useEffect, useState } from "react"
import Card from "../src/Card"

const Homepage = ({ setPage }) => {
  const [plants, setPlants] = useState([])
  const [loading, setLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)

  const getPlants = async () => {
    setLoading(true)

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await res.json()

      const plantsData = data.slice(0, 10).map(item => ({
        id: item.id,
        title: item.title,
        completed: item.completed,
        imageUrl:
          "https://images.unsplash.com/photo-1687106358396-20daadef9e36?fm=jpg&q=60&w=3000&auto=format&fit=crop",
        price: item.id
      }))

      setPlants(plantsData)
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    getPlants()
  }, [refresh])

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center text-3xl font-semibold">
        Loading...
      </div>
    )
  }

  return (
    <div className="bg-amber-50 min-h-screen">
      <button
        onClick={() => {
          localStorage.removeItem("user")
          setPage("login")
        }}
        className="bg-red-600 text-white px-4 py-2 m-6 rounded-lg"
      >
        Logout
      </button>
      <button
        onClick={() => setRefresh(prev => !prev)}
        className="bg-purple-700 text-white px-4 py-2 m-6 rounded-lg"
      >
        Refresh
      </button>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {!plants.length && <p>No items found</p>}

        {plants.map(plant => (
          <Card key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  )
}

export default Homepage
