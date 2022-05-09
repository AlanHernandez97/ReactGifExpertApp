import { useEffect, useState } from "react";
import{getGifs} from '../helpers/GetGifs';


export const useFetchGifs = (category) =>{
    const [first, setfirst] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        getGifs(category)
           .then(img=>{
                setfirst({
                     data: img,
                     loading: false
                });
            });
    }, [category]);

    return first; //{data: [], loading: true};
}

