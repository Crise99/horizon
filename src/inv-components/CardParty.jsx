
import { Card } from "@nextui-org/react";
import MusicaModal from "./MusicaModal";
import DressCodeModal from "./DressCodeModal";
import TipsModal from "./TipsModal";

export default function CardParty({
    title,
    guid,
    description,
    icon
}) {
    return (
        <Card shadow="md" className="p-0 py-10 max-w-sm  w-full desktop:max-w-72 text-center flex items-center justify-center">
            <p className="font-semibold  text-2xl text-color03 " >
                {title}
            </p>

            <img src={`/${icon}.gif`} className="w-24 mt-6" alt={`Icono de sección fiesta - ${icon}`} />


            <span className="h-32 p-6  text-gray-400 font-medium flex justify-center items-center" >
                {description}
            </span>

            {
                guid == 1 ? (
                    <MusicaModal  />
                ): (
                    guid == 2 ? (
                        <DressCodeModal  />
                    ) :(
                        <TipsModal  />
                    )
                )
            }
       
        </Card>
    );
}
