'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var common = require('@nestjs/common');

var LibExampleAService_1;

exports.LibExampleAService = LibExampleAService_1 = /*#__PURE__*/function () {
  function LibExampleAService() {
    this.logger = new common.Logger(LibExampleAService_1.name);
  }

  var _proto = LibExampleAService.prototype;

  _proto.sayWhat = function sayWhat() {
    this.logger.log('yooooo');
  };

  return LibExampleAService;
}();

exports.LibExampleAService = LibExampleAService_1 = /*#__PURE__*/tslib.__decorate([/*#__PURE__*/common.Injectable()], exports.LibExampleAService);

exports.LibExampleAModule = function LibExampleAModule() {};

exports.LibExampleAModule = /*#__PURE__*/tslib.__decorate([/*#__PURE__*/common.Module({
  imports: [],
  providers: [exports.LibExampleAService],
  exports: [exports.LibExampleAService]
})], exports.LibExampleAModule);
//# sourceMappingURL=lib-example-a.cjs.development.js.map
