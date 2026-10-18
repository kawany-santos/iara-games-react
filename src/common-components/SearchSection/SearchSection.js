import styled from 'styled-components';
import { 
    Colors, 
    Display,
    Align,
    Justify,
    Spaces,
} from '../../shared/DesignTokens';
export const SearchSection = styled.div`
	width: 100%;
	height: 100%;
    align-items: ${Align.CENTER};
    justify-content: ${Justify.CENTER};
    text-align: ${Align.CENTER};
    display: ${Display.FLEX};
    flex-direction: column;
    gap: ${Spaces.ONE_HALF};
    margin-top: 100px;


`;