const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A seguranca é quando todas as poessoas tem acesso a alimentos suficientes seguros e nutritivos para viver bem. Envolve a disponibilidade a acesso e o uso adequado dos alimentos.Quais são os pricipais desafios para garantir a  seguranca alimentar  em regios  vuneraveis  considerando fastores como  mudanças climaticas  desigualdades economicas  e conflitos?",
    
        alternativas: [
            {
                texto: "um dos pricipais desafios é a  mudança  climatica que afeta a producao agricula reduzindo a disponibulidade de alimentos  e almento os preços ",
            },
            {
                texto: "A desiglaldade economica tambem desenpenha um papel crucial pois  muitas  comunidades nao tem acesso e recursos adequadas para prodozir ou adiquirir alimentos ",
                
            }
        ]
    },
    {
        enunciado: "Deque maneira as politicas publicas  podem ser afetivas  na promoçao da aegurança alimentos, levados em conta  a nesssesidade  de garantir  acessos diponibilidades e utilizaçao adequadas dos alimentos?",
        alternativas: [
            {
                texto: "Politicas de subsidios agriculas podem aumentar a produçao local .",
                
            },
            {
                texto: "Programas de educaçao alimentar ajudam na escolha de refeiçoes saudadeveis?",
                
            }
        ]
    },
    {
        enunciado: "Quais são os desafios enfrentados pela comunidades urbanas em relaçao a seguranca alimentar, considerando o crecimento das cidades e a urbanizacao acelerada?",
        alternativas: [
            {Defe
                texto: "A falta de espaço para cultivos li,ita o acesso a alimentos frescos.",
               
            },
            {
                texto: "O alimentodos preços dos alimentos prejudicial as populaçoes de baixa renda.",
               
            }
        ]
    },
    {
        enunciado: " Como as praticas sustentaveis na agricultura podem influenciar possitivamente a segurança alimentar global especialmente em um cenario de crecente demandado por alimentos?",
        alternativas: [
            {
                texto: "A agricultura sustentavel melhorar a qualidade do solo e almenta a produtividade.",
                
            },
            {
                texto: "Praticas comorotacao de cultura reduzem o uso  de  pesticidos.",
                
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A segurança alimentar é crucial para o bem estar das sociedades e o desenvolvimento sustentavel.Garantir acessos a  alimentos nutritivos promove saude publica e fortalece economias locais alem de protejer o meio ambiente.Paraenfrentar desafios como  desigualdedes e mudanças climaticas é vital que governos organizacoes e  comunidadez colaborem A educaçao e a  consientizaçao sao essenciais para capacitar indivicuos a fazer escolhas alimentares saudaveis";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();