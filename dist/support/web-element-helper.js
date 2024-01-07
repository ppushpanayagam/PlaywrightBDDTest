"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementLocator = void 0;
var _navigationBehavior = require("./navigation-behavior");
var getElementLocator = exports.getElementLocator = function getElementLocator(page, elementKey, globalConfig) {
  var _pageElementMappings$, _pageElementMappings$2;
  var pageElementMappings = globalConfig.pageElementMappings;
  var currentPage = (0, _navigationBehavior.getCurrentPageId)(page, globalConfig);
  return ((_pageElementMappings$ = pageElementMappings[currentPage]) === null || _pageElementMappings$ === void 0 ? void 0 : _pageElementMappings$[elementKey]) || ((_pageElementMappings$2 = pageElementMappings.common) === null || _pageElementMappings$2 === void 0 ? void 0 : _pageElementMappings$2[elementKey]);
};