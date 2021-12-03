# Getrak Storybook Design System

### Executar e consumir o Design System
Para executar o storybook, basta rodar o comando `npm run storybook`

### Testes unitários
Sempre que construi um novo componente, escreva seus testes e rode o comando `npm run test`

### Publicação e lançamento
Para publicar uma versão do seu storybook, você pode executar o comando `npm run build-storybook` e colocar o diretório `/storybook-static` em um servidor web ou levantar um servidor local para teste através do comando: `npx http-server ./path/to/build`

Antes de publicar uma versão, você deve fazer o `build` dos componentes, através do comando `npm run build`

Para lançar uma nova versão basta realizar um merge na branch `main`. É fortemente recomendado que você utilize os `labels` do GitHub: `major`, `minor`, `patch`, `skip-release`, `prerelease`, `internal`, `documentation`, etc.

### Workflow de evolução
Para entender todo o workflow de evolução do storybook, leia a doc [Storybook: Design System for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/react/pt/workflow/)

Documentação oficial em [Storybook](https://storybook.js.org).

## Colabore e evolua o Getrak Storybook Design System
[Open issue](https://github.com/denysrocha/getrak-storybook/issues)
