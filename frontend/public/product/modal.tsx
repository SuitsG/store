import React, { useState, useCallback } from 'react';

interface ProductFormData {
    name: string;
    price: string;
    description: string;
    size: string;
    color: string;
    images: string;
    gender: 'Femenino' | 'Masculino';
    amount: string;
    productCategory: string;
}

const Modal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState<ProductFormData>({
        name: '',
        price: '',
        description: '',
        size: '',
        color: '',
        images: '',
        gender: 'Femenino',
        amount: '',
        productCategory: '',
    });

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    const resetForm = useCallback(() => {
        setFormData({
            name: '',
            price: '',
            description: '',
            size: '',
            color: '',
            images: '',
            gender: 'Femenino',
            amount: '',
            productCategory: '',
        });
        setError('');
    }, []);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    }, []);

    const handleSubmit = useCallback(async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        try {
            if (!formData.name || !formData.price || !formData.productCategory) {
                setError('Nombre, precio y categoría son obligatorios');
                return;
            }

            const productData = {
                ...formData,
                price: parseFloat(formData.price),
                amount: formData.amount ? parseInt(formData.amount) : 0,
                images: formData.images ? [formData.images] : []
            };

            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData),
            });

            const data = await response.json();

            if (response.ok) {
                // Dispatch custom event to notify that a product was added
                window.dispatchEvent(new CustomEvent('productAdded'));

                // Close modal and reset form
                closeModal();
                resetForm();
            } else {
                setError('Error al guardar el producto');
            }
        } catch (err) {
            setError('Error de conexión');
            console.error('Error al enviar formulario:', err);
        }
    }, [formData, closeModal, resetForm]);

    return (
        <div>
            <button className="addProduct" id="abrirModal" onClick={openModal}>Agregar Producto</button>
            {isOpen && (
                <dialog id="miModal" open>
                    <form onSubmit={handleSubmit}>
                        <h3>Agrega el producto</h3>
                        {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
                        <div className="form-group">
                            {[
                                { id: 'name', label: 'Nombre', type: 'text', required: true },
                                { id: 'price', label: 'Precio', type: 'number', required: true },
                                { id: 'description', label: 'Descripción', type: 'text' },
                                { id: 'size', label: 'Talla', type: 'text' },
                                { id: 'color', label: 'Color', type: 'text' },
                                { id: 'images', label: 'URL de la Imagen', type: 'url', placeholder: 'https://ejemplo.com/imagen.jpg' },
                                { id: 'amount', label: 'Cantidad', type: 'number' },
                                { id: 'productCategory', label: 'ID de Categoría', type: 'text', placeholder: '67d7136d73ed160f9c806d74', required: true }
                            ].map(field => (
                                <div key={field.id}>
                                    <label htmlFor={field.id}>{field.label}</label>
                                    <input
                                        type={field.type}
                                        id={field.id}
                                        className="form-control"
                                        value={formData[field.id as keyof ProductFormData]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                    />
                                </div>
                            ))}
                            <div>
                                <label htmlFor="gender">Género</label>
                                <select
                                    id="gender"
                                    className="form-control"
                                    value={formData.gender}
                                    onChange={handleChange}>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Masculino">Masculino</option>
                                </select>
                            </div>
                        </div>
                        <div className="buttons">
                            <button type="submit">Guardar</button>
                            <button type="button" id="cerrarModal" onClick={closeModal}>Cerrar</button>
                        </div>
                    </form>
                </dialog>
            )}
        </div>
    );
};

export default Modal;
