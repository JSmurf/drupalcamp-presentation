import React from 'react';
import Image from 'gatsby-image';

import Layout from './layout';

const Article = ({ title, body, imageData, imageAlt }) => (
	<article>
		<Layout>
		<h1>{title}</h1>
		<Image fluid={imageData} alt={imageAlt} />
		<div dangerouslySetInnerHTML={{__html: body}} />
		</Layout>
	</article>
)

export default Article;