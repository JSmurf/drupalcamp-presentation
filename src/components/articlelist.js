import { React } from "react";

const ArticleList = props => {
	console.log(props.list)
	return (
		<div className="article-list">
			{props.list.map(edge => {
				return(
					<p>{edge.node.id}</p>
				)
			})}
		</div>
	)
}
export default ArticleList;

