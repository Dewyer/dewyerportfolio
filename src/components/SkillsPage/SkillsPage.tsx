import React from 'react';
import styles from "./SkillsPage.module.scss"

export interface Props
{

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
				<p>I can write shit ass mumbo spaghet.</p>
			</div>
		);
	}
}

export default SkillsPage;
