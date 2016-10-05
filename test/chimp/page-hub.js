/*global browser: false */
'use strict';

var {clickWhenVisible} = require('./utils');

var hubInput = '//input[@id="textHub"]';
var hubAdd =  '//*[@id="hub"]//*[@class="vizbutton"]';
var hubSelect = url => `//*[@id="checkbox${url}"]`;
var hubLabel = url => `//*[@id="hubLabel${url}"]`;

var actions = {
	addHub: url => {
		clickWhenVisible(hubInput);
		browser.keys(url);
		browser.click(hubAdd);
		clickWhenVisible(hubSelect(url));
	},
	getStatus: url => browser.getText(hubLabel(url))
};

var status = {
	connected: 'connected',
	selected: 'selected'
};

module.exports = {
	title: 'UCSC Xena',
	status,
	actions,
	hubInput,
	hubAdd,
	hubLabel
};
