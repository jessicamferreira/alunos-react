import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Produtos from './types/produtos';
import Produto from './types/produto';

export const Products: React.FC = () =>{

  const [listaDeProdutos, setListaDeProdutos] = useState<Produtos>([])

  const [codigoProduto, setCodigoProduto] = useState<string>("");
  const [nomeProduto, setNomeProduto] = useState<string>("");
  const [descricaoProduto, setDescricaoProduto] = useState<string>("");
  const [nomeMarcaProduto, setMarcaProduto] = useState<string>("");
  const [nomePrecoProduto, setPrecoProduto] = useState<string>("");

  const [open, setOpen] = React.useState(false);

  const abrirModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function CadastrarProduto(){
    const estoque: Produto = {
      nome: nomeProduto,
      codigo: codigoProduto,
      descricao: descricaoProduto,
      marca: nomeMarcaProduto,
      preco: nomePrecoProduto,
    } 

    setListaDeProdutos([...listaDeProdutos, estoque]);
  }

  return(
    <React.Fragment>
    <Typography variant='h3'>Produtos {}</Typography>
    <Button  variant='outlined' onClick={abrirModal}>Cadastrar</Button>
    <Button  variant='outlined'>Disparar</Button>
    <Button  variant='outlined'>Limpar</Button>
 
    {listaDeProdutos.map(item => {
      return (
        <div key={item.codigo} className="mt-5">
          <Typography>Nome: {item.nome}</Typography>
          <Typography>Descrição {item.descricao}</Typography>
          <Typography>Preço: {item.preco}</Typography>
          <Typography>Código: {item.codigo}</Typography>
          <Typography>Marca: {item.marca}</Typography>
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
            <TextField value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} label="Digite o nome" fullWidth color="secondary" focused />
          </Grid>
          <Grid item xs={12}>
            <TextField value={descricaoProduto} onChange={(e) => setDescricaoProduto(e.target.value)} label="Descricao" fullWidth color="secondary" />
          </Grid>
          <Grid item xs={12}>
            <TextField value={nomeMarcaProduto} onChange={(e) => setMarcaProduto(e.target.value)} label="Marca" fullWidth color="secondary" />
          </Grid>
          <Grid item xs={12}>
            <TextField value={nomePrecoProduto} onChange={(e) => setPrecoProduto(e.target.value)} label="Preço" fullWidth color="secondary" />
          </Grid>
          <Grid item xs={12}>
            <TextField value={codigoProduto} onChange={(e) => setCodigoProduto(e.target.value)} label="Código" fullWidth color="secondary" />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button variant='contained' onClick={()=> CadastrarProduto()}>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  </React.Fragment>
  


  )


}