import { useEffect, useState } from "react";
import { Table, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, ModalFooter } from "reactstrap";
import { deleteWalker, getCities, getDogs, getWalkerCities, putWalkerCities } from "../../apiManager";


export const Walker = ({ walkerObject, getAllWalkers }) => {
    const [walker, setWalker] = useState({});
    const [cities, setCities] = useState([]);
    const [dogs, setDogs] = useState([]);
    const [walkercities, setWalkercities] = useState([]);
    const [modal, setModal] = useState(false);
    const [walkerUpdate, update] = useState(
        {
            name: "",
            cityIds: [],
            dogIds: []
        }
    );

    const toggle = () => setModal(!modal);

    useEffect(
        () => {
            setWalker(walkerObject)
        },
        []
    )

    const matchWalkerInfo = () => {
        const copy = {...walkerObject};
        copy.cityIds = [];
        copy.dogIds = [];
        getWalkerCities()
            .then((wc) => {
                let filtered = wc.filter((wi) => {
                    return wi.walkerId === walkerObject.id;
                })
                let filteredWc = [];
                for (const walkerCity of filtered) {
                    filteredWc.push(walkerCity);
                    copy.cityIds.push(walkerCity.cityId);
                }
                setWalkercities(filteredWc);
            });
        getDogs()
            .then((data) => {
                setDogs(data);

                let filtered = data.find((di) => {
                    return di.walkerId === walkerObject.id;
                })
                if (filtered && filtered.length > 1) {
                    for (const dog of filtered) {
                        copy.dogIds.push(dog.id);
                    }
                }
                else if (filtered) {
                    copy.dogIds.push(filtered.id);
                }
            })
        update(copy);
    }


    const handleWalkerUpdate = () => {
        
        const updatedWalker = {
            name: walkerUpdate.name,
            cityIds: walkerUpdate.cityIds,
            dogIds: walkerUpdate.dogIds
        }
        console.log(updatedWalker)
        putWalkerCities(walkerObject.id, updatedWalker);
        toggle();
        getAllWalkers();
    }


    return (
        <>
            <section 
                onClick={() => {
                    toggle();
                    getCities().then(setCities);
                    matchWalkerInfo();
                }}
                className="walker"
            >
                <header className="walker-header">
                    {walker.name}
                </header>
            </section>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Walker</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="name">Walker Name</Label>
                            <Input 
                                type="text"
                                placeholder="Name..."
                                name="name"
                                value={walkerUpdate.name}
                                onChange={(e) => {
                                    const copy = {...walkerUpdate};
                                    copy.name = e.target.value;
                                    update(copy);
                                }}
                            />
                        </FormGroup>
                        <div className="walkerForm-bottom">
                            <FormGroup>
                                <Label htmlFor="cities">Cities:</Label>
                                <div className="walkerForm-cities">
                                    {
                                        cities.map((c) => (
                                            <div className="walkerForm-city" key={`city--${c.id}`}>
                                                {
                                                    walkerUpdate.cityIds.find((cid) => {
                                                        return cid === c.id;
                                                    })
                                                    ?
                                                    (
                                                        <>
                                                        <Label htmlFor={`city--${c.id}`} key={`city--${c.id}`}>{c.name}</Label>
                                                            <div className="walkerForm-checkbox">
                                                                <Input 
                                                                    key={`city--${c.id}`}
                                                                    type="checkbox"
                                                                    name={`city--${c.id}`}
                                                                    value={c.id}
                                                                    checked
                                                                    onChange={(e) => {
                                                                        let copy = {...walkerUpdate};
                                                                        const cityId = copy.cityIds.find((ci) => {
                                                                            return ci === parseInt(e.target.value);
                                                                        })
                                                                        if (e.target.checked) {
                                                                            if (!cityId) {
                                                                                copy.cityIds.push(parseInt(e.target.value));
                                                                                update(copy);
                                                                            }
                                                                        }
                                                                        else {
                                                                            if (cityId) {
                                                                                let filtered = copy;
                                                                                filtered.cityIds = copy.cityIds.filter((ci) => {
                                                                                    return ci !== parseInt(e.target.value);
                                                                                })
                                                                                update(filtered);
                                                                            }
                                                                        }
                                                                    }}
                                                                />
                                                            </div>
                                                        </>
                                                    )
                                                    :
                                                    (
                                                        <>
                                                        <Label htmlFor={`city--${c.id}`} key={`city--${c.id}`}>{c.name}</Label>
                                                            <div className="walkerForm-checkbox">
                                                                <Input 
                                                                    key={`city--${c.id}`}
                                                                    type="checkbox"
                                                                    name={`city--${c.id}`}
                                                                    value={c.id}
                                                                    onChange={(e) => {
                                                                        let copy = {...walkerUpdate};
                                                                        const cityId = copy.cityIds.find((ci) => {
                                                                            return ci === parseInt(e.target.value);
                                                                        })
                                                                        if (e.target.checked) {
                                                                            if (!cityId) {
                                                                                copy.cityIds.push(parseInt(e.target.value));
                                                                                update(copy);
                                                                            }
                                                                        }
                                                                        else {
                                                                            if (cityId) {
                                                                                let filtered = copy;
                                                                                filtered.cityIds = copy.cityIds.filter((ci) => {
                                                                                    return ci !== parseInt(e.target.value);
                                                                                })
                                                                                update(filtered);
                                                                            }
                                                                        }
                                                                    }}
                                                                />
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="dogs">Dogs:</Label>
                                <div className="walkerForm-dogs">
                                    {
                                        dogs.map((d) => (
                                            <div className="walkerForm-dog" key={`dog--${d.id}`}>
                                                {
                                                    walkerUpdate.dogIds.find((did) => {
                                                        return did === d.id;
                                                    })
                                                    ?
                                                    (
                                                        <>
                                                        <Label htmlFor={`dog--${d.id}`} key={`dog--${d.id}`}>{d.name}</Label>
                                                        <div className="walkerForm-checkbox">
                                                            <Input 
                                                                key={`dog--${d.id}`}
                                                                type="checkbox"
                                                                name={`dog--${d.id}`}
                                                                value={d.id}
                                                                checked
                                                                onChange={(e) => {
                                                                    let copy = {...walkerUpdate};
                                                                    const dogId = copy.dogIds.find((di) => {
                                                                        return di === parseInt(e.target.value);
                                                                    })
                                                                    if (e.target.checked) {
                                                                        if (!dogId) {
                                                                            copy.dogIds.push(parseInt(e.target.value));
                                                                            update(copy);
                                                                        }
                                                                    }
                                                                    else {
                                                                        if (dogId) {
                                                                            let filtered = copy;
                                                                            filtered.dogIds = copy.dogIds.filter((di) => {
                                                                                return di !== parseInt(e.target.value);
                                                                            })
                                                                            update(filtered);
                                                                        }
                                                                    }
                                                                }}
                                                            />
                                                        </div>
                                                        </>
                                                    )
                                                    :
                                                    (
                                                        <>
                                                        <Label htmlFor={`dog--${d.id}`} key={`dog--${d.id}`}>{d.name}</Label>
                                                        <div className="walkerForm-checkbox">
                                                            <Input 
                                                                key={`dog--${d.id}`}
                                                                type="checkbox"
                                                                name={`dog--${d.id}`}
                                                                value={d.id}
                                                                onChange={(e) => {
                                                                    let copy = {...walkerUpdate};
                                                                    const dogId = copy.dogIds.find((di) => {
                                                                        return di === parseInt(e.target.value);
                                                                    })
                                                                    if (e.target.checked) {
                                                                        if (!dogId) {
                                                                            copy.dogIds.push(parseInt(e.target.value));
                                                                            update(copy);
                                                                        }
                                                                    }
                                                                    else {
                                                                        if (dogId) {
                                                                            let filtered = copy;
                                                                            filtered.dogIds = copy.dogIds.filter((di) => {
                                                                                return di !== parseInt(e.target.value);
                                                                            })
                                                                            update(filtered);
                                                                        }
                                                                    }
                                                                }}
                                                            />
                                                        </div>
                                                        </>
                                                    )
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </FormGroup>
                        </div>
                    </Form>
                </ModalBody>
                <ModalFooter>
                <Button
                        onClick={() => {
                            handleWalkerUpdate();
                        }}
                        >Update</Button>
                        <Button
                        onClick={() => {
                            deleteWalker(walkerObject.id);
                            toggle();
                            getAllWalkers();
                        }}
                        >Remove</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}