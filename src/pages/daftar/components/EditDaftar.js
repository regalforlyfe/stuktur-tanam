import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Action from '../redux/Action'
import { setAddDaftar, setValidateStatus } from '../redux/Reducer'

const EditDaftar = () => {

    const dispatch = useDispatch();
    const addDaftar = useSelector((state) => state.reducer.addDaftar);
    const errorAddDaftar = useSelector((state) => state.reducer.errorAddDaftar);
    const validateStatus = useSelector((state) => state.reducer.validateStatus);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setAddDaftar({ ...addDaftar, [name]: value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch( setValidateStatus(true));
        const isValid = Action.validateStep1(dispatch, addDaftar);
        console.log(addDaftar);
        if(Object.keys(isValid).length === 0) {
            Action.getPage(dispatch, {page: "" } );
        }
    }

    useEffect(() => {
        if (validateStatus === true ) {
            Action.validateStep1(dispatch, addDaftar);
        } 
    }, [addDaftar])

  return (
    <div>
        <form action="">
            <br />
            <h1>Tambah Daftar</h1>
            <label htmlFor="" className='block py-2'>
                <span className=''>
                    ID :
                </span>
                <br />
                <input type="number"
                className='mt-1 border'
                name='id'
                placeholder='ID'
                onChange={handleChange} />
            </label>
            <label htmlFor="" className='block py-2'>
                <span className="block">
                    NAME
                </span>
                <input type="text"
                className='mt-1 border'
                name='name'
                placeholder='Input Your Name'
                onChange={handleChange} />
            </label>
            <label htmlFor="" className='block py-2'>
                <span className='block'>
                    Email
                </span>
                <input type="email"
                className='mt-1 border'
                name='email'
                placeholder='Input Email Here'
                onChange={handleChange} />
            </label>
            <label htmlFor="" className='block py-2'>
                <span className='block'>
                    GENDER
                </span>
                <input type="text"
                className='mt-1 border'
                name='gender'
                placeholder='Input gender Here'
                onChange={handleChange} />
            </label>
            <label htmlFor="" className='block py-2'>
                <span className='block'>
                    Status
                </span>
                <input type="text"
                className='mt-1 border'
                name='status'
                placeholder='Input Status Here'
                onChange={handleChange} />
            </label>
            <button type='submit' name='submit' className='bg-red-500' onClick={handleSubmit}>Add Daftar</button>
        </form>

    </div>

    // <div>
    //     <div>
    //         <div className={`${errorAddDaftar.id ? : " "}`}>
                
    //         </div>
    //         <span className='text-gold-secondary'>*</span>
    //     </div>
    // </div>
    // <div>
    //     <form action=""></form>
    // </div>
  )
}

export default EditDaftar