import styled from 'styled-components';
import { 
    Colors, 
    Display,
    Align,
    Justify,
    Spaces,
    FontFamilies,
    FontSizes,
    FontWeights,
    BorderRadius,
    FontLineHeights,
    FontLetterSpacings,
} from '../../shared/DesignTokens';


const ContatoSection = styled.div`
	width: 100%;
	height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${Justify.CENTER};
    align-items: ${Align.CENTER};
    background-color: ${Colors.PURPLE_AMETHYST};
    gap: 20px;

`;

const TextSection = styled.div`
	width: 100%;
	height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${Justify.CENTER};
    align-items: ${Align.CENTER};
    background-color: ${Colors.PURPLE_AMETHYST};
    gap: 15px;

`;

const Topic = styled.h3`
    font-family: ${FontFamilies.TEXT};
    font-weight: ${FontWeights.REGULAR};
    color: ${Colors.LIGHT_PURPLE};
    font-size: ${FontSizes.TWO};
    letter-spacing: ${FontLetterSpacings.MEDIUM}

`;

const Subtitulo = styled.h2`
    font-family: ${FontFamilies.TITLE};
    font-size: ${FontSizes.FOUR};
    font-weight: ${FontWeights.SEMIBOLD};
    color: ${Colors.NEUTRAL_WHITE};

`;

const TextDescript = styled.p`
    font-family: ${FontFamilies.TEXT};
    font-weight: ${FontWeights.REGULAR};
    color: ${Colors.NEUTRAL_WHITE};
    font-size: ${FontSizes.TWO};
`;

const DivCards = styled.div`
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: row;
    padding-left: 2%;
    align-items: center;
    gap: 55%;
    border-radius: ${BorderRadius.TWO};
    background: linear-gradient(90deg,rgba(242, 241, 234, 1) 70%, rgba(169, 225, 144, 1) 100%);

`;

const DivText = styled.p`
    font-family: ${FontFamilies.TEXT};
    font-size: ${FontSizes.ONE_QUARTER};
    font-weight: ${FontWeights.SEMIBOLD};
    color: ${Colors.NEUTRAL_BLACK};
    width: 40%;

`;



export function Contato () {
    return (
        <ContatoSection>
            <TextSection>
                <Topic>CONTATO</Topic>
                <Subtitulo>
                    Ainda com dúvida ? Podemos ajudar
                </Subtitulo>
                <TextDescript>
                    Informe sua dúvida e entraremos em contato dentro 24h
                </TextDescript>
            </TextSection>
        </ContatoSection>
    );
}
