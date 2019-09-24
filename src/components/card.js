import React from "react";
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import "./card.css";

const Card = ({title, path, imageData, imageAlt}) => (
	<div className="card">
		<p><Link to={path}>{title}</Link></p>
		<Image fluid={imageData} alt={imageAlt} />
	</div>
)

export default Card;