import React from 'react';
import styles from "./TerminalBeginLine.module.scss"
import Palette from '../../models/palette';

export interface Props
{

}

const TerminalBeginLine:React.FC<Props> = (props:Props) =>
{
	const subPage = "/home";

	return (
		<p style={{ color: Palette.pink, fontSize: "1rem" }}>[Barnabás@Rátki <span style={{ color: "white" }}>{subPage}</span>]$</p>
	);
}

export default TerminalBeginLine;
