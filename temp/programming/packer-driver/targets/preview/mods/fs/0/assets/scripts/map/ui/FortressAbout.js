System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, Button, Prefab, instantiate, ArmyCommand, DateUtil, MapCommand, MapResType, CityArmyItemLogic, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, FortressAbout;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfArmyCommand(extras) {
    _reporterNs.report("ArmyCommand", "../../general/ArmyCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmyData(extras) {
    _reporterNs.report("ArmyData", "../../general/ArmyProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapBuildData(extras) {
    _reporterNs.report("MapBuildData", "../MapBuildProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResType(extras) {
    _reporterNs.report("MapResType", "../MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCityArmyItemLogic(extras) {
    _reporterNs.report("CityArmyItemLogic", "./CityArmyItemLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../utils/EventMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      Button = _cc.Button;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ArmyCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      DateUtil = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapCommand = _unresolved_4.default;
    }, function (_unresolved_5) {
      MapResType = _unresolved_5.MapResType;
    }, function (_unresolved_6) {
      CityArmyItemLogic = _unresolved_6.default;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79f56J5eZdKV4BkXv7s95Os", "FortressAbout", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", FortressAbout = (_dec = ccclass('FortressAbout'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Prefab), _dec(_class = (_class2 = (_temp = class FortressAbout extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "armyLayer", _descriptor, this);

          _initializerDefineProperty(this, "nameLab", _descriptor2, this);

          _initializerDefineProperty(this, "lvLab", _descriptor3, this);

          _initializerDefineProperty(this, "timeLab", _descriptor4, this);

          _initializerDefineProperty(this, "upBtn", _descriptor5, this);

          _initializerDefineProperty(this, "destroyBtn", _descriptor6, this);

          _initializerDefineProperty(this, "armyItem", _descriptor7, this);

          _defineProperty(this, "_armyCnt", 5);

          _defineProperty(this, "_data", null);

          _defineProperty(this, "_armyComps", []);

          _defineProperty(this, "_cmd", void 0);
        }

        onLoad() {
          this._cmd = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance();
        }

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_builds", this.onUpdateBuilds, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_build", this.onUpdateBuild, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("delete_build", this.onDeleteBuild, this);
          this.initView();
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        initView() {
          for (var i = 0; i < this._armyCnt; i++) {
            var item = instantiate(this.armyItem);
            item.parent = this.armyLayer;
            var comp = item.getComponent(_crd && CityArmyItemLogic === void 0 ? (_reportPossibleCrUseOfCityArmyItemLogic({
              error: Error()
            }), CityArmyItemLogic) : CityArmyItemLogic);
            comp.order = i + 1;

            this._armyComps.push(comp);
          }
        }

        updateArmyList() {
          var armyList = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
            error: Error()
          }), ArmyCommand) : ArmyCommand).getInstance().proxy.getArmysByPos(this._data.x, this._data.y);
          console.log("updateArmyList:", armyList, this._data);

          for (var i = 0; i < this._armyComps.length; i++) {
            if (this._data.level > i) {
              this._armyComps[i].isOpenedArmy(true, true);
            } else {
              this._armyComps[i].isOpenedArmy(false, true);
            }

            this._armyComps[i].setArmyData(0, null);

            if (armyList.length > i) {
              this._armyComps[i].setArmyData(armyList[i].cityId, armyList[i]);
            }
          }
        }

        setData(data) {
          this._data = data;
          this.nameLab.string = data.name;
          this.lvLab.string = "lv:" + data.level;
          this.startCountDownTime();
          this.updateArmyList();

          if (this._data.type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).SYS_FORTRESS) {
            this.upBtn.node.active = false;
            this.destroyBtn.node.active = false;
          } else if (this._data.type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).FORTRESS) {
            this.upBtn.node.active = true;
            this.destroyBtn.node.active = true;
          }
        }

        onUpdateBuilds(areaIndex, addIds, removeIds, updateIds) {
          console.log("onUpdateBuilds:", removeIds);

          for (var i = 0; i < addIds.length; i++) {
            var data = this._cmd.buildProxy.getBuild(addIds[i]);

            if (data.x == this._data.x && data.y == this._data.y) {
              this.setData(data);
            }
          }

          for (var _i = 0; _i < removeIds.length; _i++) {
            console.log("data:", this._data);

            if (this._data.rid == 0) {
              this.node.parent = null;
            }
          }

          for (var _i2 = 0; _i2 < updateIds.length; _i2++) {
            var _data = this._cmd.buildProxy.getBuild(updateIds[_i2]);

            if (_data.x == this._data.x && _data.y == this._data.y) {
              this.setData(_data);
            }
          }
        }

        onUpdateBuild(data) {
          if (data.x == this._data.x && data.y == this._data.y) {
            this.setData(data);
          }
        }

        onDeleteBuild(id, x, y) {
          if (x == this._data.x && y == this._data.y) {
            this.node.parent = null;
          }
        }

        onClickUpBuild() {
          this._cmd.upBuild(this._data.x, this._data.y);
        }

        onClickDestroyBuild() {
          this._cmd.delBuild(this._data.x, this._data.y);
        }

        onClickClose() {
          this.node.active = false;
        }

        startCountDownTime() {
          this.stopCountDownTime();
          this.schedule(this.countDownTime, 1.0);
          this.countDownTime();
        }

        countDownTime() {
          if (this._data.isBuilding()) {
            this.timeLab.string = "建设中..." + (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).leftTimeStr(this._data.endTime);
          } else if (this._data.isUping()) {
            this.timeLab.string = "升级中..." + (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).leftTimeStr(this._data.endTime);
          } else if (this._data.isDestroying()) {
            this.timeLab.string = "拆除中..." + (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).leftTimeStr(this._data.endTime);
          } else {
            this.timeLab.string = "";
            this.stopCountDownTime();
          }
        }

        stopCountDownTime() {
          this.unschedule(this.countDownTime);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "armyLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lvLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "timeLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "upBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "destroyBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "armyItem", [_dec8], {
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
//# sourceMappingURL=FortressAbout.js.map