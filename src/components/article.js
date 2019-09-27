import React from 'react';
import Image from 'gatsby-image';

import UmamiLayout from './umamilayout';

const Article = ({ title, body, imageData, imageAlt }) => (
	<article>
		<UmamiLayout>
		<h1>{title}</h1>
		<Image fluid={imageData} alt={imageAlt} />
		<div dangerouslySetInnerHTML={{__html: body}} />
		</UmamiLayout>
	</article>
)

export default Article;