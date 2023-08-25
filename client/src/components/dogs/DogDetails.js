import { useEffect, useState } from "react";

export const DogDetails = ({ trigger, setTrigger, dogObject }) => {
    const [dog, setDog] = useState({});

    useEffect(
        () => {
            setDog(dogObject)
        },
        [dogObject]
    )

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
            </div>
        </div>
    )
    :
    ""
}