// ==UserScript==
// @name        mafia bold votes
// @namespace   mbv
// @description Make votes stand out in Mafia Games
// @include     http*passthepopcorn.me/forums.php?*action=viewthread*
// @include     http*broadcasthe.net/forums.php?*action=viewthread*
// @include     http*redacted.ch/forums.php?*action=viewthread*
// @include     http*gazellegames.net/forums.php?*action=viewthread*
// @version     2
// ==/UserScript==

if (document.title.match(/(red|ptp|btn|ggn) mafia/i)) {

	jQuery("<style type='text/css'> .lynch { color: #ffffff; background-color: black; padding: 0px 6px; border: 1px solid #ffffff; } </style>").prependTo("head");

	switch (window.location.hostname) {
		case 'passthepopcorn.me':
			csspath = '.forum-post__body strong';
			break;
		case 'broadcasthe.net':
			csspath = '.postcontent strong';
			break;
		default:
			csspath = '.forum_post td.body strong';
	}

	jQuery(csspath).each(function() {
		if (jQuery(this).html().includes('wrote:')) {
		} else if (jQuery(this).parent().prop("tagName") == 'BLOCKQUOTE') {
		} else if (jQuery(this).children().length > 0) {
		} else if (jQuery(this).parent().prop("tagName") != 'DIV') {
		} else {
			jQuery(this).addClass('lynch');
		}
	});

	jQuery('.spoiler').prevUntil('strong').prev().removeClass('lynch');

}
