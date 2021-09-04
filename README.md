# Medalists 🥇

Uma aplicação contruida com ReactJS, onde visualizamos os ranking dos país medalistas na olímpiadas (dados fictícios).

## 🌐 Acesso

https://medalists.vercel.app

![image](https://user-images.githubusercontent.com/39037180/132104329-82ef8086-7a0a-4dcf-9dfb-41ec674ebb6e.png)

![image](https://user-images.githubusercontent.com/39037180/132104341-409f399b-91f6-4e20-b83c-bb58ba0a1281.png)

## 📝 Detalhes

O ranking está ordenado por número de medalhas de ouro como prioridade e seguindo na prata e bronze como critério de desempate.

### ▶️ Operações básicas

1. Visulizar ranking dos países;
2. Buscar pela sigla de uma país;
3. Ver os medalistas de cada país ao clicar nele.
 
### 📱 Detalhes da tela

- No cabeçalho da primeira tela, temos um campo de busca;
- Abaixo do cabeçalho, uma lista com os países:
  - cada linha da lista tem a ordem, a sigla, quantidade de medalhas (ouro, prata e bronze e total);
- Na tela dos medalistas, temos:
  - Cabeçalho com a sigla do país e a quantidade de medalhas de cada tipo;
  - Grade com cada uma das medalhas conquistadas por esse país, contendo o simbolo do sexo do atleta, nome da atleta, tipo de medalha e modalidade;

## 🔨 Desenvolvimento

Aplicação frontend desenvolvida com o framework [ReactJS](https://pt-br.reactjs.org) com [Typescript](https://www.typescriptlang.org).

Usando também as bibliotecas 
- [React Icons](https://react-icons.github.io/react-icons/search) para uso de icones.
- [Context API](https://pt-br.reactjs.org/docs/context.html) para gerenciar os estados globais.
- [React Router DOM](https://reactrouter.com/web/guides/quick-start) para gerenciamento das rotas.
- [Styled Components](https://styled-components.com) para criação de componentes estilizados.

### 📁 Pastas

A organização da pasta "src" se deu usando um padrão de pastas que uso, onde
  - 📂 "src/components" ficam os componentes isolados utilizados na(s) página(s) da aplicação.
  - 📂 "src/pages" ficam as páginas principais da aplicação.
  - 📂 "src/styles" ficam folhas de estilização (css) padrões da aplicação como estilos e cores padrões.
  - 📂 "src/contexts" ficam os arquivos de contexto global.
  - 📂 "src/types" fica o arquivo com as interfaces do projeto para Typescript.
  - 📂 "src/routes" fica o(s) arquivo(s) relacionados às rotas da aplicação.
  - 📂 "src/app" fica o componente raiz que chama as outras página e algumas configurações globais.

Cada página ou componente tem uma pasta com o seu nome, contendo 
  - 📎 um arquivo tsx, para renderização do componente;
  - 📎 um aquivo ts, para estilização daquele componente.

### 🔷 Detalhes dos componentes

Componentes e página foram desenvolvidos usando o conceito de *functional components*, ou seja, os componentes renderizados são funções javascript.

## ⬇️ Instalação

Com o código clonado no computador, use o seguinte comando para instalar os pacotes 👇

```
npm install
```

Após o termino da instalação, use o seguinte comando para iniciar a aplicação localmente 👇

```
npm start
```

A aplicação rodará se possível em 🌐 http://localhost:3000.

## 🚀 Aprenda mais sobre React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
