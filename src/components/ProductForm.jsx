/* eslint-disable react/prop-types */

import { useReducer, useRef } from 'react';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'setDescription':
            return { ...state, description: action.value };
        case 'setPrice':
            return { ...state, price: action.value };
        case 'setName':
            return { ...state, name: action.value };
        case 'reset':
            return { name: '', description: '', price: '' };
        default:
            return state;
    }
};

function ProductForm({ onAddProduct }) {
    const [state, dispatch] = useReducer(formReducer, {
        name: '',
        description: '',
        price: ''
    });

    const nameInput = useRef(null);

    const addProduct = (e) => {
        e.preventDefault();
        const { name, description, price } = state;
        onAddProduct({ name, description, price });
        dispatch({ type: 'reset' });
        nameInput.current.focus();
    };

    return (
        <div className='divFirstSection'>
            <h2>Ajout d un produit</h2>
            <form onSubmit={addProduct}>
                <div>
                    <label>Nom :</label>
                    <input type="text" value={state.name} onChange={(e) => dispatch({ type: 'setName', value: e.target.value })} ref={nameInput} required/>
                </div>
                <div>
                    <label>Description :</label>
                    <textarea value={state.description} onChange={(e) => dispatch({ type: 'setDescription', value: e.target.value })} ></textarea>
                </div>
                <div>
                    <label>Prix (en €) :</label>
                    <input type="number" step="0.01" value={state.price} onChange={(e) => dispatch({ type: 'setPrice', value: e.target.value })} required/>
                </div>
                <div>
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;
