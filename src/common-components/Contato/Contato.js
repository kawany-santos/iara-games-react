import styled from 'styled-components';
import { 
    Colors, 
    Align,
    Justify,
    Spaces,
    FontFamilies,
    FontSizes,
    FontWeights,
    BorderRadius,
} from '../../shared/DesignTokens';



const ContatoSection = styled.div`
	width: 100%;
	height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${Justify.CENTER};
    align-items: ${Align.CENTER};
    gap: 20px;
    margin-top: 200px;
    background-size: cover;
    background-position: center;
`;

const TextSection = styled.div`
	width: 100%;
	height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${Justify.CENTER};
    align-items: ${Align.CENTER};
    gap: 10px;
    margin:0;
    @media (max-width: 750px) {
	    width: 75%;
        text-align:center

	}

`;

const Topic = styled.h3`
    font-family: ${FontFamilies.TEXT};
    font-weight: ${FontWeights.REGULAR};
    color: ${Colors.LIGHT_PURPLE};
    font-size: ${FontSizes.TWO};
    letter-spacing: 5%;
    margin:0;
    @media (max-width: 750px) {
	    margin-bottom: 20px;

	}

`;

const Subtitulo = styled.h2`
    font-family: ${FontFamilies.TITLE};
    font-size: ${FontSizes.FOUR};
    font-weight: ${FontWeights.SEMIBOLD};
    color: ${Colors.NEUTRAL_WHITE};
    margin:0;

`;

const TextDescript = styled.p`
    font-family: ${FontFamilies.TEXT};
    font-weight: ${FontWeights.REGULAR};
    color: ${Colors.NEUTRAL_WHITE};
    font-size: ${FontSizes.TWO};
`;


const BoxForm = styled.form`
	width: 50%;
	height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${Justify.CENTER};
    gap: 25px;
    font-family: ${FontFamilies.TITLE};
    font-weight: ${FontWeights.REGULAR};
        @media (max-width: 750px) {
        	width: 80%;



	}



`

const DivInput = styled.div`
	width: 100%;
	height: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0;
    @media (max-width: 750px) {
        flex-direction: column;


	}

`;

const InputColumn = styled.div`
	width: 100%;
	height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0;
    

`;

const InputSpace = styled.div`
    margin-top: ${Spaces.FOUR};
    display: flex;
    flex-direction: column;
    gap: 20px;

`;

const BoxInput  = styled.input`
	width: 100%;
	height: 60px;
    background-color: ${Colors.NEUTRAL_BEGE};
	font-size: ${FontSizes.TWO};
	font-family: ${FontFamilies.TITLE};
    font-weight: ${FontWeights.REGULAR};
	border: none;
	outline: none;
    color: ${Colors.NEUTRAL_GREY};
    border-radius: ${BorderRadius.TWO};
    padding-left: ${Spaces.THREE};
`;

const TelInput = styled.input`
	width: 100%;
	height: 60px;
    background-color: ${Colors.NEUTRAL_BEGE};
	font-size: ${FontSizes.TWO};
	font-family: ${FontFamilies.TITLE};
	border: none;
	outline: none;
    padding-left: ${Spaces.THREE};
    color: ${Colors.NEUTRAL_GREY};
    border-radius: ${BorderRadius.TWO};
    font-weight: ${FontWeights.REGULAR};

`;

const MensaInput = styled.textarea`
	width: 100%;
	height: 250px;
    background-color: ${Colors.NEUTRAL_BEGE};
	font-size: ${FontSizes.TWO};
	font-family: ${FontFamilies.TITLE};
	border: none;
	outline: none;
    padding-left: ${Spaces.THREE};
    color: ${Colors.NEUTRAL_GREY};
    border-radius: ${BorderRadius.TWO};
    resize: none;
    padding-top: ${Spaces.TWO};
    font-weight: ${FontWeights.REGULAR};

`;

const TextForm = styled.p`
	font-size: ${FontSizes.THREE};
	font-family: ${FontFamilies.TITLE};
    color: ${Colors.NEUTRAL_WHITE};
    font-weight: ${FontWeights.REGULAR};
    margin: 0;

`;

const Button = styled.button`
	font-size: ${FontSizes.TWO};
	font-family: ${FontFamilies.TITLE};
    color: ${Colors.NEUTRAL_WHITE};
    font-weight: ${FontWeights.REGULAR};
    width: 40%;
    height: 50px;
    border-radius: ${BorderRadius.TWO};
    background: linear-gradient(90deg,rgba(89, 60, 143, 1) 37%, rgba(111, 69, 189, 1) 68%, rgba(184, 184, 255, 1) 100%);
    display: flex;
    align-self: center;
    justify-self: center;
    border: none;
    align-items:center;
    justify-content: center;
            @media (max-width: 750px) {
        	width: 60%;



	}
`;

function Alerta (){
    alert("Enviado com sucesso");
}

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
            <BoxForm>
                <DivInput>
                    <InputColumn>
                        <TextForm>
                            Nome
                        </TextForm>
                        <BoxInput type="text"required />
                    </InputColumn>
                    <InputColumn>
                        <TextForm>
                            E-mail
                        </TextForm>
                        <BoxInput type="email" required />
                    </InputColumn>
                </DivInput>
                <TextForm>
                    Telefone
                </TextForm>
                <TelInput type="tel" placeholder="(11) 12345-6789" required/>
                <InputSpace>
                    <TextForm>
                        Nos informe a sua dúvida!
                    </TextForm>
                    <MensaInput type="text" required/>
                </InputSpace>
                <Button type="submit" onClick={Alerta()}>
                    Enviar mensagem
                </Button>
            </BoxForm>
        </ContatoSection>

        
    );
}
