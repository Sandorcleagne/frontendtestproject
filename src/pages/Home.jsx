import axios from "axios";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { Box, Stack, Typography } from "@mui/material";
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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 200,
        },
      }}
    >
      <Paper
        elevation={9}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {userData.map((items, index) => (
          <>
            <Stack key={index} sx={{ display: "flex", gap: 4 }}>
              <Typography
                variant="h3"
                fontWeight={600}
                letterSpacing={1}
                ml={10}
              >
                Welcome Back {items.name ? items.name : "Unknown"} !
              </Typography>
              <Typography
                variant="h5"
                fontWeight={600}
                letterSpacing={1}
                textAlign="center"
              >
                {items.about ? items.about : "Nothing in about section 😔"}
              </Typography>
            </Stack>
          </>
        ))}
      </Paper>
    </Box>
  );
};

export default Home;
