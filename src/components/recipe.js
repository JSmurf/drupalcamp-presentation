import React from 'react';
import Image from 'gatsby-image';
import { Helmet } from 'react-helmet';

import Layout from "../components/layout";

import "./recipe.css"

const Recipe = ({ title, difficulty, ingredients, servings, prepTime, cookTime, summary, instructions, imageData, imageAlt }) => (
	<article>
		<Helmet>
			<title>{title + " - Umami"}</title>
		</Helmet>
		<Layout>
		<h1>{title}</h1>
		<div dangerouslySetInnerHTML={{__html: summary}} />
		<Image fluid={imageData} alt={imageAlt} />
		<p>Difficulty: {difficulty}</p>
		<p>Prep Time: {prepTime}</p>
		<p>Cook Time: {cookTime}</p>
		<p>Servings: {servings}</p>
		<ul className="ingredients-list">
		{ingredients.map((ingredient, i) => (
			<li key={i}>{ingredient}</li>
		))}
		</ul>
		<div dangerouslySetInnerHTML={{__html: instructions}} />
		</Layout>
	</article>
)

export default Recipe;