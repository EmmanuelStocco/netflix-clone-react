const API_KEY = '947a3289c9214efde4907bcd2b9294ab';
const API_Base = 'https://api.themoviedb.org/3';

//função pega o json -> fetch para req http
const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_Base}${endpoint}`);
    const json = await req.json();
    return json
}

//em gethomelist chamamos a função assincrona invocando todos os generos de uma vez
//items: basicFetch apenas chama a url + a url_genero + crendecialChave

export default {
    //pegar lista da home
    getHomeList: async() =>{
        return[
          {
              slug: 'originals',
              title: 'Originais do netflix',
              items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`) //passando o parametro endpoint)
          },
          {
            slug: 'trending',
            title: 'Recomendados para você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`) 
          },
          {
              slug: 'toprated',
              title: 'Em alta',
              items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`) 
          },
          {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`) 
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'terror',
            title: 'Horror',
            items:await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentarios',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
           },
        ];
    },
    //lidando com api para pegar filme ou serie espcifica dados para exibição de capa
    getMovieInfo: async (movieID, type ) => {
        let info = {};

        if(movieID){
            switch(type) {
                //filmes
                case 'movie':
                    info = await basicFetch(`/movie/${movieID}?language=pt-BR&api_key=${API_KEY}`)
                 break;

                 //seriado
                 case 'tv':
                    info = await basicFetch(`/tv/${movieID}?language=pt-BR&api_key=${API_KEY}`)
                 break;
                 default:
                     info=null;
                     break;
            }
        }

        return info;
    }
}