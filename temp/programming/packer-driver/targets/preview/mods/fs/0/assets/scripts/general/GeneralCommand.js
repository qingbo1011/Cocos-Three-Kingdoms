System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ServerConfig, NetManager, GeneralProxy, EventMgr, GeneralCommand, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfServerConfig(extras) {
    _reporterNs.report("ServerConfig", "../config/ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetManager(extras) {
    _reporterNs.report("NetManager", "../network/socket/NetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralProxy(extras) {
    _reporterNs.report("GeneralProxy", "./GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../utils/EventMgr", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ServerConfig = _unresolved_2.ServerConfig;
    }, function (_unresolved_3) {
      NetManager = _unresolved_3.NetManager;
    }, function (_unresolved_4) {
      GeneralProxy = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4f63nVYWZJHpFQ9B0UXHOV", "GeneralCommand", undefined);

      _export("default", GeneralCommand = class GeneralCommand {
        //单例
        static getInstance() {
          if (this._instance == null) {
            this._instance = new GeneralCommand();
          }

          return this._instance;
        }

        static destory() {
          if (this._instance) {
            this._instance.onDestory();

            this._instance = null;
            return true;
          }

          return false;
        } //数据model


        constructor() {
          _defineProperty(this, "_proxy", new (_crd && GeneralProxy === void 0 ? (_reportPossibleCrUseOfGeneralProxy({
            error: Error()
          }), GeneralProxy) : GeneralProxy)());

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).general_myGenerals, this.onMyGenerals, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).general_push, this.onGeneralPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).general_drawGeneral, this.onDrawGenerals, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).general_composeGeneral, this.onComposeGeneral, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).general_addPrGeneral, this.onAddPrGeneral, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).general_convert, this.onGeneralConvert, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).general_upSkill, this.onUpSkill, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).general_downSkill, this.onDownSkill, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).general_lvSkill, this.onLvSkill, this);
        }

        onDestory() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        clearData() {
          this._proxy.clearData();
        }

        get proxy() {
          return this._proxy;
        }
        /**我的将领列表*/


        onMyGenerals(data) {
          console.log("onMyGeneralsonMyGenerals ", data);

          if (data.code == 0) {
            this._proxy.updateMyGenerals(data.msg.generals);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_my_generals");
          }
        }

        onGeneralPush(data) {
          console.log("onGeneralPush ", data);

          if (data.code == 0) {
            this._proxy.updateGeneral(data.msg);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_general");
          }
        }

        onDrawGenerals(data) {
          console.log("onDrawGenerals ", data);

          if (data.code == 0) {
            this._proxy.updateMyGenerals(data.msg.generals);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_my_generals");
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("open_draw_result", data.msg.generals);
          }
        }

        onComposeGeneral(data) {
          console.log("onComposeGeneral ", data);

          if (data.code == 0) {
            this._proxy.updateMyGenerals(data.msg.generals);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_my_generals");
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_one_generals", data.msg.generals[data.msg.generals.length - 1]);
          }
        }

        onAddPrGeneral(data) {
          console.log("onAddPrGeneral ", data);

          if (data.code == 0) {
            this._proxy.updateGeneral(data.msg.general);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_one_generals", data.msg.general);
          }
        }

        onGeneralConvert(data) {
          console.log("onGeneralConvert ", data);

          if (data.code == 0) {
            this._proxy.removeMyGenerals(data.msg.gIds);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("general_convert", data.msg);
          }
        }

        onUpSkill(data) {
          console.log("onUpSkill ", data);
        }

        onDownSkill(data) {
          console.log("onDownSkill ", data);
        }

        onLvSkill(data) {
          console.log("onLvSkill ", data);
        }
        /**我的角色属性*/


        updateMyProperty(datas) {
          this._proxy.updateMyGenerals(datas);

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("update_my_generals");
        }

        qryMyGenerals() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).general_myGenerals,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }
        /**
         * 抽卡
         * @param drawTimes 
         */


        drawGenerals(drawTimes) {
          if (drawTimes === void 0) {
            drawTimes = 1;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).general_drawGeneral,
            msg: {
              drawTimes: drawTimes
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }
        /**
         * 
         * @param compId 
         * @param gIds 
         */


        composeGeneral(compId, gIds) {
          if (compId === void 0) {
            compId = 1;
          }

          if (gIds === void 0) {
            gIds = [];
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).general_composeGeneral,
            msg: {
              compId: compId,
              gIds: gIds
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        addPrGeneral(compId, force_add, strategy_add, defense_add, speed_add, destroy_add) {
          if (compId === void 0) {
            compId = 1;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).general_addPrGeneral,
            msg: {
              compId: compId,
              forceAdd: force_add,
              strategyAdd: strategy_add,
              defenseAdd: defense_add,
              speedAdd: speed_add,
              destroyAdd: destroy_add
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        convert(gIds) {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).general_convert,
            msg: {
              gIds: gIds
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        upSkill(gId, cfgId, pos) {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).general_upSkill,
            msg: {
              gId: gId,
              cfgId: cfgId,
              pos: Number(pos)
            }
          };
          console.log("send upSkill:", sendData);
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        downSkill(gId, cfgId, pos) {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).general_downSkill,
            msg: {
              gId: gId,
              cfgId: cfgId,
              pos: Number(pos)
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        lvSkill(gId, pos) {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).general_lvSkill,
            msg: {
              gId: gId,
              pos: Number(pos)
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

      });

      _defineProperty(GeneralCommand, "_instance", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GeneralCommand.js.map