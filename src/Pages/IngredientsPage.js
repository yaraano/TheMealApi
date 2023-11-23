import React, {useEffect} from "react";
import axios from "axios";

const IngridientsPage = () =>  {
    useEffect( () => {
        axios('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
            .then(({data}) => console.log(data))
    }, [])
}

export default IngridientsPage