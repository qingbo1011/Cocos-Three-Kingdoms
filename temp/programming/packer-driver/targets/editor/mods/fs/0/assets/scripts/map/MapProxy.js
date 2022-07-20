System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Vec2, view, MapUtil, EventMgr, MapResConfig, MapResType, MapResData, MapTagPos, MapAreaData, MapProxy, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMapUtil(extras) {
    _reporterNs.report("MapUtil", "./MapUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../utils/EventMgr", _context.meta, extras);
  }

  _export({
    MapResConfig: void 0,
    MapResType: void 0,
    MapResData: void 0,
    MapTagPos: void 0,
    MapAreaData: void 0,
    default: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Vec2 = _cc.Vec2;
      view = _cc.view;
    }, function (_unresolved_2) {
      MapUtil = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9c23Dl3a1Bmopa1I5aaAlC", "MapProxy", undefined);

      _export("MapResConfig", MapResConfig = class MapResConfig {
        constructor() {
          _defineProperty(this, "type", 0);

          _defineProperty(this, "level", 0);

          _defineProperty(this, "name", "");

          _defineProperty(this, "wood", 0);

          _defineProperty(this, "iron", 0);

          _defineProperty(this, "stone", 0);

          _defineProperty(this, "grain", 0);

          _defineProperty(this, "durable", 0);

          _defineProperty(this, "defender", 0);
        }

      });
      /**地图资源类型*/


      _export("MapResType", MapResType = class MapResType {});
      /**地图资源数据*/


      _defineProperty(MapResType, "SYS_FORTRESS", 50);

      _defineProperty(MapResType, "SYS_CITY", 51);

      _defineProperty(MapResType, "WOOD", 52);

      _defineProperty(MapResType, "IRON", 53);

      _defineProperty(MapResType, "STONE", 54);

      _defineProperty(MapResType, "GRAIN", 55);

      _defineProperty(MapResType, "FORTRESS", 56);

      _export("MapResData", MapResData = class MapResData {
        constructor() {
          _defineProperty(this, "id", 0);

          _defineProperty(this, "type", 0);

          _defineProperty(this, "level", 0);

          _defineProperty(this, "x", 0);

          _defineProperty(this, "y", 0);
        }

      });

      _export("MapTagPos", MapTagPos = class MapTagPos {
        constructor() {
          _defineProperty(this, "x", 0);

          _defineProperty(this, "y", 0);

          _defineProperty(this, "name", "");
        }

      });
      /**地图区域数据*/


      _export("MapAreaData", MapAreaData = class MapAreaData {
        constructor() {
          _defineProperty(this, "id", 0);

          _defineProperty(this, "x", 0);

          _defineProperty(this, "y", 0);

          _defineProperty(this, "startCellX", 0);

          _defineProperty(this, "startCellY", 0);

          _defineProperty(this, "endCellX", 0);

          _defineProperty(this, "endCellY", 0);

          _defineProperty(this, "len", 0);

          _defineProperty(this, "qryStartTime", 0);
        }

        checkAndUpdateQryTime() {
          let nowTime = Date.now();

          if (nowTime - this.qryStartTime >= MapAreaData.MAX_TIME) {
            this.qryStartTime = nowTime;
            return true;
          }

          return false;
        }

        equals(other) {
          if (other == null) {
            return false;
          }

          return this.id == other.id;
        }

        fuzzyEquals(other, variance) {
          if (other == null) {
            return false;
          }

          if (this.x - variance <= other.x && other.x <= this.x + variance) {
            if (this.y - variance <= other.y && other.y <= this.y + variance) return true;
          }

          return false;
        }

      });

      _defineProperty(MapAreaData, "MAX_TIME", 10000);

      _export("default", MapProxy = class MapProxy {
        constructor() {
          _defineProperty(this, "warFree", 0);

          _defineProperty(this, "tiledMapAsset", null);

          _defineProperty(this, "_curCenterPoint", null);

          _defineProperty(this, "_curCenterAreaId", -1);

          _defineProperty(this, "_mapAreaDatas", []);

          _defineProperty(this, "_mapResDatas", []);

          _defineProperty(this, "_mapSysCityResDatas", []);

          _defineProperty(this, "_mapPosTags", []);

          _defineProperty(this, "qryAreaIds", []);

          _defineProperty(this, "_mapResConfigs", new Map());
        }

        // 初始化地图配置
        initData() {
          this._mapAreaDatas.length = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).areaCount;
        }

        clearData() {
          this._curCenterPoint = null;
          this._curCenterAreaId = -1;
          this._mapAreaDatas.length = 0;
          this.qryAreaIds.length = 0;
        }
        /**地图建筑基础配置信息*/


        setNationMapConfig(configList) {
          this._mapResConfigs.clear();

          for (let i = 0; i < configList.length; i++) {
            let cfg = new MapResConfig();
            cfg.type = configList[i].type;
            cfg.level = configList[i].level;
            cfg.name = configList[i].name;
            cfg.wood = configList[i].Wood;
            cfg.iron = configList[i].iron;
            cfg.stone = configList[i].stone;
            cfg.grain = configList[i].grain;
            cfg.durable = configList[i].durable;
            cfg.defender = configList[i].defender;

            this._mapResConfigs.set(configList[i].type + "_" + cfg.level, cfg);
          }
        }

        setWarFree(time) {
          this.warFree = time;
        }

        getWarFree() {
          return this.warFree * 1000;
        }

        initMapResConfig(jsonData) {
          let w = jsonData.w;
          let list = jsonData.list;
          this._mapResDatas = [];
          this._mapSysCityResDatas = [];

          for (let i = 0; i < jsonData.list.length; i++) {
            let data = new MapResData();
            data.id = i;
            data.type = list[i][0];
            data.level = list[i][1];
            data.x = i % w;
            data.y = Math.floor(i / w);

            this._mapResDatas.push(data);

            if (data.type == MapResType.SYS_CITY) {
              this._mapSysCityResDatas.push(data);
            }
          }
        }

        getSysCityResData(x, y) {
          for (let index = 0; index < this._mapSysCityResDatas.length; index++) {
            var resData = this._mapSysCityResDatas[index];
            var level = resData.level;
            var dis = 0;

            if (level >= 8) {
              dis = 3;
            } else if (level >= 5) {
              dis = 2;
            } else {
              dis = 1;
            }

            if (dis >= Math.abs(x - resData.x) && dis >= Math.abs(y - resData.y)) {
              return resData;
            }
          }

          return null;
        }
        /**设置地图当前中心点的信息*/


        setCurCenterPoint(point, pixelPoint) {
          if (this._curCenterPoint == null || this._curCenterPoint.x != point.x || this._curCenterPoint.y != point.y) {
            this._curCenterPoint = point;
            let areaPoint = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).getAreaPointByCellPoint(point.x, point.y);
            let areaId = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).getIdByAreaPoint(areaPoint.x, areaPoint.y);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("map_center_change", this._curCenterPoint);

            if (this._curCenterAreaId == -1 || this._curCenterAreaId != areaId) {
              //展示区域变化
              let areaData = this.getMapAreaData(areaId);
              let oldIds = null;
              let newIds = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                error: Error()
              }), MapUtil) : MapUtil).get9GridVaildAreaIds(areaData.id);
              let addIds = [];
              let removeIds = [];
              let firstAreaIds = null;
              let otherAreaIds = [];

              if (this._curCenterAreaId == -1 || this.getMapAreaData(this._curCenterAreaId).fuzzyEquals(areaData, 3) == false) {
                //全量刷新
                oldIds = [];
                addIds = newIds; //计算四个角所在的区域 用于判断需要优先请求的区域

                let temp = pixelPoint.clone();
                let leftTopPixelPoint = temp.add(new Vec2(-view.getVisibleSize().width * 0.5, view.getVisibleSize().height * 0.5));
                temp = pixelPoint.clone();
                let leftDownPixelPoint = temp.add(new Vec2(-view.getVisibleSize().width * 0.5, -view.getVisibleSize().height * 0.5));
                temp = pixelPoint.clone();
                let rightTopPixelPoint = temp.add(new Vec2(view.getVisibleSize().width * 0.5, view.getVisibleSize().height * 0.5));
                temp = pixelPoint.clone();
                let rightDownPixelPoint = temp.add(new Vec2(view.getVisibleSize().width * 0.5, -view.getVisibleSize().height * 0.5));
                temp = pixelPoint.clone();
                firstAreaIds = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                  error: Error()
                }), MapUtil) : MapUtil).getVaildAreaIdsByPixelPoints(temp, leftTopPixelPoint, leftDownPixelPoint, rightTopPixelPoint, rightDownPixelPoint);
              } else {
                oldIds = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                  error: Error()
                }), MapUtil) : MapUtil).get9GridVaildAreaIds(this._curCenterAreaId);

                for (let i = 0; i < newIds.length; i++) {
                  if (oldIds.indexOf(newIds[i]) == -1) {
                    addIds.push(newIds[i]);
                  }
                }

                for (let i = 0; i < oldIds.length; i++) {
                  if (newIds.indexOf(oldIds[i]) == -1) {
                    removeIds.push(oldIds[i]);
                  }
                } //其他情况优先请求中心区域


                if (addIds.indexOf(areaData.id)) {
                  firstAreaIds = [areaData.id];
                }
              }

              if (firstAreaIds && firstAreaIds.length > 0) {
                for (let i = 0; i < addIds.length; i++) {
                  if (firstAreaIds.indexOf(addIds[i]) == -1) {
                    otherAreaIds.push(addIds[i]);
                  }
                }
              } else {
                otherAreaIds = addIds;
              }

              let qryIndexs = null;

              if (firstAreaIds && firstAreaIds.length > 0) {
                qryIndexs = firstAreaIds.concat(otherAreaIds);
              } else {
                qryIndexs = otherAreaIds;
              }

              this.qryAreaIds = this.qryAreaIds.concat(qryIndexs); // this.qryAreaIds = [18];

              this._curCenterAreaId = areaId;
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit("map_show_area_change", point, this._curCenterAreaId, addIds, removeIds);
            }

            return true;
          }

          return false;
        }

        getCurCenterPoint() {
          return this._curCenterPoint;
        }

        getCurCenterAreaId() {
          return this._curCenterAreaId;
        }
        /**获取地图区域数据*/


        getMapAreaData(id) {
          if (this._mapAreaDatas[id] == undefined) {
            let data = new MapAreaData();
            data.id = id;
            let point = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).getAreaPointById(id);
            let startCellPoint = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).getStartCellPointByAreaPoint(point.x, point.y);
            data.x = point.x;
            data.y = point.y;
            data.startCellX = startCellPoint.x;
            data.startCellY = startCellPoint.y;
            data.endCellX = startCellPoint.x + (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).areaCellSize.width;
            data.endCellY = startCellPoint.y + (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).areaCellSize.width;
            data.len = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).areaCellSize.width;
            this._mapAreaDatas[id] = data;
            return data;
          }

          return this._mapAreaDatas[id];
        }
        /*获取产量描述**/


        getResYieldDesList(cfg) {
          let list = [];

          if (cfg.grain > 0) {
            list.push("粮食 +" + cfg.grain + "/小时");
          }

          if (cfg.wood > 0) {
            list.push("木材 +" + cfg.wood + "/小时");
          }

          if (cfg.iron > 0) {
            list.push("铁矿 +" + cfg.iron + "/小时");
          }

          if (cfg.stone > 0) {
            list.push("石料 +" + cfg.stone + "/小时");
          }

          return list;
        }

        getResData(id) {
          return this._mapResDatas[id];
        }
        /**根据类型获取配置数据*/


        getResConfig(type, level) {
          let key = type + "_" + level;

          if (this._mapResConfigs.has(key)) {
            return this._mapResConfigs.get(key);
          }

          return null;
        }

        hasResDatas() {
          return this._mapResDatas.length > 0;
        }

        hasResConfig() {
          return this._mapResConfigs.size > 0;
        }

        updateMapPosTags(posTag) {
          this._mapPosTags = [];
          posTag.forEach(data => {
            var tag = new MapTagPos();
            tag.x = data.x;
            tag.y = data.y;
            tag.name = data.name;

            this._mapPosTags.push(tag);
          });
        }

        removeMapPosTag(x, y) {
          var tags = [];

          this._mapPosTags.forEach(tag => {
            if (tag.x != x || y != tag.y) {
              tags.push(tag);
            }
          });

          this._mapPosTags = tags;
        }

        addMapPosTag(x, y, name) {
          var tag = new MapTagPos();
          tag.x = x;
          tag.y = y;
          tag.name = name;
          var ok = true;

          this._mapPosTags.forEach(tag => {
            if (tag.x == x && tag.y == y) {
              ok = false;
            }
          });

          if (ok) {
            this._mapPosTags.push(tag);
          }
        }

        isPosTag(x, y) {
          var ret = false;

          for (let index = 0; index < this._mapPosTags.length; index++) {
            const tag = this._mapPosTags[index];

            if (tag.x == x && tag.y == y) {
              ret = true;
              break;
            }
          }

          return ret;
        }

        getPosTags() {
          return this._mapPosTags;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapProxy.js.map