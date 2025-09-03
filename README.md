# Agência Batatinha

Website desenvolvido para o Desafio 1 da Compass.Uol: Venda de Imóveis.

## Sobre o Projeto

O **Agência Batatinha** é uma plataforma web para divulgação e venda de imóveis, incluindo casas, hotéis e pontos comerciais. O site permite ao usuário visualizar oportunidades, acessar detalhes dos imóveis e realizar login para navegação segura.

## Estrutura de Pastas

```
Agencia-batatinha/
├── login.html
├── README.md
├── src/
│   ├── backend/
│   │   ├── home.js
│   │   └── login.js
│   ├── css/
│   │   ├── error.css
│   │   ├── home.css
│   │   └── login.css
│   ├── images/
│   │   └── ... (imagens do site)
│   ├── json/
│   │   └── data.json
│   └── pages/
│       ├── error.html
│       └── home.html
```

## Funcionalidades

- **Login:** Autenticação simples via email e senha.
- **Listagem de Imóveis:** Imóveis carregados dinamicamente do arquivo `data.json`.
- **Modal de Detalhes:** Visualização dos detalhes do imóvel em destaque.
- **Botão Sair:** Redireciona o usuário para a tela de login.
- **Design Responsivo:** Utilização da fonte Poppins e layout adaptável.

## Como Executar

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `login.html` em seu navegador.
3. Faça login com:
   - **Email:** example@gmail.com
   - **Senha:** batatinha123
4. Navegue pelas oportunidades e detalhes dos imóveis.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)

## Observações

- Os dados dos imóveis estão em `src/json/data.json`.
- As imagens utilizadas estão em `src/images/`.
- O projeto é apenas para fins de estudo e desafio.

---

Desenvolvido para