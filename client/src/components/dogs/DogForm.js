import { useState } from "react";
import { postDog } from "../../apiManager";

export const DogForm = ({ trigger, setTrigger, getAllDogs }) => {
    const [dog, update] = useState({
        name: "",
        breed: "",
        cityId: 0
    });

    const handleSaveButtonClick = (e) => {
        e.preventDefault()

        const dogToSentToAPI = {
            name: dog.name,
            breed: dog.breed
        }

        postDog(dogToSentToAPI)
            .then(() => {
                setTrigger(false)
                getAllDogs()
            })
    }

    return (trigger) ?
    (
        <div className="popupForm">
            <div className="popup-inner">
                <button className="close-button"
                    onClick={() => {
                        dog.name = ""
                        dog.breed = ""
                        setTrigger(false)
                    }}
                >Close</button>
                <form className="dogForm">
                    <h2 className="dogForm-title">Add a dog</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="dogName">Name:</label>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter name here..."
                                value={dog.name}
                                onChange={
                                    (e) => {
                                        const copy = {...dog}
                                        copy.name = e.target.value
                                        update(copy)
                                    }
                                }
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="breed">Breed:</label>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter breed here..."
                                value={dog.breed}
                                onChange={
                                    (e) => {
                                        const copy = {...dog}
                                        copy.breed = e.target.value
                                        update(copy)
                                    }
                                }
                            />
                        </div>
                    </fieldset>
                    <fieldset>

                    </fieldset>
                    <button
                        onClick={(e) => handleSaveButtonClick(e)}
                        className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
    :
    ""
}