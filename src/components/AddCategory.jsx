import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const  onInputChnage = ( {target} ) => setinputValue( target.value )
    
    const  onSumit = ( event ) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;
        
        onNewCategory( inputValue.trim() )

        setinputValue('');
    }

    return (
        
        <form 
            onSubmit={ onSumit }
        >
            <input 
                type='text'
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onInputChnage }
            />

        </form>
        
    )
}
