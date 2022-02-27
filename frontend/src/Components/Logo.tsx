import Typography from "@mui/material/Typography";

const Logo: React.FC<Props> = ({ sx }) => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{
        ...sx,
        fontWeight: 800,
        background: "linear-gradient(to bottom right, purple, pink)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
      }}
    >
      Lyfcare
    </Typography>
  );
};

interface Props {
  sx: any;
}
export default Logo;
