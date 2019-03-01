module.exports = {
	presets: [
	  [
		'@babel/preset-env',
		{
			"targets": {
				"browsers": [
					"last 2 versions",
					"ie 11"
				],
				"node": "8.9.4"
			}
		}
	  ],
	  [
		'@babel/preset-react',
	  ],
	],
	plugins: [
	  [
		'@babel/plugin-proposal-export-default-from',
	  ],
	  [
		'@babel/plugin-proposal-class-properties',
	  ],
	  [
		'@babel/plugin-proposal-export-namespace-from',
	  ],
	  [
		"@babel/plugin-proposal-object-rest-spread",
	  ],
	  [
		"root-import"
	  ]
	]
  }


