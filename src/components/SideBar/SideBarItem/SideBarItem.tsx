import React from 'react';
import styles from "./SideBarItem.module.scss"

export interface Props
{
	title: string,
	url:string
}

const SideBarItem: React.FC<Props> = (props: Props) =>
{

	return (
		<a className={styles.item} href={props.url}>{props.title}</a>
	);
}

export default SideBarItem;
