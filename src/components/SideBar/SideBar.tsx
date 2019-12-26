import React from 'react';
import styles from "./SideBar.module.scss"
import AsciArt from '../AsciArt';
import Palette from '../../models/palette';
import GlowingWrapper from '../GlowingWrapper';
import SideBarItem from './SideBarItem';
import SocialLinks from '../SocialLinks';

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
				<div>
				<GlowingWrapper color={Palette.blue}><AsciArt id="bigB" fontSize={7} color={Palette.blue} /></GlowingWrapper>
				<GlowingWrapper color={Palette.blue}><AsciArt id="bigR" fontSize={7} color={Palette.blue} /></GlowingWrapper>
				</div>
				{/*<p style={{color:Palette.pink,fontSize:"1rem"}}>[Barnabás@Rátki <span style={{color:"white"}}>{subPage}</span>]$</p>*/}

				<div className={styles.sidebarItemContainer}>
					{menuItems.map(ii => <SideBarItem {...ii} key={ii.title}/>)}
				</div>
				<SocialLinks />
			</div>
		);
	}
}

export default SideBar;
