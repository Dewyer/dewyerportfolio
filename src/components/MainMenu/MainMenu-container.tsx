import React from 'react';
import styles from "./MainMenu.module.scss";

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
			<div className={styles.container}>
				<div style={{backgroundColor:"red"}}>
					Sidebar
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default MainMenuContainer;
