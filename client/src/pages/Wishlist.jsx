import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useStore } from "../context/StoreContext";

const Wishlist = () => {
  const { wishlistItems, addToCart, toggleWishlist, isWishlisted } = useStore();

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 5, md: 7 } }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="secondary.main">
            Wishlist
          </Typography>
          <Typography variant="h3">Saved for later</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Keep a shortlist of products you want to compare before buying.
          </Typography>
        </Box>

        {wishlistItems.length === 0 ? (
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              backgroundColor: "rgba(255,255,255,0.88)",
              border: "1px solid rgba(16, 32, 51, 0.08)",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" sx={{ mb: 1 }}>
              Your wishlist is empty
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Browse the catalog and save the tools or templates that catch your eye.
            </Typography>
            <Button component={Link} to="/shop" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
              Go to shop
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {wishlistItems.map((product) => (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id}>
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
      </Stack>
    </Container>
  );
};

export default Wishlist;
