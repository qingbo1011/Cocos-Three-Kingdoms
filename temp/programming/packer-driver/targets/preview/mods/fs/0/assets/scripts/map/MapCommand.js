System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ServerConfig, ArmyCommand, GeneralCommand, NetManager, DateUtil, MapBuildProxy, MapCityProxy, MapProxy, MapUtil, MapUICommand, EventMgr, MapCommand, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfServerConfig(extras) {
    _reporterNs.report("ServerConfig", "../config/ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmyCommand(extras) {
    _reporterNs.report("ArmyCommand", "../general/ArmyCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "../general/GeneralCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetManager(extras) {
    _reporterNs.report("NetManager", "../network/socket/NetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapBuildProxy(extras) {
    _reporterNs.report("MapBuildProxy", "./MapBuildProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapBuildData(extras) {
    _reporterNs.report("MapBuildData", "./MapBuildProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityProxy(extras) {
    _reporterNs.report("MapCityProxy", "./MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "./MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapProxy(extras) {
    _reporterNs.report("MapProxy", "./MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapAreaData(extras) {
    _reporterNs.report("MapAreaData", "./MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUtil(extras) {
    _reporterNs.report("MapUtil", "./MapUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./ui/MapUICommand", _context.meta, extras);
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
      ArmyCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      GeneralCommand = _unresolved_4.default;
    }, function (_unresolved_5) {
      NetManager = _unresolved_5.NetManager;
    }, function (_unresolved_6) {
      DateUtil = _unresolved_6.default;
    }, function (_unresolved_7) {
      MapBuildProxy = _unresolved_7.default;
    }, function (_unresolved_8) {
      MapCityProxy = _unresolved_8.default;
    }, function (_unresolved_9) {
      MapProxy = _unresolved_9.default;
    }, function (_unresolved_10) {
      MapUtil = _unresolved_10.default;
    }, function (_unresolved_11) {
      MapUICommand = _unresolved_11.default;
    }, function (_unresolved_12) {
      EventMgr = _unresolved_12.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02570UsBbhAkKv/HyfqLJWx", "MapCommand", undefined);

      _export("default", MapCommand = class MapCommand {
        //单例
        static getInstance() {
          if (this._instance == null) {
            this._instance = new MapCommand();
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
          _defineProperty(this, "_proxy", new (_crd && MapProxy === void 0 ? (_reportPossibleCrUseOfMapProxy({
            error: Error()
          }), MapProxy) : MapProxy)());

          _defineProperty(this, "_cityProxy", new (_crd && MapCityProxy === void 0 ? (_reportPossibleCrUseOfMapCityProxy({
            error: Error()
          }), MapCityProxy) : MapCityProxy)());

          _defineProperty(this, "_buildProxy", new (_crd && MapBuildProxy === void 0 ? (_reportPossibleCrUseOfMapBuildProxy({
            error: Error()
          }), MapBuildProxy) : MapBuildProxy)());

          _defineProperty(this, "_isQryMyProperty", false);

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).role_myProperty, this.onRoleMyProperty, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).roleBuild_push, this.onRoleBuildStatePush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).nationMap_config, this.onNationMapConfig, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).nationMap_scanBlock, this.onNationMapScanBlock, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).nationMap_giveUp, this.onNationMapGiveUp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).nationMap_build, this.onNationMapBuild, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).nationMap_upBuild, this.onNationMapUpBuild, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).roleCity_push, this.onRoleCityPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).role_posTagList, this.onPosTagList, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).role_opPosTag, this.onOpPosTag, this);
        }

        onDestory() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        initData() {
          this._proxy.initData();

          this._cityProxy.initData();

          this._buildProxy.initData();
        }

        clearData() {
          this._proxy.clearData();

          this._cityProxy.clearData();

          this._buildProxy.clearData();

          this._isQryMyProperty = false;
        }

        get proxy() {
          return this._proxy;
        }

        get cityProxy() {
          return this._cityProxy;
        }

        get buildProxy() {
          return this._buildProxy;
        }

        onRoleMyProperty(data) {
          console.log("onRoleMyProperty", data);

          if (data.code == 0) {
            this._isQryMyProperty = true;
            (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
              error: Error()
            }), MapUICommand) : MapUICommand).getInstance().updateMyProperty(data);
            (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().updateMyProperty(data.msg.generals);
            (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().updateMyProperty(data.msg.armys);

            this._cityProxy.initMyCitys(data.msg.citys);

            this._buildProxy.initMyBuilds(data.msg.mr_builds);

            this._cityProxy.myId = this._cityProxy.getMyPlayerId();
            this._buildProxy.myId = this._cityProxy.getMyPlayerId();
            this._cityProxy.myUnionId = this._cityProxy.getMyMainCity().unionId;
            this._cityProxy.myParentId = this._cityProxy.getMyMainCity().parentId;
            this._buildProxy.myUnionId = this._cityProxy.getMyMainCity().unionId;
            this._buildProxy.myParentId = this._cityProxy.getMyMainCity().parentId;
            MapCommand.getInstance().posTagList();
            this.enterMap();
          }
        }

        onRoleBuildStatePush(data) {
          console.log("onRoleBuildStatePush", data);

          if (data.code == 0) {
            this._buildProxy.updateBuild(data.msg);
          }
        }

        onNationMapConfig(data) {
          console.log("onNationMapConfig", data);

          if (data.code == 0) {
            this._proxy.setNationMapConfig(data.msg.Confs);

            this.enterMap();
          }
        }

        onNationMapScanBlock(data, otherData) {
          console.log("onNationMapScan", data, otherData);

          if (data.code == 0) {
            this._cityProxy.setMapScanBlock(data.msg, otherData.id);

            this._buildProxy.setMapScanBlock(data.msg, otherData.id);
          }
        }

        onNationMapGiveUp(data, otherData) {
          console.log("onNationMapGiveUp", data, otherData);
        }

        onNationMapBuild(data, otherData) {
          console.log("onNationMapBuild", data, otherData);
        }

        onNationMapUpBuild(data, otherData) {
          console.log("onNationMapUpBuild", data, otherData);
        }

        onPosTagList(data, otherData) {
          console.log("onPosTagList", data, otherData);

          if (data.code == 0) {
            this._proxy.updateMapPosTags(data.msg.pos_tags);
          }
        }

        onOpPosTag(data, otherData) {
          console.log("onOpPosTag", data, otherData);

          if (data.code == 0) {
            if (data.msg.type == 0) {
              this._proxy.removeMapPosTag(data.msg.x, data.msg.y); // EventMgr.emit("show_toast", "移除成功");


              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit("update_tag");
            } else if (data.msg.type == 1) {
              this._proxy.addMapPosTag(data.msg.x, data.msg.y, data.msg.name); // EventMgr.emit("show_toast", "添加成功");


              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit("update_tag");
            }
          }
        }

        onRoleCityPush(data) {
          console.log("onRoleCityPush:", data);

          this._buildProxy.updateSub(data.msg.rid, data.msg.union_id, data.msg.parent_id);

          this._cityProxy.updateCity(data.msg);

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("unionChange", data.msg.rid, data.msg.union_id, data.msg.parent_id);
        }

        isBuildSub(id) {
          var buiildData = this.buildProxy.getBuild(id);

          if (buiildData) {
            if (buiildData.rid == this.buildProxy.myId) {
              return true;
            }

            if (buiildData.unionId > 0 && buiildData.unionId == this.buildProxy.myUnionId) {
              return true;
            }

            if (buiildData.parentId > 0 && buiildData.parentId == this.buildProxy.myUnionId) {
              return true;
            }
          }

          return false;
        }

        isBuildWarFree(id) {
          var buiildData = this.buildProxy.getBuild(id);

          if (buiildData) {
            return buiildData.isWarFree();
          } else {
            return false;
          }
        }

        isCitySub(id) {
          var cityData = this.cityProxy.getCity(id);

          if (cityData) {
            if (cityData.rid == this.cityProxy.myId) {
              return true;
            }

            if (cityData.unionId > 0 && cityData.unionId == this.cityProxy.myUnionId) {
              return true;
            }

            if (cityData.parentId > 0 && cityData.parentId == this.cityProxy.myUnionId) {
              return true;
            }
          }

          return false;
        }

        isCityWarFree(id) {
          var cityData = this.cityProxy.getCity(id);

          if (cityData && cityData.parentId > 0) {
            var diff = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).getServerTime() - cityData.occupyTime;

            if (diff < MapCommand.getInstance().proxy.getWarFree()) {
              return true;
            }
          }

          return false;
        }
        /**是否是可行军的位置*/


        isCanMoveCell(x, y) {
          var id = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).getIdByCellPoint(x, y);

          if (this.isBuildSub(id)) {
            return true;
          }

          if (this.isCitySub(id)) {
            return true;
          }

          return false;
        }

        isCanOccupyCell(x, y) {
          var radius = 0;
          var id = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).getIdByCellPoint(x, y);
          var cityData = this.cityProxy.getCity(id);

          if (cityData) {
            if (this.isCityWarFree(id)) {
              return false;
            }

            radius = cityData.getCellRadius();
          }

          var buildData = this.buildProxy.getBuild(id);

          if (buildData) {
            if (this.isBuildWarFree(id)) {
              return false;
            } // console.log("buildData 11111:", buildData);


            radius = buildData.getCellRadius();
          } //查找半径10


          for (var tx = x - 10; tx <= x + 10; tx++) {
            for (var ty = y - 10; ty <= y + 10; ty++) {
              var _id = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                error: Error()
              }), MapUtil) : MapUtil).getIdByCellPoint(tx, ty);

              var _cityData = this.cityProxy.getCity(_id);

              if (_cityData) {
                var absX = Math.abs(x - tx);
                var absY = Math.abs(y - ty);

                if (absX <= radius + _cityData.getCellRadius() + 1 && absY <= radius + _cityData.getCellRadius() + 1) {
                  var ok = this.isCitySub(_id);

                  if (ok) {
                    return true;
                  }
                }
              }

              var _buildData = this.buildProxy.getBuild(_id);

              if (_buildData) {
                var absX = Math.abs(x - tx);
                var absY = Math.abs(y - ty); // console.log("MapBuildData:", absX, absY, radius+buildData.getCellRadius()+1, buildData);

                if (absX <= radius + _buildData.getCellRadius() + 1 && absY <= radius + _buildData.getCellRadius() + 1) {
                  var ok = this.isBuildSub(_id);

                  if (ok) {
                    return true;
                  }
                }
              }
            }
          }

          return false;
        }

        enterMap() {
          if (this._proxy.hasResConfig() == false) {
            this.qryNationMapConfig();
            return;
          }

          if (this._isQryMyProperty == false) {
            this.qryRoleMyProperty();
            return;
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("enter_map");
        }
        /**请求角色全量信息*/


        qryRoleMyProperty() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).role_myProperty,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }
        /**请求自己的城池信息*/


        qryRoleMyCity() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).role_myCity,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }
        /**请求地图基础配置*/


        qryNationMapConfig() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).nationMap_config,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        qryNationMapScanBlock(qryData) {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).nationMap_scanBlock,
            msg: {
              x: qryData.startCellX,
              y: qryData.startCellY,
              length: qryData.len
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData, qryData);
        }

        giveUpBuild(x, y) {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).nationMap_giveUp,
            msg: {
              x: x,
              y: y
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        build(x, y, type) {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).nationMap_build,
            msg: {
              x: x,
              y: y,
              type: type
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        upBuild(x, y) {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).nationMap_upBuild,
            msg: {
              x: x,
              y: y
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        delBuild(x, y) {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).nationMap_delBuild,
            msg: {
              x: x,
              y: y
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        upPosition(x, y) {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).role_upPosition,
            msg: {
              x: x,
              y: y
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        posTagList() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).role_posTagList,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        } //1添加、0移除


        opPosTag(type, x, y, name) {
          if (name === void 0) {
            name = "";
          }

          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).role_opPosTag,
            msg: {
              type: type,
              x: x,
              y: y,
              name: name
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

      });

      _defineProperty(MapCommand, "_instance", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapCommand.js.map