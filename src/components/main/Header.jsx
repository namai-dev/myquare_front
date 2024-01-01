import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Menu, MenuItem, MenuList } from "@mui/material";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { isAuthenticated } = React.useContext(AuthContext);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ flexGrow: 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Square
        </Typography>

        {isAuthenticated ? (
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>New Square</MenuItem>
            <MenuItem onClick={handleClose}>My Squares</MenuItem>
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
            <MenuItem onClick={handleClose}>Github</MenuItem>
          </Menu>
        ) : (
          <MenuList sx={{ display: "flex", flexDirection: "row" }}>
            <MenuItem component={Link} to="/signin">
              Sign In
            </MenuItem>
            <MenuItem component={Link} to="/signup">
              SingUp
            </MenuItem>
          </MenuList>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
