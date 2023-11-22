import React from "react";
const Ingredients = ({ meal, searching }) => {
    // Проверяем, что searching равно true
    if (!searching) {
        return null; // Если searching не true, возвращаем null, чтобы компонент ничего не отобразил
    }

    const ingredientImageUrl1 = `https://www.themealdb.com/images/ingredients/${meal?.strIngredient1}.png`;
    const ingredientImageUrl2 = `https://www.themealdb.com/images/ingredients/${meal?.strIngredient2}.png`;
    const ingredientImageUrl3 = `https://www.themealdb.com/images/ingredients/${meal?.strIngredient3}.png`;
    const ingredientImageUrl4 = `https://www.themealdb.com/images/ingredients/${meal?.strIngredient4}.png`;

    return (
        <div className={'row'}>
            <div className={'col-6'}>
                <img src={ingredientImageUrl1} alt={`Image of ${meal?.strIngredient1}`} />
                <h4>{meal?.strIngredient1}</h4>
            </div>
            <div className={'col-6'}>
                <img src={ingredientImageUrl2} alt={`Image of ${meal?.strIngredient2}`} />
                <h4>{meal?.strIngredient2}</h4>
            </div>
            <div className={'col-6'}>
                <img src={ingredientImageUrl3} alt={`Image of ${meal?.strIngredient3}`} />
                <h4>{meal?.strIngredient3}</h4>
            </div>
            <div className={'col-6'}>
                <img src={ingredientImageUrl4} alt={`Image of ${meal?.strIngredient4}`} />
                <h4>{meal?.strIngredient4}</h4>
            </div>
        </div>
    );
}

export default Ingredients;
