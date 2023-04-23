import React, {FC, useState} from 'react';
import './App.css';
import {AddPizzaForm} from "./components/AddPizzaForm";
import {Pizza} from "./models/Pizza";
import {DisplayPizzas} from "./components/DisplayPizzas";


const App: FC = () => {
    const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

    const addPizza = (newPizza: Pizza) => {
        setPizzasList([...pizzasList, newPizza]);
    }

    const updatePizza = (newPizza: Pizza) => {
        setPizzasList(pizzasList.map((pizza) =>
            (pizza.id === newPizza.id ? newPizza : pizza)));
    }

    const deletePizza = (id: number) => {
        const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id)
        setPizzasList(newPizzasList)
    }

    console.log('PizzasList>>> ', pizzasList)
    return (
        <div className="App">
            <div className='wrap'>
                <div>
                    <img className='logo' src="https://vsememy.ru/kartinki/wp-content/uploads/2023/03/1643629520_31-papik-pro-p-pitstsa-logotip-32.png" alt="Logo of pizzeria"/>
                </div>
                <AddPizzaForm addPizza={addPizza}/>
                <DisplayPizzas pizzasList={pizzasList}
                               updatePizza={updatePizza}
                               deletePizza={deletePizza}/>
            </div>
        </div>
    );
}

export default App;
