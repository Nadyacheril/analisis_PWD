"use client"

import { useState } from "react"

export default function pwd() {
    // 
    let [angka, setAngka] = useState(0)
   // let angka = 0

    
    function pertambahan() {
        setAngka(angka + 1)
        // angka = angka + 1
        alert(angka)
    }
           return (
               <div className="h-screen flex flex-col justify-center items-center gap-4">
                   <Button></Button>
                   <button onClick={pertambahan} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                   Tambah 1
                   </button>
                   <div>{angka}</div>
        </div>
           )
}