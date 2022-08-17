import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Produtos from './types/produtos';

export const Produtos: React.FC = () =>{

  const [listaDeProdutos, setListaDeProdutos] = useState<Produtos>([])

  const [codigoProduto, setCodigoProduto] = useState<string>("");
  const [nomeProduto, setNomeProduto] = useState<string>("");
  const [descricoProduto, setDescricaoProduto] = useState<string>("");
  const [nomeMarcaProduto, setMarcaProduto] = useState<string>("");
  const [nomeDepartamentoProduto, setDepartamentoProduto] = useState<string>("");
  const [nomePrecoProduto, setPrecoProduto] = useState<string>("");

  return(
    <React.Fragment>
    <Typography variant='h3'>Produtos {}</Typography>
    <Button  variant='outlined'>Cadastrar</Button>
    <Button  variant='outlined'>Disparar</Button>
    <Button  variant='outlined'>Limpar</Button>
 
    {map(item => {
      return (
        <div key={item.matricula} className="mt-5">
          <Typography>Nome: {item.nome}</Typography>
          <Typography>Idade: {item.idade}</Typography>
          <Typography>Matricula: {item.matricula}</Typography>
        </div>
      )
    })}
     <div>

    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Cadastrar aluno
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Para cadastrar um aluno, utilize o fomrulário abaixo.
        </DialogContentText>
        <Grid container spacing={2} className="mt-5">
          <Grid item xs={12}>
            <TextField value={nome} onChange={(e) => setNome(e.target.value)} label="Digite o nome" fullWidth color="secondary" focused />
          </Grid>
          <Grid item xs={12}>
            <TextField value={idade} onChange={(e) => setIdade(e.target.value)} label="Idade" fullWidth color="secondary" />
          </Grid>
          <Grid item xs={12}>
            <TextField value={matricula} onChange={(e) => setMatricula(e.target.value)} label="Matricula" fullWidth color="secondary" />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button variant='contained' onClick={()=> salvarNomeNoRedux()}>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  </React.Fragment>
  


  )


}