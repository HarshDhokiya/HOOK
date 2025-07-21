import React, { useState } from 'react'

function ChangenName() {

    const [name, SetName] = useState("Mishti");
    return (
        <>
            <h1>{name}</h1>
            <button onClick={() => SetName("Mishti")}>Tap Me </button>
            <button onClick={() => SetName("Harsh")}>Tap me</button>


        </>
        // complied
    )
}

export default ChangenName