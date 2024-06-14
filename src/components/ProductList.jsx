/* eslint-disable react/prop-types */
import { useState } from 'react';

function ProductList({ productList, onUpdateProduct, onRemoveProduct }) {
    const [actualIdx, setActualIdx] = useState(null);
    const [newProductName, setNewProductName] = useState('');

    const startEdit = (idx, product) => {
        setActualIdx(idx);
        setNewProductName(product.name);
    };

    const cancelEdit = () => {
        setActualIdx(null);
        setNewProductName('');
    };

    const saveEdit = () => {
        onUpdateProduct(actualIdx, newProductName);
        setActualIdx(null);
    };

    return (
        <div className='divFirstSection'>
            <h2>Liste des Produits</h2>
            <ul>
                {productList.map((product, idx) => (
                    <li key={idx}>
                        {actualIdx === idx ? (
                            <>
                                <p>{idx + 1}.</p>
                                <input
                                    type="text"
                                    value={newProductName}
                                    onChange={(e) => setNewProductName(e.target.value)}
                                />
                                <button onClick={saveEdit}>Enregistrer</button>
                                <button onClick={cancelEdit}>Annuler</button>
                            </>
                        ) : (
                            <>
                                <p>{idx + 1}.</p>
                                <p>{product.name}</p>
                                <button onClick={() => startEdit(idx, product)}>Modifier le produit</button>
                                <button onClick={() => onRemoveProduct(idx)}>Supprimer le produit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;