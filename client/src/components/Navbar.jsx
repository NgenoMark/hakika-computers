import React from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import logo from "../assets/idevelophub-logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Wishlist", to: "/wishlist" },
  { label: "Cart", to: "/cart" },
];

const Navbar = () => {
  const { cartCount, wishlistItems } = useStore();

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 80, gap: 2 }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: "inherit",
              minWidth: 0,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Idevelophub"
              sx={{ width: 48, height: 48, objectFit: "contain" }}
            />
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="h6" sx={{ lineHeight: 1.1 }}>
                Hakika Tech Store
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(248,251,255,0.72)" }}>
                Computers, accessories, cables, and repair services
              </Typography>
            </Box>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              ml: "auto",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                color="inherit"
                sx={{
                  px: 2,
                  color: "rgba(248,251,255,0.78)",
                  "&.active": {
                    color: "#ffffff",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              component={Link}
              to="/shop"
              startIcon={<StorefrontRoundedIcon />}
              variant="contained"
              color="secondary"
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            >
              Browse
            </Button>
            <IconButton component={Link} to="/wishlist" color="inherit" aria-label="wishlist">
              <Badge badgeContent={wishlistItems.length} color="secondary">
                <FavoriteBorderRoundedIcon />
              </Badge>
            </IconButton>
            <IconButton component={Link} to="/cart" color="inherit" aria-label="cart">
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartRoundedIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
