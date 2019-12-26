import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./SocialLinksItem.module.scss"
import Palette from '../../../models/palette';


export interface Props
{
	url:string,
	faIcon:any
}

const SocialLinksItem:React.FC<Props> = (props:Props) =>
{

	return (
		<a href={props.url} style={{ color: Palette.grey }}><FontAwesomeIcon size={"1x"} icon={props.faIcon} /></a>
	);
}

export default SocialLinksItem;
