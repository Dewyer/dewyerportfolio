import React from 'react';
import styles from "./SkillsPage.module.scss"
import { RouteComponentProps, Route } from 'react-router-dom';
import TerminalBeginLine from '../TerminalBeginLine';

export interface Props
{
	route:RouteComponentProps
}

export interface State
{

}

class SkillsPage extends React.Component<Props,State>
{
	constructor(props:Props)
	{
		super(props);

		this.state = {

		};
	}

	render(){
		return (
			<div>
				<TerminalBeginLine routeProps={this.props.route} />
				<p>Hard Skills:</p>
				<ul>
					<li>CSS</li>
					<li>CSS</li>
					<li>CSS</li>
					<li>CSS</li>

				</ul>
			</div>
		);
	}
}

export default SkillsPage;
