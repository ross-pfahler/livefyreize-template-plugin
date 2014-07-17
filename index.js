/**
 * @fileoverview Make modules compatible with Livefyre.require compat umdish wrapper.
*/

function LivefyreizeWrapper(name, target) {
  this.name = name;
  this.target = target;
}
module.exports = LivefyreizeWrapper;
LivefyreizeWrapper.prototype.apply = function(compiler) {
  compiler.plugin("this-compilation", function(compilation) {
    var LivefyreMainTemplatePlugin = require("./livefyre-main-template-plugin");
    compilation.mainTemplate.apply(new LivefyreMainTemplatePlugin(this.name));
  }.bind(this));
};
