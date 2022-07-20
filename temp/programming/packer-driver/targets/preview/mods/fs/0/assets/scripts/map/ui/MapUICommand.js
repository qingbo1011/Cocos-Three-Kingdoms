System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ServerConfig, LoginCommand, NetManager, MapCommand, MapUIProxy, EventMgr, MapUICommand, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfServerConfig(extras) {
    _reporterNs.report("ServerConfig", "../../config/ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginCommand(extras) {
    _reporterNs.report("LoginCommand", "../../login/LoginCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetManager(extras) {
    _reporterNs.report("NetManager", "../../network/socket/NetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "../MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUIProxy(extras) {
    _reporterNs.report("MapUIProxy", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCityAddition(extras) {
    _reporterNs.report("CityAddition", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacility(extras) {
    _reporterNs.report("Facility", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../utils/EventMgr", _context.meta, extras);
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
      NetManager = _unresolved_4.NetManager;
    }, function (_unresolved_5) {
      MapCommand = _unresolved_5.default;
    }, function (_unresolved_6) {
      MapUIProxy = _unresolved_6.default;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c642b5A+npCiK406NBA3WB9", "MapUICommand", undefined);

      _export("default", MapUICommand = class MapUICommand {
        //单例
        static getInstance() {
          if (this._instance == null) {
            this._instance = new MapUICommand();
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
          _defineProperty(this, "_proxy", new (_crd && MapUIProxy === void 0 ? (_reportPossibleCrUseOfMapUIProxy({
            error: Error()
          }), MapUIProxy) : MapUIProxy)());

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).city_facilities, this.onCityFacilities, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).city_upFacility, this.onCityUpFacility, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).role_myRoleRes, this.onRoleMyRoleRes, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).war_report, this.onUpdataWarReports, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).war_reportPush, this.onUpdataWarReport, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).war_read, this.onUpdataWarRead, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).interior_collect, this.onCollect, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).interior_openCollect, this.onOpenCollect, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).roleRes_push, this.updataRoleRes, this);
          setInterval(() => {
            var list = this._proxy.getMyAllFacilitys();

            list.forEach((fs, key) => {
              fs.forEach(f => {
                if (f.isNeedUpdateLevel()) {
                  //倒计时完，请求最新的等级
                  console.log("有设施升级完了，需要刷新");
                  this.qryCityFacilities(key);
                  return;
                }
              });
            });
          }, 1000);
        }

        onCityFacilities(data) {
          console.log("onCityFacilities :", data);

          if (data.code == 0) {
            this._proxy.updateMyFacilityList(data.msg.cityId, data.msg.facilities);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_my_facilities"); //刷新城池附加加成

            var cityData = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().cityProxy.getMyCityById(data.msg.cityId);

            var addition = this._proxy.updateMyCityAdditions(cityData.cityId);

            cityData.maxDurable = this._proxy.getMyCityMaxDurable(data.msg.cityId);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_city_addition", data.msg.cityId, addition);
          }
        }

        onCityUpFacility(data) {
          console.log("onCityUpFacility :", data);

          if (data.code == 0) {
            var facilityData = this._proxy.updateMyFacility(data.msg.cityId, data.msg.facility);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_my_facility", data.msg.cityId, facilityData);
            (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
              error: Error()
            }), LoginCommand) : LoginCommand).getInstance().proxy.saveEnterData(data.msg);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("upate_my_roleRes"); //刷新城池附加加成

            var cityData = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().cityProxy.getMyCityById(data.msg.cityId);

            var addition = this._proxy.updateMyCityAdditions(data.msg.cityId);

            cityData.maxDurable = this._proxy.getMyCityMaxDurable(data.msg.cityId);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("update_city_addition", data.msg.cityId, addition);
          }
        }

        onRoleMyRoleRes(data) {
          console.log("onRoleMyProperty :", data);

          if (data.code == 0) {
            (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
              error: Error()
            }), LoginCommand) : LoginCommand).getInstance().proxy.saveEnterData(data.msg);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("upate_my_roleRes");
          }
        }

        updataRoleRes(data) {
          if (data.code == 0) {
            (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
              error: Error()
            }), LoginCommand) : LoginCommand).getInstance().proxy.setRoleResData(data.msg);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("upate_my_roleRes");
          }
        }

        onUpdataWarReports(data) {
          console.log("onUpdataWarReport :", data);

          if (data.code == 0) {
            this._proxy.updateWarReports(data.msg);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("upate_war_report");
          }
        }

        onUpdataWarReport(data) {
          console.log("onUpdataWarReport :", data);

          if (data.code == 0) {
            this._proxy.updateWarReport(data.msg);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("upate_war_report");
          }
        }

        onUpdataWarRead(data) {
          console.log("onUpdataWarRead :", data);

          if (data.code == 0) {
            var id = data.msg.id;

            if (id == 0) {
              this._proxy.updateAllWarRead(true);
            } else {
              this._proxy.updateWarRead(id, true);
            }

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("upate_war_report");
          }
        }

        onCollect(data) {
          console.log("onCollect :", data);

          if (data.code == 0) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("interior_collect", data.msg);
          }
        }

        onOpenCollect(data) {
          console.log("onOpenCollect :", data);

          if (data.code == 0) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("interior_openCollect", data.msg);
          }
        }

        onDestory() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        get proxy() {
          return this._proxy;
        }
        /**
         * 设施
         * @param cityId 
         */


        qryCityFacilities(cityId) {
          if (cityId === void 0) {
            cityId = 0;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).city_facilities,
            msg: {
              cityId: cityId
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }
        /**
         * 升级设施
         * @param cityId 
         * @param ftype 
         */


        upFacility(cityId, ftype) {
          if (cityId === void 0) {
            cityId = 0;
          }

          if (ftype === void 0) {
            ftype = 0;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).city_upFacility,
            msg: {
              cityId: cityId,
              fType: ftype
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }
        /**
         * 我的角色资源属性
         * @param cityId 
         */


        qryMyRoleRes() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).role_myRoleRes,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }
        /**
         * 我的角色资源属性(全)
         * @param 
         */


        updateMyProperty(data) {
          (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().proxy.saveEnterData(data.msg);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("upate_my_roleRes");
        }
        /**
         * 战报查询
         */


        qryWarReport() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).war_report,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }
        /**
         * 读取
         */


        warRead(id) {
          if (id === void 0) {
            id = 0;
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).war_read,
            msg: {
              id: id
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        interiorCollect() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).interior_collect,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        interiorOpenCollect() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).interior_openCollect,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        interiorTransform(from, to) {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).interior_transform,
            msg: {
              from: from,
              to: to
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

      });

      _defineProperty(MapUICommand, "_instance", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapUICommand.js.map