import React, {useState} from 'react';
import {ResultCard} from "./ResultCard.jsx";

export const Add = ()=>{

    const [srchqry, setSrchqry]=useState("");
    const [arr,setArr]=useState([]);
    const [nofr,setNofr]=useState(0);
    // nofr is no of results

    

    const querychanger= (e)=>{
        e.preventDefault(); 
        setSrchqry(e.target.value); 
        
        

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=d27ff689a662f0494a5f0d9b748b3e29&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then( (res)=>res.json())
        .then ( (data)=>{
            console.log(data);

            if(!data.errors)
            {   setArr(data.results);  setNofr(data.total_results);   }
            else
            {   setArr([]); }
        } );
    };

    return (

        <div className="add-page">
            <div className="container">
            <div className="add-content">
                

                <div className="input-wrapper">
                   
                    <input type="text" placeholder="Search movie name" 
                    value={srchqry}
                    // onChange={ (e)=>{e.preventDefault(); setSrchqry(e.target.value); } }
                    onChange={querychanger}   
                    />
                </div>

                <div className="nofrbox">
                    { 
                        
                        (srchqry!=="" && 
                        <div className="nofr"> Total {nofr} results </div> 
                        )
                    }    
                </div>

                        
                {arr.length>0 &&  (

                       <ul className="results">
                           { arr.map( (movie)=> 
                           <li key={movie.id}>
                                <ResultCard movie={movie} />    
                            </li> )  
                           }
                       </ul> 

                )}
                
            </div>
            </div>
        </div>

    );


}