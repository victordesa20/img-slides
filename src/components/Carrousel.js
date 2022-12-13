import Carousel from "react-material-ui-carousel";
import Container from "@mui/system/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { autocompleteClasses } from "@mui/material";

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
      "Loren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqew qwjhuqwejuhqwuiwqe quiqweqew Loren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqewLoren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqew qwjhuqwejuhqwuiwqe quiqweqew Loren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqew",
  },
];

function Carrousel() {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"110vh"}
      alignContent={"center"}
      sx={{ backgroundColor: "red" }}
    >
      <Carousel
        sx={{ width: "100%" }}
        IndicatorIcon={imagens.map((item, indice) => (
          <Typography>{indice + 1}</Typography>
        ))}
        indicatorIconButtonProps={{
          style: {
            padding: "0.5rem",
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: "1rem",
          },
        }}
      >
        {imagens.map((item) => (
          <Item key={item.id} item={item} />
          //arrow function recebe o item do array image e passa como parametro para a função Item
        ))}
      </Carousel>
    </Grid>
  );
}

function Item({ item }) {
  //A função Item recebe o item do carrousel e para cada item dentro do array Image ela retorna um Grid com uma imagem que possui o item.image, item.title para o alt, em seguida um h2 com item.id e o item.title, e por fim um paragrafo com item.description.
  return (
    <Container sx={{ minHeight: "90vh" }}>
      <Grid
        container
        flexDirection="row"
        alignContent="center"
        alignItems="flex-start"
        justifyContent="space-evenly"
        sx={{ width: "100%", maxHeight: "90vh", background: "blue" }}
      >
        <Box
          sx={{
            minWidth: "40vw",
            minHeight: "50vh",
            maxHeight: "90vh",
            background: "green",
            overflow: "hidden",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100%", maxHeight: "100%", display: "block" }}
          />
        </Box>

        <Grid
          container
          flexDirection="column"
          alignContent="center"
          alignItems="flex-start"
          justifyContent="flex-start"
          wrap="nowrap"
          sx={{
            width: "30vw",
            height: "350px",
            background: "white",
            paddingTop: "10rem",
            overflow: "auto",
          }}
        >
          <Typography variant="h1" sx={{ paddingBottom: "3rem" }}>
            {item.id} - {item.title}
          </Typography>
          <Typography variant="h4"> {item.description} </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Carrousel;
