import React from 'react'
import { useState } from 'react'

function LikeCounter() {
    const [Like, SetLike] = useState(0);

    const LikeIncrement = () => {
        SetLike(Like + 1);
    }
    return (
        <>
            <h1>Like Counter🩷 {Like}</h1>
            <button onClick={LikeIncrement}>Like❤️</button>
        </>
    )
}

export default LikeCounter