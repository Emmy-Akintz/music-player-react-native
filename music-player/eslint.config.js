module.exports = {
	languageOptions: {
    globals: {
      node: 'readonly', // Equivalent to env.node: true
      es2021: 'readonly', // Equivalent to env.es2021: true
    },
  },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "react", "react-hooks"],
	rules: {
		"import/order": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"react/react-in-jsx-scope": "off",
		"react/display-name": "off",
		"@typescript-eslint/no-unused-vars": "warn",
	},
};
