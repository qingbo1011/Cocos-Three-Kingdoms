System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ServerConfig, LoginCommand, MapCommand, NetManager, ArmyProxy, ArmyCmd, GeneralCommand, GeneralData, EventMgr, ArmyCommand, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfServerConfig(extras) {
    _reporterNs.report("ServerConfig", "../config/ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginCommand(extras) {
    _reporterNs.report("LoginCommand", "../login/LoginCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "../map/MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../map/MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetManager(extras) {
    _reporterNs.report("NetManager", "../network/socket/NetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmyProxy(extras) {
    _reporterNs.report("ArmyProxy", "./ArmyProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmyCmd(extras) {
    _reporterNs.report("ArmyCmd", "./ArmyProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmyData(extras) {
    _reporterNs.report("ArmyData", "./ArmyProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "./GeneralCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenaralLevelConfig(extras) {
    _reporterNs.report("GenaralLevelConfig", "./GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralConfig(extras) {
    _reporterNs.report("GeneralConfig", "./GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralData(extras) {
    _reporterNs.report("GeneralData", "./GeneralProxy", _context.meta, extras);
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
      LoginCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapCommand = _unresolved_4.default;
    }, function (_unresolved_5) {
      NetManager = _unresolved_5.NetManager;
    }, function (_unresolved_6) {
      ArmyProxy = _unresolved_6.default;
      ArmyCmd = _unresolved_6.ArmyCmd;
    }, function (_unresolved_7) {
      GeneralCommand = _unresolved_7.default;
    }, function (_unresolved_8) {
      GeneralData = _unresolved_8.GeneralData;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a02fcp4pHZPgY9CyZDirLAn", "ArmyCommand", undefined);

      _export("default", ArmyCommand = class ArmyCommand {
        //单例
        static getInstance() {
          if (this._instance == null) {
            this._instance = new ArmyCommand();
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
          _defineProperty(this, "_proxy", new (_crd && ArmyProxy === void 0 ? (_reportPossibleCrUseOfArmyProxy({
            error: Error()
          }), ArmyProxy) : ArmyProxy)());

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).army_myList, this.onQryArmyList, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).army_myOne, this.onQryArmyOne, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).army_dispose, this.onGeneralDispose, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).army_conscript, this.onGeneralConscript, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).army_assign, this.onGeneralAssignArmy, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).army_push, this.onGeneralArmyStatePush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).nationMap_scanBlock, this.onNationMapScanBlock, this); //定时检测自己的军队是否有武将已经征兵完，如果是请求刷新

          setInterval(() => {
            let myCity = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity();

            if (myCity != null) {
              let armyList = this.proxy.getArmyList(myCity.cityId);

              if (armyList == null) {
                return;
              }

              for (let i = 0; i < armyList.length; i++) {
                var army = armyList[i];

                if (army != null && army.isGenConEnd()) {
                  console.log("有武将征兵完了");
                  this.qryArmyOne(army.cityId, army.order);
                }
              }
            }
          }, 1000);
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
        /**军队列表回调*/


        onQryArmyList(data, otherData) {
          console.log("onQryArmyList", data);

          if (data.code == 0) {
            let armyDatas = this._proxy.updateArmys(data.msg.cityId, data.msg.armys);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_army_list", armyDatas);
          }
        }

        onQryArmyOne(data, otherData) {
          console.log("onQryArmyOne", data);

          if (data.code == 0) {
            let armyData = this._proxy.updateArmy(data.msg.army.cityId, data.msg.army);

            let armyDatas = this._proxy.getArmyList(data.msg.army.cityId);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_army_list", armyDatas);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_army", armyData);
          }
        }
        /**配置将领回调*/


        onGeneralDispose(data, otherData) {
          console.log("onGeneralDispose", data);

          if (data.code == 0) {
            let armyData = this._proxy.updateArmy(data.msg.army.cityId, data.msg.army);

            console.log("armyData", armyData);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_army", armyData);
          }
        }
        /**征兵回调*/


        onGeneralConscript(data, otherData) {
          console.log("onGeneralConscript", data);

          if (data.code == 0) {
            (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
              error: Error()
            }), LoginCommand) : LoginCommand).getInstance().proxy.saveEnterData(data.msg);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("upate_my_roleRes");

            let armyData = this._proxy.updateArmy(data.msg.army.cityId, data.msg.army);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_army", armyData);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("conscript_army_success");
          }
        }
        /**出征回调*/


        onGeneralAssignArmy(data, otherData) {
          console.log("onGeneralAssignArmy", data);

          if (data.code == 0) {
            let armyData = this._proxy.updateArmy(data.msg.army.cityId, data.msg.army);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_army", armyData);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_army_assign");
          }
        }
        /**军队状态变更*/


        onGeneralArmyStatePush(data) {
          console.log("onGeneralArmyState", data);

          if (data.code == 0) {
            let armyData = this._proxy.updateArmy(data.msg.cityId, data.msg);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_army", armyData);
          }
        }

        onNationMapScanBlock(data) {
          if (data.code == 0) {
            for (let i = 0; i < data.msg.armys.length; i++) {
              let armyData = this._proxy.updateArmy(data.msg.armys[i].cityId, data.msg.armys[i]);

              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit("update_army", armyData);
            }
          }
        }
        /**我的角色属性*/


        updateMyProperty(datas) {
          if (datas.length > 0) {
            let armyDatas = this._proxy.updateArmys(datas[0].cityId, datas);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_army_list", armyDatas);
          }
        }
        /**获取军队当前体力*/


        getArmyPhysicalPower(armyData) {
          let minPower = 100;

          for (let i = 0; i < armyData.generals.length; i++) {
            let general = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().proxy.getMyGeneral(armyData.generals[i]);

            if (general && minPower > general.physical_power) {
              minPower = general.physical_power;
            }
          }

          return minPower;
        }
        /**获取军队将领列表*/


        getArmyGenerals(armyData) {
          let list = [];

          for (let i = 0; i < armyData.generals.length; i++) {
            let general = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().proxy.getMyGeneral(armyData.generals[i]);
            list.push(general);
          }

          return list;
        }
        /**根据将领列表获取军队体力*/


        getArmyPhysicalPowerByGenerals(generals) {
          let minPower = 100;

          for (let i = 0; i < generals.length; i++) {
            if (generals[i] && minPower > generals[i].physical_power) {
              minPower = generals[i].physical_power;
            }
          }

          return minPower;
        }
        /**获取军队当前士兵数*/


        getArmyCurSoldierCnt(armyData) {
          let cnt = 0;

          for (let i = 0; i < armyData.soldiers.length; i++) {
            cnt += armyData.soldiers[i];
          }

          return cnt;
        }
        /**根据将领列表获取军队总士兵数*/


        getArmyTotalSoldierCntByGenerals(generals) {
          let cnt = 0;
          let levelCfg = null;

          for (let i = 0; i < generals.length; i++) {
            if (generals[i]) {
              levelCfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
                error: Error()
              }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralLevelCfg(generals[i].level);
              cnt += levelCfg.soldiers;
            }
          }

          return cnt;
        }
        /**获取速度**/


        getArmySpeed(generals) {
          let empyt = true;
          let speed = 1000000;
          let cfg = null;

          for (let i = 0; i < generals.length; i++) {
            if (generals[i]) {
              cfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
                error: Error()
              }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(generals[i].cfgId);
              speed = Math.min(speed, (_crd && GeneralData === void 0 ? (_reportPossibleCrUseOfGeneralData({
                error: Error()
              }), GeneralData) : GeneralData).getPrValue(cfg.speed, cfg.speed_grow * generals[i].level, generals[i].speed_added));
              empyt = false;
            }
          }

          if (empyt) {
            return 0;
          } else {
            return speed;
          }
        }

        getArmyDestroy(generals) {
          let empyt = true;
          let destory = 0;
          let cfg = null;

          for (let i = 0; i < generals.length; i++) {
            if (generals[i]) {
              cfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
                error: Error()
              }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(generals[i].cfgId);
              destory += (_crd && GeneralData === void 0 ? (_reportPossibleCrUseOfGeneralData({
                error: Error()
              }), GeneralData) : GeneralData).getPrValue(cfg.destroy, cfg.destroy_grow * generals[i].level, generals[i].destroy_added);
              empyt = false;
            }
          }

          if (empyt) {
            return 0;
          } else {
            return destory;
          }
        }
        /**根据将领列表获取军队阵营*/


        getArmyCamp(generals) {
          let cnt = 0;
          let lastCamp = 0;

          for (let i = 0; i < generals.length; i++) {
            if (generals[i] && (generals[i].config.camp == lastCamp || lastCamp == 0)) {
              lastCamp = generals[i].config.camp;
              cnt++;
            } else {
              break;
            }
          }

          if (cnt >= 3) {
            return lastCamp;
          }

          return 0;
        }

        getArmyStateDes(armyData) {
          let stateStr = "";

          if (armyData.state > 0) {
            if (armyData.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Return) {
              stateStr = "[撤退]";
            } else {
              stateStr = "[行军]";
            }
          } else {
            if (armyData.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Idle) {
              stateStr = "[待命]";
            } else if (armyData.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Reclaim) {
              stateStr = "[屯田]";
            } else if (armyData.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Conscript) {
              stateStr = "[征兵]";
            } else if (armyData.cmd == (_crd && ArmyCmd === void 0 ? (_reportPossibleCrUseOfArmyCmd({
              error: Error()
            }), ArmyCmd) : ArmyCmd).Garrison) {
              stateStr = "[驻守]";
            } else {
              stateStr = "[停留]";
            }
          }

          return stateStr;
        }
        /**请求自己的军队信息*/


        qryArmyList(cityId) {
          let sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).army_myList,
            msg: {
              cityId: cityId
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        qryArmyOne(cityId, order) {
          let sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).army_myOne,
            msg: {
              cityId: cityId,
              order: order
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }
        /**给军队配置将领*/


        generalDispose(cityId = 0, generalId = 0, order = 0, position = 0, otherData) {
          let sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).army_dispose,
            msg: {
              cityId: cityId,
              generalId: generalId,
              order: order,
              position: position
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData, otherData);
        }
        /**给军队征兵*/


        generalConscript(armyId = 0, cnts = [], otherData) {
          let sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).army_conscript,
            msg: {
              armyId: armyId,
              cnts: cnts
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData, otherData);
        }
        /**出兵*/


        generalAssignArmy(armyId = 0, cmd = 0, x = 0, y = 0, otherData = null) {
          let sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).army_assign,
            msg: {
              armyId: armyId,
              cmd: cmd,
              x: x,
              y: y
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData, otherData);
        }

      });

      _defineProperty(ArmyCommand, "_instance", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ArmyCommand.js.map