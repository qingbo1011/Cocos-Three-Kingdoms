System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, NodePool, instantiate, ArmyCommand, ArmyCmd, ArmyLogic, MapCommand, MapUtil, EventMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, MapArmyLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfArmyCommand(extras) {
    _reporterNs.report("ArmyCommand", "../general/ArmyCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmyCmd(extras) {
    _reporterNs.report("ArmyCmd", "../general/ArmyProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmyData(extras) {
    _reporterNs.report("ArmyData", "../general/ArmyProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmyLogic(extras) {
    _reporterNs.report("ArmyLogic", "./entries/ArmyLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "./MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUtil(extras) {
    _reporterNs.report("MapUtil", "./MapUtil", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ArmyCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      ArmyCmd = _unresolved_3.ArmyCmd;
    }, function (_unresolved_4) {
      ArmyLogic = _unresolved_4.default;
    }, function (_unresolved_5) {
      MapCommand = _unresolved_5.default;
    }, function (_unresolved_6) {
      MapUtil = _unresolved_6.default;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f81f0SXmZ1LG5fAPUvO06fT", "MapArmyLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MapArmyLogic = (_dec = ccclass('MapArmyLogic'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = (_class2 = (_temp = class MapArmyLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "parentLayer", _descriptor, this);

          _initializerDefineProperty(this, "armyPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "arrowPrefab", _descriptor3, this);

          _defineProperty(this, "_armyLogics", new Map());

          _defineProperty(this, "_armyPool", new NodePool());

          _defineProperty(this, "_arrowPool", new NodePool());
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_army_list", this.onUpdateArmyList, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_army", this.onUpdateArmy, this);
          this.initArmys();
          this.schedule(this.checkVisible, 0.5);
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);

          this._armyPool.clear();

          this._arrowPool.clear();

          this._armyLogics.forEach(logic => {
            logic.destroy();
          });
        }

        update() {
          this._armyLogics.forEach(logic => {
            logic.update();
          });
        }

        initArmys() {
          let datas = (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
            error: Error()
          }), ArmyCommand) : ArmyCommand).getInstance().proxy.getAllArmys();

          if (datas && datas.length > 0) {
            this.onUpdateArmyList(datas);
          }
        }

        onUpdateArmyList(datas) {
          for (let i = 0; i < datas.length; i++) {
            if (datas[i] && datas[i].cmd > 0) {
              this.onUpdateArmy(datas[i]);
            }
          }
        }

        onUpdateArmy(data) {
          console.log("update_army", data);
          let aniNode = null;
          let arrowNode = null;

          if (data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
            error: Error()
          }), ArmyCmd) : ArmyCmd).Idle || data.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
            error: Error()
          }), ArmyCmd) : ArmyCmd).Conscript) {
            //代表不在地图上
            this.removeArmyById(data.id);
            return;
          }

          let logic = this._armyLogics.get(data.id);

          console.log("onUpdateArmy 1111:", logic);

          if (logic == null) {
            logic = new (_crd && ArmyLogic === void 0 ? (_reportPossibleCrUseOfArmyLogic({
              error: Error()
            }), ArmyLogic) : ArmyLogic)();
            aniNode = this.createArmy();
            aniNode.zIndex = 1;
            aniNode.parent = this.parentLayer;
            arrowNode = this.createArrow();
            arrowNode.zIndex = 2;
            arrowNode.parent = this.parentLayer;

            this._armyLogics.set(data.id, logic);

            console.log("onUpdateArmy 2222:", logic);
          } else {
            aniNode = logic.aniNode;
            arrowNode = logic.arrowNode;
            logic = this._armyLogics.get(data.id);
          }

          console.log("onUpdateArmy 3333:", logic);
          logic.setArmyData(data, aniNode, arrowNode);
        }

        createArmy() {
          if (this._armyPool.size() > 0) {
            return this._armyPool.get();
          } else {
            return instantiate(this.armyPrefab);
          }
        }

        createArrow() {
          if (this._arrowPool.size() > 0) {
            return this._arrowPool.get();
          } else {
            return instantiate(this.arrowPrefab);
          }
        }

        removeArmyById(id) {
          if (this._armyLogics.has(id)) {
            let logic = this._armyLogics.get(id);

            this._armyPool.put(logic.aniNode);

            this._arrowPool.put(logic.arrowNode);

            logic.clear();

            this._armyLogics.delete(id);

            console.log("removeArmyById", id);
          }
        }

        checkVisible() {
          this._armyLogics.forEach(logic => {
            let city = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().cityProxy.getMyCityById(logic.data.cityId);

            if (!city || city.rid != (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().buildProxy.myId) {
              var visible1 = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                error: Error()
              }), MapUtil) : MapUtil).armyIsInView(logic.data.x, logic.data.y);
              var visible2 = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                error: Error()
              }), MapUtil) : MapUtil).armyIsInView(logic.data.toX, logic.data.toY);
              var visible3 = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                error: Error()
              }), MapUtil) : MapUtil).armyIsInView(logic.data.fromX, logic.data.fromY);

              if (!visible1 && !visible2 && !visible3) {
                this.removeArmyById(logic.data.id);
              }
            }
          });
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "parentLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "armyPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrowPrefab", [_dec4], {
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
//# sourceMappingURL=MapArmyLogic.js.map