import styled from 'styled-components';
import {
	Display,
	Padding,
	Justify,
	Align,
} from '../../shared/DesignTokens';
export const Header = styled.header`
	width: 100%;
	height: 80px;
	display: ${Display.FLEX};
	padding-top: ${Padding.ONE_HALF};
	background: none;
	justify-content: ${Justify.CENTER};
	align-items: ${Align.CENTER};

`;
