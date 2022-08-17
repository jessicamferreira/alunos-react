import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useAppDispatch } from '../../store/hooks';
import { updateOne } from '../../store/modules/items/ItemsSlice';

interface ItemListProps {
  uid: string;
  item: string;
  checked: boolean;
}
const ItemList: React.FC<ItemListProps> = ({ uid, item, checked }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(updateOne({ id: uid, changes: { checked: !checked } }));
  };

  return (
    <Paper elevation={3} onClick={handleClick} className="my-2 p-2">
      {!checked && (
        <Typography variant="h4" className="cursor-pointer">
          {item}
        </Typography>
      )}
      {checked && (
        <Typography variant="h4" className="line-through cursor-pointer">
          {item}
        </Typography>
      )}
    </Paper>
  );
};

export default ItemList;
