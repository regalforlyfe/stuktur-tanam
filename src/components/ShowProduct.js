import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, productSelectors, deleteProducts } from '../features/productSlice';
import { Link } from 'react-router-dom';
import { Button, Table, TableBody, TableHead, TableRow, TableCell, Paper, TableContainer, Container } from '@mui/material';

const ShowProduct = () => {
    // const {title, price} = useSelector(state => state.product);

    const dispatch = useDispatch();
    const products = useSelector(productSelectors.selectAll);

    useEffect(() =>{
      dispatch(getProducts());
    }, [dispatch]);

  return (
    <div>
      <Container>
        <Link to="add"><Button variant="contained">Add New</Button></Link>
        <Link to="list-buku"><Button variant="contained">Buku</Button></Link>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={product.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <Link to={`edit/${product.id}`}><Button variant="contained" color="info">Edit</Button></Link>
                    <Button variant="contained" color="error" onClick={() => dispatch(deleteProducts(product.id))}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}

export default ShowProduct