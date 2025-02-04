import logoCubos from '../../../assets/logo-cubos.svg';
import {ButtonTheme, Imagem, NavbarContainer, SunIcon, Text, Title} from "./style.ts";
import sunIcon from '../../../assets/sun-icon.svg';
import {useNavigate} from "react-router-dom";

export const Navbar = () => {

	const navigate = useNavigate();

	return (
		<NavbarContainer>
			<Title onClick={() => navigate("/")}>
				<Imagem src={logoCubos} />
				<Text>Movies</Text>
			</Title>

			<ButtonTheme>
				<SunIcon src={sunIcon} />
			</ButtonTheme>
		</NavbarContainer>
	)
}