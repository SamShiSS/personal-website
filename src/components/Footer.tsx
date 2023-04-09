import { Typography } from "@mui/material";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Typography
      variant="subtitle1"
      style={{
        textAlign: "center",
        marginTop: "1rem",
      }}
    >
      © {currentYear} Sam Shi – Created with{" "}
      <a
        href="https://react.dev"
        target="_blank"
        style={{ verticalAlign: "middle" }}
      >
        <img src="/react.svg" height={18} width={18} />
      </a>
    </Typography>
  );
}

export default Footer;
