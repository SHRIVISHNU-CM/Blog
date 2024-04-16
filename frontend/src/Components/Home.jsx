import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../Context/UserContext";
import axios from "axios";
import NavBar from "./NavBar"
import ReactHtmlParser  from "react-html-parser"

function Home() {
    const { name, ID } = useContext(LoginContext)
    const [data, setdata] = useState([])
    const [dataOne, setdataOne] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3001/api/create')
            .then((res) => {
                console.log(res)
                setdata(res.data)
            })
        axios.get(`http://localhost:3001/api/find/${ID}`)
            .then((res) => {
                setdataOne(res.data.notes)
                console.log(res.data)

            })

    }, [])
   
    

    return (
        <>
            <NavBar/>
            <h1 className="card-title">{ID}</h1>
            
            {
                data.map((el, i) => {
                    return (
                        <div key={i} className="card shadow-xl w-full bg-base-100  border my-10">
                            <div className="card-body">
                                <h1 className="card-title uppercase">{el.name}</h1>
                                {el.notes.map(Data => {
                                    return (
                                        <div key={Data.id} className="card w-full">
                                            <p><span className="font-semibold :">Title</span>: {Data.sub}</p>
                                            <h1><span className="font-semibold" >Notes</span>: {ReactHtmlParser(Data.head)}</h1>

                                            {/* <Link className="btn btn-success" to={`/edit/${Data._id}`}>Edit</Link> */}
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