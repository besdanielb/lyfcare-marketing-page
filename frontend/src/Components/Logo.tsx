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
        color: "#8273e8",
        cursor: "pointer",
      }}
      onClick={scrollToPanel ? scrollToPanel : undefined}
    >
      Lyfcare
    </Typography>
  );
};

export default Logo;
