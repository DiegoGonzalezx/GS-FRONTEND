# 🌧️ AlertaBueiro

**Saiba do alagamento antes de pisar na água.**

O **AlertaBueiro** é um projeto acadêmico desenvolvido para a **Global
Solution 2026.2 da FIAP**. A proposta é ajudar moradores e pedestres a
reconhecer situações de risco causadas por alagamentos urbanos e tomar
decisões mais seguras.

O projeto tem como cenário o bairro **Rio Comprido, no Rio de Janeiro**.
A solução proposta combina a medição do nível da água próximo a bueiros,
alertas luminosos e sonoros na rua e uma página web que apresenta
orientações de segurança.

> **Estado atual:** este repositório contém a interface web e um
> simulador interativo que funciona com valores informados manualmente.
> A integração física com sensores e os alertas externos fazem parte da
> proposta da solução e não devem ser considerados conectados ao site
> nesta versão.

## Objetivo

Contribuir para a prevenção de acidentes durante alagamentos, oferecendo
informações claras sobre o nível da água e orientações adequadas para
cada situação.

## Funcionalidades do site

-   **Simulador de nível da água:** o usuário informa a altura da água
    em centímetros e consulta a classificação correspondente.
-   **Quatro níveis de risco:** Normal, Atenção, Alerta e Perigo.
-   **Orientações de segurança:** cada nível apresenta uma recomendação
    para a população.
-   **Modo claro e modo escuro:** permite alternar o tema da interface.
-   **Conteúdo explicativo:** apresenta o problema, a proposta de
    funcionamento e o impacto esperado da solução.
-   **Interface responsiva:** estilos preparados para diferentes
    tamanhos de tela.

## Classificação do simulador

  ------------------------------------------------------------------------
  Nível                               Altura da água Orientação
                                                     apresentada
  --------------------- ---------------------------- ---------------------
  Normal                               Menos de 5 cm Rua sem alagamento no
                                                     momento.

  Atenção                   De 5 cm a menos de 15 cm Evite a rua e retire
                                                     o carro de perto do
                                                     bueiro.

  Alerta                   De 15 cm a menos de 30 cm Não atravesse a pé: a
                                                     correnteza pode
                                                     derrubar uma pessoa.

  Perigo                               30 cm ou mais Não saia de casa nem
                                                     tente passar de
                                                     carro. Fique longe de
                                                     postes e fios.
  ------------------------------------------------------------------------

Os limites acima correspondem às condições implementadas no simulador
JavaScript.

## Como a solução foi planejada

A proposta geral é organizada em quatro etapas:

1.  **Medição:** um sensor próximo ao bueiro mede a altura da água.
2.  **Processamento:** a lógica prevista em Python analisa a medição e
    identifica o nível de risco.
3.  **Alerta local:** um dispositivo emite sinais luminosos e sonoros
    para avisar quem está nas proximidades.
4.  **Orientação no site:** a interface apresenta o nível de risco e
    recomenda como agir.

A descrição representa a proposta do projeto. O simulador disponível no
site é uma demonstração manual dessa classificação.

## Tecnologias

-   **HTML5:** estrutura e conteúdo da página.
-   **CSS3:** apresentação visual, layout e temas.
-   **JavaScript:** alternância de tema e lógica do simulador.
-   **Python:** tecnologia prevista para o processamento das informações
    do sensor na solução proposta.

## Como executar

1.  Baixe ou clone este repositório.
2.  Abra a pasta do projeto.
3.  Abra o arquivo `index.html` em um navegador moderno.

Não é necessário instalar dependências para executar a versão web atual.

## Como testar o simulador

1.  Abra a seção **Simulador** na página.
2.  Informe a altura da água em centímetros.
3.  Clique em **Ver nível**.
4.  Confira a classificação e a orientação exibidas.

Teste valores abaixo de 5 cm, entre 5 e 15 cm, entre 15 e 30 cm e a
partir de 30 cm para conferir os quatro estados.

## Estrutura de arquivos

``` text
AlertaBueiro/
├── index.html
├── style.css
├── app.js
├── README.md
├── AI.md
└── assets/
    ├── icones/
    ├── hero-rua-light.svg
    └── hero-rua-dark.svg
```

A pasta `assets/` reúne os ícones e as ilustrações utilizados pela
interface.

## Relação com os ODS

O projeto apresenta relação com os seguintes Objetivos de
Desenvolvimento Sustentável da ONU:

-   **ODS 11 --- Cidades e Comunidades Sustentáveis:** busca contribuir
    para a segurança de pessoas em áreas urbanas sujeitas a alagamentos.
-   **ODS 13 --- Ação Contra a Mudança Global do Clima:** propõe uma
    iniciativa de prevenção e adaptação aos impactos de chuvas intensas.

## Equipe

**FIAP --- Global Solution 2026.2**\
**Curso:** Engenharia de Software --- 1º ano\
**Local:** Rio de Janeiro --- RJ

  Integrante                     RM
  ------------------------------ ----------
  Diego Ramos Pereira Gonzalez   RM574620
  Daniel Souza Gomes             RM575813
  Guilherme Stock de Carvalho    RM573464

------------------------------------------------------------------------

Projeto acadêmico desenvolvido pela equipe AlertaBueiro.
