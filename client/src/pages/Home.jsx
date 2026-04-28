import React from "react";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import BuildCircleRoundedIcon from "@mui/icons-material/BuildCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useStore } from "../context/StoreContext";
import logo from "../assets/idevelophub-logo.png";

const Home = () => {
  const { products, addToCart, toggleWishlist, isWishlisted } = useStore();

  const featured = products.slice(0, 3);

  return (
    <Box component="main">
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 7, md: 10 },
          background:
            "linear-gradient(135deg, rgba(8,25,46,0.97) 0%, rgba(14,99,182,0.94) 52%, rgba(255,141,36,0.88) 100%)",
          color: "#f8fbff",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={3}>
                <Chip
                  icon={<FlashOnRoundedIcon />}
                  label="Hardware, accessories, and repair support"
                  sx={{
                    width: "fit-content",
                    backgroundColor: "rgba(255,255,255,0.12)",
                    color: "#ffffff",
                  }}
                />
                <Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4.5rem" }, maxWidth: 760 }}>
                  Shop laptops, desktops, accessories, and trusted computer repair.
                </Typography>
                <Typography variant="h5" sx={{ color: "rgba(248,251,255,0.76)", maxWidth: 650 }}>
                  Hakika Tech Store now focuses on the gear people actually need every day: computers, chargers, cables, keyboards, headphones, and reliable service work for damaged or slow machines.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    component={Link}
                    to="/shop"
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardRoundedIcon />}
                  >
                    Explore products
                  </Button>
                  <Button
                    component={Link}
                    to="/wishlist"
                    variant="outlined"
                    size="large"
                    sx={{
                      color: "#ffffff",
                      borderColor: "rgba(255,255,255,0.4)",
                    }}
                  >
                    View wishlist
                  </Button>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} useFlexGap>
                  {[
                    { icon: <LocalShippingRoundedIcon />, label: "Pickup and local delivery" },
                    { icon: <VerifiedRoundedIcon />, label: "Trusted hardware and accessories" },
                    { icon: <BuildCircleRoundedIcon />, label: "Repair and servicing available" },
                  ].map((item) => (
                    <Stack key={item.label} direction="row" spacing={1} alignItems="center">
                      {item.icon}
                      <Typography variant="body1">{item.label}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  minHeight: { xs: 320, md: 520 },
                  p: { xs: 3, md: 4 },
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  boxShadow: "0 30px 80px rgba(7,17,31,0.28)",
                }}
              >
                <Stack spacing={3} sx={{ height: "100%" }}>
                  <Box
                    component="img"
                    src={logo}
                    alt="Idevelophub logo"
                    sx={{ width: { xs: 180, md: 240 }, objectFit: "contain" }}
                  />
                  <Typography variant="h4">Themed around your brand colors.</Typography>
                  <Typography variant="body1" sx={{ color: "rgba(248,251,255,0.78)" }}>
                    The storefront leans into the blue and orange identity while presenting a more practical electronics-and-repairs experience.
                  </Typography>
                  <Box
                    sx={{
                      mt: "auto",
                      p: 3,
                      borderRadius: 6,
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.08) 100%)",
                    }}
                  >
                    <Typography variant="overline" sx={{ color: "#d7ecff" }}>
                      What is included
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 1 }}>
                      Product shopping and service booking in one flow.
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 9 } }}>
        <Grid container spacing={3}>
          {[
            { title: "Computers", text: "Desktops and laptops for business, school, work-from-home, and everyday productivity." },
            { title: "Accessories", text: "Chargers, power banks, keyboards, mice, headphones, and cable essentials in one store." },
            { title: "Repair Services", text: "Diagnostics, replacement work, and servicing for slow, damaged, or failing machines." },
          ].map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  border: "1px solid rgba(16, 32, 51, 0.08)",
                  backgroundColor: "rgba(255,255,255,0.86)",
                }}
              >
                <Typography variant="h5" sx={{ mb: 1.5 }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="xl" sx={{ pb: { xs: 8, md: 10 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-end" }}
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Box>
            <Typography variant="overline" color="secondary.main">
              Featured Picks
            </Typography>
            <Typography variant="h3">A tighter catalog for tech teams</Typography>
            <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 640 }}>
              Browse machine options, everyday accessories, and workshop services built around practical computer needs.
            </Typography>
          </Box>
          <Button component={Link} to="/shop" endIcon={<ArrowForwardRoundedIcon />}>
            See the full shop
          </Button>
        </Stack>

        {!products.length ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {featured.map((product) => (
              <Grid item xs={12} md={4} key={product.id}>
                <ProductCard
                  product={product}
                  onAddToCart={addToCart}
                  onToggleWishlist={toggleWishlist}
                  isWishlisted={isWishlisted(product.id)}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Home;
