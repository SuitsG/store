import React, { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/ProductCategories";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/ui/modal";

export default function BasicTables() {
    const { isOpen, openModal, closeModal } = useModal();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Aquí puedes enviar los datos al servidor usando fetch o axios
        closeModal();
        setFormData({ name: "", description: "" }); // Reiniciar el formulario
    };

    return (
        <>
            <PageMeta
                title="Categorías"
                description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Categorías" />



            <ComponentCard headerContent={<button
                onClick={openModal}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Agregar Categoría +
                </button>}>
                
                <BasicTableOne />
            </ComponentCard>



            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                className="max-w-[700px] p-6 lg:p-10"
            >
                <form onSubmit={handleSubmit} className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
                    <div>
                        <h5 className="mb-2 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">
                            Agregar Categoría
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Llena los campos para agregar una nueva categoría.
                        </p>
                    </div>
                    <div className="mt-8">
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Nombre de la Categoría
                            </label>
                            <input
                                id="category-name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                            />
                        </div>
                        <div className="mt-6">
                            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                Descripción
                            </label>
                            <input
                                id="category-description"
                                name="description"
                                type="text"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-6 modal-footer sm:justify-end">
                        <button
                            onClick={closeModal}
                            type="button"
                            className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="btn btn-success flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
}
