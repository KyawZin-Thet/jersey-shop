import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { products } from "../teams/[id]/product-details";

export default function addons() {
  const router = useRouter();
  const productId = router.query.productid;
  const [size, setSize] = useState("");
  const [number, setNumber] = useState("");

  const numberArr = [];

  for (let i = 0; i < 100; i++) {
    numberArr.push(i);
  }

  const handleSizeChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };
  const handleNumberChange = (event: SelectChangeEvent) => {
    setNumber(event.target.value as string);
  };

  const currentProduct = products.find((item) => item.id === Number(productId));

  if (!currentProduct) return null;
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Card elevation={4} sx={{ maxWidth: 400, m: 4 }}>
        <CardActionArea>
          <CardMedia
            width="300"
            component="img"
            height="440"
            image={currentProduct.assetUrl}
            alt={currentProduct.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {currentProduct.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={size}
              label="size"
              onChange={handleSizeChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <TextField defaultValue="name" sx={{ mb: 2 }} />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Number</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={number}
              label="Number"
              onChange={handleNumberChange}
            >
              {numberArr.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
