System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Node, MapUICommand, CityAdditionType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, FacilityAdditionItemLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./MapUICommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacility(extras) {
    _reporterNs.report("Facility", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacilityAdditionCfg(extras) {
    _reporterNs.report("FacilityAdditionCfg", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacilityConfig(extras) {
    _reporterNs.report("FacilityConfig", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCityAdditionType(extras) {
    _reporterNs.report("CityAdditionType", "./MapUIProxy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      MapUICommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      CityAdditionType = _unresolved_3.CityAdditionType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15312GpEupOZKZUotLvGkuO", "FacilityAdditionItemLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", FacilityAdditionItemLogic = (_dec = ccclass('FacilityAdditionItemLogic'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = (_class2 = (_temp = class FacilityAdditionItemLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "labelName", _descriptor, this);

          _initializerDefineProperty(this, "upNode", _descriptor2, this);

          _initializerDefineProperty(this, "maxNode", _descriptor3, this);

          _initializerDefineProperty(this, "labelOld", _descriptor4, this);

          _initializerDefineProperty(this, "labelNew", _descriptor5, this);

          _initializerDefineProperty(this, "labeMax", _descriptor6, this);
        }

        setData(data, cfg, index) {
          var additionType = cfg.additions[index];
          var additionCfg = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.getFacilityAdditionCfgByType(additionType);
          this.labelName.string = additionCfg.des;

          if (data.level >= cfg.upLevels.length) {
            //达到最大等级
            this.upNode.active = false;
            this.maxNode.active = true;
            var v = cfg.upLevels[data.level - 1].values[index];

            if (additionType == (_crd && CityAdditionType === void 0 ? (_reportPossibleCrUseOfCityAdditionType({
              error: Error()
            }), CityAdditionType) : CityAdditionType).Durable) {
              v = v / 100;
            }

            this.labeMax.string = additionCfg.value.replace("%n%", v + "");
          } else {
            this.upNode.active = true;
            this.maxNode.active = false;

            if (data.level == 0) {
              //代表未升级过
              this.labelOld.string = "---";
            } else {
              var v = cfg.upLevels[data.level - 1].values[index];

              if (additionType == (_crd && CityAdditionType === void 0 ? (_reportPossibleCrUseOfCityAdditionType({
                error: Error()
              }), CityAdditionType) : CityAdditionType).Durable) {
                v = v / 100;
              }

              this.labelOld.string = additionCfg.value.replace("%n%", v + "");
            }

            var v = cfg.upLevels[data.level].values[index];

            if (additionType == (_crd && CityAdditionType === void 0 ? (_reportPossibleCrUseOfCityAdditionType({
              error: Error()
            }), CityAdditionType) : CityAdditionType).Durable) {
              v = v / 100;
            }

            this.labelNew.string = additionCfg.value.replace("%n%", v + "");
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "upNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelOld", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelNew", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labeMax", [_dec7], {
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
//# sourceMappingURL=FacilityAdditionItemLogic.js.map