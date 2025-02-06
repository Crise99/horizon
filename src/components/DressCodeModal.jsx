
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function DressCodeModal() {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();


    return (
        <>
            <button onClick={onOpen} className="bg-color01 min-w-52 max-w-52 text-color02 py-3 rounded-3xl">
                Ver más
            </button>
            <Modal
                backdrop={'blur'}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                isDismissable={false} isKeyboardDismissDisabled={true}
                size='xl'
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
                                Dress Code

                            </ModalHeader>
                            <ModalBody>
                                <div className=" text-sm flex flex-col  gap-4 " >
                                    <span className="font-semibold font-rubik" >
                                        Queridos invitados,
                                    </span>
                                    <div className="flex flex-col gap-2 font-rubik" >
                                        <span>
                                            Para hacer de nuestro día especial un evento aún más memorable, les solicitamos amablemente que sigan el siguiente código de vestimenta:
                                        </span>
                                        <span className="font-semibold" >
                                            Hombres:
                                        </span>
                                        <span>
                                            Traje Formal: Se recomienda el uso de traje oscuro con camisa y corbata.
                                        </span>
                                        <span className="font-semibold" >
                                            Mujeres:
                                        </span>
                                        <span>
                                            Vestido de Cóctel o Gala: Vestidos largos o cortos elegantes son bienvenidos.
                                        </span>
                                        <span>
                                            Color Sugerido: Evitar el blanco y perla.
                                        </span>
                                        <span>
                                            Agradecemos de antemano su comprensión y colaboración para que todos luzcan espectaculares en esta ocasión tan especial.
                                        </span>

                                    </div>
                                    <div className="flex flex-col gap-1 justify-end items-end " >
                                          
                                        <span className="font-parisienne text-color01 text-lg font-bold">
                                            Johan y Dahiana
                                        </span>
                                    </div>
                                </div>

                            </ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    )
}

export default DressCodeModal