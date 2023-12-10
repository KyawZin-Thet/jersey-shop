import { Box } from "@mui/material";

import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface InternationalTeamsType {
  id: number;
  name: string;
  assetUrl: string;
}

export default function International() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {InternationalTeamsArr.map((item) => (
        <Card elevation={4} key={item.id} sx={{ minWidth: 200, m: 4 }}>
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
      ))}
    </Box>
  );
}

const InternationalTeamsArr: InternationalTeamsType[] = [
  {
    id: 1,
    name: "England",
    assetUrl: "/Flag_of_England.svg.png",
  },
  {
    id: 2,
    name: "France",
    assetUrl: "/Flag_of_France.svg.png",
  },
  {
    id: 3,
    name: "Germany",
    assetUrl: "/188px-Flag_of_Germany.svg.png",
  },
  {
    id: 4,
    name: "Spain",
    assetUrl: "/Bandera_de_España.svg.png",
  },
  {
    id: 5,
    name: "Brazil",
    assetUrl: "/188px-Flag_of_Brazil.svg.png",
  },
  {
    id: 6,
    name: "Argentina",
    assetUrl: "/Flag_of_Argentina.svg.png",
  },
];
