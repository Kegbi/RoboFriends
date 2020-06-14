import React from "react";
import "./card.scss";

interface CardStatelessProps {
	name: string;
	email: string;
	id: number;
}

const Card: React.SFC<CardStatelessProps> = ({ name, id, email }) => {
	return (
		<div className={"card"}>
			<img src={`https://robohash.org/${id}?set=set3`} alt="kitty" />
			<h2 className={"card__header"}>{name}</h2>
			<p className={"card_mail"}>{email}</p>
		</div>
	);
};

export default Card;
