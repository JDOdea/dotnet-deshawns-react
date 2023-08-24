import { useEffect, useState } from "react";
import { Dog } from "./Dog";
import "./Dogs.css"
import { DogForm } from "./DogForm";
import { getDogs } from "../../apiManager";

export const DogsList = () => {
    const [dogs, setDogs] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);

    const getAllDogs = () => {
        getDogs()
                .then((data) => {
                    setDogs(data)
                })
                .catch(() => {
                    console.log("API not connected");
                })
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
            <div className="addDog">
                <button
                className="addDog-btn"
                onClick={() => setButtonPopup(true)}
                >Add Dog</button>
            </div>
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
            <DogForm
            trigger={buttonPopup}
            setTrigger={setButtonPopup}
            getAllDogs={getAllDogs}
            >
            </DogForm>
        </>
    )
}