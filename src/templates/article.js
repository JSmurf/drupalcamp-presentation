import React from 'react';
import { graphql } from 'gatsby';

const ArticleTemplate = ({ data }) => {
	const article = {
		title: data.nodeArticle.title
	};

};	

export default ArticleTemplate;