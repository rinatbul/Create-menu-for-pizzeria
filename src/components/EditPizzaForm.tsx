import './styles.css';
import {ChangeEvent, FC, FormEvent, useState} from "react";
import {Pizza} from "../models/Pizza";

interface EditPizzaFormProps{
    data:Pizza;
    updatePizza: (newPizza:Pizza)=>void
    handleToggleEdit:()=>void
}

export const EditPizzaForm: FC<EditPizzaFormProps> = ({data,updatePizza,handleToggleEdit}) => {

    const [editPizza, setEditPizza] =
        useState<Pizza>(data)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEditPizza({
            ...editPizza,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {title,price,img} = editPizza;

        if (title && price && img){
            updatePizza(editPizza)
            handleToggleEdit()
        }
    }

    console.log('edit Pizza >> ', editPizza)

    return (
        <form className='edit-form' onSubmit={handleSubmit}>
            <input type="text"
                   name='title'
                   placeholder='title'
                   value={editPizza.title}
                   onChange={handleChange}/>
            <input type="text"
                   name='price'
                   placeholder='Price'
                   value={editPizza.price}
                   onChange={handleChange}/>
            <input type="text"
                   name='img'
                   placeholder='Image'
                   value={editPizza.img}
                   onChange={handleChange}/>
            <button type='submit'>
                Confirm
            </button>
        </form>
    )
}