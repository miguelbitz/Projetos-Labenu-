import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { irParaLogin } from "../routes/coordinator"



export default function useProtectedPage(){
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
        irParaLogin(navigate)
        }
    },[navigate])
}

// Usamos no feed esse exemplo de protecao de pagina 

/*const navigate = useNavigate()
  useEffect(()=>{
    if(!token){
      irParaLogin(navigate)
    }
  },[])*/