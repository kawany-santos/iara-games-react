import styled from 'styled-components';
import { Colors, Spaces } from '../../shared/DesignTokens';
import IaraGmaesLogo from '../../assets/images/logo_iara_games_dark_sem_fundo.png';
const Wrapper = styled.header`
	width: 100%;
	height: 70px;
	padding: ${Spaces.TWO};
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 1024px) {
		height: 90px;
	}
`;
const Logo = styled.img.attrs({
	src: IaraGmaesLogo,
	alt: 'Logo do Iara Games',
})`
	height: 80%;
`;
export function Header() {
	return (
		<Wrapper>
			<Logo />
		</Wrapper>
	);
}