import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./Logo";

const Header: React.FC<Props> = ({ scrollToPanel }) => {
  const pages = ["About Lyfcare", "Get on the waitlist"];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(null);
    scrollToPanel(event);
  };

  return (
    <AppBar position="sticky" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ position: "relative" }}>
          <Logo
            scrollToPanel={scrollToPanel}
            sx={{
              mr: 2,
              ml: { xs: 5, xl: 0 },
              display: { xs: "none", md: "flex" },
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" id={page}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo
            scrollToPanel={scrollToPanel}
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              position: "absolute",
              width: "100%",
              margin: "auto",
              justifyContent: "center",
              zIndex: -2,
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { xs: "none", md: "right" },
            }}
          >
            <Button
              id="about-us"
              key={pages[0]}
              onClick={scrollToPanel}
              sx={{ my: 2, ml: 2, color: "black", display: "block" }}
            >
              {pages[0]}
            </Button>
            <Button
              id="waitlist"
              key={pages[1]}
              onClick={scrollToPanel}
              sx={{ my: 2, ml: 2, color: "purple", display: "block" }}
            >
              {pages[1]}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

interface Props {
  scrollToPanel: (event: any) => void;
}
export default Header;
