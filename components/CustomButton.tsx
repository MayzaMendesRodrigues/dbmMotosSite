"use client";
/**Esta linha indica que o componente CustomButton deve ser executado 
 * no lado do cliente */
import { CustomButtonProps } from "@/types";
import Image from "next/image"

/** Ele é uma função que recebe um objeto com as propriedades title, 
 * containerStyles, handLeClick, e btnType, todos definidos no tipo 
 * CustomButtonProps */
const CustomButton = ({title, containerStyles, handLeClick, btnType}: CustomButtonProps) => {


  return (
    <button
    type={btnType || "button"} /**define botao, se o btnType nao for fornecido tera como padrao button */
    className={`custom-btn ${containerStyles}`}/**aplica uma classe no css */
    onClick={handLeClick ? (event) => handLeClick(event) : undefined}
    /**Quando o botão é clicado, se uma função handLeClick foi fornecida, execute essa função e dê a ela 
     * os detalhes do clique. Se nenhuma função foi fornecida, não faça nada."






 */


    >


      

        <span className={`flex-1`}>{title}</span>

    </button>

  )
}

export default CustomButton