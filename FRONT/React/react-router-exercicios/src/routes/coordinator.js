export const goToHome = (navigate)=>{
    navigate("/")
}

export const goToProfilePage = (navigate)=>{
    navigate("/profile")
}

export const goToProductPage = (navigate)=>{
    navigate("/product/:id")
}

export const goToErrorPage = (navigate)=>{
    navigate("*")
}

