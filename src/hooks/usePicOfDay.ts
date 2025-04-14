import { useState, useEffect } from "react";
import { picOfDay } from '../types/picOfDay';

const NASAEndpointUri = process.env.REACT_APP_NASA_API_URL;
const NASAApiKey = process.env.REACT_APP_NASA_API_KEY;

export const usePicOfDay = (date:string) => {
    const [data, setData] = useState<picOfDay | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchPic = async () => {
            setLoading(true);
            setError(null);
            try{
                console.log(`${NASAEndpointUri}?api_key=${NASAApiKey}&date=${date}`);
                const result = await fetch(`${NASAEndpointUri}?api_key=${NASAApiKey}&date=${date}`);                
                const resultJson = await result.json();
                setData(resultJson);
            }
            catch(err){
                setError("Failed to fetch pic of the day! please try againg after some time" + err);
            }
            finally{
                setLoading(false);
            }
        };

        fetchPic();
    }
    , [date]);

    return {data, loading, error};    
};
