export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};

export const getDogs = async () => {
  const res = await fetch("/api/dogs");
  return res.json();
}

export const getOneDog = async (id) => {
  const res = await fetch(`/api/dogs/${id}`);
  return res.json();
}

export const postDog = async (dogObject) => {
  await fetch("/api/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dogObject)
  });
}

export const deleteDog = async (id) => {
  await fetch(`/api/dogs/${id}`, {
    method: "DELETE"})
}

export const getCities = async () => {
  const res = await fetch("/api/cities");
  return res.json();
}

export const getOneCity = async (id) => {
  const res = await fetch(`/api/cities/${id}`);
  return res.json();
}

export const postCity = async (cityObject) => {
  await fetch("/api/cities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cityObject)
  });
}

export const getWalkers = async () => {
  const res = await fetch("/api/walkers");
  return res.json();
}

export const getOneWalker = async (id) => {
  const res = await fetch(`/api/walkers/${id}`);
  return res.json();
}

export const getWalkerCities = async () => {
  const res = await fetch("/api/walkercities");
  return res.json();
}

export const putWalkerCities = async (id, cities) => {
  await fetch(`/api/walkercities/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cities)
  });
}