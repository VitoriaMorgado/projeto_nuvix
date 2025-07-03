export interface CardSH {
    id: number;
    categoria: string;
    title: string;
    descricao: string;
    imagem: string;

}

const conteudo: CardSH[] = [
    {
        id: 1,
        categoria: "Jogos Feitos Para Você",
        title: "Explore o Catálogo",
        descricao: "Descubra o catálogo da Nuvix, repleto de jogos incríveis, desde lançamentos AAA até indies inovadores.",
        imagem: "/saiba_mais_catalogo_principal.jpg"
    },
    {
        id: 2,
        categoria: "Jogos classicos",
        title: "Os melhores jogos",
        descricao: "Na Nuvix, você pode jogar os grandes sucessos de antigamente diretamente do navegador, sem precisar de consoles antigos ou downloads pesados. É nostalgia na ponta dos dedos, com qualidade e praticidade!",
        imagem: "/saiba_mais_arcade_principal.jpg"
    },
    {
        id: 3,
        categoria: "Jogue Com Amigos",
        title: "Sessão CO-OP",
        descricao: "Junte-se aos amigos e viva a emoção dos jogos co-op! Na Nuvix, você pode explorar mundos, enfrentar desafios e se divertir em equipe. A diversão é garantida, onde quer que você esteja!",
        imagem: "/saiba_mais_coop.jpg"
    },
    {
        id: 4,
        categoria: "Aproveite na Nuvix",
        title: "Os melhores preços",
        descricao: "Compre chaves para os seus favoritos. Diversidade e praticidade para todos os tipos de jogadores.",
        imagem: "/saiba_mais_planos.png"
    },
];

export default conteudo;
