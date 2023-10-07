import { useNavigate, useParams } from "react-router-dom"
import { goToHome, goToProfilePage, goToProductPage } from "../routes/coordinator"


export default function Header() {
    const navigate = useNavigate()
    
    return (
        <div>
            <button
                onClick={() => { goToHome(navigate) }}>Pagina Inicial
            </button>
            <button
                onClick={() => { goToProfilePage(navigate) }}>Pagina de Perfil
            </button>
            <button
                onClick={() => { goToProductPage(navigate) }}>Pagina de Produtos
            </button>
        </div>
    )
}