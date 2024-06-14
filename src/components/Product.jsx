/* eslint-disable react/prop-types */

function Product({ productList }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Description</th>
                        <th scope="col">Prix</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product, idx) => (
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}€</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Product