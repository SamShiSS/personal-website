import { Box, Tab, Tabs } from "@mui/material";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

interface LinkTabProps {
  label: string;
  to: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Link to={props.to} style={{ textDecoration: "inherit" }}>
      <Tab label={props.label} />
    </Link>
  );
}

function NavigationBar() {
  const location = useLocation();
  let value: number;
  switch (location.pathname) {
    case "/":
    case "/home":
    default:
      value = 0;
      break;
    case "/tech":
      value = 1;
      break;
    case "/research":
      value = 2;
      break;
    case "/running":
      value = 3;
      break;
    case "/contact":
      value = 4;
      break;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} aria-label="top nav bar">
        <LinkTab to="/home" label="Home" />
        <LinkTab to="/tech" label="Tech" />
        <LinkTab to="/research" label="Research" />
        <LinkTab to="/running" label="Running" />
        <LinkTab to="/contact" label="Contact" />
      </Tabs>
    </Box>
  );
}

export default NavigationBar;
