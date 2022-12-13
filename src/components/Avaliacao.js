import Carousel from "react-material-ui-carousel";
import Container from "@mui/system/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

const imagens = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    name: "José da Silva",
    title: "Perfeito, maravilhoso!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ut dis aliquam cras ligula pretium, at. Viverra sed non amet tristique in venenatis, etiam dolor. Nullam tellus volutpat orci metus pretium, nunc sed diam.",
    avaliacao: 5,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Maria Fernanda",
    title: "Amei, gostei muito!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ut dis aliquam cras ligula pretium, at. ",
    avaliacao: 4.5,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Lucas Sertão",
    title: "Maneiro, muito legal!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ut dis aliquam cras ligula pretium, at. Viverra sed non amet tristique in venenatis, etiam dolor. Nullam tellus volutpat orci metus pretium, nunc sed diam. ",
    avaliacao: 4.3,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=368&q=80",
    name: "Ana Souza",
    title: "Lugar incrivel!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ut dis aliquam cras ligula pretium, at. Viverra sed non amet tristique in venenatis, etiam dolor. Nullam tellus volutpat orci metus pretium, nunc sed diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ut dis aliquam cras ligula pretium, at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ut dis aliquam cras ligula pretium, at. Viverra sed non amet tristique in venenatis, etiam dolor. Nullam tellus volutpat orci metus pretium, nunc sed diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem ut dis aliquam cras ligula pretium, at.",
    avaliacao: 5,
  },
];

export default function Analise() {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"90vh"}
      alignContent={"center"}
      sx={{ backgroundColor: "#F8F8F8" }}
    >
      <Carousel sx={{ width: "100%" }}>
        {imagens.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
    </Grid>
  );
}

function Item({ item }) {
  return (
    <Container
      sx={{
        height: "50vh",
        overflow: "auto",
      }}
    >
      {/* Parte de cima */}
      <Grid
        container
        alignItems={"center"}
        justifyContent={"flex-start"}
        md={12}
      >
        {/* Foto e nome */}
        <Grid
          container
          flexDirection={"column"}
          alignItems={"center"}
          alignContent={"flex-start"}
          justifyContent={"space-around"}
          sm={2}
        >
          <Grid item>
            <Avatar
              alt={item.name}
              src={item.image}
              sx={{ width: 75, height: 75 }}
              style={{ border: "1px solid #1B3D10" }}
            />
          </Grid>
          <Grid item sx={{ paddingTop: "10px" }}>
            <Typography variant={"subtitle1"}>{item.name}</Typography>
          </Grid>
        </Grid>

        {/* Estrelas e Titulo */}
        <Grid container sm={9}>
          {/* Estrelas */}
          <Grid
            container
            flexDirection={"row"}
            alignItems={"center"}
            columnSpacing={2}
          >
            <Grid item>
              <Rating
                name="read-only"
                value={item.avaliacao}
                precision={0.1}
                readOnly
                size="large"
              />
            </Grid>
            <Grid item>
              <Typography variant={"h4"}>{item.avaliacao}/5</Typography>
            </Grid>
          </Grid>

          {/* Titulo */}
          <Grid container alignItems={"flex-end"}>
            <Typography variant={"h1"}>"{item.title}"</Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Descrição */}
      <Grid container md={12} sx={{ marginTop: "3rem" }}>
        <Typography variant="h2" sx={{ width: "100%", textAlign: "left" }}>
          {item.description}
        </Typography>
      </Grid>
    </Container>
  );
}
