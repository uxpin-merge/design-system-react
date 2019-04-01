/* eslint-disable filenames/match-regex */
import * as React from 'react';
import Card from '../card.jsx';
import Icon from '../../icon';

export default (
	<Card
		heading="Card Heading"
		icon={<Icon category="standard" uxpId="2" name="avatar"/>}
		footer="Card footer"
		uxpId="0"
		style={{ 'fontFamily': 'Salesforce Sans' }}
	/>
);
