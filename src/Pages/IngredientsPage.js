import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import MealList from "../Components/MealList";
import {useParams} from "react-router-dom";

const IngredientsPage = () => {
    const {name} = useParams()
    const [ingredient, setIngredient] = useState([])

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(({data}) => {
                setIngredient(data.meals || [])
            })
    }, [name])

    return (
        <div>
            <div className={"header"}>
                <Header />
            </div>
            <div className={"container"}>
                <div className="row">
                    <div className="col-6">
                        <h4>{name}</h4>
                        <img src={`https://www.themealdb.com/images/ingredients/${name}.png`} alt=""/>
                    </div>
                    <div className="col-6">
                        <div className="box">
                            <MealList meals={ingredient} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IngredientsPage;
