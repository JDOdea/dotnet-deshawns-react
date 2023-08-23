import { getGreeting } from "./apiManager";
import { useEffect, useState } from "react";
import { DogsList } from "./components/dogs/DogsList";

export default function Home() {
  const [greeting, setGreeting] = useState({
    message: "Not Connected to the API",
  });

  useEffect(() => {
    getGreeting()
      .then(setGreeting)
      .catch(() => {
        console.log("API not connected");
      });
  }, []);

  return (
    <>
      <p>{greeting.message}</p>
      <DogsList />
    </>
  );
}
