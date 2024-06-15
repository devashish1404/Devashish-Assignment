import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";
import PieChartIcon from "@mui/icons-material/PieChart";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import WalletIcon from "@mui/icons-material/Wallet";
import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
import DashPage from "../NavBar/DashPage";

const drawerWidth = 180;

const items = [
  {
    text: "Home",
    icon: <HomeOutlinedIcon />,
  },
  {
    text: "Graph",
    icon: <EqualizerIcon />,
  },
  { text: "Pie Chart", icon: <PieChartIcon /> },
  {
    text: "File Explorer",
    icon: <WalletIcon />,
  },
];

const items1 = [
  {
    text: "Accounts",
    icon: <PersonIcon />,
  },
  {
    text: "Setting",
    icon: <SettingsIcon />,
  },
  { text: "Logout", icon: <LogoutIcon /> },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#393535",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: "#393535",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: "transparent",
  boxShadow: "none",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  // background: "#80808052",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/*****AppBar start ********/}
      <AppBar position="absolute" open={open}>
        <Toolbar>
          <IconButton
            sx={{
              marginRight: 5,
              // ...(open && { display: "none" }),
              visibility: "hidden",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: { md: "2rem", sm: "1rem" } }}>
              ALDENAIRE & PARTNERS
            </Typography>
            <Typography sx={{ textAlign: "left" }}>
              <span>Sales Management Dashboard</span>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <InputBase
              placeholder="Search here"
              inputProps={{ "aria-label": "search" }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon color="inherit" />
                </InputAdornment>
              }
              sx={{
                backgroundColor: "lightgray",
                borderRadius: "10px",
                padding: "5px 10px",
                marginRight: "20px",
                display: { md: "flex", sm: "none", xs: "none" },
              }}
            />
            <IconButton
              color="inherit"
              sx={{
                width: "50px",
                height: "40px",
                border: "none",
                borderRadius: "10px",
              }}
            >
              <NotificationsActiveIcon />
            </IconButton>
            &nbsp;&nbsp;
            <IconButton
              color="inherit"
              onClick={handleDrawerOpen}
              sx={{
                width: "50px",
                height: "40px",
                border: "1px solid black",
                borderRadius: "10px",
                background:
                  "linear-gradient(to right, rgb(164 63 177), rgb(56 103 175))",
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/****AppBar End***********/}

      {/****Drawer start *******/}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <MenuOpenIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {items.map((item, index) => (
            <ListItemButton key={index} activeClassName="active">
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: "white" }} />
            </ListItemButton>
          ))}
        </List>

        <List sx={{ marginTop: "30px" }}>
          {items1.map((item, index) => (
            <ListItemButton key={index} activeClassName="active">
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ color: "white" }} />
            </ListItemButton>
          ))}
        </List>

        <List sx={{ marginTop: "30px" }}>
          <ListItemButton activeClassName="active">
            <ListItemIcon>
              <HelpOutlineIcon sx={{ color: "white" }} />
            </ListItemIcon>

            <ListItemText sx={{ color: "white" }}>HelpLine</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <DashPage />
      </Box>
    </Box>
  );
}
