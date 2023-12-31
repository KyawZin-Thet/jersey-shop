import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import International from "./International";
import Leagues from "./Leagues";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ fontWeight: "bold", borderRadius: 3 }}
            label="Home"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontWeight: "bold", borderRadius: 3 }}
            label="Leagues"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontWeight: "bold", borderRadius: 3 }}
            label="International"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ fontWeight: "bold", borderRadius: 3 }}
            label="Entertainment"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Home
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Leagues />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <International />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Entertainment
      </CustomTabPanel>
    </Box>
  );
}
