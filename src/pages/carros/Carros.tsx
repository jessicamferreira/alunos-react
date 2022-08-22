import { Button, Grid, Typography } from "@mui/material";

import { useAppDispatch } from '../../store/hooks';

import { addCarro, addManyCarros, deleteAll } from '../../store/modules/carros/carrosSlice';



export const Carros = () => {

  const dispatch = useAppDispatch();

  const addCarro1 = () => {
    dispatch(addCarro({marca: "Ford", modelo: "Fusion Titanium", cor: "branco pérola"}));
  }

  const addManyCarros12 = () => {
    const carros = addManyCarros([
      { marca: "Ford", cor: "Vermelho", modelo: "Fiesta" },
      { marca: "Chevrolet", cor: "Branco", modelo: "Onix" },
      { marca: "Ford", cor: "Verde", modelo: "K" },
    ])
  }

  const removeMany = () => {
    const carros = dispatch(deleteAll())
    console.log(carros)
  }

  return(

    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          Carros
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant='outlined' onClick={addCarro1}>Adicionar</Button>
        <Button variant='outlined' onClick={addManyCarros12}>Adicionar vários</Button>
        <Button variant='outlined' onClick={removeMany}>Excluir todos</Button>
      </Grid>
    </Grid>

  )
}
