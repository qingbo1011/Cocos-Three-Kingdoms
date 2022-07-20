System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DateUtil, MapCommand, MapResType, MapUtil, EventMgr, MapBuildData, MapBuildProxy, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "./MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResType(extras) {
    _reporterNs.report("MapResType", "./MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUtil(extras) {
    _reporterNs.report("MapUtil", "./MapUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../utils/EventMgr", _context.meta, extras);
  }

  _export({
    MapBuildData: void 0,
    default: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DateUtil = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapResType = _unresolved_4.MapResType;
    }, function (_unresolved_5) {
      MapUtil = _unresolved_5.default;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30f953vrfpGkq4BFCjaTClK", "MapBuildProxy", undefined);

      /**地图建筑和占领数据*/
      _export("MapBuildData", MapBuildData = class MapBuildData {
        constructor() {
          _defineProperty(this, "id", 0);

          _defineProperty(this, "rid", 0);

          _defineProperty(this, "nickName", "");

          _defineProperty(this, "name", "");

          _defineProperty(this, "x", 0);

          _defineProperty(this, "y", 0);

          _defineProperty(this, "type", 0);

          _defineProperty(this, "level", 0);

          _defineProperty(this, "opLevel", 0);

          _defineProperty(this, "curDurable", 0);

          _defineProperty(this, "maxDurable", 0);

          _defineProperty(this, "defender", 0);

          _defineProperty(this, "unionId", 0);

          _defineProperty(this, "parentId", 0);

          _defineProperty(this, "unionName", void 0);

          _defineProperty(this, "occupyTime", void 0);

          _defineProperty(this, "giveUpTime", void 0);

          _defineProperty(this, "endTime", void 0);
        }

        equalsServerData(data) {
          if (this.rid == data.rid && this.name == data.name && this.nickName == data.RNick && this.type == data.type && this.level == data.level && this.opLevel == data.op_level && this.curDurable == data.cur_durable && this.maxDurable == data.maxDurable && this.defender == data.defender && this.unionId == data.union_id && this.parentId == data.parent_id && this.unionName == data.union_name && this.occupyTime == data.occupy_time && this.giveUpTime == data.giveUp_time && this.endTime == data.end_time) {
            return true;
          }

          return false;
        }

        static createBuildData(data, id, buildData) {
          if (id === void 0) {
            id = 0;
          }

          if (buildData === void 0) {
            buildData = null;
          }

          var build = buildData;

          if (buildData == null) {
            build = new MapBuildData();
          }

          build.id = id;
          build.rid = data.rid;
          build.nickName = data.RNick;
          build.name = data.name;
          build.x = data.x;
          build.y = data.y;
          build.type = data.type;
          build.level = data.level;
          build.opLevel = data.op_level;
          build.curDurable = data.cur_durable;
          build.maxDurable = data.max_durable;
          build.defender = data.defender;
          build.unionId = data.union_id;
          build.parentId = data.parent_id;
          build.unionName = data.union_name;
          build.occupyTime = data.occupy_time;
          build.giveUpTime = data.giveUp_time;
          build.endTime = data.end_time;
          return build;
        }

        getCellRadius() {
          if (this.isSysCity()) {
            if (this.level >= 8) {
              return 3;
            } else if (this.level >= 5) {
              return 2;
            } else {
              return 1;
            }
          } else {
            return 0;
          }
        }

        isSysCity() {
          return this.type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).SYS_CITY;
        }

        isSysFortress() {
          return this.type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).SYS_FORTRESS;
        }

        isWarFree() {
          var diff = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).getServerTime() - this.occupyTime;

          if (diff < (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().proxy.getWarFree()) {
            return true;
          }

          return false;
        }

        isResBuild() {
          return this.type >= (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).WOOD && this.type < (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
            error: Error()
          }), MapResType) : MapResType).FORTRESS;
        }

        isInGiveUp() {
          var diff = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).leftTime(this.giveUpTime);
          return diff > 0;
        } //正在建设中


        isBuilding() {
          var diff = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).leftTime(this.endTime);
          return diff > 0 && this.level == 0;
        } //正在升级中


        isUping() {
          var diff = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).leftTime(this.endTime);
          return diff > 0 && this.level > 0 && this.opLevel > 0;
        } //正在拆除中


        isDestroying() {
          var diff = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).leftTime(this.endTime);
          return diff > 0 && this.opLevel == 0;
        }

      });

      _export("default", MapBuildProxy = class MapBuildProxy {
        constructor() {
          _defineProperty(this, "_mapBuilds", []);

          _defineProperty(this, "_myBuilds", []);

          _defineProperty(this, "_lastBuildCellIds", new Map());

          _defineProperty(this, "myId", 0);

          _defineProperty(this, "myUnionId", 0);

          _defineProperty(this, "myParentId", 0);
        }

        // 初始化数据
        initData() {
          this._mapBuilds.length = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapCellCount;

          this._lastBuildCellIds.clear();

          this.updateMyBuildIds(); //建筑信息比加载更前 所以id需要根据加载的地图做更新
        }

        clearData() {
          this._mapBuilds.length = 0;

          this._lastBuildCellIds.clear();
        }
        /**我的建筑信息*/


        initMyBuilds(builds) {
          this._myBuilds.length = 0;

          for (var i = 0; i < builds.length; i++) {
            var id = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).getIdByCellPoint(builds[i].x, builds[i].y);
            var build = MapBuildData.createBuildData(builds[i], id);

            this._myBuilds.push(build);
          }
        }
        /**更新建筑id*/


        updateMyBuildIds() {
          for (var i = 0; i < this._myBuilds.length; i++) {
            var id = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).getIdByCellPoint(this._myBuilds[i].x, this._myBuilds[i].y);
            this._myBuilds[i].id = id;
            this._mapBuilds[id] = this._myBuilds[i];
          }
        }
        /**更新建筑*/


        updateBuild(build) {
          if (build.rid == 0) {
            //代表是放弃领地
            if (build.type > (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
              error: Error()
            }), MapResType) : MapResType).SYS_CITY) {
              this.removeBuild(build.x, build.y);
              return;
            }
          }

          var id = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).getIdByCellPoint(build.x, build.y);
          var buildData = null;

          if (this._mapBuilds[id] == null) {
            //代表是新增
            buildData = MapBuildData.createBuildData(build, id);

            this._myBuilds.push(build);

            this._mapBuilds[id] = buildData;
          } else {
            buildData = MapBuildData.createBuildData(build, id, this._mapBuilds[id]);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("update_build", buildData);

          if (buildData.rid == this.myId) {
            //代表是自己的领地
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("my_build_change");
          }
        }

        removeBuild(x, y) {
          var id = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).getIdByCellPoint(x, y);
          this._mapBuilds[id] = null;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("delete_build", id, x, y);
          this.removeMyBuild(x, y);
        }

        removeMyBuild(x, y) {
          var index = -1;

          for (var i = 0; i < this._myBuilds.length; i++) {
            if (this._myBuilds[i].x == x && this._myBuilds[i].y == y) {
              index = i;
              break;
            }
          }

          if (index != -1) {
            this._myBuilds.splice(index, 1);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("my_build_change");
          }
        }

        setMapScanBlock(scanDatas, areaId) {
          if (areaId === void 0) {
            areaId = 0;
          }

          var rBuilds = scanDatas.mr_builds;

          if (rBuilds.length > 0) {
            var lastBuildCellIds = null;

            if (this._lastBuildCellIds.has(areaId)) {
              lastBuildCellIds = this._lastBuildCellIds.get(areaId);
            }

            var buildCellIds = [];
            var addBuildCellIds = [];
            var updateBuildCellIds = [];
            var removeBuildCellIds = [];

            for (var i = 0; i < rBuilds.length; i++) {
              var areaIndex = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                error: Error()
              }), MapUtil) : MapUtil).getAreaIdByCellPoint(rBuilds[i].x, rBuilds[i].y);

              if (areaIndex != areaId) {
                //代表服务端给过来的数据不在当前区域
                console.log("代表服务端给过来的数据不在当前区域");
                continue;
              }

              var cellId = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                error: Error()
              }), MapUtil) : MapUtil).getIdByCellPoint(rBuilds[i].x, rBuilds[i].y);
              buildCellIds.push(cellId);

              if (lastBuildCellIds) {
                var index = lastBuildCellIds.indexOf(cellId);

                if (index != -1) {
                  //存在就列表中 就代表是已存在的数据
                  if (this._mapBuilds[cellId].equalsServerData(rBuilds[i]) == false) {
                    //代表数据不一样需要刷新
                    this._mapBuilds[cellId] = MapBuildData.createBuildData(rBuilds[i], cellId, this._mapBuilds[cellId]);
                    updateBuildCellIds.push(cellId);
                  } else {
                    console.log("equalsServerData true");
                  }

                  lastBuildCellIds.splice(index, 1); //移除重复数据

                  continue;
                }
              } //其他情况就是新数据了


              this._mapBuilds[cellId] = MapBuildData.createBuildData(rBuilds[i], cellId);
              addBuildCellIds.push(cellId);
            }

            if (lastBuildCellIds && lastBuildCellIds.length > 0) {
              //代表有需要删除的数据
              removeBuildCellIds = lastBuildCellIds;

              for (var _i = 0; _i < removeBuildCellIds.length; _i++) {
                this._mapBuilds[removeBuildCellIds[_i]] = null;
              }
            }

            this._lastBuildCellIds.set(areaId, buildCellIds);

            if (addBuildCellIds.length > 0 || removeBuildCellIds.length > 0 || updateBuildCellIds.length > 0) {
              console.log("update_builds", areaId, addBuildCellIds, removeBuildCellIds, updateBuildCellIds);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit("update_builds", areaId, addBuildCellIds, removeBuildCellIds, updateBuildCellIds);
            }
          }
        }

        getBuild(id) {
          return this._mapBuilds[id];
        }

        getMyBuildList() {
          return this._myBuilds;
        }

        updateSub(rid, unionId, parentId) {
          if (rid == this.myId) {
            this.myUnionId = unionId;
            this.myParentId = parentId;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapBuildProxy.js.map