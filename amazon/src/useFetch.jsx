import { useState , useEffect } from "react";

function useFetch (url){
    cosnt [Data ,setData] = useState([]); 
    cosnt [Loading , setLoading] = useState(true);
    useEffect(()=>{
        fetch(url).then((res)=>{
          return res.json(); 
        }).then((data)=>{
          setData(data);
          setLoading(true);
        });
    },[url]);

    return [ Data , Loading ];

}

export default useFetch;

