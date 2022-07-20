System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, ProgressBar, Button, tween, UIOpacity, UITransform, ArmyCmd, DateUtil, MapBuildData, MapCityData, MapCommand, MapResData, MapResType, MapUICommand, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _temp, _crd, ccclass, property, MapClickUILogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfArmyCmd(extras) {
    _reporterNs.report("ArmyCmd", "../general/ArmyProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapBuildData(extras) {
    _reporterNs.report("MapBuildData", "./MapBuildProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "./MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "./MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResConfig(extras) {
    _reporterNs.report("MapResConfig", "./MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResData(extras) {
    _reporterNs.report("MapResData", "./MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResType(extras) {
    _reporterNs.report("MapResType", "./MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./ui/MapUICommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../utils/EventMgr", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
      Button = _cc.Button;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ArmyCmd = _unresolved_2.ArmyCmd;
    }, function (_unresolved_3) {
      DateUtil = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapBuildData = _unresolved_4.MapBuildData;
    }, function (_unresolved_5) {
      MapCityData = _unresolved_5.MapCityData;
    }, function (_unresolved_6) {
      MapCommand = _unresolved_6.default;
    }, function (_unresolved_7) {
      MapResData = _unresolved_7.MapResData;
      MapResType = _unresolved_7.MapResType;
    }, function (_unresolved_8) {
      MapUICommand = _unresolved_8.default;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f2deblyzqtFTJmNwMB0NNYh", "MapClickUILogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MapClickUILogic = (_dec = ccclass('MapClickUILogic'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(ProgressBar), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(Button), _dec18 = property(Button), _dec19 = property(Button), _dec20 = property(Button), _dec21 = property(Button), _dec22 = property(Button), _dec23 = property(Button), _dec(_class = (_class2 = (_temp = class MapClickUILogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bgSelect", _descriptor, this);

          _initializerDefineProperty(this, "labelName", _descriptor2, this);

          _initializerDefineProperty(this, "labelUnion", _descriptor3, this);

          _initializerDefineProperty(this, "labelLunxian", _descriptor4, this);

          _initializerDefineProperty(this, "labelPos", _descriptor5, this);

          _initializerDefineProperty(this, "labelMian", _descriptor6, this);

          _initializerDefineProperty(this, "bgMain", _descriptor7, this);

          _initializerDefineProperty(this, "durableNode", _descriptor8, this);

          _initializerDefineProperty(this, "labelDurable", _descriptor9, this);

          _initializerDefineProperty(this, "progressBarDurable", _descriptor10, this);

          _initializerDefineProperty(this, "leftInfoNode", _descriptor11, this);

          _initializerDefineProperty(this, "labelYield", _descriptor12, this);

          _initializerDefineProperty(this, "labelSoldierCnt", _descriptor13, this);

          _initializerDefineProperty(this, "btnMove", _descriptor14, this);

          _initializerDefineProperty(this, "btnOccupy", _descriptor15, this);

          _initializerDefineProperty(this, "btnGiveUp", _descriptor16, this);

          _initializerDefineProperty(this, "btnReclaim", _descriptor17, this);

          _initializerDefineProperty(this, "btnEnter", _descriptor18, this);

          _initializerDefineProperty(this, "btnBuild", _descriptor19, this);

          _initializerDefineProperty(this, "btnTransfer", _descriptor20, this);

          _initializerDefineProperty(this, "btnTagAdd", _descriptor21, this);

          _initializerDefineProperty(this, "btnTagRemove", _descriptor22, this);

          _defineProperty(this, "_data", null);

          _defineProperty(this, "_pixelPos", null);

          _defineProperty(this, "_t", null);
        }

        onLoad() {}

        onDestroy() {
          this._data = null;
          this._pixelPos = null;
        }

        onEnable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_build", this.onUpdateBuild, this);
          var uiOpacity = this.bgSelect.getComponent(UIOpacity);
          uiOpacity.opacity = 255;
          var t = tween(uiOpacity).to(0.8, {
            opacity: 0
          }).to(0.8, {
            opacity: 255
          });
          t = t.repeatForever(t);
          t.start();
          this._t = t;
        }

        onDisable() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);

          this._t.stop();

          this.stopCountDown();
        }

        onUpdateBuild(data) {
          if (this._data && this._data instanceof (_crd && MapBuildData === void 0 ? (_reportPossibleCrUseOfMapBuildData({
            error: Error()
          }), MapBuildData) : MapBuildData) && this._data.x == data.x && this._data.y == data.y) {
            this.setCellData(data, this._pixelPos);
          }
        }

        onClickEnter() {
          console.log("onClickEnter");

          if (this._data instanceof (_crd && MapBuildData === void 0 ? (_reportPossibleCrUseOfMapBuildData({
            error: Error()
          }), MapBuildData) : MapBuildData)) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("open_fortress_about", this._data);
          } else if (this._data instanceof (_crd && MapCityData === void 0 ? (_reportPossibleCrUseOfMapCityData({
            error: Error()
          }), MapCityData) : MapCityData)) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("open_city_about", this._data);
          }

          this.node.parent = null;
        }

        onClickReclaim() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("open_army_select_ui", (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
            error: Error()
          }), ArmyCmd) : ArmyCmd).Reclaim, this._data.x, this._data.y);
          this.node.parent = null;
        }

        onClickGiveUp() {
          (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().giveUpBuild(this._data.x, this._data.y);
          this.node.parent = null;
        }

        onClickBuild() {
          (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().build(this._data.x, this._data.y, (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).FORTRESS);
          this.node.parent = null;
        }

        onClickTransfer() {
          console.log("onClickTransfer");
          this.node.parent = null;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("open_army_select_ui", (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
            error: Error()
          }), ArmyCmd) : ArmyCmd).Transfer, this._data.x, this._data.y);
        }

        onClickMove() {
          if ((_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().isCanMoveCell(this._data.x, this._data.y)) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("open_army_select_ui", (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Garrison, this._data.x, this._data.y);
          } else {
            console.log("只能驻军自己占领的地");
          }

          this.node.parent = null;
        }

        onTagAdd() {
          (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().opPosTag(1, this._data.x, this._data.y, this.labelName.string);
          this.node.parent = null;
        }

        onTagRemove() {
          (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().opPosTag(0, this._data.x, this._data.y);
          this.node.parent = null;
        }

        onClickOccupy() {
          if ((_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().isCanOccupyCell(this._data.x, this._data.y)) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("open_army_select_ui", (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Attack, this._data.x, this._data.y);
          } else {
            console.log("只能占领自己相邻的地");
          }

          this.node.parent = null;
        }

        setCellData(data, pixelPos) {
          this._data = data;
          this._pixelPos = pixelPos;
          this.labelPos.string = "(" + data.x + ", " + data.y + ")";
          this.leftInfoNode.active = true;
          this.btnReclaim.node.active = false;
          this.btnEnter.node.active = false;
          this.bgSelect.getComponent(UITransform).width = 200;
          this.bgSelect.getComponent(UITransform).height = 100;
          var isTag = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().proxy.isPosTag(this._data.x, this._data.y); // console.log("isTag:", isTag);

          this.btnTagAdd.node.active = !isTag;
          this.btnTagRemove.node.active = isTag;

          if (this._data instanceof (_crd && MapResData === void 0 ? (_reportPossibleCrUseOfMapResData({
            error: Error()
          }), MapResData) : MapResData)) {
            //点击的是野外
            this.btnMove.node.active = false;
            this.btnOccupy.node.active = true;
            this.btnGiveUp.node.active = false;
            this.btnBuild.node.active = false;
            this.btnTransfer.node.active = false;
            this.durableNode.active = false;
          } else if (this._data instanceof (_crd && MapBuildData === void 0 ? (_reportPossibleCrUseOfMapBuildData({
            error: Error()
          }), MapBuildData) : MapBuildData)) {
            //点击的是占领地
            if (this._data.rid == (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().buildProxy.myId) {
              //我自己的地
              this.btnMove.node.active = true;
              this.btnOccupy.node.active = false;
              this.btnGiveUp.node.active = !this._data.isInGiveUp();
              this.btnReclaim.node.active = this._data.isResBuild();
              this.btnBuild.node.active = !this._data.isWarFree(); //是资源地

              if (this._data.isResBuild()) {
                this.btnTransfer.node.active = false;
                this.btnEnter.node.active = false;
                this.btnBuild.node.active = !this._data.isBuilding();
              } else if (this._data.isSysCity()) {
                this.btnTransfer.node.active = false;
                this.btnEnter.node.active = false;
                this.btnBuild.node.active = false;
              } else if (this._data.isSysFortress) {
                this.btnTransfer.node.active = true;
                this.btnEnter.node.active = true;
                this.btnBuild.node.active = false;
              }

              if (this._data.isInGiveUp()) {
                this.btnBuild.node.active = false;
              }

              if (this._data.isWarFree()) {
                this.btnGiveUp.node.active = false;
              }
            } else if (this._data.unionId > 0 && this._data.unionId == (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().buildProxy.myUnionId) {
              //盟友的地
              this.btnMove.node.active = true;
              this.btnOccupy.node.active = false;
              this.btnGiveUp.node.active = false;
              this.btnBuild.node.active = false;
              this.btnTransfer.node.active = false;
            } else if (this._data.parentId > 0 && this._data.parentId == (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().buildProxy.myUnionId) {
              //俘虏的地
              this.btnMove.node.active = true;
              this.btnOccupy.node.active = false;
              this.btnGiveUp.node.active = false;
              this.btnBuild.node.active = false;
              this.btnTransfer.node.active = false;
            } else {
              this.btnMove.node.active = false;
              this.btnOccupy.node.active = true;
              this.btnGiveUp.node.active = false;
              this.btnBuild.node.active = false;
              this.btnTransfer.node.active = false;
            }

            this.durableNode.active = true;
            this.labelDurable.string = Math.ceil(this._data.curDurable / 100) + "/" + Math.ceil(this._data.maxDurable / 100);
            this.progressBarDurable.progress = this._data.curDurable / this._data.maxDurable;
          } else if (this._data instanceof (_crd && MapCityData === void 0 ? (_reportPossibleCrUseOfMapCityData({
            error: Error()
          }), MapCityData) : MapCityData)) {
            //点击其他城市
            if (this._data.rid == (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().cityProxy.myId) {
              //我自己的城池
              this.btnEnter.node.active = true;
              this.btnMove.node.active = false;
              this.btnOccupy.node.active = false;
              this.btnGiveUp.node.active = false;
              this.btnBuild.node.active = false;
              this.btnTransfer.node.active = false;
              this.btnTagAdd.node.active = false;
              this.btnTagRemove.node.active = false;
            } else if (this._data.unionId > 0 && this._data.unionId == (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().cityProxy.myUnionId) {
              //盟友的城池
              this.btnMove.node.active = true;
              this.btnOccupy.node.active = false;
              this.btnGiveUp.node.active = false;
              this.btnBuild.node.active = false;
              this.btnTransfer.node.active = false;
            } else if (this._data.parentId > 0 && this._data.parentId == (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().cityProxy.myUnionId) {
              //俘虏的城池
              this.btnMove.node.active = true;
              this.btnOccupy.node.active = false;
              this.btnGiveUp.node.active = false;
              this.btnBuild.node.active = false;
              this.btnTransfer.node.active = false;
            } else {
              this.btnMove.node.active = false;
              this.btnOccupy.node.active = true;
              this.btnGiveUp.node.active = false;
              this.btnBuild.node.active = false;
              this.btnTransfer.node.active = false;
            }

            this.bgSelect.getComponent(UITransform).setContentSize(600, 300);
            this.leftInfoNode.active = false;
            this.durableNode.active = true;
            this.labelDurable.string = Math.ceil(this._data.curDurable / 100) + "/" + Math.ceil(this._data.maxDurable / 100);
            this.progressBarDurable.progress = this._data.curDurable / this._data.maxDurable;
          }

          if (this._data.type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).SYS_CITY) {
            if (this._data.level >= 8) {
              this.bgSelect.getComponent(UITransform).setContentSize(960 * 1.5, 480 * 1.5);
            } else if (this._data.level >= 5) {
              this.bgSelect.getComponent(UITransform).setContentSize(960, 480);
            } else {
              this.bgSelect.getComponent(UITransform).setContentSize(960 * 0.5, 480 * 0.5);
            }
          }

          if (this.leftInfoNode.active) {
            var resData = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().proxy.getResData(this._data.id);
            var resCfg = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().proxy.getResConfig(resData.type, resData.level);
            var soldiers = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
              error: Error()
            }), MapUICommand) : MapUICommand).getInstance().proxy.getDefenseSoldiers(resData.level);
            this.labelYield.string = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().proxy.getResYieldDesList(resCfg).join("\n");
            this.labelSoldierCnt.string = "守备兵力 " + soldiers * 3;

            if (this._data.nickName) {
              this.labelName.string = this._data.nickName + ":" + this._data.name;
            } else {
              this.labelName.string = resCfg.name;
            }
          } else {
            this.labelName.string = this._data.name;
          } //归属属性


          if (this._data.rid == null || this._data.rid == 0) {
            this.labelUnion.string = "未占领";
          } else {
            if (this._data.unionId > 0) {
              this.labelUnion.string = this._data.unionName;
            } else {
              this.labelUnion.string = "在野";
            }
          }

          if (this._data.parentId > 0) {
            this.labelLunxian.string = "沦陷";
          } else {
            this.labelLunxian.string = "";
          } //免战信息


          var limitTime = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().proxy.getWarFree();

          var diff = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).getServerTime() - this._data.occupyTime;

          if (this._data instanceof (_crd && MapBuildData === void 0 ? (_reportPossibleCrUseOfMapBuildData({
            error: Error()
          }), MapBuildData) : MapBuildData)) {
            if (diff > limitTime) {
              this.bgMain.active = false;
              this.labelMian.string = "";
            } else {
              this.bgMain.active = true;
              this.schedule(this.countDown, 1);
              this.countDown();
            }
          } else if (this._data instanceof (_crd && MapCityData === void 0 ? (_reportPossibleCrUseOfMapCityData({
            error: Error()
          }), MapCityData) : MapCityData)) {
            if (diff < limitTime && this._data.parentId > 0) {
              this.bgMain.active = true;
              this.schedule(this.countDown, 1);
              this.countDown();
            } else {
              this.bgMain.active = false;
              this.labelMian.string = "";
            }
          }
        }

        countDown() {
          var diff = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).getServerTime() - this._data.occupyTime;

          var limitTime = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().proxy.getWarFree();

          if (diff > limitTime) {
            this.stopCountDown();
          } else {
            var str = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).converSecondStr(limitTime - diff);
            this.labelMian.string = "免战：" + str;
          }
        }

        stopCountDown() {
          this.unscheduleAllCallbacks();
          this.labelMian.string = "";
          this.bgMain.active = false;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgSelect", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelUnion", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelLunxian", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelPos", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelMian", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bgMain", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "durableNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "labelDurable", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "progressBarDurable", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "leftInfoNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "labelYield", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "labelSoldierCnt", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "btnMove", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "btnOccupy", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "btnGiveUp", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "btnReclaim", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "btnEnter", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "btnBuild", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "btnTransfer", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "btnTagAdd", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "btnTagRemove", [_dec23], {
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
//# sourceMappingURL=MapClickUILogic.js.map