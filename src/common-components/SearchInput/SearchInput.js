import styled from 'styled-components';
import {
	BorderRadius,
	Colors,
	FontFamilies,
	FontSizes,
	Spaces,
    FontWeights,
    Align,
} from '../../shared/DesignTokens';
const Wrapper = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 35fr 10fr;
	grid-template-rows: 4fr 4fr;
	gap: ${Spaces.TWO};
	padding: ${Spaces.NONE} ${Spaces.TWO};
	border-radius: ${BorderRadius.ONE};
	height: 40px;
`;

const Input = styled.input`
	font-size: ${FontSizes.ONE_HALF};
	font-family: ${FontFamilies.TEXT};
	border: none;
	outline: none;
	padding: ${Spaces.ONE};
	color: ${Colors.NEUTRAL_GREY};
	background: none;
	&::placeholder {
		color: ${Colors.NEUTRAL_GREY};
		opacity: 1;
	}
	&:-ms-input-placeholder {
		color: ${Colors.NEUTRAL_GREY};
	}
	&::-ms-input-placeholder {
		color: ${Colors.NEUTRAL_GREY};
	}
`;

const Buscar = styled.button`
    font-family: ${FontFamilies.TEXT}
    font-weight: ${FontWeights.SEMIBOLD};
    color: ${Colors.NEUTRAL_WHITE};
    text-align: ${Align.CENTER};
    justify-items: ${Align.CENTER};
    border-radius: ${BorderRadius.ONE_HALF};
    background-color: ${Colors.DARK_AMETHYST};
    border: none;

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
