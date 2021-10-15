import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb'
import './App.css'
import MovieRow from './components/MovieRow'

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(()=> {
    //carregar tudo
    const loadAll = async () => {
      // Pegando a lista Total de filmes
      let list = await Tmdb.getHomeList();
      //console.log(list) //funcionando ok o retorno da API
      setMovieList(list);
    }

    loadAll();
  }, []);

   return (
     <div className="page">
       <section className="lists">
         {movieList.map((item, key)=>  //item fazendo o papel de element
         (
           <MovieRow key={key} title={item.title} items={item.items}/>
         ))}
       </section>
     </div>
   )
 }