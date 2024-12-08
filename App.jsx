import { FaWeightHanging } from "react-icons/fa6";
import image from "./assets/fitness-tracker-animate.svg";
import { FaRuler } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState("");
  const [menssagem, setMenssagem] = useState("");


  function clickCalcular() {
    if (!peso || !altura) {
      toast.error("preencha todos os campos")
      return
    }
  
    setLoading(true)
    const Valorimc = peso / (altura * altura);
    console.log(Valorimc)
   
 
    setTimeout(
      () => {
        setResultado(Valorimc.toFixed(2))
        setLoading(false)
        if (Valorimc < 18.5) {
          setMenssagem("você está com magreza")
        }
        else if (Valorimc >= 18.5 && Valorimc <= 24.9) {
          setMenssagem("você está no peso ideal")
        }
        else if (Valorimc >= 25 && Valorimc <= 29.9) {
          setMenssagem("você está com sobrepeso")
        }
        else if (Valorimc >= 30 && Valorimc <= 34.9) {
          setMenssagem("você está com obesidade grau 1")
        }
        else if (Valorimc >= 35 && Valorimc <= 39.9) {
          setMenssagem("você está obesidade grau 2")
        }
        else  {
          setMenssagem("você está com obesidade grau 3 ")
        }     
      }, 1500

    )
  }

  return (
    <div className="w-full h-screen flex bg-black">
      <ToastContainer />

      <div className="w-[50%] h-full flex items-center justify-center">
        <img src={image} alt="" width={550} />
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[60%] h-auto  p-[20px] rounded-lg flex flex-col bg-[#1f1f1f]">
          <div className="w-full flex flex-col">
            <h1 className="text-white text-[40px] font-bold">
              Calculadora - IMC
            </h1>
            <div className="w-[200px] h-[4px] rounded-lg bg-[#20a54c]"></div>
          </div>
          <div className="w-full flex flex-col">
            <div className="mt-4">
              <label htmlFor="" className="text-white text-[18px]">Peso</label>
              <div className="w-full flex bg-[#555555] rounded-md h-[50px]">
                <div className="w-[10%] h-full flex items-center justify-center">
                  <FaWeightHanging size={24} color="#B0B0B0FF" />
                </div>
                <div className="w-[80%] h-full">
                  <input className="w-full h-full  bg-transparent border-none text-white font-bold outline-none"
                    type="number"
                    onChange={
                      (event) => setPeso(event.target.value)

                    }
                  />
                </div>
                <div className="w-[10%] h-full flex items-center justify-center">
                  <p className="text-white">Kg </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="" className="text-white text-[18px]">Altura em metros</label>
              <div className="w-full flex bg-[#555555] rounded-md h-[50px]">
                <div className="w-[10%] h-full flex items-center justify-center">
                  <FaRuler size={24} color="#B0B0B0FF" />
                </div>
                <div className="w-[80%] h-full">
                  <input className="w-full h-full  bg-transparent border-none text-white font-bold outline-none"
                    type="number"
                    onChange={
                      (event) => setAltura(event.target.value)
                    }
                  />
                </div>
                <div className="w-[10%] h-full flex items-center justify-center">
                  <p className="text-white">m</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center pt-[15px]">
            <button className="items-center justify-center flex w-full h-[50px] bg-[#20a54c] rounded-lg text-white font-bold  "
              onClick={clickCalcular}
            >
              {
                loading ? (
                  <div className=" w-[24px] h-[24px] border-2 border-white rounded-full border-t-[4px] animate-spin">
                  </div>
                ) : "calcular"
              }
            </button>
          </div>
          {
            resultado && (
              <div className="w-full flex justify-center flex-col ">
                <div className="w-full bg-gray-500 h-[1px] mt-4"> </div>
                <div className="w-full py-4 flex ">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[40px] text-[#20a54c] ">{resultado}</p>
                    <p className="tex-[20px] text-white ">seu IMC</p>
                  </div>
                  <div className="ww-full flex items-center justify-center">
                    <p className="tex-[20px] text-white pl-[85px]">{menssagem}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-500 h-[1px] mt-4"> </div>
                <div className="w-full flex items-center justify-center ">
                  <a className=" text-[#20a54c]" href="https://superbet.com/lp/pt-br/cassino-cadastro/?utm_source=google&utm_medium=ppc&utm_campaign=ppc-cas-acq-ext-casino_slots_nobonus_newaccount-gen-all-sup&gad_source=1&gclid=Cj0KCQiAgdC6BhCgARIsAPWNWH3S7YbxAaKS64gJ55i_U55TOTuwTWFbuvbaIg9a-NnTg5VB7T0qxtgaAmIFEALw_wcB">Mais informações sobre IMC </a>
                </div>
              </div>
            )
          }
        </div>
      </div>

    </div>

  )
}

export default App
