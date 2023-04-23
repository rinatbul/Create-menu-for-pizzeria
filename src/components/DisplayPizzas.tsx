import {Pizza} from "../models/Pizza";
import {FC} from "react";
import {SinglePizza} from "./SinglePizza";

interface DisplayPizzasProps{
    pizzasList:Pizza[]
    updatePizza:(newPizza:Pizza)=>void
    deletePizza:(id:number)=>void
}

export const DisplayPizzas:FC<DisplayPizzasProps> = ({pizzasList, updatePizza, deletePizza}) => {
    return (
        <div>
            {pizzasList.map((pizza)=>{
                return <SinglePizza key={pizza.id}
                                    pizza={pizza}
                                    updatePizza={updatePizza}
                                    deletePizza={deletePizza}/>
            })}
        </div>
    )
}