import React from 'react'
import {ContainerPostagem, Image, Description, Titulo} from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
            <Image src={props.inputImage} alt='drone view'/>
            <Titulo>{props.inputTitulo}</Titulo>
            <Description>{props.inputDescription}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem