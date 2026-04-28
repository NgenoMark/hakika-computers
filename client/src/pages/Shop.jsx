import React, { useState } from "react";
import {
  Box,
  Chip,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ProductCard from "../components/ProductCard";
import { useStore } from "../context/StoreContext";

const Shop = () => {
  const { products, addToCart, toggleWishlist, isWishlisted } = useStore();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 1200]);

  const categories = ["All", ...new Set(products.map((product) => product.category))];
  const maxPrice = products.length ? Math.ceil(Math.max(...products.map((product) => product.price))) : 80;

  useEffect(() => {
    setPriceRange((current) => [current[0], Math.max(current[1], maxPrice)]);
  }, [maxPrice]);

  const filteredProducts = [...products]
    .filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesSearch =
        search.trim() === "" ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesCategory && matchesSearch && matchesPrice;
    })
    .sort((left, right) => {
      if (sortBy === "price-asc") {
        return left.price - right.price;
      }

      if (sortBy === "price-desc") {
        return right.price - left.price;
      }

      if (sortBy === "rating") {
        return right.rating - left.rating;
      }

      return 0;
    });

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 5, md: 7 } }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="secondary.main">
            Shop
          </Typography>
          <Typography variant="h3">Hardware and service catalog</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 700, mt: 1 }}>
            Find machines, accessories, cables, and repair services by category, price, and search terms.
          </Typography>
        </Box>

        <Box
          sx={{
            p: 3,
            backgroundColor: "rgba(255,255,255,0.88)",
            border: "1px solid rgba(16, 32, 51, 0.08)",
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Search products"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <Select value={category} onChange={(event) => setCategory(event.target.value)}>
                  {categories.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <FormControl fullWidth>
                <Select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                  <MenuItem value="featured">Featured</MenuItem>
                  <MenuItem value="rating">Top rated</MenuItem>
                  <MenuItem value="price-asc">Price: low to high</MenuItem>
                  <MenuItem value="price-desc">Price: high to low</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Price range: ${priceRange[0]} - ${priceRange[1]}
              </Typography>
              <Slider
                value={priceRange}
                min={0}
                max={Math.max(maxPrice, 80)}
                onChange={(_, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                color="secondary"
              />
            </Grid>
          </Grid>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
            <Chip label={`${filteredProducts.length} products`} color="primary" variant="outlined" />
            <Chip label="Repairs and servicing included" />
            <Chip label="Computers and accessories" />
            <Chip label="Pickup and local delivery" />
          </Stack>
        </Box>

        {!products.length ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
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

export default Shop;
