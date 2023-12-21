import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function League() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Link style={{ textDecoration: "none" }} href={`order/teams/`}>
        <Card elevation={4} sx={{ minWidth: 200, m: 4 }}>
          <CardActionArea>
            <CardMedia
              width={"fit"}
              component="img"
              height="140"
              image=""
              alt=""
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Box>
  );
}
