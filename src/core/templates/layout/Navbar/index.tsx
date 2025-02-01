import logoCubos from '../../../../assets/logo-cubos.svg';
import {ButtonTheme, Imagem, NavbarContainer, SunIcon, Text, Title} from "./style.ts";
import sunIcon from '../../../../assets/sun-icon.svg';

export const Navbar = () => {
	return (
		<NavbarContainer>
			<Title>
				<Imagem src={logoCubos} />
				<Text>Movies</Text>
			</Title>

			<ButtonTheme>
				<SunIcon src={sunIcon} />
			</ButtonTheme>
		</NavbarContainer>
	)
}