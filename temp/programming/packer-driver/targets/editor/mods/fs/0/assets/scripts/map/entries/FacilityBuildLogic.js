System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Label, SpriteAtlas, DateUtil, MapCommand, MapResType, MapUtil, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, FacilityBuildLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapBuildData(extras) {
    _reporterNs.report("MapBuildData", "../MapBuildProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapAreaData(extras) {
    _reporterNs.report("MapAreaData", "../MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResConfig(extras) {
    _reporterNs.report("MapResConfig", "../MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResData(extras) {
    _reporterNs.report("MapResData", "../MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResType(extras) {
    _reporterNs.report("MapResType", "../MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUtil(extras) {
    _reporterNs.report("MapUtil", "../MapUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      SpriteAtlas = _cc.SpriteAtlas;
    }, function (_unresolved_2) {
      DateUtil = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapResType = _unresolved_4.MapResType;
    }, function (_unresolved_5) {
      MapUtil = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f6fc6N4eZNQqV5zuU//Mp2", "FacilityBuildLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", FacilityBuildLogic = (_dec = ccclass('FacilityBuildLogic'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(SpriteAtlas), _dec(_class = (_class2 = (_temp = class FacilityBuildLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spr", _descriptor, this);

          _initializerDefineProperty(this, "nameLab", _descriptor2, this);

          _initializerDefineProperty(this, "tipsLab", _descriptor3, this);

          _initializerDefineProperty(this, "buildAtlas", _descriptor4, this);

          _defineProperty(this, "_data", null);

          _defineProperty(this, "_cmd", null);
        }

        onLoad() {
          this._cmd = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance();
        }

        onEnable() {
          this.nameLab.string = "";
          this.tipsLab.string = "";
          this.spr.spriteFrame = null;
        }

        onDisable() {
          this._data = null;
          this.unscheduleAllCallbacks();
        }

        setBuildData(data) {
          this._data = data;
          this.updateUI();
        }

        updateUI() {
          if (this._data) {
            if (this._data.type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
              error: Error()
            }), MapResType) : MapResType).FORTRESS) {
              this.spr.spriteFrame = this.buildAtlas.getSpriteFrame("component_119");
              let resData = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
                error: Error()
              }), MapCommand) : MapCommand).getInstance().proxy.getResData(this._data.id);
              let resCfg = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
                error: Error()
              }), MapCommand) : MapCommand).getInstance().proxy.getResConfig(resData.type, resData.level);

              if (this._data.nickName != null) {
                this.nameLab.string = this._data.nickName + ":" + this._data.name;
              } else {
                this.nameLab.string = resCfg.name;
              }

              if (this._data.isBuilding() || this._data.isUping() || this._data.isDestroying()) {
                this.startCountDownTime();
              } else {
                this.tipsLab.string = "";
              }
            } else {
              this.spr.spriteFrame = null;
              this.nameLab.string = "";
            }
          }
        }

        startCountDownTime() {
          console.log("startCountDownTime");
          this.stopCountDownTime();
          this.schedule(this.countDownTime, 1.0);
          this.countDownTime();
        }

        countDownTime() {
          if (this._data.isBuilding()) {
            this.tipsLab.string = "建设中..." + (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).leftTimeStr(this._data.endTime);
          } else if (this._data.isUping()) {
            this.tipsLab.string = "升级中..." + (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).leftTimeStr(this._data.endTime);
          } else if (this._data.isDestroying()) {
            this.tipsLab.string = "拆除中..." + (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).leftTimeStr(this._data.endTime);
          } else {
            this.tipsLab.string = "";
            this.stopCountDownTime();
            console.log("qryNationMapScanBlock");
            let areaPoint = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).getAreaPointByCellPoint(this._data.x, this._data.y);
            let areaId = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).getIdByAreaPoint(areaPoint.x, areaPoint.y);

            let areaData = this._cmd.proxy.getMapAreaData(areaId);

            this._cmd.qryNationMapScanBlock(areaData);
          }
        }

        stopCountDownTime() {
          this.unschedule(this.countDownTime);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tipsLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buildAtlas", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FacilityBuildLogic.js.map