import React from 'react';

const CategoryTable: React.FC = () => {
    const [categories, setCategories] = React.useState([]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [editId, setEditId] = React.useState<string | null>(null);
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [size, setSize] = React.useState('');
    const [color, setColor] = React.useState('');
    const [image, setImage] = React.useState('');
    const [amount, setAmount] = React.useState('');

    const fetchProducts = React.useCallback(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    React.useEffect(() => {
        fetchProducts();

        // Add event listener for the custom event
        window.addEventListener('productAdded', fetchProducts);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('productAdded', fetchProducts);
        };
    }, [fetchProducts]);

    const handleDelete = (id: string) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setCategories(categories.filter(category => category._id !== id));
                } else {
                    console.error('Error deleting product');
                }
            })
            .catch(error => console.error('Error deleting product:', error));
    };

    const openEditar = (product: any) => {
        setEditId(product._id);
        setName(product.name);
        setPrice(product.price);
        setSize(product.size);
        setColor(product.color);
        setImage(product.images);
        setAmount(product.amount);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setName('');
        setPrice('');
        setSize('');
        setColor('');
        setImage('');
        setAmount('');
        setEditId(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editId) {
            fetch(`http://localhost:3000/products/${editId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    price: Number(price),
                    size,
                    color,
                    images: image,
                    amount: Number(amount)
                }),
            })
                .then(response => response.json())
                .then(updatedProduct => {
                    setCategories(categories.map(product =>
                        product._id === editId ? updatedProduct : product
                    ));
                    closeModal();
                })
                .catch(error => console.error('Error updating product:', error));
        }
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Talla</th>
                        <th>Color</th>
                        <th>Imagen</th>
                        <th>Cantidad</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr key={`${category._id}-${index}`}>
                            <td>{category._id}</td>
                            <td>{category.name}</td>
                            <td>{category.price}</td>
                            <td>{category.size}</td>
                            <td>{category.color}</td>
                            <td><img src={category.images} alt={category.name} style={{ width: '50px', height: '50px' }} /></td>
                            <td>{category.amount}</td>
                            <td className="actions">
                                <button onClick={() => openEditar(category)}>Editar</button>
                                <button onClick={() => handleDelete(category._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isOpen && (
                <dialog id="miModal" open>
                    <form onSubmit={handleSubmit}>
                        <h3>Editar Producto</h3>

                        <div className="form-group">
                            <div>
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="price">Precio</label>
                                <input
                                    type="number"
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="size">Talla</label>
                                <input
                                    type="text"
                                    id="size"
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="color">Color</label>
                                <input
                                    type="text"
                                    id="color"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="image">URL de Imagen</label>
                                <input
                                    type="text"
                                    id="image"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="amount">Cantidad</label>
                                <input
                                    type="number"
                                    id="amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="buttons">
                            <button type="submit">Guardar</button>
                            <button type="button" onClick={closeModal}>Cerrar</button>
                        </div>
                    </form>
                </dialog>
            )}
        </>
    );
};

export default CategoryTable;