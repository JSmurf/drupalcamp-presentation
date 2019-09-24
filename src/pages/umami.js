import React from "react";
import { FeaturedRecipe } from "../components/featuredrecipe";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";

const UmamiPage = ( {data} ) => {
	const articles = data.allNodeArticle.nodes;
	const recipes = data.allNodeRecipe.nodes;
	return(
		<div>
			<Layout>
			<h1>This is a test</h1>
			<FeaturedRecipe title="test" description="This is a description that I am testing"/>
			<h2>Articles:</h2>
			{articles.map(article => (
				<p key={article.id}><Link to={"/umami" + article.path.alias}>{article.title}</Link></p>
			))}
			<h2>Recipes:</h2>
			{recipes.map(recipe => (
				<p key={recipe.id}><Link to={"/umami" + recipe.path.alias}>{recipe.title}</Link></p>
			))}
			</Layout>
		</div>
	)
}

export default UmamiPage;

export const query =  graphql`
query  {
	allNodeArticle {
		nodes {
		  id
		  title
		  path {
			alias
		  }
		}
	  }
	  allNodeRecipe {
		nodes {
		  id
		  title
		  path {
			alias
		  }
		}
	  }
	}
`