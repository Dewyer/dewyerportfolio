import React from 'react';
import styles from "./SideBarItem.module.scss"
import GlowingWrapper from '../../GlowingWrapper';
import Palette from '../../../models/palette';

export interface Props
{
	title: string
}

const SideBarItem: React.FC<Props> = (props: Props) =>
{

	return (
		<GlowingWrapper color={Palette.yellow}>
			<a className={styles.item}>{props.title}</a>
		</GlowingWrapper>
	);
}

export default SideBarItem;
