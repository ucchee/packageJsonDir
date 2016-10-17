'use strict';
var fs = require('fs');
var path = require('path');

function packageJsonDir(dir) {

	dir = dir || process.cwd();

	try {
		fs.statSync(path.join(dir, "package.json"));
		return dir;
	} catch (e) {
		var nextDir = path.resolve(dir, '..');
		if (dir == nextDir) {
			throw("pacakge.json not found.");
		} else {
			return packageJsonDir(nextDir);
		}
	}

}

module.exports = packageJsonDir;