import React from 'react';
import styles from "./SocialLinks.module.scss"
import SocialLinksItem from './SocialLinksItem';
import { faLinkedin,faFacebook } from '@fortawesome/free-brands-svg-icons'

export interface Props
{

}

const SocialLinks:React.FC<Props> = (props:Props) =>
{

	const links:{url:string,faIcon:any}[] = [
		{ url: "https://www.linkedin.com/in/barnab%C3%A1s-r%C3%A1tki-171b9b144/", faIcon: faLinkedin},
		{ url: "https://www.facebook.com/barna42", faIcon: faFacebook}
	];

	return (
		<div className={styles.container}>
			{links.map(x=><SocialLinksItem url={x.url} faIcon={x.faIcon}/>)}
		</div>
	);
}

export default SocialLinks;
