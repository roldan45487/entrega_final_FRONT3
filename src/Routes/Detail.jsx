
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DentistDetails = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setDentist(response.data);
      } catch (error) {
        setError('Error fetching dentist details');
        console.error('Error fetching dentist details:', error);
      }
    };

    fetchDentist();
  }, [id]);

  return (
    <div className="dentist-details">
      {error && <p className="error">{error}</p>}
      {dentist ? (
        <>
          <h1>{dentist.name}</h1>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DentistDetails;
