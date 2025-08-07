"use client"

import { useState } from "react"

export default function PilihHuruf() {
  const [huruf, setHuruf] = useState("")

  return (
    <div className="h-screen flex flex-col justify-center bg-pink-200 items-center gap-4">
      <div className="flex gap-10">
        <button
          onClick={() => setHuruf("X")}
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          X
        </button>
        <button
          onClick={() => setHuruf("Y")}
          className="bg-red-800 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Y
        </button>
        <button
          onClick={() => setHuruf("Z")}
          className="bg-blue-800 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Z
        </button>
      </div>
      <div className="text-5xl font-bold text-pink-800">{huruf}</div>
    </div>
  )
}