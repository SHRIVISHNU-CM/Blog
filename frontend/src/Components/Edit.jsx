import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
    const { id } = useParams()
    const [values, SetValues] = useState({
        _id: id,

    })
    const Navigate = useNavigate()
    const UpdateAPI = `http://localhost:3001/api/${id}`
    const GetDetails = `http://localhost:3001/api/usertwo/${id}`
    const DropApi = `http://localhost:3001/api/${id}`

    useEffect(() => {
        axios.get(GetDetails)
            .then((res) => {
                SetValues({
                    ...values,
                    sub: res.data.sub,
                    head: res.data.head
                })

            })
    }, [GetDetails])
    const handleChange = (e) => {

        SetValues({ ...values, head: e })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(UpdateAPI, values)
            .then((res) => {
                console.log("successfully updated", res)
                Navigate('/myblogs')
            })
            .catch((e) => console.log(e))
    }
    const handleDrop = () => {
        axios.delete(DropApi)
            .then(() => {
                console.log("deleted")
                Navigate('/myblogs')

            })
            .catch((e) => console.log(e))
    }

    return (
        <>
            <NavBar />
            <div className='border w-full m-1 h-min'>
                <div className='card'>
                    <form onSubmit={handleUpdate}>
                        <div className='card-body'>


                            <h1 className='card-title'>Title</h1>
                            <input
                                value={values.sub}
                                onChange={e => SetValues({ ...values, sub: e.target.value })}

                                className='input input-bordered input-accent'
                            />
                            <h1 className='card-title'>Notes</h1>
                            <div>
                                <ReactQuill
                                    value={values.head}
                                    onChange={handleChange}
                                    className="h-min"
                                />
                            </div>
                        </div>
                        <div className='card-actions justify-start m-2'>
                            <button type='submit' className='btn btn-secondary'>Update</button>
                            <button className='btn btn-primary' onClick={handleDrop}>Drop</button>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}

export default Edit