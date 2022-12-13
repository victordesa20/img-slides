import Carousel from "react-material-ui-carousel";
import Container from "@mui/system/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const imagens = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1660314002642-77bbfe3e9b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    title: "Trilha na Montanha",
    description:
      "Loren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1500579886065-5a7705cbf1f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    title: "Escalada",
    description:
      "Loren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqew sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqew",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600757490188-1eb2bab4cf4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=559&q=80",
    title: "Cavalgada",
    description:
      "Loren akjajkadjklaklsajhasdbjkwqeqwegyas sakl dqjhid akdq d ajdqdjka qaqquy  qwjhuqwejuhqwuiwqe quiqweqew",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1664223987460-e5fd70a455ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    title: "Trilha na Floresta",
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
        flexWrap="wrap"
        alignContent="center"
        alignItems="flex-start"
        justifyContent="space-between"
        sx={{ width: "100%", height: "90vh" }}
      >
        <Box
          sx={{
            width: "40vw",
            height: "90vh",
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
            marginTop: "10rem",
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
