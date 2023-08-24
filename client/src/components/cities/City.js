import { useEffect, useState } from "react";

export const City = ({ cityObject }) => {
    const [city, setCity] = useState({});

    useEffect(
        () => {
            setCity(cityObject)
        },
        []
    )

    return <section className="city">
        <header className="city-header">
            {city.name}
        </header>
    </section>
}