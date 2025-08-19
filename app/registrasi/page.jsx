'use client'


export default function Page() {
    let dataInput = null

    function input() {
        dataInput = event.target.value
    }

    function submit() {
        alert('!')

        console.log(dataInput)
    }

    return(
        <div>
            <input onChange={input} type="text" className="border" />
            <input onChange={input} type="text" className="border" />
            <br />
            <button onClick={submit}>Submit</button>
        </div>
    )
}