import { Typography } from "@mui/material";
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
    <>
      <Typography variant="h2" fontWeight={600} ml={75}>
        Experience
      </Typography>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "80vh",
        }}
      >
        {userData.map((items, index) => (
          <>
            <Typography fontWeight={600}>{items.experience1}</Typography>
            <Typography fontWeight={600}>{items.experience2}</Typography>
          </>
        ))}
      </div>
    </>
  );
};

export default Experience;
