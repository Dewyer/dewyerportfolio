import React from 'react';
import styles from "./TerminalLoadingAnimation.module.scss"

export interface Props
{
	styles?:React.CSSProperties
}

export interface State
{
	atStep:number
}

const ANIMATION_SPEED = 300;

class TerminalLoadingAnimation extends React.Component<Props,State>
{
	constructor(props:Props)
	{
		super(props);
		this.updateAnimation = this.updateAnimation.bind(this);

		this.state = {
			atStep:0
		};
	}

	animationSteps:string[] = ["\\  .","|  ..","/  .","-- .."];
	timer:any;

	componentDidMount()
	{
		this.timer = setInterval(this.updateAnimation, ANIMATION_SPEED);
	}

	componentWillUnmount()
	{
		clearInterval(this.timer);
	}

	updateAnimation()
	{
		this.setState({atStep:(this.state.atStep+1)%this.animationSteps.length});
	}

	render(){
		return (
			<pre style={this.props.styles}>{this.animationSteps[this.state.atStep]}</pre>
		);
	}
}

export default TerminalLoadingAnimation;
