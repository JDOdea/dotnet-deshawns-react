import { useEffect, useState } from "react";

export const Walker = ({ walkerObject, setUpWalker, setPopup }) => {
    const [walker, setWalker] = useState({});

    useEffect(
        () => {
            setWalker(walkerObject)
        },
        []
    )

    return <section 
    onClick={() => {
        setUpWalker(walker)
        setPopup(true)
    }}
    className="walker"
    >
        <header className="walker-header">
            {walker.name}
        </header>
    </section>
}