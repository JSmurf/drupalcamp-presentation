import React from 'react';
import { graphql } from 'gatsby';
import { Deck, Slide, Heading, Text, Notes } from 'spectacle';

const PresentationPage = ( {data} ) => {
	const edges = data.allNodeSlide.edges;
return(
	<Deck>
		<Slide>
			<Heading>This is a slide</Heading>
			<Text>This is some text</Text>
			<Notes>These are some notes</Notes>
		</Slide>
		{edges.map(edge => (
			<Slide key={edge.node.field_position}>
				<Text>{ edge.node.body.processed }</Text>
				<Notes>{ edge.node.field_notes.processed	}</Notes>
			</Slide>
		))}
		<Slide>
			<Text><div dangerouslySetInnerHTML={{__html: edges[0].node.body.processed}} /></Text>
			<Notes><div dangerouslySetInnerHTML={{ __html: edges[0].node.field_notes.processed}} /></Notes>
		</Slide>
	</Deck>
)
}

export default PresentationPage;

export const query = graphql`
query
{
		allNodeSlide(sort: {fields: field_position}) {
		  edges {
			node {
			  body {
				processed
			  }
			  id
			  title
			  field_notes {
				processed
			  }
			  field_position
			}
		  }
		}
}
`

/**
			{ edges.map(edge => (
				<Slide id={edge.node.id}>
				<Notes>
				<ul>
					{ edge.node.field_notes.map((note, index) => (
						<li id={edge.node.id + index} dangerouslySetInnerHTML={{ __html: note.processed }}></li>
					))}
				</ul>
				</Notes>
				</Slide>
			))}
*/