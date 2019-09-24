import React from 'react';
import Layout from '../../components/layout';
import { graphql } from "gatsby";
import Card from "../../components/card";

const RecipesPage = ({data}) => {
	const recipes = data.allNodeRecipe.nodes;
	return(
	<Layout>
		<h1>Recipes</h1>
			<div className="card-holder">
			{recipes.map(recipe => (
				<Card title={recipe.title} path={"/umami" + recipe.path.alias} imageData={recipe.relationships.field_image.localFile.childImageSharp.fluid} imageAlt={recipe.field_image.alt} />
			))}</div>
	</Layout>
)}

export default RecipesPage;

export const query =  graphql`
query  {
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