import React from "react";

export const FeaturedRecipe = props => {
	return(
		<div>
			<p>{props.title}</p>
			<p>{props.description}</p>
		</div>
	)
}

