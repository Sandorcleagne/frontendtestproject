import axios from "axios";
import React, { useState, useEffect } from "react";

const Experience = () => {
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
    <div>
      {userData.map((items, index) => {
        return items.experience1;
      })}
    </div>
  );
};

export default Experience;
