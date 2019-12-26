import React from 'react';
import styles from "./AboutPage.module.scss"
import profilePic from "../../assets/profilepic.jpg";

export interface Props
{

}

export interface State
{

}

class AboutPageContainer extends React.Component<Props, State>
{
	constructor(props: Props)
	{
		super(props);

		this.state = {

		};
	}

	render()
	{
		return (
			<div className={styles.container}>
				<div className={styles.textPart}>
					<h1>Hello, I am Barnabás Rátki</h1>
					<p>Full Stack developer and loving it. Web developer hacker wannabe. Worked at startups, doing contract work at my own company. </p>
				</div>
				<img className={styles.profilePic} src={profilePic}/>
			</div>
		);
	}
}

export default AboutPageContainer;
