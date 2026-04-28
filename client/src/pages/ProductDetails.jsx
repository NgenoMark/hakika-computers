import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import { Link, Navigate, useParams } from "react-router-dom";
import { useStore } from "../context/StoreContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products, addToCart, toggleWishlist, isWishlisted } = useStore();

  const product = products.find((item) => String(item.id) === productId);

  if (products.length > 0 && !product) {
    return <Navigate to="/shop" replace />;
  }

  if (!product) {
    return null;
  }

  const isService = product.category === "Repair Services";
  const sku = `HK-${product.category.replace(/\s+/g, "-").toUpperCase()}-${String(product.id).padStart(3, "0")}`;
  const infoPoints = isService
    ? [
        "Assessment starts after device intake and inspection.",
        "Replacement part cost is quoted separately where needed.",
        "Completion time depends on fault type and parts availability.",
      ]
    : [
        "Product can be reserved for pickup or arranged for delivery.",
        "Accessories and compatibility help are available on request.",
        "Bulk supply support is available for school and office needs.",
      ];

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 5, md: 7 } }}>
      <Stack spacing={3}>
        <Button
          component={Link}
          to="/shop"
          startIcon={<ArrowBackRoundedIcon />}
          sx={{ width: "fit-content" }}
        >
          Back to shop
        </Button>

        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                overflow: "hidden",
                border: "1px solid rgba(16, 32, 51, 0.08)",
                backgroundColor: "#ffffff",
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={2.5}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label={product.badge} color="secondary" />
                <Chip label={product.category} variant="outlined" />
                <Chip label={sku} variant="outlined" />
              </Stack>

              <Box>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  {product.name}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <StarRoundedIcon sx={{ color: "#ff8d24" }} />
                  <Typography color="text.secondary">{product.rating} rating</Typography>
                </Stack>
              </Box>

              <Typography variant="body1" color="text.secondary">
                {product.description}
              </Typography>

              <Typography variant="h4" color="primary">
                ${product.price.toFixed(2)}
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCartRoundedIcon />}
                  onClick={() => addToCart(product)}
                >
                  {isService ? "Book service" : "Add to cart"}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={isWishlisted(product.id) ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
                  onClick={() => toggleWishlist(product)}
                >
                  {isWishlisted(product.id) ? "Saved to wishlist" : "Save to wishlist"}
                </Button>
              </Stack>

              <Divider />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Stack direction="row" spacing={1.2} alignItems="flex-start">
                    <LocalShippingRoundedIcon color="primary" />
                    <Box>
                      <Typography variant="subtitle1">Fulfilment</Typography>
                      <Typography color="text.secondary">{product.delivery}</Typography>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack direction="row" spacing={1.2} alignItems="flex-start">
                    {isService ? <BuildRoundedIcon color="primary" /> : <VerifiedRoundedIcon color="primary" />}
                    <Box>
                      <Typography variant="subtitle1">{isService ? "Service note" : "Availability"}</Typography>
                      <Typography color="text.secondary">
                        {isService ? "Service is confirmed during checkout follow-up." : "Stock confirmation available on request."}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid rgba(16, 32, 51, 0.08)",
                backgroundColor: "rgba(255,255,255,0.9)",
                height: "100%",
              }}
            >
              <Typography variant="h5" sx={{ mb: 2 }}>
                Key details
              </Typography>
              <Stack spacing={1.25}>
                {product.features.map((feature) => (
                  <Chip
                    key={feature}
                    label={feature}
                    sx={{ width: "fit-content", backgroundColor: "#eef4fb" }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid rgba(16, 32, 51, 0.08)",
                backgroundColor: "rgba(255,255,255,0.9)",
                height: "100%",
              }}
            >
              <Typography variant="h5" sx={{ mb: 2 }}>
                More information
              </Typography>
              <Stack spacing={1.5}>
                {infoPoints.map((point) => (
                  <Typography key={point} color="text.secondary">
                    {point}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default ProductDetails;
