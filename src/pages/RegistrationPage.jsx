import React, { useState, useEffect } from "react";
import {
  Grid,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import axios from "axios";
import { Link } from "react-router-dom";
const RegistrationPage = () => {
  const [RegistraionData, setRegistraionData] = useState({
    userid: "",
    fullname: "",
    email: "",
    password: "",
    profession: "",
    aboutyourself: "",
    exp1: "",
    exp2: "",
  });
  const handleChange = (event) => {
    setRegistraionData({
      ...RegistraionData,
      [event.target.name]: event.target.value,
    });
  };
  const handelSubmit = () => {
    const options = {
      method: "POST",
      url: "http://localhost:8000/api/registration",
      headers: { "Content-Type": "application/json" },
      data: {
        userid: RegistraionData.userid,
        name: RegistraionData.fullname,
        email: RegistraionData.email,
        password: RegistraionData.password,
        profession: RegistraionData.profession,
        about: RegistraionData.aboutyourself,
        skills: ["Java", "JSP", "Springboot", "React", "Node", "DSA"],
        experience1: RegistraionData.exp1,
        experience2: RegistraionData.exp2,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    handelSubmit();
  }, []);
  console.log("RegistraionData", RegistraionData);
  return (
    <Grid>
      <Grid
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textTransform: "uppercase",
          letterSpacing: "5px",
        }}
      >
        <Typography variant="h3">User Registration</Typography>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <Stack
          spacing={6}
          sx={{
            width: 650,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: 10,
          }}
        >
          <TextField
            id="standard-basic"
            label="UserID"
            variant="standard"
            name="userid"
            value={RegistraionData.userid}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Full Name"
            variant="standard"
            name="fullname"
            value={RegistraionData.fullname}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            value={RegistraionData.email}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            name="password"
            value={RegistraionData.password}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Profession"
            variant="standard"
            name="profession"
            value={RegistraionData.profession}
            onChange={handleChange}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="About yourself"
            style={{ width: 500, height: 200 }}
            name="aboutyourself"
            value={RegistraionData.aboutyourself}
            onChange={handleChange}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid container item spacing={3}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Java"
                />
              </Grid>
              <Grid container item spacing={3}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Python"
                />
              </Grid>
              <Grid container item spacing={3}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="React"
                />
              </Grid>
              <Grid container item spacing={3}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Node"
                />
              </Grid>
            </Grid>
          </Box>
          <TextField
            id="standard-basic"
            label="Expreience 1"
            variant="standard"
            name="exp1"
            value={RegistraionData.exp1}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Expreience 2"
            variant="standard"
            name="exp2"
            value={RegistraionData.exp2}
            onChange={handleChange}
          />
          <Link to="home" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handelSubmit()}
            >
              Register
            </Button>
          </Link>

          <Link to="login">
            <Button>Already have an account</Button>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default RegistrationPage;
