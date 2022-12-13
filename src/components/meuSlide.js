import React, { Component } from "react";
import Container from "@mui/system/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
// import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import { Typography } from "@mui/material";
// import Pagination from "@mui/material/Pagination";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const imagens = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1578545565737-22fb1162448f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=576&q=80",
    title: "Trilha na Montanha",
    description:
      "Loren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1614213704713-9c3afa035941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=547&q=80",
    title: "Ciclismo",
    description:
      "Loren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqew sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqew",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1626745844804-bf833f5838e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    title: "Comidas tipicas",
    description:
      "Loren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqew",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1606385077626-79ab87df3ba1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=532&q=80",
    title: "Batata",
    description:
      "Loren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqew qwjhuqwejuhqwuiwqe quiqweqew Loren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqew",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1578545565737-22fb1162448f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=576&q=80",
    title: "Batata",
    description:
      "Loren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqew qwjhuqwejuhqwuiwqe quiqweqew Loren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqew",
  },
];

function Item() {
  return (
    <ImageList
      gap={20}
      sx={{
        display: "flex",
        margin: 0,
        rowHeight: "200",
        gridAutoFlow: "column",
        overflowX: "auto",
        "&:: -webkit-scrollbar-track": {
          background: "white",
        },
        "&:: -webkit-scrollbar-thumb": {
          background: "green",
        },
      }}
    >
      {imagens.map((item) => (
        <ImageListItem
          sx={{ display: "flex", flexDirection: "row", wrap: "nowrap" }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "500px", height: "100%" }}
          />
          <ImageListItemBar title={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Item;
