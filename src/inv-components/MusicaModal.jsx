
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";


const generosmusicales = [
    "Pop",
    "Cumbia",
    "Salsa",
    "Bolero",
    "Valse Criollo",
    "Marinera",
    "Reggaetón",
    "Jazz",
    "Soul",
    "R&B",
    "Blues",
    "Otros"
]

function MusicaModal(

) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const [error, setError] = useState("");
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const [send, setSend] = useState(false);
    const handleGuardarForm = handleSubmit(async (data) => {

        const datos = {
            ...data,

        }

        const response = await fetch('https://eae-api.pedagogicos.pe/api/recomendacionmusica', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos)

        })
        const res = await response.json()
        if (res.status === 201) {
            reset()
            setSend(true)
            setError("")
        } else {
            setError(res.message)

        }
    })

    return (
        <>
            <button onClick={onOpen} className="bg-color01 min-w-52 max-w-52 text-color02 py-3 rounded-3xl">
                Sugerir canción
            </button>
            <Modal
                backdrop={'blur'}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                size='xl'
                isDismissable={false} isKeyboardDismissDisabled={true}
                className='p-8'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex 
                            font-parisienne
                            text-color01
                            font-light
                            text-5xl
                            phone:text-[34px]
                            p-0
                            desktop:text-5xl
                            text-center
                            my-4
                            flex-col gap-1">
                                Sugerir Canción

                            </ModalHeader>
                            <ModalBody>
                                {
                                    !send ? (<form onSubmit={handleGuardarForm} >


                                        {
                                            error && (
                                                <div className="text-center">
                                                    <span className="text-red-500 text-center text-xs">{error}</span>
                                                </div>
                                            )
                                        }


                                        <div className="flex flex-col mt-5 gap-4" >
                                            <div>

                                                <Autocomplete
                                                    {...register('T_Categoria', {
                                                        required: {
                                                            value: true,
                                                            message: 'Campo es requerido'
                                                        }
                                                    })}
                                                    variant={"bordered"}
                                                    defaultItems={generosmusicales}
                                                    labelPlacement={'inside'}
                                                    label="Selecciona un género musical"
                                                    className="max-w-full"
                                                >
                                                    {
                                                        generosmusicales.map((item, index) => (
                                                            <AutocompleteItem key={index}>{item}</AutocompleteItem>
                                                        ))
                                                    }

                                                </Autocomplete>
                                                {
                                                    errors.T_Categoria && (
                                                        <span className="text-red-500 text-xs">{errors.T_Categoria.message}</span>
                                                    )
                                                }
                                            </div>
                                            <div>
                                                <Input
                                                    {...register('T_Cantante', {
                                                        required: {
                                                            value: true,
                                                            message: 'Campo es requerido'
                                                        }
                                                    })}
                                                    label="Cantante/Grupo"
                                                    placeholder="Ingresa la Canción o Grupo"
                                                    variant="bordered"
                                                />
                                                {
                                                    errors.T_Cantante && (
                                                        <span className="text-red-500 text-xs">{errors.T_Cantante.message}</span>
                                                    )
                                                }
                                            </div>
                                            <div>
                                                <Input
                                                    {...register('T_Nombre_Cancion', {
                                                        required: {
                                                            value: true,
                                                            message: 'Campo es requerido'
                                                        }
                                                    })}
                                                    label="Canción"

                                                    placeholder="Ingresa la canción"
                                                    variant="bordered"
                                                />
                                                {
                                                    errors.T_Nombre_Cancion && (
                                                        <span className="text-red-500 text-xs">{errors.T_Nombre_Cancion.message}</span>
                                                    )
                                                }
                                            </div>

                                            {
                                                isSubmitting ? (
                                                    <button disabled className='bg-color01 disabled:bg-color03 text-color02 py-3  w-[280px] mx-auto desktop:w-[200px] rounded-3xl'>
                                                        Enviando ..
                                                    </button>
                                                ) : (
                                                    <button className='bg-color01 text-color02 py-3  w-[280px] mx-auto desktop:w-[200px] rounded-3xl'>
                                                        Sugerir canción
                                                    </button>
                                                )
                                            }

                                        </div>

                                    </form>) : (
                                        <>
                                            <div className='w-full flex flex-col gap-5 items-center justify-center' >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-28 text-color01 ">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                                </svg>
                                                <p className='  font-rubik text-center  text-xl ' >
                                                    ¡Gracias por tu recomendación!
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    reset()
                                                    onClose()
                                                    setSend(false)
                                                }}
                                                className='bg-color01 mt-5 text-color02 py-3  w-[280px] mx-auto desktop:w-[200px] rounded-3xl'>
                                                Salir
                                            </button>
                                        </>
                                    )
                                }
                            </ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    )
}

export default MusicaModal