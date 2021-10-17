import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb'
import './App.css'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState([])

  useEffect(()=> {
    //carregar tudo
    const loadAll = async () => {
      // Pegando a lista Total de filmes
      let list = await Tmdb.getHomeList();
      //console.log(list) //funcionando ok o retorno da API
      setMovieList(list);

      //pegando o Fatured
      //Pegando a lista de originais
      let originals = list.filter(i=>i.slug === 'originals');
      //numero aleatorio multiplicado pela quantidade de items que tenho na lista
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1)) //gerando numero aleatorio entre 0 e 19 (array)
      let chosen = originals[0].items.results[randomChosen]
      //console.log(chosen)
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      //console.log(chosenInfo)
      setFeaturedData(chosenInfo)
    }

    loadAll();
  }, []);

   return (
     <div className="page">

       {featuredData && //n é loop ent sem key
        <FeaturedMovie item={featuredData} />
       }

       

       <section className="lists">
         {movieList.map((item, key)=>  //item fazendo o papel de element
         (
           <MovieRow key={key} title={item.title} items={item.items}/>
         ))}
       </section>
     </div>
   )
 }