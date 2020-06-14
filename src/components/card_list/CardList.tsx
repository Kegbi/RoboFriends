import React from "react";
import Card from "./card/Card";
import { IRobotsState } from "../../types/types";

function CardList({ robots }: IRobotsState) {
	return (
		<div>
			{robots.map((user, i) => {
				return (
					<Card
						key={robots[i].id}
						id={robots[i].id}
						name={robots[i].name}
						email={robots[i].email}
					/>
				);
			})}
		</div>
	);
}

export default CardList;
