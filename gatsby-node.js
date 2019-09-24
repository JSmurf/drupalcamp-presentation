exports.createPages = async ({ actions, graphql, reporter }) => {
	const result = await graphql(`
	query {
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
	`);

	if (result.errors) {
		reporter.panic(result.errors);
	}

	result.data.allNodeArticle.nodes.forEach(article => {
		actions.createPage({
			path: "/umami" + article.path.alias,
			component: require.resolve("./src/templates/article.js"),
			context: {
				articleId: article.id
			}
		})
	})
	result.data.allNodeRecipe.nodes.forEach(recipe => {
		actions.createPage({
			path: "/umami" + recipe.path.alias,
			component: require.resolve("./src/templates/recipe.js"),
			context: {
				recipeId: recipe.id
			}
		})
	})
}