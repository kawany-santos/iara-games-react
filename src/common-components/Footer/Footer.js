import styled from 'styled-components';
import { 
    Colors, 
    FontFamilies,
    FontSizes,
    FontWeights,
} from '../../shared/DesignTokens';

import IaraGmaesLogo from '../../assets/images/logo_iara_games_dark_sem_fundo.png';
import Instagram from '../../assets/icons/instagram-svgrepo-com.svg';
import Linkedin from '../../assets/icons/linkedin-161-svgrepo-com (1).svg';
import Discord from '../../assets/icons/discord-svgrepo-com.svg'; 

const FooterAll = styled.footer`
	width: 100%;
    display: flex;
    align-self: center;
    justify-self: center;
    flex-direction: column;
    margin-top: 2%;
`;

const Footer =  styled.div`
	width: 100%;
	height: 300px;
    display: flex;
    align-self: center;
    justify-self: center;
    align-items:center;
    justify-content: center;
    background-color: ${Colors.FOOTER_BACKGROUND};
`;

const Div1 = styled.div`
	width: 30%;
	height: 90%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`;

const Logo = styled.img.attrs({
	src: IaraGmaesLogo,
	alt: 'Logo do Iara Games',
})`
    width: 200px;
	height: auto;
`;

const Icon1 = styled.img.attrs({
	src: Instagram,
})`
    width: 20px;
	height: auto;
`;
const Icon2 = styled.img.attrs({
	src: Linkedin,
})`
    width: 20px;
	height: auto;
`;
const Icon3 = styled.img.attrs({
	src: Discord,
})`
    width: 20px;
	height: auto;
`;



const TextDiv1 = styled.p`
	font-size: ${FontSizes.ONE_HALF};
	font-family: ${FontFamilies.TEXT};
    color: ${Colors.NEUTRAL_WHITE};
    font-weight: ${FontWeights.REGULAR};
    @media (max-width: 1000px) {
        text-align: center;
        width: 90%;



	}
`;

const RowIcons = styled.div`
	width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items:center;
    justify-content: center;
    margin-top: 20px;

`;



const Copy = styled.div`
	width: 100%;
	height: 100%;
    display: flex;
    align-self: center;
    justify-self: center;
    align-items:center;
    justify-content: center;
    flex-direction: row;
    gap: 70%;
    background-color: ${Colors.MIDNIGHT_VIOLET};
        @media (max-width: 1000px) {
            flex-direction: column;
    



	}
`;

const TextCopy = styled.p`
	font-size: ${FontSizes.ONE_HALF};
	font-family: ${FontFamilies.TITLE};
    color: ${Colors.NEUTRAL_WHITE};
    font-weight: ${FontWeights.THIN};
`;

export function Rodape() {
    return (
        <FooterAll>
            <Footer>
                <Div1>
                    <Logo />
                    <TextDiv1>
                        Unindo e trasnformando a cultura de games brasileiros
                    </TextDiv1>
                    <RowIcons>
                        <Icon1 />
                        <Icon2 />
                        <Icon3 />
                    </RowIcons>

                </Div1>
            </Footer>
            <Copy>
                <TextCopy>
                    © Iara Games 2026
                </TextCopy>
                <TextCopy>
                    Desenvolvido por Kawany Santos
                </TextCopy>
            </Copy>
        </FooterAll>
    );
}