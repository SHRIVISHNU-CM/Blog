import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../Context/UserContext";
import axios from "axios";
import NavBar from "./NavBar"
import ReactHtmlParser from "react-html-parser"

function Home() {
    const [data, setdata] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001/api/create')

            .then((res) => {
                console.log(res)
                setdata(res.data)
            })
            .catch((e) => {
                setError(true)
            })

    }, [])



    return (
        <>
            <NavBar />
            {
                error ?
                    <div className='card justify-center'>
                        <div className='card-body'>
                            <h1 className='card-title'>Error</h1>
                            <Link to={'/'} className='btn text-white bg-gray-500 w-36'>Go To Login</Link>

                        </div>

                    </div> :
                    data.map((el, i) => {
                        return (
                            <div key={el._id} className="card shadow-xl mx-3 bg-base-100  my-10">
                                <div className="card-body">
                                    <h1 className="card-title uppercase">{el.name}</h1>
                                    {el.notes.map(Data => {
                                        return (
                                            <div key={Data.id} className="px-4 py-2 bg-base-200 w-full rounded-md">
                                                <p><span className="font-semibold :">Title</span>: {Data.sub}</p>
                                                <p><span className="font-semibold" >Notes</span>: {ReactHtmlParser(Data.head)}</p>
                                            </div>
                                        )

                                    })}

                                </div>

                            </div>


                        )
                    })
            }

        </>
    )
}
export default Home;