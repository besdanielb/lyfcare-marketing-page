import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { buttonStyles } from "../MainPanel/MainPanel";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#8273e8",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#8273e8",
  },
  "& .MuiFilledInput-root": {
    "&:after": {
      borderBottom: "2px solid #8273e8",
    },
  },
});

const Waitlist: React.FC = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fbfbfb",
        height: { xs: 650, md: 500 },
        margin: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          width: { xs: "90%", md: "60%", lg: "40%", xl: "25%" },
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#565656", mt: { xs: 5, md: 0 } }}
        >
          Get on the waitlist
        </Typography>
        <Typography
          variant="body1"
          mt={3}
          mb={3}
          color={"#565656"}
          sx={{ textAlign: "center" }}
        >
          This app is currently in development, so give us your email so we can
          keep you posted in the meantime.
        </Typography>
        <CustomTextField
          id="email"
          label="Your Email Address"
          variant="filled"
          type="email"
          size="small"
          sx={{ width: { xs: "80%", md: "350px" } }}
        />
        <Button
          variant="contained"
          sx={{
            ...buttonStyles,
            mt: 4,
          }}
          size="medium"
        >
          SIGN UP
        </Button>
      </Box>
    </Container>
  );
};

export default Waitlist;
