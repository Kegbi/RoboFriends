import React from "react";
import './card.scss';

function Card({name, id, email}) {
  return(
    <div className={'card'}>
      <img src={`https://robohash.org/${id}?size=200x200`} alt="kitty"/>
      <h2 className={'card__header'}>{name}</h2>
      <p className={'card_mail'}>{email}</p>
    </div>
  )
}

export default Card;