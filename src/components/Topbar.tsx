import HomeIcon from "@mui/icons-material/Home";
import { Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function TopBar() {
  const router = useRouter();

  const handleSearch = (value: string) => {
    const searchText = value.toLocaleLowerCase();
    // const result = snakesData.filter(
    //   (item) =>
    //     item.EngName?.toLowerCase().includes(searchText) ||
    //     item.MMName?.toLowerCase().includes(searchText)
    // );
    // dispatch(setSnakes(result));
  };

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        top: 0,
        width: "100vw",
        p: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginX: 5,
          bgcolor: "primary.main",
        }}
      >
        <Image
          src={"/footballLogo.jpg"}
          style={{ borderRadius: "50%" }}
          alt="logo"
          width={62}
          height={62}
        />

        {false ? (
          <Button onClick={() => router.push("/")}>
            <HomeIcon sx={{ color: "info.main", fontSize: 40 }} />
          </Button>
        ) : (
          <TextField
            sx={{
              borderRadius: 4,
              bgcolor: "info.main",
              width: "500px",
              input: { color: "secondary.main" },
              my: 1,
              ml: 4,
            }}
            placeholder="Search Team name.."
            onChange={(evt) => handleSearch(evt.target.value)}
          ></TextField>
        )}
      </Box>
    </Box>
  );
}
