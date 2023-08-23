import { useEffect, useState } from "react";

export const Dog = ({ dogObject }) => {
    const [dog, setDog] = useState({});

    useEffect(
        () => {
            setDog(dogObject)
        },
        []
    )

    return <section className="dog">
        <header className="dog-header">
            {dog.name}
        </header>
    </section>
}