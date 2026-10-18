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

import cartaoIcon from '../../assets/icons/credit-card-svgrepo-com.svg';
import chatIcon from '../../assets/icons/chat-alert-left-3-svgrepo-com.svg';
import userIcon from '../../assets/icons/user-remove-svgrepo-com.svg';
import flagIcon from '../../assets/icons/flag-svgrepo-com.svg';
import wifiIcon from '../../assets/icons/wifi-disable-svgrepo-com.svg';
import bugIcon from '../../assets/icons/bug-svgrepo-com.svg';

const CardsTopics = styled.div`
	width: 100%;
	height: 100%;
    display: flex;
    justify-content: ${Justify.CENTER};
    align-items: ${Align.CENTER};
    margin-top: 200px;

`;

const CardsCenter = styled.div`
	width: 80%;
	height: 100%;
    justify-content: ${Justify.CENTER};
    align-items: ${Align.CENTER};
    display: ${Display.FLEX};
    flex-direction: column;
    gap: ${Spaces.SEVEN};


`;


const Subtitulo = styled.h2`
    font-family: ${FontFamilies.TITLE};
    font-size: ${FontSizes.FOUR};
    font-weight: ${FontWeights.SEMIBOLD};
    color: ${Colors.NEUTRAL_WHITE};
    display: ${Display.FLEX};


`;

const CardsSub = styled.div`
    display: ${Display.FLEX};
    flex-direction: row;
    gap: ${Spaces.SEVEN};
    	@media (max-width: 800px) {
		    flex-direction: column;

	}

`;

const Cards = styled.div`
    width: 220px;
    height: 240px;
    border-radius: ${BorderRadius.TWO};
    background-color: ${Colors.NEUTRAL_BEGE};
    display: flex;
    flex-direction: column;
    gap: none;
    padding-top: ${Spaces.FOUR};
    padding-left: ${Spaces.THREE};

`;


const Icon1 = styled.img.attrs({
    src: flagIcon,
})`
    width: 40px;
    height: 40px;

`;

const Icon2 = styled.img.attrs({
    src: bugIcon,
})`
    width: 40px;
    height: 40px;

`;

const Icon3 = styled.img.attrs({
    src: chatIcon
})`
    width: 40px;
    height: 40px;

`;

const Icon4 = styled.img.attrs({
    src: wifiIcon,
})`
    width: 40px;
    height: 40px;

`;

const Icon5 = styled.img.attrs({
    src: userIcon,
})`
    width: 40px;
    height: 40px;

`;

const Icon6 = styled.img.attrs({
    src: cartaoIcon,
})`
    width: 40px;
    height: 40px;

`;


const IconBackground = styled.div`
    width: 50px;
    height: 50px;
    border-radius: ${BorderRadius.TWO};
    background-color: ${Colors.PURPLE_AMETHYST};
    display: ${Display.FLEX};
    align-items: ${Align.CENTER};
    justify-content: ${Justify.CENTER};

`;

const TopicTitulo = styled.h3`
    font-family: ${FontFamilies.TEXT};
    font-size: ${FontSizes.THREE};
    font-weight: ${FontWeights.SEMIBOLD};
    color: ${Colors.NEUTRAL_BLACK};
    margin: 40px 0 10px 0;

`;

const TopicText = styled.p`
    font-family: ${FontFamilies.TEXT};
    font-size: ${FontSizes.ONE_HALF};
    font-weight: ${FontWeights.SEMIBOLD};
    color: ${Colors.NEUTRAL_BLACK};
    margin: 0;
    width: 95%;
    line-height: ${FontLineHeights.MEDIUM};
`;


export function CardsSection () {
    return (
        <CardsTopics>
            <CardsCenter>
                <Subtitulo>
                    Topicos que podem ajudar!
                </Subtitulo>
                <CardsSub>
                    <Cards>
                        <IconBackground>
                            <Icon1 />
                        </IconBackground>
                        <TopicTitulo>
                            Reportar
                        </TopicTitulo>
                        <TopicText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </TopicText>
                    </Cards>
                    <Cards>
                        <IconBackground>
                            <Icon2 />
                        </IconBackground>
                        <TopicTitulo>
                            Bugs
                        </TopicTitulo>
                        <TopicText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </TopicText>
                    </Cards>
                    <Cards>
                        <IconBackground>
                            <Icon3 />
                        </IconBackground>
                        <TopicTitulo>
                            Feedbacks
                        </TopicTitulo>
                        <TopicText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </TopicText>
                    </Cards>
                </CardsSub>
                <CardsSub>
                    <Cards>
                        <IconBackground>
                            <Icon4 />
                        </IconBackground>
                        <TopicTitulo>
                            Rede
                        </TopicTitulo>
                        <TopicText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </TopicText>
                    </Cards>
                    <Cards>
                        <IconBackground>
                            <Icon5 />
                        </IconBackground>
                        <TopicTitulo>
                            Conta
                        </TopicTitulo>
                        <TopicText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </TopicText>
                    </Cards>
                    <Cards>
                        <IconBackground>
                            <Icon6 />
                        </IconBackground>
                        <TopicTitulo>
                            Pagamento
                        </TopicTitulo>
                        <TopicText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </TopicText>
                    </Cards>
                </CardsSub>
            </CardsCenter>
        </CardsTopics>
    );
}
