import { useEffect, useState } from "react";
import { getCities } from "../../apiManager";

export const WalkerForm = ({ trigger, setTrigger, walkerObject, getAllWalkers }) => {
    const [walker, update] = useState({
        name: "",
        cities: []
    });
    const [cities, setCities] = useState([]);

    useEffect(
        () => {
            getCities()
                .then((data) => {
                    setCities(data)
                })
        },
        []
    )

    return (trigger) ?
    (
        <div className="popupForm">
            <div className="popup-inner">
                <button className="close-button"
                    onClick={() => {
                        walker.name = ""
                        walker.cities = []
                        setTrigger(false)
                    }}>
                    Close
                </button>
                <form className="walkerForm">
                    <h2 className="walkerForm-title">Walker Details</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={walker.name}
                                placeholder={walkerObject.name}
                                onChange={
                                    (e) => {
                                        const copy = {...walker}
                                        copy.name = e.target.value
                                        update(copy)
                                    }
                                }
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="cities">Cities:</label>
                                {
                                    cities.map((city) => {
                                        return (
                                            <>
                                            <input type="radio"
                                            id={`${city.id}`}
                                            name={`${city.name}`} />
                                            <label for={`${city.id}`}>{city.name}</label>
                                            </>
                                        )
                                    })
                                }
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
    :
    ""
}