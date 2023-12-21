import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}
export default function BackOfficeLayout({ children }: Props) {
  return (
    <Box>
      <TopBar />
      <Box
        sx={{ display: "flex", position: "relative", flex: 1, height: "100vh" }}
      >
        <Sidebar />
        {children}
      </Box>
    </Box>
  );
}
