# Chatbot de Captura e Qualificação de Leads

Bem-vindo ao repositório do projeto de desenvolvimento de chatbot para captação e qualificação de leads da nossa nova ferramenta focada em clientes PJ! Este chatbot foi projetado para interagir com os usuários, coletar informações importantes e facilitar a transição para atendimento humano quando necessário.

## Objetivo

O objetivo principal deste projeto é criar um chatbot que seja eficiente na captura de leads para nossos clientes PJ, fornecendo uma experiência interativa e personalizada.

## Planejamento

Foi utilizada a ferramenta Miro, para planejamento e detalhamento do projeto

## Funcionalidades Principais

- **Coleta de Opt-in e Nome:** O bot solicitará ao usuário opt-in e seu nome, validando a autenticidade do nome por meio da API [Check-Name](https://check-name.herokuapp.com/verify/).

- **Mensagem de Boas-vindas Personalizada:** O bot cumprimentará os usuários de maneira personalizada.

- **Quick Replies e Menus:** Utilizamos mensagens de menu e decisão do tipo Quick Reply para facilitar a navegação do usuário.

- **Envio de Imagem:** O bot enviará pelo menos uma imagem durante a interação.

- **Registro de Eventos para Tracking:** Inserimos pontos de registro de eventos em pelo menos duas etapas do fluxo para rastreamento.

- **Validação de Inputs:** Realizamos validação rigorosa dos inputs dos usuários, com mensagens de erro personalizadas.

- **Atendimento Humano:** Implementamos duas filas de atendimento humano - Comercial e Dúvidas Gerais, disponíveis nos horários seg-sex, das 08:00 às 18:00.

- **Avaliação Simples de Atendimento:** Ao finalizar a interação, solicitamos uma avaliação simples do atendimento.

- **Script de Tratamento de Informações do Usuário:** Inserimos um script em algum ponto do fluxo para tratar informações do usuário.

## Gerenciamento de Atendimento Humano

- **Mensagens Prontas para Desk:** Configuramos três mensagens prontas para serem utilizadas no atendimento humano.

- **Regras de Fila:** Estabelecemos regras específicas para as filas de atendimento comercial e dúvidas gerais.

- **Tickets e Tags:** Definimos a criação de cinco tickets por agente e configuramos três tags de finalização.

- **Tempo de Resposta:** Configuramos tempos de resposta tanto para atendentes quanto para agentes.

Este projeto representa um esforço conjunto para melhorar a experiência do cliente e impulsionar a captação de leads para nossos clientes PJ. Contribuições e sugestões são bem-vindas!

## Estrutura de pastas:

- ```fluxos```: pasta responsável por armazenar o versionamento dos fluxos

- ```validacao```: pasta responsável por armazenas os scripts que são validados ao longo do desenvolvimento, para utilização dentro do builder do blip
