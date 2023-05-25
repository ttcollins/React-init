const products = [
    { id: 1, itemName: 'iPad', price: 200, phone: false },
    { id: 2, itemName: 'iPhone', price: 650, phone: true },
    { id: 3, itemName: 'iPod', price: 275, phone: false },
];

export default function ShoppingList() {
    const listItems = products.map((product) =>
        <li key={product.id} style={{ color: product.phone ? 'black' : 'red' }}>
            {product.itemName} - ${product.price}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}