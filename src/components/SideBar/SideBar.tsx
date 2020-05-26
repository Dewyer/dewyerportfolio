import React from 'react';
import styles from "./SideBar.module.scss"
import AsciArt from '../AsciArt';
import Palette from '../../models/palette';
import GlowingWrapper from '../GlowingWrapper';
import SideBarItem from './SideBarItem';
import SocialLinks from '../SocialLinks';
import {SideBarItemProps} from "./SideBarItem"

export interface Props
{

}

export interface State
{
	currentPage:string
}

class SideBar extends React.Component<Props, State>
{
	constructor(props: Props)
	{
		super(props);
		this.onMenuButtonClicked = this.onMenuButtonClicked.bind(this);

		this.state = {
			currentPage:window.location.pathname
		};
	}

	onMenuButtonClicked(btnUrl:string)
	{
		this.setState({currentPage:btnUrl});
	}

	render()
	{
		let menuItems: SideBarItemProps [] = [
			{ title: "About", url: "/", current: false, onClick: () => { this.onMenuButtonClicked("/")} },
			{ title: "Skills", url: "/skills", current: false, onClick: () => { this.onMenuButtonClicked("/skills") } },
			{ title: "My Work", url: "/work", current: false, onClick: () => { this.onMenuButtonClicked("/work") } },
			{ title: "Contact", url: "/contact", current: false, onClick: () => { this.onMenuButtonClicked("/contact") } },

		];

		let pageItem = menuItems.find(x => x.url === this.state.currentPage);
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
