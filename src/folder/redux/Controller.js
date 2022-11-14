import React from 'react';
import { setListBuku } from "./Action";


const getData = (dispatch,buku) => {
	dispatch(setListBuku(buku));
};

const Controller = {
    getData
};

export default Controller;