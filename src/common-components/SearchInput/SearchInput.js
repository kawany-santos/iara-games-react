import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontSizes,
	Spaces,
    FontWeights,
    Align,
} from '../../shared/DesignTokens';
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	gap: ${Spaces.THREE};
	justify-content: center;
	align-items: center;
    @media (max-width: 800px) {
        		flex-direction: column;



	}
`;

const Input = styled.input`
	font-size: ${FontSizes.TWO};
	font-family: ${FontFamilies.TEXT};
	width: 40%;
	height: 50px;
	border: none;
	outline: none;
	padding-left: ${Spaces.TWO};
	color: ${Colors.NEUTRAL_GREY};
	background-color: ${Colors.NEUTRAL_BEGE};
	border-radius: 20px;
	margin-top: 15px;
	@media (max-width: 800px) {
        		width: 70%;




	}
`;

const Buscar = styled.button`
	font-size: ${FontSizes.TWO};
    font-family: ${FontFamilies.TEXT}
    font-weight: ${FontWeights.SEMIBOLD};
    color: ${Colors.NEUTRAL_WHITE};
    text-align: ${Align.CENTER};
    justify-items: ${Align.CENTER};
	border-radius: 20px;
    background-color: ${Colors.DARK_AMETHYST};
	width: 10%;
	height: 50px;
    border: none;
		@media (max-width: 800px) {
        		width: 40%;
				margin-top:20px;




	}

`;

export function SearchInput(props) {
	return (
		<Wrapper>
			<Input {...props} type="text" />
            <Buscar>
                Buscar
            </Buscar>
		</Wrapper>
	);
}
