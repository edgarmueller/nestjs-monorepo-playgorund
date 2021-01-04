import { __decorate } from 'tslib';
import { Injectable, Logger, Module } from '@nestjs/common';

var LibExampleAService_1;

var LibExampleAService = LibExampleAService_1 = /*#__PURE__*/function () {
  function LibExampleAService() {
    this.logger = new Logger(LibExampleAService_1.name);
  }

  var _proto = LibExampleAService.prototype;

  _proto.sayWhat = function sayWhat() {
    this.logger.log('yooooo');
  };

  return LibExampleAService;
}();

LibExampleAService = LibExampleAService_1 = /*#__PURE__*/__decorate([/*#__PURE__*/Injectable()], LibExampleAService);

var LibExampleAModule = function LibExampleAModule() {};

LibExampleAModule = /*#__PURE__*/__decorate([/*#__PURE__*/Module({
  imports: [],
  providers: [LibExampleAService],
  exports: [LibExampleAService]
})], LibExampleAModule);

export { LibExampleAModule, LibExampleAService };
//# sourceMappingURL=lib-example-a.esm.js.map
