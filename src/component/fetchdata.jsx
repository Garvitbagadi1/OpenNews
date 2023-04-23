import  React, {useEffect, useState } from "react";
import axios from "axios";
const Fetchdata = ({cat}) =>{
    const [data,setdata]=useState("");
    const Fetchdata = async () => {
        await axios
        .get(
            cat?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=c6a37c8cbf51410eaadae77d58a12661`
            :
            "https://newsapi.org/v2/top-headlines?country=in&apiKey=c6a37c8cbf51410eaadae77d58a12661")
        .then((res) => setdata(res.data.articles));
    };
    useEffect(()=>{
        Fetchdata();
    },[cat]);
    return (
        <div className="container my-5">
        <h2>
            <i>BREAKING NEWS</i>
            </h2>
            <div className="container d-column justify-content-center align-items-center felx-column my-3" style={{minHeight:"100vh"}}>
                {data ? data.map((items,index)=><>
                <div className="container my-4" style={{width:"100%",borderRadius:"5px 5px 30px 5px",boxShadow:"5px 5px 5px 5px silver"}}>
                    <h5>{items.title}</h5>
                    <img src={items.urlToImage}alt="Image not found"className="img-fluid container "/>
                    <p>{items.content}</p>
                    <a href={items.url} target="blank" style={{padding:"8px",backgroundColor:"rgb(175,215,251)",color:"white",textDecoration:"none"}}>View more</a>
                    </div>
                    </>):<h1 style={{textAlign:"center",color:"red"}}>"loading...."</h1>}
            </div>
    </div>
    );
};
export default Fetchdata;
