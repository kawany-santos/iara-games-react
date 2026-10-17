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
} from '../../shared/DesignTokens';

import arrowIcon from '../../assets/icons/arrow-down-svgrepo-com.svg';

const QuestionSection = styled.div`
	width: 100%;
	height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${Justify.CENTER};
    align-items: ${Align.CENTER};
    background-color: ${Colors.PURPLE_AMETHYST};
    gap: 20px;

`;

const Icon1 = styled.img.attrs({
    src: arrowIcon,
})`
    width: 30px;
    height: 30px;

`;

const Subtitulo = styled.h2`
    font-family: ${FontFamilies.TITLE};
    font-size: ${FontSizes.FOUR};
    font-weight: ${FontWeights.SEMIBOLD};
    color: ${Colors.NEUTRAL_WHITE};


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



export function ComumQuestions () {
    return (
        <QuestionSection>
            <Subtitulo>
                Perguntas frequentes!
            </Subtitulo>
            <DivCards>
                <DivText>
                    É possivel reembolsar a compra?
                </DivText>
                <Icon1 />
            </DivCards>
            <DivCards>
                <DivText>
                    Como faço para recuperar a minha conta?
                </DivText>
                <Icon1 />
            </DivCards>
            <DivCards>
                <DivText>
                    Jogo travando ao iniciar
                </DivText>
                <Icon1 />
            </DivCards>
            <DivCards>
                <DivText>
                    Ver histórico completo de compras
                </DivText>
                <Icon1 />
            </DivCards>
            <DivCards>
                <DivText>
                    Onde posso ver e gerenciar os dados da minha conta?
                </DivText>
                <Icon1 />
            </DivCards>
        </QuestionSection>
    );
}
