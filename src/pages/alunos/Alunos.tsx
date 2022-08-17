
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { adicionar, limpar } from '../../store/modules/alunos/AlunoSlice';
import { addOne } from '../../store/modules/books/BooksSlice';
import {AlunoType, AlunosType} from './types';

const Alunos: React.FC = () => {

const [listaAlunos, setListaAlunos] = useState<AlunosType>([]);
const [nome, setNome] = useState<string>("");
const [idade, setIdade] = useState<string>("");
const [matricula, setMatricula] = useState<string>("");

const dispatch = useAppDispatch();



const [open, setOpen] = React.useState(false);

  const abrirModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispararMinhaAction = ( ) => dispatch(adicionar("Mudou agora é Matheus"));
  

  const dispararLimpar = () => {
    dispatch(limpar());
    console.log("limpu o estado...");
  };

  function salvarNomeNoRedux() {
    dispatch(adicionar(nome));
    dispatch(addOne({title: "Livro da Maira", uid: "ksjdhfkjsdhf"}));
  }

function cadastrarAluno() {
  const aluno:AlunoType = {
    nome: nome,
    idade: Number(idade),
    matricula: Number(matricula),
    aprovado: false
  }

  setListaAlunos([...listaAlunos, aluno]);

  setNome("");
  setMatricula("");
  setIdade("");
}

  return (
    <React.Fragment>
      <Typography variant='h3'>Alunos - Total {listaAlunos.length}</Typography>
      <Button onClick={abrirModal} variant='outlined'>Cadastrar</Button>
      <Button onClick={dispararMinhaAction} variant='outlined'>Disparar</Button>
      <Button onClick={dispararLimpar} variant='outlined'>Limpar</Button>

      {listaAlunos.map(item => {
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
  );
};

export default Alunos;