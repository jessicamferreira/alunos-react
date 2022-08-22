import { Button, Grid, Typography } from "@mui/material";
import { useAppDispatch } from '../../store/hooks';
import { addCarro } from '../../store/modules/carros/carrosSlice';
export const Carros = () => {
  const dispatch = useAppDispatch();
  const addCarro1 = () => {
    dispatch(addCarro({marca: "Ford", modelo: "Fusion Titanium", cor: "branco pérola"}));
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
        <Button variant='outlined'>Adicionar vários</Button>
        <Button variant='outlined'>Excluir todos</Button>
      </Grid>
    </Grid>
  )
}