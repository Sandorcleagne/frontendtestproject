import { Typography } from "@mui/material";
import { padding } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Skills = () => {
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
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Typography variant="h2" fontWeight={600}>
          Major SKills
        </Typography>
        <ol>
          {userData.map((items, index) =>
            items.skills.map((item1, index) => (
              <li style={{ fontSize: "30px", padding: "10px" }}>{item1}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
};

export default Skills;
