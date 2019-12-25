import React from 'react';
import styles from "./MainMenu.module.scss";
import SideBar from '../SideBar';

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
				<SideBar />
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default MainMenuContainer;
