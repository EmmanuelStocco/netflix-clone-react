//MovieRow linha de filmes 
//items fazendo papel de elemento no map
//o proprio TMDB manda key

import React, {useState} from 'react';
import './MovieRow.css'
//imports do materialui
//import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
//import NavigateNextIcon from '@mui/icons-material/NavigateNext';
//Devido a erros no MUI, refiz os imports agora baseado em sua versão antiga (material-ui)
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState (-400)

    //a passagem vai com a width da listagem
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);//cada clique rola metade da tela do user
        if(x > 0){ //maximo é zero na rolagem
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150; //pegando a largura dos itens da lista inteira 
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60; //-- o padding
        }
        setScrollX(x)
    }

    return (
        <div className="movieRow"> 
            <h2> {title} </h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=> (
                      <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                      </div >
                    ))}
                </div>
            </div>
        </div>
    )
}