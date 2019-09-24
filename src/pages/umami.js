import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Card from "../components/card";

import "../components/card.css"

const UmamiPage = ( {data} ) => {
	const articles = data.allNodeArticle.nodes;
	const recipes = data.allNodeRecipe.nodes;
	return(
		<div>
			<Layout>
			<h1>Umami</h1>
			<h2>Articles:</h2>
			<div className="card-holder">
			{articles.map(article => (
				<Card title={article.title} path={"/umami" + article.path.alias} imageData={article.relationships.field_image.localFile.childImageSharp.fluid} imageAlt={article.field_image.alt} />
			))}</div>
			<h2>Recipes:</h2>
			<div className="card-holder">
			{recipes.map(recipe => (
				<Card title={recipe.title} path={"/umami" + recipe.path.alias} imageData={recipe.relationships.field_image.localFile.childImageSharp.fluid} imageAlt={recipe.field_image.alt} />
			))}</div>
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
		  field_image {
			  alt
		  }
		  relationships {
			  field_image {
				  localFile {
					  childImageSharp {
						  fluid {
							  ...GatsbyImageSharpFluid
						  }
					  }
				  }
			  }
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
		  field_summary {
			  processed
		  }
		  field_image {
			  alt
		  }
		  relationships {
			  field_image {
				  localFile {
					  childImageSharp {
						  fluid {
							  ...GatsbyImageSharpFluid
						  }
					  }
				  }
			  }
		  }
		}
	  }
	}
`