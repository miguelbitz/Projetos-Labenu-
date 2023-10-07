import { TitleHeader, Image, Name } from './styled'


export const Header = (props) => {

    return (
        <TitleHeader>
            {props.pageFlow === 2 || props.pageFlow === 3 ? (
            <><Image src={props.newLogin.image} alt='profile-pic' /><Name>{props.newLogin.name}</Name></>
          ) : ('')}
            
            Insta4
        </TitleHeader>

    )
}