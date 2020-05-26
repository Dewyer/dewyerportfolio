import React, { useState, useEffect } from 'react';
import styles from "./TerminalBeginLine.module.scss"
import Palette from '../../models/palette';
import TerminalLoadingAnimation from '../TerminalLoadingAnimation';
import { RouteComponentProps } from 'react-router-dom';

export interface Props
{
	routeProps:RouteComponentProps
}

const TerminalBeginLine:React.FC<Props> = (props:Props) =>
{
	const subPage = props.routeProps.location.pathname;
	const [animated,setAnimated] = useState(true);
	useEffect(()=>{
		setTimeout(()=>{
			setAnimated(false)
		},2800)
	})

	return (
		<span className={styles.terminalFirstLine}>
			<p style={{ color: Palette.pink, fontSize: "1rem" }}>[Barnabás@Rátki <span style={{ color: "white" }}>{subPage}</span>]$</p>
			 {animated ? <TerminalLoadingAnimation styles={{ marginLeft: 10 }} /> : null}
		</span>

	);
}

export default TerminalBeginLine;
