import React from 'react';
import UmamiLayout from '../../components/umamilayout';
import { graphql } from "gatsby";
import Card from "../../components/card";

const ArticlesPage = ({data}) => {
	const articles = data.allNodeArticle.nodes;
	return(
	<UmamiLayout>
		<h1>Articles</h1>
			<div className="card-holder">
			{articles.map(article => (
				<Card title={article.title} path={"/umami" + article.path.alias} imageData={article.relationships.field_image.localFile.childImageSharp.fluid} imageAlt={article.field_image.alt} />
			))}</div>
	</UmamiLayout>
	)
}

export default ArticlesPage;

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
	  }
`