
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = () =>{

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
            "Conquista la ruta con tu moto, nueva o usada, aquí."            </h1>

            <p className="hero__subtitle">
            En nuestra concesionaria, hacemos tus sueños sobre dos ruedas realidad.
            </p>

            <CustomButton
            title= "Explorar Motos"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handLeClick={handleScroll}
            />

            <div className="hero__image-container">
                
            </div>
            
        </div>
    </div>
  )
}

export default Hero