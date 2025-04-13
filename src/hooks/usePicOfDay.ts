import { useState, useEffect } from "react";
import { picOfDay } from '../types/picOfDay';

export const usePicOfDay = (date:string) => {
    const [data, setData] = useState<picOfDay | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchPic = async () => {
            setLoading(true);
            setError(null);
            try{
                const result = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`);                
                const resultJson = await result.json();
                setData(resultJson);
            }
            catch(err){
                setError("Failed to fetch pic of the day! please try againg after some time");
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
