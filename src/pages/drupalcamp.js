import React from "react";
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const PresentationPage = ( {data} ) => {
	const edges = data.allNodeSlide.edges;
	return(
	<>
	<Helmet>
		<title>Cornell DrupalCamp 2019 Presentation</title>
		<link rel="stylesheet" href="/reveal.css" />
		<link rel="stylesheet" href="/moon.css" />
		<script src="/reveal.js"></script>
	</Helmet>
	<div className="reveal" id="reveal">
			<div className="slides">
		{edges.map(edge => (
			<section key={edge.node.field_position}>
				{edge.node.body.map(body => (
					<section>
				<div dangerouslySetInnerHTML={{__html: body.processed}} />
					</section>
				))}
				<aside className="notes"><div dangerouslySetInnerHTML={{ __html: edge.node.field_notes ? edge.node.field_notes.processed : '' }} /> </aside>
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
	allNodeSlide(filter: {relationships: {field_deck: {elemMatch: {name: {eq: "DrupalCamp"}}}}}) {
	  edges {
		node {
		  id
		  body {
			processed
		  }
		  field_notes {
			processed
		  }
		}
		previous {
		  id
		}
	  }
	}
  }
`