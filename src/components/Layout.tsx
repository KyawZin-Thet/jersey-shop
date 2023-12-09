import { Box } from "@mui/material";
import TopBar from "./Topbar";
interface Props {
  children: string | JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TopBar />

      {children}
    </Box>
  );
}
