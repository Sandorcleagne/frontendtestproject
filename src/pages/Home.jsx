import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const callingApi = () => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/api/userdata",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data);
        setUserData(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    callingApi();
  }, [setUserData]);
  console.log("userData", userData);
  return (
    <>
      <h1>HOME</h1>
    </>
  );
};

export default Home;
