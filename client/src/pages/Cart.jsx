import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

const Cart = () => {
  const { cartItems, cartSubtotal, removeFromCart, updateCartQuantity } = useStore();
  const serviceFee = cartItems.length ? 4.99 : 0;
  const total = cartSubtotal + serviceFee;
  const hasService = cartItems.some((item) => item.category === "Repair Services");

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="secondary.main">
            Cart
          </Typography>
          <Typography variant="h3">Review your items and bookings</Typography>
        </Box>

        {cartItems.length === 0 ? (
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              backgroundColor: "rgba(255,255,255,0.88)",
              border: "1px solid rgba(16, 32, 51, 0.08)",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" sx={{ mb: 1 }}>
              Your cart is empty
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Add hardware items or repair services and your order summary will show up here.
            </Typography>
            <Button component={Link} to="/shop" variant="contained">
              Continue shopping
            </Button>
          </Box>
        ) : (
          <Stack direction={{ xs: "column", lg: "row" }} spacing={3} alignItems="flex-start">
            <Box
              sx={{
                flex: 1,
                width: "100%",
                p: 3,
                backgroundColor: "rgba(255,255,255,0.88)",
                border: "1px solid rgba(16, 32, 51, 0.08)",
              }}
            >
              <Stack spacing={2.5} divider={<Divider flexItem />}>
                {cartItems.map((item) => (
                  <Stack
                    key={item.id}
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ minWidth: 0 }}>
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.name}
                        sx={{ width: 112, aspectRatio: "4 / 3", borderRadius: 3, objectFit: "cover" }}
                      />
                      <Box sx={{ minWidth: 0 }}>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.delivery}
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <TextField
                        type="number"
                        size="small"
                        label="Qty"
                        value={item.quantity}
                        inputProps={{ min: 1, style: { width: 48 } }}
                        onChange={(event) => updateCartQuantity(item.id, Number(event.target.value))}
                      />
                      <Typography variant="h6" sx={{ minWidth: 90, textAlign: "right" }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                      <IconButton onClick={() => removeFromCart(item.id)} aria-label="remove item">
                        <DeleteOutlineRoundedIcon />
                      </IconButton>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Box>

            <Box
              sx={{
                width: { xs: "100%", lg: 360 },
                p: 3,
                backgroundColor: "#08192e",
                color: "#f8fbff",
              }}
            >
              <Typography variant="h5" sx={{ mb: 3 }}>
                {hasService ? "Order and booking summary" : "Order summary"}
              </Typography>
              <Stack spacing={1.5}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="rgba(248,251,255,0.72)">Subtotal</Typography>
                  <Typography>${cartSubtotal.toFixed(2)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography color="rgba(248,251,255,0.72)">Handling fee</Typography>
                  <Typography>${serviceFee.toFixed(2)}</Typography>
                </Stack>
                <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">${total.toFixed(2)}</Typography>
                </Stack>
              </Stack>
              <Button
                component={Link}
                to="/checkout"
                fullWidth
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{ mt: 3 }}
              >
                Continue to checkout
              </Button>
            </Box>
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default Cart;
