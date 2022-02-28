import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const AboutUs: React.FC = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        minHeight: 600,
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          mt: 1,
          ml: { xs: 5, xl: 0 },
          mr: { xs: 5, md: 0 },
          textAlign: { xs: "center", md: "initial" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#565656",
            mt: { xs: 5, md: 0 },
          }}
        >
          What is Lyfcare?
        </Typography>
        <Typography variant="body1" mt={3} sx={{ color: "#565656" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          mt: { xs: 3, md: 1 },
          mb: { xs: 5, md: 0 },
          justifyContent: "center",
        }}
      >
        <img
          style={{
            backgroundRepeat: "no-repeat",
            objectFit: "fill",
          }}
          src="phone.svg"
          alt="lyfcare app"
          height="500px"
        ></img>
      </Box>
    </Container>
  );
};

export default AboutUs;
