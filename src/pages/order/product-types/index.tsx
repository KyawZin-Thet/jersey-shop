import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

interface ProductTypesArr {
  id: number;
  name: string;
  assetUrl: string;
}

export default function productTypes() {
  const router = useRouter();
  const teamId = router.query.teamId;
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {productTypesArr.map((item) => (
        <Link
          style={{ textDecoration: "none" }}
          key={item.id}
          href={`../order/teams/${teamId}/product-details?producttypeid=${item.id}`}
        >
          <Card elevation={4} sx={{ maxWidth: 200, m: 4 }}>
            <CardActionArea>
              <CardMedia
                width={"fit"}
                component="img"
                height="140"
                image={item.assetUrl}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </Box>
  );
}

const productTypesArr: ProductTypesArr[] = [
  { id: 1, name: "Main Kits", assetUrl: "/default-kits.png" },
  { id: 2, name: "Training Kits", assetUrl: "/training-kit.jpg" },
  { id: 3, name: "Track Suits", assetUrl: "/TrackSuits.jpg" },
  { id: 4, name: "Gifts & Accessories", assetUrl: "/Gifts&Accessories.jpg" },
  { id: 5, name: "Special Events", assetUrl: "/events.png" },
];
