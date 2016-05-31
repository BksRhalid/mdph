Projet de simplification des demandes à la MDPH
================================================


[![Build Status](https://circleci.com/gh/sgmap/mdph.svg?style=svg)](https://circleci.com/gh/sgmap/mdph)
[![Dependencies](https://david-dm.org/sgmap/mdph.svg)](https://david-dm.org/sgmap/mdph#info=dependencies&view=table)
[![Dev-dependencies](https://david-dm.org/sgmap/mdph/dev-status.svg)](https://david-dm.org/sgmap/mdph#info=devDependencies&view=table)

## Getting Started

### Prerequisites

- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Ruby & Sass](https://www.ruby-lang.org) and then `gem install sass`
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `npm run dev` to start the development server. It should automatically open the client in your browser when ready.

## Testing

- Running `npm test` will run the tests with karma and mocha.
