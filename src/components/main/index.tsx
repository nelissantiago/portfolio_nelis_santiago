/* eslint-disable @next/next/no-img-element */
import { Home } from './home'
import { TextWhoIam } from './who'
import { Project } from './project'
import { Service } from './service'
import { KnowledgeMy } from './knowledge'

export function Main() {
    return (
        <>
        <main>
            <Home 
                title={"Nelis Santiago"}

                who={"Olá, eu sou"} 
                writer="Front-End Developer." 
            />

            <TextWhoIam 
                title={"Quem sou"} 

                textContainer={"Olá meu nome é nelis santiago,  sou freelancer como front-end developer, no momento trabalho desenvolvendo aplicaçoes front-end bem otimizadas com codigos perfeitos.."}        
            />

            <Project 
                title={"Projetos"} 

                projectContainerText={"Em Breve..."} 
                projectText={"Pegue o café e espere um momento, estou desenvolvendo o projeto."}
            />
            
            <Service 
                title={"Servicos"} 

                TitleCard={"Desenvolvimento"}
                textContainerCard={"Desenvolvo sites profisionais, portfolios, blogs, hospedagem, minecraft, etc..."} 
                
                TitleCardTwo={"Typescript"}
                textContainerCardTwo={"Desenvolvo de forma clara que seja, profisional é que nossos clientes fiquem satisfeitos."}

                TitleCardTheree={"Responsive"}
                textContainerCardTheree={"Meu objetivo é sempre deixa um codigo-limpo é perfeito, é sempre fazer um site otimizado para nossos clientes."}
            />

            <KnowledgeMy title={"Conhecimentos"}/>
        </main>
        </>
    )
}