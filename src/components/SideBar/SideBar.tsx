import React from 'react';
import styles from "./SideBar.module.scss"
import AsciArt from '../AsciArt';
import Palette from '../../models/palette';
import GlowingWrapper from '../GlowingWrapper';
import SideBarItem from './SideBarItem';

export interface Props
{

}

export interface State
{

}

class SideBar extends React.Component<Props, State>
{
	constructor(props: Props)
	{
		super(props);

		this.state = {

		};
	}

	render()
	{
		let menuItems: { title: string, url: string }[] = [
			{ title: "About", url: "#" },
			{ title: "Skills", url: "#" },
			{ title: "My Work", url: "#" },
			{ title: "Contact", url: "#" },

		];


		return (
			<div className={styles.container}>
				<GlowingWrapper color={Palette.blue}><AsciArt id="logo" maxWidth={160} color={Palette.blue} /></GlowingWrapper>

				<div>
					{menuItems.map(ii => <SideBarItem title={ii.title} key={ii.title}/>)}
				</div>
			</div>
		);
	}
}

export default SideBar;
