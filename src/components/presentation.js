import React from 'react';
import { graphql } from 'gatsby';
import { Deck, Slide, Text, Notes } from 'spectacle';

const PresentationPage = ( {data} ) => {
	const edges = data.allNodeSlide.edges;
return(
	<Deck>
		{edges.map(edge => (
			<Slide key={edge.node.field_position}>
				<Text><div dangerouslySetInnerHTML={{__html: edge.node.body.processed}} /></Text>
				<Notes>{ edge.node.field_notes.processed	}</Notes>
			</Slide>
		))}
	</Deck>
)
}
/*
export default PresentationPage;

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