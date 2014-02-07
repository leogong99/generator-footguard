'use strict';

var util = require('util'),
    grunt = require('grunt'),
    FootguardBase = require('../footguard-base.js');

var Generator = function Generator() {
  FootguardBase.apply(this, arguments);
};

util.inherits(Generator, FootguardBase);
module.exports = Generator;

Generator.prototype.askFor = function askFor () {
  var cb = this.async();

  var prompts = grunt.util._.flatten([
    this.promptForTest()
  ]);

  this.prompt(prompts, this.parsePromptsResult( function() {
    cb();
  }));
};

Generator.prototype.createModelFiles = function createModelFiles() {
  this.template('model.coffee', this.getElementDest('model'));

  this.createElementTest('model');
};
