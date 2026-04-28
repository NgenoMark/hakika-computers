import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart, onToggleWishlist, isWishlisted }) => (
  <Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      backgroundColor: "rgba(255,255,255,0.92)",
    }}
  >
    <Box sx={{ position: "relative" }}>
      <Box component={Link} to={`/shop/${product.id}`} sx={{ display: "block" }}>
        <CardMedia component="img" image={product.image} alt={product.name} sx={{ aspectRatio: "4 / 3" }} />
      </Box>
      <Chip
        label={product.badge}
        color="secondary"
        size="small"
        sx={{ position: "absolute", top: 14, left: 14 }}
      />
      <IconButton
        aria-label="toggle wishlist"
        onClick={() => onToggleWishlist(product)}
        sx={{
          position: "absolute",
          top: 14,
          right: 14,
          backgroundColor: "rgba(255,255,255,0.92)",
          "&:hover": { backgroundColor: "#ffffff" },
        }}
      >
        {isWishlisted ? <FavoriteRoundedIcon color="error" /> : <FavoriteBorderRoundedIcon />}
      </IconButton>
    </Box>

    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.5, flexGrow: 1 }}>
      <Stack direction="row" justifyContent="space-between" spacing={1}>
        <Chip label={product.category} size="small" variant="outlined" />
        <Stack direction="row" spacing={0.5} alignItems="center">
          <StarRoundedIcon sx={{ fontSize: 18, color: "#ff8d24" }} />
          <Typography variant="body2" color="text.secondary">
            {product.rating}
          </Typography>
        </Stack>
      </Stack>
      <Typography
        variant="h6"
        component={Link}
        to={`/shop/${product.id}`}
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {product.features.slice(0, 2).map((feature) => (
          <Chip key={feature} label={feature} size="small" sx={{ backgroundColor: "#eef4fb" }} />
        ))}
      </Stack>
      <Box sx={{ mt: "auto", pt: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {product.delivery}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {product.category === "Repair Services" ? "Book the service from checkout" : "Available as hardware purchase"}
        </Typography>
        <Typography variant="h5" color="primary" sx={{ mt: 0.5 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </Box>
    </CardContent>

    <Box sx={{ px: 2, pb: 2 }}>
      <Stack direction="row" spacing={1}>
        <Button
          fullWidth
          variant="outlined"
          component={Link}
          to={`/shop/${product.id}`}
          endIcon={<ArrowForwardRoundedIcon />}
        >
          View details
        </Button>
        <Button
          fullWidth
          variant="contained"
          startIcon={<ShoppingCartRoundedIcon />}
          onClick={() => onAddToCart(product)}
        >
          {product.category === "Repair Services" ? "Book service" : "Add to cart"}
        </Button>
      </Stack>
    </Box>
  </Card>
);

export default ProductCard;
