import React from 'react';

const CategoryTable: React.FC = () => {
    const [categories, setCategories] = React.useState([]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [editId, setEditId] = React.useState<string | null>(null);

    const fetchCategories = React.useCallback(() => {
        fetch('http://localhost:3000/productCategory')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log categories to verify IDs
                setCategories(data);
            })
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    React.useEffect(() => {
        fetchCategories();

        // Add event listener for the custom event
        window.addEventListener('categoryAdded', fetchCategories);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('categoryAdded', fetchCategories);
        };
    }, [fetchCategories]);

    const handleDelete = (id: string) => {
        fetch(`http://localhost:3000/productCategory/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setCategories(categories.filter(category => category._id !== id));
                } else {
                    console.error('Error deleting category');
                }
            })
            .catch(error => console.error('Error deleting category:', error));
    };

    const openEditar = (category: any) => {
        setEditId(category._id);
        setName(category.name);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setName('');
        setEditId(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editId) {
            fetch(`http://localhost:3000/productCategory/${editId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            })
                .then(response => response.json())
                .then(updatedCategory => {
                    setCategories(categories.map(category =>
                        category._id === editId ? updatedCategory : category
                    ));
                    closeModal();
                })
                .catch(error => console.error('Error updating category:', error));
        }
    };

    return (
        <>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr key={`${category._id}-${index}`}>
                            <td>{category._id}</td>
                            <td>{category.name}</td>
                            <td>
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
                        <h3>Editar Categoria</h3>

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
                        </div>
                        <div className="buttons">
                            <button type="submit">Guardar</button>
                            <button onClick={closeModal}>Cerrar</button>
                        </div>
                    </form>
                </dialog>
            )}
        </>
    );
};

export default CategoryTable;