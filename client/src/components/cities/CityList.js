import { useEffect, useState } from "react";
import { getCities, postCity } from "../../apiManager";
import { City } from "./City";
import "./Cities.css"

export const CitiesList = () => {
    const [cities, setCities] = useState([]);
    const [city, update] = useState(
        {
            name: ""
        }
    );

    const getAllCities = () => {
        getCities()
            .then((data) => {
                setCities(data)
            })
            .catch(() => {
                console.log("API not connected");
            })
    }

    const handleAddButtonClick = (e) => {
        e.preventDefault()

        const cityToSendToAPI = {
            name: city.name
        }

        postCity(cityToSendToAPI)
            .then(() => {
                getAllCities()
            })
    }

    // initial useEffect
    useEffect(
        () => {
            getAllCities();
        },
        []
    )

    return (
        <>
            <div className="addCity">
                <input 
                    type="text"
                    className="city-input"
                    placeholder="Add City..."
                    value={city.name}
                    onChange={
                        (e) => {
                            const copy = {...city}
                            copy.name = e.target.value
                            update(copy)
                        }
                    }
                />
                <button
                    className="addCity-btn"
                    onClick={(e) => {
                        handleAddButtonClick(e)
                        city.name = ""
                    }}
                >Add</button>
            </div>
            <article className="cities">
                {
                    cities.map(
                        (city) =>  <City
                        cityObject={city}
                        key={`city--${city.id}`}
                        />
                    )
                }
            </article>
        </>
    )
}