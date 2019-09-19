import React from "react";
import { Helmet } from 'react-helmet';

const PresentationPage = ( {data} ) => {
	const edges = data.allNodeSlide.edges;
	return(
	<>
	<Helmet>
		<title>This is a test</title>
		<link rel="stylesheet" href="/reveal.css" />
		<link rel="stylesheet" href="/white.css" />
		<script src="/reveal.js"></script>
	</Helmet>
	<div className="reveal" id="reveal">
			<div className="slides">
		{edges.map(edge => (
			<section key={edge.node.field_position}>
				<div dangerouslySetInnerHTML={{__html: edge.node.body.processed}} />
				<aside className="notes">{ edge.node.field_notes.processed	}</aside>
			</section>
		))}
			</div>
		</div>
	</>
)}

export default PresentationPage;

export const query = graphql`
query
{
	allNodeSlide {
	  edges {
		node {
		  title
		  id
		  body {
			processed
		  }
		  field_notes {
			processed
		  }
		}
	  }
	}
  }
`