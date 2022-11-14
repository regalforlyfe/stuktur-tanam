import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { saveProducts } from '../features/productSlice';
import { useNavigate } from 'react-router-dom';
import { Container , FormControl, InputLabel, Input} from '@mui/material';
// import { update } from '../features/productSlice';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const updateProduct = (e) =>{
    //     e.preventDefault();
    //     dispatch(update({title,price}));
    // \\\}

    const createProduct = async(e) =>{
        e.preventDefault();
        await dispatch(saveProducts({title,price}));
        navigate('/');
    }

  return (
    <div>
        <Container>
            <h1>Add New Product</h1>
            <form onSubmit={createProduct}>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel>Title</InputLabel>
                    <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></Input>
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel>Price</InputLabel>
                    <Input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}></Input>
                </FormControl>
                <button variant="contained" color="success">Submit</button>
            </form>
        </Container>
    </div>
  )
}

export default AddProduct