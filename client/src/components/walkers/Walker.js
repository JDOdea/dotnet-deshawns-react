import { useEffect, useState } from "react";

export const Walker = ({ walkerObject }) => {
    const [walker, setWalker] = useState({});

    useEffect(
        () => {
            setWalker(walkerObject)
        },
        []
    )

    return <section className="walker">
        <header className="walker-header">
            {walker.name}
        </header>
    </section>
}