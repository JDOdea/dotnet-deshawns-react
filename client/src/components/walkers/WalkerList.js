import { useEffect, useState } from "react";
import { getCities, getOneCity, getWalkerCities, getWalkers } from "../../apiManager";
import { Walker } from "./Walker";
import "./Walker.css"

export const WalkerList = () => {
    const [walkers, setWalkers] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(undefined);
    const [walkercities, setWalkercities] = useState([]);
    const [test, setTest] = useState([]);

    const getAllWalkers = () => {
        getWalkers()
            .then((data) => {
                setWalkers(data)
            })
            .catch(() => {
                console.log("API not connected");
            })
    }

    const handleSelectChange = (e) => {
        getOneCity(e.target.value)
            .then((data) => {
                console.log(data)
                setFiltered(data.walkers)
            })
    }

    // initial useEffect
    useEffect(
        () => {
            getAllWalkers();
            getCities()
                .then((data) => {
                    setCities(data)
                })
            getWalkerCities()
                .then((data) => {
                    setWalkercities(data)
                })
        },
        []
    )

    useEffect(
        () => {
            setFiltered(walkers)
        },
        [walkers]
    )

    

    return (
        <>
            <div className="cityFilter">
                <select 
                name="cities"
                onChange={(e) => handleSelectChange(e)}
                >
                    <option value="default" hidden>Filter by city...</option>
                    {
                        cities.map(
                            (city) => {
                                return (
                                    <option value={`${city.id}`} key={`city--${city.id}`}>{city.name}</option>
                                )
                            }
                        )
                    }
                </select>
            </div>
            <article className="walkers">
                {
                    filtered.map(
                        (walker) => <Walker 
                        walkerObject={walker}
                        key={`walker--${walker.id}`}
                        />
                    )
                }
            </article>
        </>
    )
}