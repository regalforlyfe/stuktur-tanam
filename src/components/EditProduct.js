import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, productSelectors, updateProducts } from '../features/productSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { Container , FormControl, InputLabel, Input } from '@mui/material';
// import { update } from '../features/productSlice';

const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const product = useSelector((state) => productSelectors.selectById(state,id));

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);

    useEffect(()=>{
        if(product){
            setTitle(product.title);
            setPrice(product.price);
        }
    },[product]);

    // const updateProduct = (e) =>{
    //     e.preventDefault();
    //     dispatch(update({title,price}));
    // }

    const handleUpdate = async(e) =>{
        e.preventDefault();
        await dispatch(updateProducts({id,title,price}));
        navigate('/');
    }
  return (
    <div>
        <Container>
            <h1>Update Product</h1>
            <form onSubmit={handleUpdate}>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel>Title</InputLabel>
                    <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></Input>
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel>Price</InputLabel>
                    <Input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}></Input>
                </FormControl>
                <button variant="contained" color="success">Update</button>
            </form>
        </Container>
    </div>
  )
}

export default EditProduct