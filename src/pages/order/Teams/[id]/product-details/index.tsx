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

interface Products {
  id: number;
  name: string;
  assetUrl: string;
  teamId: number;
  productTypeId: number;
  addons: [];
}
export default function TeamsPage() {
  const router = useRouter();
  const { producttypeid: productTypeId, id: teamId } = router.query;
  //  const{product-type-id , id } = query

  const currentProducts = products.filter(
    (item) =>
      item.productTypeId === Number(productTypeId) &&
      item.teamId === Number(teamId)
  );
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {currentProducts.map((item) => (
        <Link
          style={{ textDecoration: "none" }}
          key={item.id}
          href={`/order/addons?productid=${item.id}`}
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

export const products = [
  {
    id: 1,
    name: "Home Kit",
    assetUrl: "/arsenalHomeKit.jpg",
    teamId: 1,
    productTypeId: 1,
    isBestSeller: true,
    addons: [],
  },
  {
    id: 2,
    name: "Away Kit",
    assetUrl: "/arsenalAwayKit.png",
    teamId: 1,
    productTypeId: 1,
    isBestSeller: false,
    addons: [],
  },
  {
    id: 3,
    name: "Third Kit",
    assetUrl: "",
    teamId: 1,
    productTypeId: 1,
    isBestSeller: true,
    addons: [],
  },
  {
    id: 4,
    name: "Home Kit",
    assetUrl: "",
    teamId: 2,
    productTypeId: 1,
    isBestSeller: false,
    addons: [],
  },
  {
    id: 5,
    name: "Away Kit",
    assetUrl: "",
    teamId: 2,
    productTypeId: 1,
    isBestSeller: false,
    addons: [],
  },
  {
    id: 6,
    name: "Third Kit",
    assetUrl: "",
    teamId: 2,
    productTypeId: 1,
    isBestSeller: false,
    addons: [],
  },
  {
    id: 7,
    name: "Home Kit",
    assetUrl: "",
    teamId: 3,
    productTypeId: 1,
    isBestSeller: true,
    addons: [],
  },
];
