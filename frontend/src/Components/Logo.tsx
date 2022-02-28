import Typography from "@mui/material/Typography";

interface Props {
  sx: any;
  scrollToPanel?: (event: any) => void;
}

const Logo: React.FC<Props> = ({ sx, scrollToPanel }) => {
  return (
    <Typography
      id="logo"
      variant="h6"
      noWrap
      component="div"
      sx={{
        ...sx,
        fontWeight: 800,
        background: "linear-gradient(to bottom right, purple, pink)",
        backgroundClip: "text",
        textFillColor: "transparent",
        cursor: "pointer",
      }}
      onClick={scrollToPanel ? scrollToPanel : undefined}
    >
      Lyfcare
    </Typography>
  );
};

export default Logo;
