import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      {props.pageFlow === 3 ? (
            <><TitleHeader>{props.newPost.title}</TitleHeader><Image src={props.newPost.imagePost} /><Description>{props.newPost.description}</Description></>
          ) : (
            <><TitleHeader>Um titulo</TitleHeader>
          <Image src={"https://picsum.photos/536/354"} />
          <Description>Uma descrição</Description></>
          )}

          
      
    </ContainerPostagem>
  );
  
};

export default TelaDaPostagem;
