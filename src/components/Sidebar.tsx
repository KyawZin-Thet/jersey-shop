import CategoryIcon from "@mui/icons-material/Category";
import ClassIcon from "@mui/icons-material/Class";
import EggIcon from "@mui/icons-material/Egg";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SettingsIcon from "@mui/icons-material/Settings";
import TableBarIcon from "@mui/icons-material/TableBar";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

const SideBar = () => {
  return (
    <Box
      sx={{
        minWidth: 250,
        backgroundColor: "primary.main",
        borderTopRightRadius: "20px",
        height: "100%",
      }}
    >
      <List sx={{ p: 0 }}>
        {sidebarMenuItems.slice(0, 6).map((item) => (
          <Link
            key={item.id}
            href={item.route}
            style={{ textDecoration: "none", color: "#313131" }}
          >
            <ListItem
              disablePadding
              sx={{ "&.hover": { backgroundColor: "blue" } }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ color: "info.main" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{ color: "info.main" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider
        variant={"middle"}
        sx={{ backgroundColor: "secondary.main", mt: 2 }}
      />
      <List>
        {sidebarMenuItems.slice(-1).map((item) => (
          <Link
            key={item.id}
            href={item.route}
            style={{ textDecoration: "none", color: "#313131" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "info.main" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{ color: "info.main" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;

export const sidebarMenuItems = [
  {
    id: 1,
    label: "Orders",
    icon: <LocalMallIcon />,
    route: "/backoffice/orders",
  },
  {
    id: 2,
    label: "Teams",
    icon: <CategoryIcon />,
    route: "/backoffice/teams",
  },
  {
    id: 3,
    label: "Products",
    icon: <LocalDiningIcon />,
    route: "/backoffice/products",
  },
  {
    id: 4,
    label: "Product Types",
    icon: <ClassIcon />,
    route: "/backoffice/addon-categories",
  },
  {
    id: 5,
    label: "Addons",
    icon: <EggIcon />,
    route: "/backoffice/addons",
  },
  {
    id: 6,
    label: "Internation Teams",
    icon: <TableBarIcon />,
    route: "/backoffice/tables",
  },
  {
    id: 7,
    label: "Settings",
    icon: <SettingsIcon />,
    route: "/backoffice/settings",
  },
];
