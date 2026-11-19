# AI.md --- Guia para agentes de inteligência artificial

Este arquivo orienta agentes de IA que forem analisar, editar ou ampliar
o projeto **AlertaBueiro**. Leia estas instruções e examine os arquivos
existentes antes de realizar qualquer alteração.

## 1. Contexto do projeto

O AlertaBueiro é um projeto acadêmico da Global Solution 2026.2 da FIAP.
A proposta é apoiar a prevenção de acidentes relacionados a alagamentos,
usando a medição da altura da água perto de bueiros, alertas locais e
uma interface web com orientações.

O cenário apresentado no site é o bairro Rio Comprido, no Rio de
Janeiro.

**Importante:** a versão web atual possui um simulador manual. Não
afirme que o site recebe dados reais de sensores, que existe comunicação
com hardware ou que alertas luminosos e sonoros estão integrados, a
menos que isso seja efetivamente implementado no código.

## 2. Tecnologias e arquivos principais

-   `index.html`: estrutura e conteúdo da página.
-   `style.css`: estilos, layout, responsividade e aparência dos temas.
-   `app.js`: interações JavaScript, incluindo alternância de tema e
    simulador.
-   `assets/`: ícones e ilustrações utilizados pelo site.
-   `README.md`: documentação destinada a pessoas que utilizam ou
    avaliam o projeto.
-   `AI.md`: estas instruções para agentes de IA.

A versão web atual utiliza HTML, CSS e JavaScript. Python faz parte da
proposta de processamento do sistema, mas não presuma que há integração
Python ativa na página.

## 3. Funcionalidades que devem ser preservadas

### Alternância de tema

O botão `.btn-theme` alterna o atributo `data-theme` do elemento raiz
entre `light` e `dark`. A mudança também atualiza o texto e o ícone do
botão e a ilustração principal.

Ao alterar essa funcionalidade, mantenha os elementos sincronizados e
confira se os caminhos dos arquivos em `assets/` existem.

### Simulador

O simulador lê o valor do campo `#water-level` e atualiza o painel de
alerta. As faixas implementadas são:

-   **Normal:** valor menor que 5 cm.
-   **Atenção:** valor maior ou igual a 5 cm e menor que 15 cm.
-   **Alerta:** valor maior ou igual a 15 cm e menor que 30 cm.
-   **Perigo:** valor maior ou igual a 30 cm.

Cada estado atualiza o título, a descrição, o ícone, o texto alternativo
da imagem e a classe visual do painel.

Mantenha os mesmos limites e recomendações em todas as partes do
projeto, salvo solicitação explícita da equipe.

## 4. Diretrizes de implementação

1.  Antes de editar, leia os arquivos relacionados à tarefa e entenda
    como se conectam.
2.  Faça apenas as alterações necessárias para atender ao pedido.
3.  Preserve o comportamento existente, salvo quando a solicitação
    exigir uma mudança.
4.  Não substitua a estrutura ou as tecnologias do projeto por
    frameworks sem autorização.
5.  Reutilize os ícones, imagens, cores e padrões já existentes sempre
    que possível.
6.  Mantenha a interface coerente nos temas claro e escuro.
7.  Preserve a responsividade e a acessibilidade: use HTML semântico,
    textos alternativos úteis e controles compreensíveis.
8.  Evite duplicação de código, dependências desnecessárias e mudanças
    não relacionadas.
9.  Não invente arquivos, funções, integrações ou resultados de testes.
10. Não remova conteúdo ou funcionalidades sem explicar o motivo.

## 5. Identidade e experiência visual

O site deve continuar simples, claro e fácil de utilizar, especialmente
em situações nas quais a pessoa precisa compreender rapidamente o nível
de risco.

-   Preserve a identidade visual do AlertaBueiro.
-   Mantenha a distinção visual entre os quatro níveis de risco.
-   Utilize os recursos existentes em `assets/` antes de criar
    substitutos.
-   Garanta contraste e legibilidade nos dois temas.
-   Evite animações ou elementos decorativos que prejudiquem a
    compreensão.

## 6. Processo de trabalho esperado

Ao receber uma tarefa:

1.  Identifique quais arquivos serão afetados.
2.  Inspecione o código atual antes de propor uma solução.
3.  Implemente a mudança respeitando estas instruções.
4.  Confira possíveis impactos nas demais funcionalidades.
5.  Informe quais arquivos foram alterados e resuma o que mudou.
6.  Aponte limitações ou testes que não puderam ser realizados.

Se o pedido estiver ambíguo ou puder alterar significativamente o
funcionamento do projeto, peça esclarecimento antes de prosseguir.

## 7. Validação após alterações

Sempre que aplicável, confira:

-   Se a página abre sem erros.
-   Se os links de navegação levam às seções corretas.
-   Se o botão de tema alterna corretamente entre claro e escuro.
-   Se o simulador apresenta o estado correto para os limites de 5, 15 e
    30 cm.
-   Se ícones e ilustrações carregam nos dois temas.
-   Se o layout continua utilizável em telas menores.

Não declare que um teste foi executado se ele não foi realmente
realizado.

## 8. Equipe e contexto acadêmico

**Instituição:** FIAP\
**Projeto:** Global Solution 2026.2\
**Curso:** Engenharia de Software --- 1º ano

-   Diego Ramos Pereira Gonzalez --- RM574620
-   Daniel Souza Gomes --- RM575813
-   Guilherme Stock de Carvalho --- RM573464

------------------------------------------------------------------------

**Regra principal:** trate o código existente como fonte da verdade.
Ajude a evoluir o AlertaBueiro sem descaracterizar o projeto, quebrar
funcionalidades ou apresentar recursos planejados como se já estivessem
implementados.
