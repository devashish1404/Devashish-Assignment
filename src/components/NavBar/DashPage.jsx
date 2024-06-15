import FeedIcon from "@mui/icons-material/Feed";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Card, IconButton, Typography, styled, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import * as React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import DashTab from "../NavBar/DashTab";

export default function BasicGrid() {
  const data = [
    {
      name: "Week 1",
      Shirt: 0,
      Pants: 12,
      Jacket: 18,
    },
    {
      name: "Week 2",
      Shirt: 12,
      Pants: 5,
      Jacket: 30,
    },
    {
      name: "Week 3",
      Shirt: 38,
      Pants: 20,
      Jacket: 25,
    },
    {
      name: "Week 4",
      Shirt: 28,
      Pants: 13,
      Jacket: 40,
    },
  ];

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const StyledCard = styled(Grid)(({ theme }) => ({
    padding: "10px 15px",
    margin: "20px",
    border: "1px solid white",
    cursor: "pointer",
    borderRadius: "10px",
    "&:hover": {
      color: "#80808052",
      background: "linear-gradient(to right, rgb(164 63 177), rgb(56 103 175))",
    },
  }));


  return (
    <>
      <Grid>
        <Box sx={{ flexGrow: 1, marginTop: "3%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ height: "100%" }}>
              {/********************************---------------1st Sales Portion----------------**************************/}
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: "#80808052",
                }}
              >
                <Grid
                  container
                  sx={{
                    display: "flex",
                    flexDirection: "row",

                    justifyContent: "center",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={10}
                    sx={{ textAlign: { md: "left", xs: "center" } }}
                  >
                    <strong
                      style={{
                        // fontWeight: "bold",
                        padding: "30px",
                        fontSize: "30px",

                        color: "white",
                      }}
                    >
                      Sales
                    </strong>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{
                      display: { md: "flex", sm: "none", xs: "none" },
                      textAlign: "center",
                    }}
                  >
                    <IconButton
                      size="large"
                      aria-label="display more actions"
                      edge="end"
                      sx={{ color: "white" }}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                  </Grid>
                </Grid>

                {/******Cards **********/}
                <Grid
                  container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <StyledCard item xs={12} sm={4} md={2}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "30px",
                        marginTop: "5px",
                      }}
                    >
                      500
                    </Typography>
                    <Typography sx={{ color: "white" }}>Orders</Typography>
                  </StyledCard>
                  <StyledCard item xs={12} sm={4} md={2}>
                    <Typography sx={{ color: "white", fontSize: "30px" }}>
                      200
                    </Typography>
                    <Typography sx={{ color: "white" }}>Delivered</Typography>
                  </StyledCard>
                  <StyledCard item xs={12} sm={4} md={2}>
                    <Typography sx={{ color: "white", fontSize: "30px" }}>
                      100
                    </Typography>
                    <Typography sx={{ color: "white" }}>Pending</Typography>
                  </StyledCard>
                  <StyledCard item xs={12} sm={4} md={2}>
                    <Typography sx={{ color: "white", fontSize: "30px" }}>
                      500
                    </Typography>
                    <Typography sx={{ color: "white" }}>Packed</Typography>
                  </StyledCard>
                </Grid>
              </Card>

              {/*******************************-------------2nd Table Portion---------------------------****************/}

              <DashTab />
            </Grid>

            <Grid item xs={12} md={6}>
              {/*******************************-------------3rd Graph Portion---------------------------****************/}
              <Item
                sx={{
                  background: "#80808052",
                }}
              >
                <Grid
                  container
                  sx={{
                    display: "flex",
                    flexDirection: "row",

                    justifyContent: "center",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={10}
                    sx={{ textAlign: { md: "left", xs: "center" } }}
                  >
                    <strong
                      style={{
                        // fontWeight: "bold",
                        padding: "30px",
                        fontSize: "25px",

                        color: "white",
                      }}
                    >
                      Monthly Report
                    </strong>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{
                      display: { md: "flex", sm: "none", xs: "none" },
                      textAlign: "center",
                    }}
                  >
                    <IconButton
                      size="large"
                      aria-label="display more actions"
                      edge="end"
                      sx={{ color: "white" }}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                  </Grid>
                </Grid>

                <Grid container justify="center">
                  <Grid item xs={12} sm={10} md={8} lg={6}>
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart width={700} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="name"
                          padding={{ left: 30, right: 30 }}
                        />
                        <YAxis axisLine={false} />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="Shirt"
                          stroke="#8884d8"
                          fill="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="Pants"
                          stroke="#82ca9d"
                          fill="#82ca9d"
                        />
                        <Line
                          type="monotone"
                          dataKey="Jacket"
                          stroke="#000000"
                          fill="#000000"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Grid>
                </Grid>
              </Item>

              {/***************************************-------------4th Review Portion--------------------*************************/}
              <Item
                style={{
                  marginTop: "2%",
                  background:
                    "linear-gradient(to right, rgb(164 63 177), rgb(56 103 175))",
                }}
              >
                <Grid
                  container
                  sx={{
                    display: "flex",
                    flexDirection: "row",

                    justifyContent: "center",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={10}
                    sx={{ textAlign: { md: "left", xs: "center" } }}
                  >
                    <strong
                      style={{
                        // fontWeight: "bold",
                        padding: "30px",
                        fontSize: "30px",

                        color: "white",
                      }}
                    >
                      Review
                    </strong>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{
                      display: { md: "flex", sm: "none", xs: "none" },
                      textAlign: "center",
                    }}
                  >
                    <IconButton
                      size="large"
                      aria-label="display more actions"
                      edge="end"
                      sx={{ color: "white" }}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                  }}
                >
                  {/***** icon-box *****/}
                  <Box
                    sx={{
                      height: "70px",
                      width: "70px",
                      backgroundColor: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "20%",
                    }}
                  >
                    <FeedIcon
                      sx={{ color: "yellow", height: "45px", width: "45px" }}
                    />
                  </Box>

                  <Box
                    sx={{
                      marginLeft: "10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: 1,
                    }}
                  >
                    <Typography sx={{ color: "white" }}>
                      <strong>Claudia Alves</strong>
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "white" }}>
                      Customer since 2019
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      marginLeft: "10px",
                      flex: 2,
                      color: "white",
                    }}
                  >
                    <Typography>
                      Thank you for delivering{" "}
                      <span>exceptional service and on</span>{" "}
                      <span>outstanding final product!</span>
                    </Typography>
                  </Box>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}
