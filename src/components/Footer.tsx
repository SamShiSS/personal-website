import { Typography } from "@mui/material";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Typography
      variant="subtitle1"
      style={{
        position: "absolute",
        left: "0",
        bottom: "10px",
        width: "100%",
        textAlign: "center",
      }}
    >
      © {currentYear} Sam Shi – Created with{" "}
      <a
        href="https://react.dev"
        target="_blank"
        style={{ verticalAlign: "middle" }}
      >
        <img src="react.svg" height={18} width={18} />
      </a>
    </Typography>
  );
}

export default Footer;
