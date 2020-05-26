import React from 'react';
import styles from "./SideBarItem.module.scss"
import Palette from '../../../models/palette';
import { Link } from 'react-router-dom';

export interface Props
{
	title: string,
	url:string,
	current:boolean,
	onClick():void
}

const SideBarItem: React.FC<Props> = (props: Props) =>
{

	return (
		<Link to={props.url} onClick={props.onClick} className={styles.item} style={{color: props.current ? Palette.pink : Palette.yellow}} href={props.url}>{props.title}</Link>
	);
}

export default SideBarItem;
