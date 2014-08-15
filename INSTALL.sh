#!/bin/sh
set -e

# Run this first time to set up os dependencies for Node.JS Server.
#

# To install node.js independenlty, run: brew install node

# These packages are dependencies for our installation.
# See complete list in node_modules/
npm install zurb-foundation-npm
npm install express
npm install jade
npm install stylus
npm install nib
npm install morgan
npm install nodemon
npm install forever

