import { useEffect, useState } from "react";

export const Dog = ({ dogObject, setDogDetails, setUpDog }) => {
    const [dog, setDog] = useState({});

    useEffect(
        () => {
            setDog(dogObject)
        },
        []
    )

    return <section 
            onClick={() => {
                setUpDog(dog)
                setDogDetails(true)
            }}
            className="dog"
            >
        <header className="dog-header">
            {dog.name}
        </header>
        
    </section>
}