import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const MainPanel: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: "flex", position: "relative" }}>
        <img
          style={{
            backgroundRepeat: "no-repeat",
            opacity: "0.8",
            objectFit: "cover",
            position: "relative",
          }}
          src="background.jpg"
          alt="elderly poeple"
          width="100%"
          height="450px"
        ></img>
        <Box
          sx={{
            position: "absolute",
            width: "50%",
            left: 209,
            top: 155,
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" color="white" fontWeight={"bold"}>
            Helping you care for the <br></br> lives that matter the most.
          </Typography>
          <Typography variant="caption" color="white" mt={2}>
            A simple app that allows you to care for your loved ones <br></br>
            and manage care on one device.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8273e8",
              width: "150px",
              marginTop: 2,
              boxShadow: "none",
            }}
            size="small"
          >
            LEARN MORE
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MainPanel;
