import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addOne, selectAll } from '../../store/modules/items/ItemsSlice';

const Home: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item spacing={2} container xs={12}>
        Hello world!
      </Grid>
    </Grid>
  );
};

export default Home;
