import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/menu", label: "Our Menu" },
  { path: "/contact", label: "Contact Us" },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer}>
      <List>
        {links.map((link) => (
          <ListItem button key={link.path} component={NavLink} to={link.path}>
            <ListItemText
              primary={link.label}
              primaryTypographyProps={{ fontWeight: 600 }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo or Brand Name */}
        <Typography variant="h6" fontWeight={700} color="#671515">
          Chikkees Test
        </Typography>

        {isMobile ? (
          <>
            <IconButton edge="end" onClick={toggleDrawer} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <Box display="flex" gap="40px" alignItems="center">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#671515" : "#000000",
                })}
              >
                <Typography fontWeight={600} sx={{ cursor: "pointer" }}>
                  {link.label}
                </Typography>
              </NavLink>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
