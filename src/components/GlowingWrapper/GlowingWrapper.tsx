import React from 'react';
import styles from "./GlowingWrapper.module.scss"

export interface Props
{
	color: string,
	blurIncrement?: number
}

export interface State
{

}

class GlowingWrapper extends React.Component<Props, State>
{
	constructor(props: Props)
	{
		super(props);

		this.state = {

		};
	}

	getCurrentTextShadow() : string
	{
		let parts:string[] = [];
		let blurIn = this.props.blurIncrement ? this.props.blurIncrement : 1;
		let shadowColor = this.props.color;

		for (let ii = 1;ii <= 8;ii++)
		{
			parts.push(`0 0 ${ii*blurIn}px ${ii == 1 ? "#fff" : shadowColor}`);
		}

		return parts.join(",");
	}

	render()
	{
		let textShadow = this.getCurrentTextShadow();
		const glowingStyle: React.CSSProperties =
		{
			color: this.props.color,
			textShadow: textShadow
		};

		return (
			<div style={glowingStyle}>
				{this.props.children}
			</div>
		);
	}
}

export default GlowingWrapper;
