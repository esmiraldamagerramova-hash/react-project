import { useState } from "react"

const Card = ({ plant }) => {

  const [count, setCount] = useState(1)
  const [completed, setCompleted] = useState(plant.completed)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    setCount(prev => prev > 1 ? prev - 1 : 1)
  }

  const toggleTodo = () => {
    setCompleted(prev => !prev)
  }

  return (
    <div
      onClick={toggleTodo}
      className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
    >
      <img
        className="w-full h-full object-cover"
        src={plant.imageUrl}
        alt={plant.title}
      />
      <div className="p-6 grid gap-4">

        <div>
          <h2 className={`text-2xl font-semibold ${completed ? "line-through" : ""}`}>
            {plant.title}
          </h2>

          <p className="text-sm text-zinc-400">TODO ITEM</p>

          <p className={`text-sm font-semibold ${completed ? "text-green-600" : "text-red-600"}`}>
            {completed ? "Completed" : "Not completed"}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div
            onClick={(e) => e.stopPropagation()}
            className="grid grid-cols-3 items-center border rounded-lg px-3 text-xl font-semibold"
          >
            <button onClick={decrement}>-</button>
            <p className="text-center">{count}</p>
            <button onClick={increment}>+</button>
          </div>
          <button
            onClick={(e) => e.stopPropagation()}
            className="bg-purple-400 px-4 py-2 rounded-lg"
          >
            BUY NOW ({plant.price * count}$)
          </button>

        </div>

      </div>

    </div>
  )
}

export default Card
