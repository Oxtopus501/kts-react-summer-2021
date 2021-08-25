import React from 'react';
import search from '../../images/search.svg';

function SearchForm() {
    return(
      <form className="search-form">
          <input  className="search-form__input" type="text" placeholder="Введите название организации" />
          <button className="search-form__button"><img src={search} /></button>
      </form>  
    ); 
}

export default SearchForm;