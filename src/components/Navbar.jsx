import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import App from "../App";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ color: "black" }}>
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, textTransform: "uppercase" }}
            >
              Portfolio Dashboard
            </Typography>
            <Button
              component={NavLink}
              to="/"
              sx={{ color: "white" }}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "white" : "",
                  color: isActive ? "black" : "",
                };
              }}
            >
              HOME
            </Button>
            <Button
              component={NavLink}
              to="/skills"
              sx={{ color: "white" }}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "white" : "",
                  color: isActive ? "black" : "",
                };
              }}
            >
              SKILLS
            </Button>
            <Button
              component={NavLink}
              to="/experience"
              sx={{ color: "white" }}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "white" : "",
                  color: isActive ? "black" : "",
                };
              }}
            >
              EXPERIENCE
            </Button>
            <Button
              component={NavLink}
              to="/contact"
              sx={{ color: "white" }}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "white" : "",
                  color: isActive ? "black" : "",
                };
              }}
            >
              CONTACT
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
