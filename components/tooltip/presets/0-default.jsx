/* eslint-disable filenames/match-regex */
import * as React from 'react';
import Tooltip from '../tooltip.jsx';
import Button from '../../button/button.jsx';

export default (
	<Tooltip
		uxpId="tooltip"
		align="right" content="Tooltip with right alignment"
	>
		<Button label="Hover or focus to Open" uxpId="tooltip.button"/>
	</Tooltip>
);
