module.exports = {
	"extends": [
		"airbnb-base",
		"plugin:import/errors",
		"plugin:import/warnings"
	],
	"plugins": [
		"import"
	],
	"env": {
		"browser": true,
		"jquery": true,
	},
	"rules": {
		"indent": [ "warn", "tab" ],
		"no-tabs": "off",
		"space-in-parens": [ 2, "always" ]
	},
	"settings": {
		"import/core-modules": [
			"jquery"
		]
	}
};
