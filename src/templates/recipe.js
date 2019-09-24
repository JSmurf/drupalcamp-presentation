import React from 'react';
import { graphql } from 'gatsby';

import Recipe from '../components/recipe';

export const query = graphql`
query Recipe($recipeId: String!) {
	nodeRecipe(id: {eq: $recipeId}) {
	  title
	  field_recipe_instruction {
		processed
	  }
	  field_summary {
		processed
	  }
	  field_image {
		  alt
	  }
	  field_difficulty
	  field_cooking_time
	  field_ingredients
	  field_number_of_servings
	  field_preparation_time
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
`

const RecipeTemplate = ({ data }) => {
	const recipe = {
		title: data.nodeRecipe.title,
		difficulty: data.nodeRecipe.field_difficulty,
		ingredients: data.nodeRecipe.field_ingredients,
		servings: data.nodeRecipe.field_number_of_servings,
		prepTime: data.nodeRecipe.field_preparation_time,
		cookTime: data.nodeRecipe.field_preparation_time,
		summary: data.nodeRecipe.field_summary.processed,
		instructions: data.nodeRecipe.field_recipe_instruction.processed,
		imageData: data.nodeRecipe.relationships.field_image.localFile.childImageSharp.fluid,
		imageAlt: data.nodeRecipe.field_image.alt,
	}
	return <Recipe {...recipe} />
}

export default RecipeTemplate;