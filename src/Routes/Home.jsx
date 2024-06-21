import React, { useGlobalContext } from "react";
import { ContextGlobal } from "../Components/utils/GlobalContext";



const Home = () => {
  const { data } = useGlobalContext (ContextGlobal);

  return (
    <div className="home">
      <h1>List of Dentists</h1>
      <div className="grid">
        {data ? (
          data.map(dentist => (
           <Card/>
           
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;