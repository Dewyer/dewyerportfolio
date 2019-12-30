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
		let menuItems: { title: string, url: string,current:boolean }[] = [
			{ title: "About", url: "/",current:false },
			{ title: "Skills", url: "/skills",current:false },
			{ title: "My Work", url: "#",current:false },
			{ title: "Contact", url: "#",current:false },

		];

		var currentSubPage = window.location.pathname;
		let pageItem = menuItems.find(x => x.url == currentSubPage);
		if (pageItem)
		{
			pageItem!.current = true;
		}

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
