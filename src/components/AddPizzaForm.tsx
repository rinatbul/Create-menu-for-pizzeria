import './styles.css';
import {ChangeEvent, FC, FormEvent, useState} from "react";
import {Pizza} from "../models/Pizza";

interface AddPizzaFormProps{
    addPizza:(newPizza:Pizza)=>void
}

const initState = {
    title: '',
    price: '',
    img: ''
}

export const AddPizzaForm: FC<AddPizzaFormProps> = ({addPizza}) => {

    const [newPizza, setNewPizza] =
        useState<{ title: string, price: string, img: string }>(initState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setNewPizza({
            ...newPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {title,price,img} = newPizza;

        if (title && price && img){
            addPizza({
                title,
                img,
                price:Number(price),
                id: Date.now()
            })
            setNewPizza(initState)
        }
    }

    const handleReset = ()=>{
        setNewPizza(initState)
    }

    console.log('new Pizza >> ', newPizza)

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   name='title'
                   placeholder='Fill the title of new pizza'
                   value={newPizza.title}
                   onChange={handleChange}/>
            <input type="number"
                   name='price'
                   placeholder='Fill the price'
                   value={newPizza.price}
                   onChange={handleChange}/>
            <input type=""
                   name='img'
                   placeholder='Enter the name of image with extension'
                   value={newPizza.img}
                   onChange={handleChange}/>
            <button type='submit'>
                + Add to menu
            </button>
            <button className='clear-button'
                    onClick={handleReset}>Clear the form</button>
        </form>
    )
}