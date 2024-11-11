chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
        'id': 1336,
        'priority': 1,
        'action': {
            'type': 'redirect',
            'redirect': {
                "regexSubstitution": "https://downloads.marketplace.jetbrains.com/files/\\1"
            }
        },
        'condition': {
            "regexFilter": "^https://plugins.jetbrains.com/files/(.*)",
            'resourceTypes': [
                'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
                'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
            ]
        }
    },
	{
			'id': 1338,
			'priority': 1,
			'action': {
				'type': 'redirect',
				'redirect': {
					"regexSubstitution": "https://download-cdn.jetbrains.com/\\1"
				}
			},
			'condition': {
				"regexFilter": "^https://download.jetbrains.com/(.*)",
				'resourceTypes': [
					'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
					'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
				]
			}
		},	
	
	],
    removeRuleIds: [1336, 1338]
})