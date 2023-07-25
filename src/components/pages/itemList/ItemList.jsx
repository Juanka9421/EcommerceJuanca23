import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styled from "styled-components";

const ItemList = ({ items }) => {
  console.log("llego el presentacional:", items);
  // console.log({ items });
  return (
    <div>
      <h1>Aca van los productos</h1>
      <div>
        <CardContainer>
          {items.map((elemento) => {
            return (
              <Card key={elemento.id} sx={{ maxWidth: 445 }}>
                <CardMedia
                  component="img"
                  alt="portada"
                  height="640"
                  border="20px"
                  image={elemento.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {elemento.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {elemento.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">agregar al carrito</Button>
                  <Button size="small">ver detalle</Button>
                </CardActions>
              </Card>
            );
          })}
        </CardContainer>
      </div>
    </div>
  );
};

export default ItemList;

const CardContainer = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  background-color: #646477;
  flex-wrap: wrap;

  .css-o69gx8-MuiCardMedia-root {
    color: #240d63;
  }
`;
