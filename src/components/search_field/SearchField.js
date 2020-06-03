import React from "react";
import './searchfield.scss';

function SearchField({searchChange}) {
  return (
    <div className={'searchfield'}>
      <input aria-label={'Search Robots'} className={'searchfield__input'} type="search" placeholder={'Search robots!'} onChange={searchChange}/>
    </div>
    )
}

export default SearchField;