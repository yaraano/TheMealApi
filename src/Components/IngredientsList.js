import React from "react";
import {Link} from "react-router-dom";

const IngredientsList = ({ ingredients, searching }) => {
    return (
        <div className={'row'}>
            {
                ingredients.map((ingredient, idx) => (
                    <div className={'col-3'} key={idx}>
                        <div className="box-ingredient">
                            <img src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt=""/>
                            <h4 className={'ingredient'}>
                                <Link to={`/ingredients/${ingredient}`}>
                                    {ingredient}
                                </Link>
                            </h4>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default IngredientsList;
