import { useEffect, useState } from "react";
import { Dog } from "./Dog";
import "./Dogs.css"

export const DogsList = () => {
    const [dogs, setDogs] = useState([]);

    //  function to get all dogs
    const getAllDogs = async () => {
        const res = await fetch("/api/dogs");
        const data = await res.json();
        setDogs(data)
    }

    //  initial useEffect
    useEffect(
        () => {
            getAllDogs();
        },
        []
    )

    return (
        <>
        <article className="dogs">
            {
                dogs.map(
                    (dog) => <Dog
                    dogObject={dog}
                    key={`dog--${dog.id}`}
                    />
                )
            }
        </article>
        </>
    )
}