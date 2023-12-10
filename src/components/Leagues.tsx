import { Box } from "@mui/material";

import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface LeaguesType {
  id: number;
  name: string;
  assetUrl: string;
}

export default function League() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {leaguesArr.map((item) => (
        <Link
          style={{ textDecoration: "none" }}
          key={item.id}
          href={`/teams/${item.id}`}
        >
          <Card elevation={4} sx={{ minWidth: 200, m: 4 }}>
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

const leaguesArr: LeaguesType[] = [
  {
    id: 1,
    name: "Premier League",
    assetUrl: "/premier-LeagueLogo.jpg",
  },
  {
    id: 2,
    name: "Laliga",
    assetUrl: "/LaLiga_EA_Sports_2023_Vertical_Logo.svg.png",
  },
  {
    id: 3,
    name: "Bundesliga",
    assetUrl: "/BundesligaLogo.png",
  },
  {
    id: 4,
    name: "Ligue 1",
    assetUrl: "/Ligue_1_Uber_Eats_logo.png",
  },
];
