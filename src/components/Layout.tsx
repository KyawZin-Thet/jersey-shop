import { Box } from "@mui/material";
import { useRouter } from "next/router";
import BackOfficeLayout from "./BackofficeLayout";
import TopBar from "./Topbar";
interface Props {
  children: string | JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
  const router = useRouter();
  const isBackoffice = router.pathname.includes("backoffice");
  return (
    <Box>
      {!isBackoffice ? (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TopBar />
          {children}
        </Box>
      ) : (
        <BackOfficeLayout>{children}</BackOfficeLayout>
      )}
    </Box>
  );
}
