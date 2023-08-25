import { useEffect, useState } from "react";
import { deleteDog } from "../../apiManager";

export const DogDetails = ({ trigger, setTrigger, dogObject, getAllDogs }) => {
    const [dog, setDog] = useState({});

    useEffect(
        () => {
            setDog(dogObject)
        },
        [dogObject]
    )

    const handleDeleteButton = () => {
        deleteDog(dog.id)
        setTrigger(false)
    }

    return (trigger) ?
    (
        <div className="dogDetails">
            <div className="dogDetails-inner">
                <button className="close-button"
                    onClick={() => {
                        setTrigger(false)
                    }}
                >Close</button>
                <header className="dog-header">
                    {dog.name}
                </header>
                <div>
                    {dog.breed}
                </div>
                <footer>
                    <button
                    onClick={() => {handleDeleteButton()}}
                    >
                        Remove
                    </button>
                </footer>
            </div>
        </div>
    )
    :
    ""
}