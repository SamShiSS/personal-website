import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid, IconButton, Tab, Tabs } from "@mui/material";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { pages } from "../App";

export const navBarHeight = "48px";

interface LinkTabProps {
  label: string;
  to: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Link to={props.to} style={{ textDecoration: "inherit", color: "initial" }}>
      <Tab label={props.label} style={{ fontWeight: 600 }} />
    </Link>
  );
}

function getActiveTabIndex(path: string): number {
  if (path === "/") {
    return 0;
  }
  return pages.findIndex((page) => page.path === path);
}

function NavigationBar() {
  const location = useLocation();

  return (
    <Grid
      container
      bgcolor="rgb(255, 87, 51)"
      justifyContent="space-between"
      position="fixed"
      paddingX="2rem"
      height={navBarHeight}
    >
      <Tabs
        value={getActiveTabIndex(location.pathname)}
        aria-label="top nav bar"
      >
        {pages.map(({ path, label }) => (
          <LinkTab to={path} label={label} />
        ))}
      </Tabs>
      <div style={{ display: "flex" }}>
        <IconButton href="https://twitter.com/SamShiSS" target="_blank">
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://github.com/SamShiSS" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://linkedin.com/in/SamShiSS" target="_blank">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="mailto:hello@samshi.me">
          <EmailIcon />
        </IconButton>
      </div>
    </Grid>
  );
}

export default NavigationBar;
