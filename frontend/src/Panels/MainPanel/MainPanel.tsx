import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export const buttonStyles = {
  backgroundColor: "#8273e8",
  width: "150px",
  marginTop: 2,
  boxShadow: "none",

  "&:hover": {
    backgroundColor: "#8F7EFF",
    opacity: 0.9,
  },
};

const MainPanel: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        minHeight: 500,
        backgroundImage: "url(background.jpg)",
        backgroundRepeat: "no-repeat",
        opacity: "0.9",
        backgroundSize: { xs: "190% auto", md: "100% auto" },
        backgroundPosition: { xs: "right center", md: "center" },
        margin: "auto",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: { xs: "center", md: "start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box ml={{ xs: 0, md: 5, xl: 0 }} width={{ xs: "90%", md: "40%" }}>
          <Typography
            variant="h4"
            color="white"
            fontWeight={"bold"}
            sx={{
              textShadow: "1px 1px 2px gray",
              fontSize: { xs: 30, md: 35, xl: 40 },
            }}
          >
            Helping you care for the lives that matter the most.
          </Typography>
          <Typography
            variant="subtitle2"
            color="white"
            mt={2}
            sx={{ textShadow: "1px 1px 10px gray" }}
          >
            A simple app that allows you to care for your loved ones <br></br>
            and manage care on one device.
          </Typography>
          <Button
            variant="contained"
            sx={{
              ...buttonStyles,
            }}
            size="small"
          >
            LEARN MORE
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default MainPanel;
