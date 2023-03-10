import createUser from "../data/user";
import ProfilHeader from "../component/ProfilHeader";
import { useState, useEffect } from "react";

function Home() {
    const [user, setUser] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const data = await createUser(12);
        setUser(data);
      }
      fetchData();
    }, []);

    return (<ProfilHeader name={user.firstName}></ProfilHeader>);
  }
export default Home;