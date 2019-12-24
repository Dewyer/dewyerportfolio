import React from 'react';
import "MainMenu.module.scss";

export interface Props
{

}

export interface State
{

}

class MainMenuContainer extends React.Component<Props,State>
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
				{this.props.children}
			</div>
		);
	}
}

export default MainMenuContainer;
