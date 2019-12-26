import React from 'react';
import styles from "./AsciArt.module.scss"
import textAssets from "../../assets/art.json";

export interface Props
{
	id: string,
	fontSize:number,
	color?:string
}

export interface State
{

}

class AsciArt extends React.Component<Props, State>
{
	constructor(props: Props)
	{
		super(props);

		this.state = {

		};
	}

	getCurrentTextAsset(): string
	{
		let assets:{[key:string]:string} = textAssets as any;

		if (assets[this.props.id] != undefined)
		{
			return assets[this.props.id];
		}
		else
		{
			return "-noid-";
		}
	}


	render()
	{
		let customStyle:React.CSSProperties = {
			fontSize:this.props.fontSize
		};
		if (this.props.color)
		{
			customStyle = {...customStyle,
				color: this.props.color
			};
		}

		return (
			<pre style={customStyle}>
				{this.getCurrentTextAsset()}
			</pre>
		);
	}
}

export default AsciArt;
