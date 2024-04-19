import React, { useContext, useState } from 'react';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import axios from "axios"
import { LoginContext } from '../Context/UserContext';
import NavBar from './NavBar';

function Add() {
    const [value, setValue] = useState('');
    const [sub, setSub] = useState('')

    const { ID } = useContext(LoginContext)
    const handleChange = (e) => {
        setValue(e)
        console.log(e)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/two', {
            sub: sub,
            head: value,
            author: ID
        })
            .then((res) => {
                console.log(res)
            })
            .catch((e) => console.log(e))
    }
    return (
        <>
            <NavBar />
            <div className='card shadow-md w-full '>
                <form onSubmit={handleSubmit}>
                    <div className='card-body'>

                        <h2 className='card-title'>Subject:</h2>
                        <input
                            type='text'
                            value={sub}
                            onChange={e => setSub(e.target.value)}
                            placeholder='Enter Subject Name'
                            className='input input-bordered input-info w-full'
                        />

                    </div>

                    <div className='card-body'>
                        <h2 className='card-title'>Notes</h2>

                        <ReactQuill theme='snow'
                            className='h-[400px]'
                            value={value}
                            onChange={handleChange}

                        />
                    </div>
                    <div className='card-actions justify-end my-4 mx-2'>
                        <button type='submit' className='btn btn-success'>ADD</button>
                    </div>
                </form>

            </div>

        </>
    )
}

export default Add