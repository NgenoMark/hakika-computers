import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import DownloadDoneRoundedIcon from "@mui/icons-material/DownloadDoneRounded";
import { Navigate, Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

const Checkout = () => {
  const { cartItems, cartSubtotal, clearCheckout, orderSuccess, setOrderSuccess } = useStore();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    paymentMethod: "mpesa",
    mpesaPhone: "",
    bankReference: "",
    serviceNotes: "",
  });

  const serviceFee = cartItems.length ? 4.99 : 0;
  const total = cartSubtotal + serviceFee;
  const hasService = cartItems.some((item) => item.category === "Repair Services");

  if (!cartItems.length && !orderSuccess) {
    return <Navigate to="/cart" replace />;
  }

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clearCheckout({
      name: form.fullName,
      email: form.email,
      total,
      itemCount: cartItems.length,
      paymentMethod: form.paymentMethod,
    });
    setForm({
      fullName: "",
      email: "",
      company: "",
      paymentMethod: "mpesa",
      mpesaPhone: "",
      bankReference: "",
      serviceNotes: "",
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="secondary.main">
            Checkout
          </Typography>
          <Typography variant="h3">Complete your order or service booking</Typography>
        </Box>

        {orderSuccess ? (
          <Alert
            icon={<DownloadDoneRoundedIcon fontSize="inherit" />}
            severity="success"
            sx={{ alignItems: "center" }}
            action={
              <Button color="inherit" size="small" component={Link} to="/shop" onClick={() => setOrderSuccess(null)}>
                Keep shopping
              </Button>
            }
          >
            Order confirmed for {orderSuccess.name}. We will contact you through {orderSuccess.email} to confirm delivery or schedule service. Payment method: {orderSuccess.paymentMethod === "mpesa" ? "M-Pesa" : orderSuccess.paymentMethod === "cash" ? "Cash" : "I&M Bank"}.
          </Alert>
        ) : null}

        <Stack direction={{ xs: "column", lg: "row" }} spacing={3} alignItems="flex-start">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              flex: 1,
              width: "100%",
              p: 3,
              backgroundColor: "rgba(255,255,255,0.88)",
              border: "1px solid rgba(16, 32, 51, 0.08)",
            }}
          >
            <Stack spacing={2.5}>
              <Typography variant="h5">{hasService ? "Customer and booking details" : "Billing and contact details"}</Typography>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField
                  fullWidth
                  required
                  label="Full name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email address"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </Stack>
              <TextField
                fullWidth
                label="Company or team"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  Payment method
                </Typography>
                <FormControl>
                  <RadioGroup
                    row
                    name="paymentMethod"
                    value={form.paymentMethod}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="mpesa" control={<Radio />} label="M-Pesa" />
                    <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                    <FormControlLabel value="bank" control={<Radio />} label="I&M Bank" />
                  </RadioGroup>
                </FormControl>
              </Box>
              {hasService ? (
                <TextField
                  fullWidth
                  label="Describe the problem or preferred service date"
                  name="serviceNotes"
                  multiline
                  minRows={3}
                  value={form.serviceNotes || ""}
                  onChange={handleChange}
                />
              ) : null}
              {form.paymentMethod === "mpesa" ? (
                <Stack spacing={1.5}>
                  <TextField
                    fullWidth
                    required
                    label="M-Pesa phone number"
                    name="mpesaPhone"
                    placeholder="07XXXXXXXX"
                    value={form.mpesaPhone}
                    onChange={handleChange}
                  />
                  <Typography color="text.secondary">
                    We will confirm the M-Pesa payment request and transaction before releasing the order.
                  </Typography>
                </Stack>
              ) : null}
              {form.paymentMethod === "cash" ? (
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "#f5f8fc",
                    border: "1px solid rgba(16, 32, 51, 0.08)",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                    Cash payment
                  </Typography>
                  <Typography color="text.secondary">
                    Cash payments are handled on pickup, delivery handoff, or in-store when the repair item is dropped off or collected.
                  </Typography>
                </Box>
              ) : null}
              {form.paymentMethod === "bank" ? (
                <Stack spacing={1.5}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "#f5f8fc",
                      border: "1px solid rgba(16, 32, 51, 0.08)",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      I&M Bank payment details
                    </Typography>
                    <Typography color="text.secondary">Bank: I&M Bank</Typography>
                    <Typography color="text.secondary">Account Name: IDEVELOPHUB / Hakika Tech Store</Typography>
                    <Typography color="text.secondary">Account Number: 001234567890</Typography>
                    <Typography color="text.secondary">Branch: Nairobi Main</Typography>
                  </Box>
                  <TextField
                    fullWidth
                    required
                    label="Bank transfer reference"
                    name="bankReference"
                    value={form.bankReference}
                    onChange={handleChange}
                  />
                </Stack>
              ) : null}
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField
                  fullWidth
                  label="Phone number"
                  name="phoneNumber"
                  value={form.phoneNumber || ""}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Town / location"
                  name="location"
                  value={form.location || ""}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Preferred date"
                  name="preferredDate"
                  placeholder="Optional"
                  value={form.preferredDate || ""}
                  onChange={handleChange}
                />
              </Stack>
              <Button type="submit" variant="contained" size="large" startIcon={<LockRoundedIcon />}>
                Confirm ${total.toFixed(2)} order
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", lg: 360 },
              p: 3,
              backgroundColor: "#ffffff",
              border: "1px solid rgba(16, 32, 51, 0.08)",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}>
              {hasService ? "Order and booking summary" : "Order summary"}
            </Typography>
            <Stack spacing={1.5}>
              {cartItems.map((item) => (
                <Stack key={item.id} direction="row" justifyContent="space-between" spacing={2}>
                  <Box>
                    <Typography>{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Qty {item.quantity}
                    </Typography>
                  </Box>
                  <Typography>${(item.price * item.quantity).toFixed(2)}</Typography>
                </Stack>
              ))}
              <Divider />
              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Subtotal</Typography>
                <Typography>${cartSubtotal.toFixed(2)}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Handling fee</Typography>
                <Typography>${serviceFee.toFixed(2)}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography color="text.secondary">Payment method</Typography>
                <Typography>
                  {form.paymentMethod === "mpesa" ? "M-Pesa" : form.paymentMethod === "cash" ? "Cash" : "I&M Bank"}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6">${total.toFixed(2)}</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Checkout;
