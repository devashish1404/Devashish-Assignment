import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";

const RecentApp = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: "100%",
        marginTop: "2%",
        background: "#80808052",
      }}
    >
      
      {/*******1st part *****/}
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
            Order Recently
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

      {/**************Table part ********/}
      <Container sx={{ padding: "10px 20px" }}>
        <TableContainer component={Paper} sx={{ background: "none" }}>
          <Table aria-label="simple table">
            <TableHead style={{ textAlign: "left" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>
                  <strong>Stuff</strong>
                </TableCell>
                <TableCell sx={{ color: "white" }}>
                  <strong>Customer</strong>
                </TableCell>
                <TableCell sx={{ color: "white" }}>
                  <strong>Date</strong>
                </TableCell>
                <TableCell sx={{ color: "white" }}>
                  <strong>Price</strong>
                </TableCell>
                <TableCell sx={{ color: "white" }}>
                  <strong>Status</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/*********1st row ****/}
              <TableRow>
                <td style={{ padding: "5px 15px" }}>
                  <strong style={{ color: "white" }}>White Shirts</strong>
                </td>

                <td style={{ padding: "5px 15px", color: "gray" }}>
                  <Typography>Claudia Alves</Typography>
                </td>

                <td style={{ padding: "5px 15px", color: "gray" }}>2/5/2020</td>
                <td style={{ padding: "5px 15px" }}>
                  <Typography sx={{ color: "gray" }}>$500</Typography>
                </td>
                <td style={{ padding: "5px 15px" }}>
                  <Typography sx={{ color: "#14A44D" }}>Success</Typography>
                </td>
              </TableRow>

              {/***********2nd row *****/}
              <TableRow>
                <td style={{ padding: "5px 15px" }}>
                  <strong style={{ color: "white" }}>Black Shirt</strong>
                </td>

                <td style={{ padding: "5px 15px", color: "gray" }}>
                  <Typography>Cahaya Dewi</Typography>
                </td>

                <td style={{ padding: "5px 15px", color: "gray" }}>2/4/2020</td>
                <td style={{ padding: "5px 15px" }}>
                  <Typography sx={{ color: "gray" }}>$500</Typography>
                </td>
                <td style={{ padding: "5px 15px" }}>
                  <Typography sx={{ color: "red" }}>Return</Typography>
                </td>
              </TableRow>

              {/**********3rd row ******/}
              <TableRow>
                <td style={{ padding: "5px 15px" }}>
                  <strong style={{ color: "white" }}>Red Pants</strong>
                </td>

                <td style={{ padding: "5px 15px", color: "gray" }}>
                  <Typography>Olivia Wilson</Typography>
                </td>

                <td style={{ padding: "5px 15px", color: "gray" }}>2/3/2020</td>
                <td style={{ padding: "5px 15px" }}>
                  <Typography sx={{ color: "gray" }}>$500</Typography>
                </td>
                <td style={{ padding: "5px 15px" }}>
                  <Typography sx={{ color: "#14A44D" }}>Success</Typography>
                </td>
              </TableRow>

              {/*********4th row ****/}
              <TableRow>
                <td style={{ padding: "5px 15px" }}>
                  <strong style={{ color: "white" }}>Grey Jacket</strong>
                </td>

                <td style={{ padding: "5px 15px", color: "gray" }}>
                  <Typography>Claudia Alves</Typography>
                </td>

                <td style={{ padding: "5px 15px", color: "gray" }}>2/2/2020</td>
                <td style={{ padding: "5px 15px" }}>
                  <Typography sx={{ color: "gray" }}>$500</Typography>
                </td>
                <td style={{ padding: "5px 15px" }}>
                  <Typography sx={{ color: "#14A44D" }}>Success</Typography>
                </td>
              </TableRow>

              {/*********5th row ****/}
              <TableRow>
                <td style={{ padding: "5px 15px" }}>
                  <strong style={{ color: "white" }}>White Shirts</strong>
                </td>

                <td style={{ padding: "5px 15px", color: "gray" }}>
                  <Typography>Yael Amari</Typography>
                </td>

                <td style={{ padding: "5px 15px", color: "gray" }}>2/1/2020</td>
                <td style={{ padding: "5px 15px" }}>
                  <Typography sx={{ color: "gray" }}>$500</Typography>
                </td>
                <td style={{ padding: "5px 15px" }}>
                  <Typography sx={{ color: "#14A44D" }}>Success</Typography>
                </td>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      {/* </Box> */}
    </Paper>
  );
};

export default RecentApp;
