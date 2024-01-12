# DBM Motos ( em desenvolvimento )

## Descrição
"DBM Motos" é um site de concessionária de motos desenvolvido usando React JS, TypeScript, Tailwind CSS, e Next.js 13. Este projeto se destaca pela sua renderização eficiente no lado do servidor, funcionalidade de filtragem avançada, e uma forte presença de SEO. O site oferece uma experiência de usuário interativa e intuitiva, com um design focado na facilidade de uso.

## Características
- **Renderização no Lado do Servidor com Next.js 13:** Garante carregamento rápido e eficiente das páginas.
- **Filtragem Avançada:** Capacidade de filtrar motos por diferentes critérios, usando um combobox e modal personalizados.
- **SEO Otimizado:** Metadados de SEO são cuidadosamente planejados para melhorar a visibilidade online.
- **Design Responsivo:** Adapta-se perfeitamente a diferentes tamanhos de tela, proporcionando uma experiência consistente em todos os dispositivos.
- **Código Limpo e Organizado:** Estrutura de arquivos e pastas bem organizada, facilitando a manutenção e expansão do projeto.

## Como Usar
Clone o repositório usando:

```bash
git clone `https://github.com/MayzaMendesRodrigues/dbmMotosSite
```
Instale as dependências necessárias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash 
npm run dev
```

Acesse http://localhost:3000 no seu navegador para ver o site em funcionamento.

# Estrutura do Projeto

Este projeto segue uma estrutura organizada para facilitar a manutenção e expansão. Abaixo está uma visão geral dos principais diretórios e arquivos:


- **components/**: Contém todos os componentes reutilizáveis. Cada componente tem sua própria pasta com arquivos JS e CSS.
- **pages/**: Armazena as páginas do Next.js. Cada página é uma rota no seu aplicativo.
- **constants/**: Contém arquivos com valores constantes usados em todo o projeto.
- **public/**: Diretório para arquivos estáticos, como imagens, ícones e arquivos de mídia.
- **styles/**: Arquivos de estilo globais que afetam todo o projeto.
- **package.json**: Lista as dependências do projeto e scripts úteis para execução e desenvolvimento.

# Guia de Estilo - Projeto 


Este guia de estilo detalha as convenções de codificação e design usadas no projeto DBM Motos, especificamente para a configuração do Tailwind CSS e os estilos globais.



## Configuração do Tailwind CSS

O arquivo `tailwind.config.js` define a configuração do Tailwind CSS para o projeto. Ele inclui as definições para os caminhos do conteúdo, modo JIT, temas personalizados, paleta de cores

## Cores

O projeto utiliza uma paleta de cores específica que reflete a identidade visual da DBM Motos. As cores principais incluem:

- **Preto (#2B2C35)**: Usado predominantemente para textos e elementos de fundo.
- **Vermelho Primário (#FF0000)**: Cor de destaque para botões e links.
- **Laranja Secundário (#f79761)**: Utilizado para destaques secundários e elementos gráficos.
- **Branco Leve (rgba(59,60,152,0.03))**: Empregado em fundos e overlays para criar contraste suave.
- **Cinza (#747A88)**: Usado para textos secundários e elementos não destacados.

## Fontes

O projeto DBM Motos adota a fonte "Inter" para a maioria dos textos, proporcionando uma aparência moderna e legível. As variações de peso da fonte são usadas para criar hierarquia e ênfase nos diferentes elementos textuais.

- **Fonte Principal**: "Inter", sans-serif.
- **Estilos de Fonte**: Varia entre pesos leves e negritos, dependendo da importância e função do texto no layout.


Este guia de estilo deve ser referência para a manutenção da consistência visual em todo o desenvolvimento do projeto DBM Motos.

## Componentes do Projeto

CustomButton
- **Descrição**: CustomButton é um componente React que cria um botão personalizado. Utiliza propriedades definidas em CustomButtonProps para personalização.

Uso
```bash 
<CustomButton
  title="Nome do Botão"
  containerStyles="estilos-css-personalizados"
  handLeClick={funcaoManipuladora}
  btnType="button"
/>
```

Propriedades

- **title**: Texto do botão.
- **containerStyles**: Estilos CSS adicionais para o botão.
- **handLeClick**: Função para tratar eventos de clique.
- **btnType**: Tipo do botão (padrão: "button").

Footer

- **Descrição:** Footer é um componente que renderiza o rodapé do site. Inclui links úteis e informações de direitos autorais.

Uso

 ```bash 
<Footer/>
```


Hero 

- **Descrição:** é um componente de seção principal que apresenta um título, um subtítulo e um CustomButton. Ideal para destacar informações importantes na página inicial.

Uso  

 ```bash 
<Hero/>
```


Navbar
 

- **Descrição:**  Navbar é um componente de navegação que inclui um logotipo e um CustomButton para contato.

Uso  

 ```bash 
<Navbar/>
```


Seachbar
 

- **Descrição:**  SearchManuFacturer utiliza a biblioteca Headless UI para criar um combobox personalizado, permitindo a busca por fabricantes de motos.

Uso  

 ```bash 
<SearchManuFacturer
  manufacturer={valorFabricante}
  setManufacturer={funcaoDefinirFabricante}
/>

```

Propriedades

- **manufacturer**: Valor atual do fabricante selecionado.
- **setManufacturer**:  Função para atualizar o fabricante selecionado.






----------------------------------------------------------------------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
