import { Button, Grid, Typography } from "@mui/material";

import { useAppDispatch } from '../../store/hooks';

import { addCarro, addManyCarros, deletarUmCarro, deleteAll, atualizarCarro } from '../../store/modules/carros/carrosSlice';



export const Carros = () => {

  const dispatch = useAppDispatch();

  const addCarro1 = () => {
    dispatch(addCarro({marca: "Ford", modelo: "Fusion Titanium", cor: "branco pérola"}));
  }

  const addManyCarros12 = () => {
    dispatch(addManyCarros([
      { marca: "Ford", cor: "Vermelho", modelo: "Fiesta" },
      { marca: "Chevrolet", cor: "Branco", modelo: "Onix" },
      { marca: "Ford", cor: "Verde", modelo: "K" },
    ]))
  }

  const removeMany = () => {
    const carros = dispatch(deleteAll())
    console.log(carros)
  }

  const removerUmCarroSo = () => {
    dispatch(deletarUmCarro("K"))
  }

  const atualizarUmCarro = () => {
    dispatch(atualizarCarro({ id: "K", changes: { cor: "vermelho", marca: "Chevrolet"}}))
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
        <Button variant='outlined' onClick={removerUmCarroSo}>Excluir um carro</Button>
        <Button variant='outlined' onClick={atualizarUmCarro}>Atualizar um carro</Button>

      </Grid>
    </Grid>

  )
}
