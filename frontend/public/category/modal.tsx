import React, { useState } from 'react';

const Modal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3000/productCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        if (response.ok) {
            // Dispatch custom event to notify that a category was added
            window.dispatchEvent(new CustomEvent('categoryAdded'));

            // Reset the form and close modal
            setName('');
            closeModal();
        } else {
            // Handle error response
            console.error('Error submitting form');
        }
    };

    return (
        <div>
            <button className="addProduct" id="abrirModal" onClick={openModal}>Agregar Categoria</button>
            {isOpen && (
                <dialog id="miModal" open>
                    <form onSubmit={handleSubmit}>
                        <h3>Agrega la categoria</h3>
                        <div className="form-group">
                            <div>
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="buttons">
                            <button type="submit">Guardar</button>
                            <button id="cerrarModal" onClick={closeModal}>Cerrar</button>
                        </div>
                    </form>
                </dialog>
            )}
        </div>
    );
};

export default Modal;