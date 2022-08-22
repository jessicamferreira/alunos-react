import { Button, Grid, Typography } from "@mui/material"

export const Carros: React.FC = () => {
  return(
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          Carros
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant='outlined'>Adicionar</Button>
        <Button variant='outlined'>Adicionar vários</Button>
        <Button variant='outlined'>Excluir todos</Button>
      </Grid>
    </Grid>
  )
}