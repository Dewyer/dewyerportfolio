import React from 'react';
import styles from "./MainMenu.module.scss";
import SideBar from '../SideBar';
import Palette from '../../models/palette';
import TerminalBeginLine from '../TerminalBeginLine';
import TerminalLoadingAnimation from '../TerminalLoadingAnimation';
import { RouteComponentProps } from 'react-router-dom';

export interface Props
{

}

export interface State
{
	animated:boolean
}

class MainMenuContainer extends React.Component<Props,State>
{
	constructor(props:Props)
	{
		super(props);

		this.state = {
			animated:false
		};
	}

	componentDidMount()
	{
		setTimeout(()=>{
			this.setState({animated:true});
		},1200);
	}

	render(){
		const subPage = "/home";

		return (
			<div className={styles.container}>
				<SideBar />
				<div style={{maxWidth:"89%"}}>
					<div className={styles.content} style={{transform:`scaleY(${this.state.animated ? 1 : 0})`}}>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default MainMenuContainer;
