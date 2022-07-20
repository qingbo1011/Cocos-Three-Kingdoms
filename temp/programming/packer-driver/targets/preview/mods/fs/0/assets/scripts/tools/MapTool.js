System.register(["__unresolved_0", "cc", "__unresolved_1", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, TiledMap, EditBox, Label, MapResType, JSB, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, MapTool;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapResType(extras) {
    _reporterNs.report("MapResType", "../map/MapProxy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      TiledMap = _cc.TiledMap;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      MapResType = _unresolved_2.MapResType;
    }, function (_ccEnv) {
      JSB = _ccEnv.JSB;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca8a7jAEP5Im6+6fqkbQQO5", "MapTool", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MapTool = (_dec = ccclass('MapTool'), _dec2 = property(TiledMap), _dec3 = property(EditBox), _dec4 = property(Label), _dec(_class = (_class2 = (_temp = class MapTool extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tiledMap", _descriptor, this);

          _initializerDefineProperty(this, "editBox", _descriptor2, this);

          _initializerDefineProperty(this, "tipsLab", _descriptor3, this);

          _defineProperty(this, "_mapSize", null);

          _defineProperty(this, "_mapGroundIds", null);

          _defineProperty(this, "_resList", null);
        }

        onLoad() {
          console.log("tiledMap", this.tiledMap);
        }

        getRandomResData() {
          var randomType = Math.floor(Math.random() * 4) + 52;
          var randomValue = Math.floor(Math.random() * 100);
          var randomLevel = 1;

          if (randomValue < 20) {
            randomLevel = 1;
          } else if (randomValue >= 20 && randomValue < 40) {
            randomLevel = 2;
          } else if (randomValue >= 40 && randomValue < 55) {
            randomLevel = 3;
          } else if (randomValue >= 55 && randomValue < 65) {
            randomLevel = 4;
          } else if (randomValue >= 65 && randomValue < 75) {
            randomLevel = 5;
          } else if (randomValue >= 75 && randomValue < 85) {
            randomLevel = 6;
          } else if (randomValue >= 85 && randomValue < 94) {
            randomLevel = 7;
          } else if (randomValue >= 94 && randomValue < 99) {
            randomLevel = 8;
          } else {
            randomType = (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
              error: Error()
            }), MapResType) : MapResType).SYS_FORTRESS;
            randomLevel = 5;
          }

          return [randomType, randomLevel];
        }

        onClickMake() {
          this._mapSize = this.tiledMap.getMapSize();
          this._mapGroundIds = this.tiledMap.getLayer("obstruct").getTiles();
          var city_positionIds = this.tiledMap.getLayer("city_position").getTiles();
          var data = {
            w: 0,
            h: 0,
            list: null
          };
          this._resList = [];

          for (var i = 0; i < this._mapGroundIds.length; i++) {
            if (city_positionIds[i] > 0) {
              var num = Math.floor(Math.random() * 10 + 1);

              this._resList.push([51, num]);
            } else if (this._mapGroundIds[i] > 0) {
              this._resList.push([0, 0]);
            } else {
              this._resList.push(this.getRandomResData());
            }
          }

          if (this.editBox.string == "") {
            this.tipsLab.string = "请输入生成输出目录";
            return;
          }

          if (!JSB) {
            this.tipsLab.string = "请使用 Windows 模拟器运行";
            return;
          }

          var path = this.editBox.string;

          if (jsb.fileUtils.isDirectoryExist(path) == false) {
            this.tipsLab.string = "目录不存在";
            return;
          }

          data.w = this._mapSize.width;
          data.h = this._mapSize.height;
          data.list = this._resList;
          jsb.fileUtils.writeStringToFile(JSON.stringify(data), path + "/mapRes_0.json");
          this.tipsLab.string = "生成成功";
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tiledMap", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "editBox", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipsLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapTool.js.map