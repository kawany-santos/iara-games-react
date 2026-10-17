import { Header } from "../common-components/Header/Header";
import { SearchSection } from "../common-components/SearchSection/SearchSection";
import { CardsSection } from "../common-components/CardsSection/CardsSection";
import { ComumQuestions } from "../common-components/ComunQuestions/ComumQuestions";
import { Contato } from "../common-components/Contato/Contato";

import { SearchInput } from "../common-components/SearchInput/SearchInput";

import { Titulo } from "../common-components/Titulo/Titulo";
import { SearchTopico } from "../common-components/SearchTopico/SearchTopico";

export function Loja() {
	return (
		<div>
			<Header>
				LOJA 
				BIBLIOTECA
				FORUM
				SUPORTE
			</Header>
			<SearchSection>
				<SearchTopico>Suporte da Iara Games</SearchTopico>
				<Titulo>Como podemos ajudar?</Titulo>
				<SearchInput placeholder="Descreva o seu problema aqui" />
			</SearchSection>
			
			<CardsSection>
			</CardsSection>

			<ComumQuestions></ComumQuestions>

			<Contato></Contato>
		</div>
	);
}