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

interface Teams {
  id: number;
  name: string;
  assetUrl?: string;
  leagueId: number;
}
export default function TeamsPage() {
  const router = useRouter();
  const currentLeagueId = Number(router.query.id);
  const currentTeams = teams.filter(
    (team) => team.leagueId === currentLeagueId
  );
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {currentTeams.map((item) => (
        <Link
          style={{ textDecoration: "none" }}
          key={item.id}
          href={`../product-types?teamId=${item.id}`}
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

const teams: Teams[] = [
  { id: 1, name: "Arsenal", assetUrl: "", leagueId: 1 },
  { id: 2, name: "Liverpool", assetUrl: "", leagueId: 1 },
  { id: 3, name: "Manchester United", assetUrl: "", leagueId: 1 },
  { id: 4, name: "Manchester City", assetUrl: "", leagueId: 1 },
  { id: 5, name: "Chelsea", assetUrl: "", leagueId: 1 },
  { id: 6, name: "Bercelona", assetUrl: "", leagueId: 2 },
  { id: 7, name: "Real Madrid", assetUrl: "", leagueId: 2 },
  { id: 8, name: "Bayern Munich", assetUrl: "", leagueId: 3 },
  { id: 9, name: "PSG", assetUrl: "", leagueId: 4 },
];
