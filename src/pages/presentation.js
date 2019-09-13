import React from "react"
import { Helmet } from 'react-helmet';

const PresentationPage = () => (
	<>
	<Helmet>
		<title>This is a test</title>
		<link rel="stylesheet" href={"reveal.css"} />
		<link rel="stylesheet" href={"white.css"} />
		<script src={"reveal.js"}></script>
	</Helmet>
	<div className="reveal" id="reveal">
			<div className="slides">
				<section>Slide 1</section>
				<section>Slide 2</section>
	<section>
					<h1>Reveal.js</h1>
					<h3>The HTML Presentation Framework</h3>
					<p>
						<small>Created by <a href="http://hakim.se">Hakim El Hattab</a> and <a href="https://github.com/hakimel/reveal.js/graphs/contributors">contributors</a></small>
					</p>
				</section>

				<section>
					<h2>Hello There</h2>
					<p>
						reveal.js enables you to create beautiful interactive slide decks using HTML. This presentation will show you examples of what it can do.
					</p>
				</section>			</div>
			</div>
	</>
)

export default PresentationPage;