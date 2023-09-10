import { useEffect, useState } from "react";
import { deleteWalker, getCities, getDogs, getOneWalker, getWalkers } from "../../apiManager"

export const WalkerForm = ({ trigger, setTrigger, walkerObject, getAllWalkers}) => {
    const [dogs, setDogs] = useState([]);
    const [cities, setCities] = useState([]);
    const [walker, update] = useState(
        {
            name: "",
            cityIds: []
        }
    );

    useEffect(
        () => {
            getCities().then(setCities);

            getDogs().then(setDogs);

            getWalkers().then((data) => {
                const matchedWalker = data.find((w) => {
                    return w.id === walkerObject.id;
                })
                const copy = {...walker};
                for (const city of matchedWalker.cities) {
                    copy.cityIds.push(city.id);
                }
                update(copy)
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
                        walker.name = "";
                        walker.cityIds = [];
                        setTrigger(false);
                    }}
                >Close</button>
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
                                        const copy = {...walker};
                                        copy.name = e.target.value;
                                        update(copy);
                                    }
                                }
                            />
                        </div>
                    </fieldset>
                    <div className="form-radios">
                        <fieldset>
                            <div className="form-group form-cities">
                                <label htmlFor="cities">Cities:</label>
                                <div className="form-check"
                                    onChange={(e) => {
                                        let copy = {...walker};
                                        if (e.target.checked) {
                                            const cityId = copy.cities.find((cityId) => {
                                                return cityId === parseInt(e.target.value);
                                            });
                                        if (!cityId) {
                                            copy.cities.push(parseInt(e.target.value));
                                            update(copy);
                                        }
                                        }
                                        else {
                                            const cityId = copy.cities.find((cityId) => {
                                                return cityId === parseInt(e.target.value)
                                            });
                                            if (cityId) {
                                                let filtered = copy;
                                                filtered.cities = copy.cities.filter((cityId) => {
                                                    return cityId !== parseInt(e.target.value)
                                                });
                                                update(copy);
                                            }
                                        }
                                    }}
                                >
                                {
                                    cities.map((city) => {
                                        return (
                                            <div key={city.id}>
                                                {
                                                    walker.cityIds.find((cityId) => {
                                                        return cityId === city.id;
                                                    })
                                                    ?
                                                    (
                                                        <>
                                                            <input 
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value={city.id}
                                                            checked
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor={city}
                                                            >{city.name}</label>
                                                        </>
                                                    )
                                                    :
                                                    (
                                                        <>
                                                            <input 
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                value={city.id}
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor={city.id}
                                                            >{city.name}</label>
                                                        </>
                                                    )
                                                }
                                            </div>
                                        )
                                    })
                                }
                                </div>
                                {/* {
                                    cities.map((city) => {
                                        return (
                                            <div key={`city--${city.id}`}>
                                                <label htmlFor={`${city.id}`}>{city.name}</label>
                                                <input type="checkbox"
                                                    id={`${city.id}`}
                                                    name={`${city.name}`}
                                                    onChange={(e) => {
                                                        let copy = {...walker};
                                                        if (e.target.checked) {
                                                            const cityId = copy.cities.find((cityId) => {
                                                                return cityId === parseInt(e.target.value);
                                                            });
                                                        if (!cityId) {
                                                            copy.cities.push(parseInt(e.target.value));
                                                            update(copy);
                                                        }
                                                        }
                                                        else {
                                                            const cityId = copy.cities.find((cityId) => {
                                                                return cityId === parseInt(e.target.value)
                                                            });
                                                            if (cityId) {
                                                                let filtered = copy;
                                                                filtered.cities = copy.cities.filter((cityId) => {
                                                                    return cityId !== parseInt(e.target.value)
                                                                });
                                                                update(copy);
                                                            }
                                                        }
                                                    }}
                                                     />
                                            </div>
                                        )
                                    })
                                } */}
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-group form-dogs">
                                <label htmlFor="dogs">Assigned Dogs:</label>
                                {
                                    dogs.map((dog) => {
                                        return (
                                            <div key={`dog--${dog.id}`}>
                                                <label htmlFor={`${dog.id}`}>{dog.name}</label>
                                                <input type="checkbox"
                                                id={`${dog.id}`}
                                                name={`${dog.name}`} 
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </fieldset>
                    </div>
                    <button
                        onClick={() => {
                            
                        }}
                    >Update</button>
                    <button
                    onClick={() => {
                        deleteWalker(walkerObject.id);
                    }}>Remove</button>
                </form>
            </div>
        </div>
    )
    :
    ""
}