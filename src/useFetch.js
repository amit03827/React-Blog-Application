import { useEffect, useState } from "react";
const useFetch=(url)=>{


    const [data, setData] = useState(null);
    const [isPending, setPending]=useState(true);
    const [error, setError]=useState(null);

   useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res =>{ 
                if (!res.ok){
                    throw Error("could not be fetch")
                       }
               return res.json();
           
        })
        .then(data =>{
          setData(data)
          setPending(false)
          
          
        }).catch(err =>{
          console.log(err.message)
          setError(err.message)
          setData(null)
        })
        },2000)
       
    },[url])
    return {data, isPending, error}
}

export default useFetch;
