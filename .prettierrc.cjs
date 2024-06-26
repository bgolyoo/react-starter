module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  bracketSpacing: true,
  arrowParens: 'always',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^[@/(.*)|a-z|A-Z|0-9]$', '^[../]', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
