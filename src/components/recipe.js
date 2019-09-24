import React from 'react';
import Image from 'gatsby-image';

const Recipe = ({ title, difficulty, ingredients, servings, prepTime, cookTime, summary, instructions, imageData, imageAlt }) => (
	<article>
		<h1>{title}</h1>
		<div dangerouslySetInnerHTML={{__html: summary}} />
		<Image fluid={imageData} alt={imageAlt} />
		<p>Difficulty: {difficulty}</p>
		<p>Prep Time: {prepTime}</p>
		<p>Cook Time: {cookTime}</p>
		<p>Servings: {servings}</p>
		<ul>
		{ingredients.map((ingredient, index) => (
			<li key={index}>{ingredient}</li>
		))}
		</ul>
		<div dangerouslySetInnerHTML={{__html: instructions}} />
	</article>
)

export default Recipe;