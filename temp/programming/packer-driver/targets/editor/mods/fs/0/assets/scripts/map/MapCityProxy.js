System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MapUtil, EventMgr, MapCityData, MapCityProxy, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMapUtil(extras) {
    _reporterNs.report("MapUtil", "./MapUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../utils/EventMgr", _context.meta, extras);
  }

  _export({
    MapCityData: void 0,
    default: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MapUtil = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "617d7A7rSpJNYYeShYZVQ9d", "MapCityProxy", undefined);

      /**地图城池配置*/
      _export("MapCityData", MapCityData = class MapCityData {
        constructor() {
          _defineProperty(this, "id", 0);

          _defineProperty(this, "cityId", 0);

          _defineProperty(this, "rid", 0);

          _defineProperty(this, "name", "");

          _defineProperty(this, "x", null);

          _defineProperty(this, "y", 0);

          _defineProperty(this, "isMain", 0);

          _defineProperty(this, "level", 0);

          _defineProperty(this, "curDurable", 0);

          _defineProperty(this, "maxDurable", 0);

          _defineProperty(this, "unionId", 0);

          _defineProperty(this, "parentId", 0);

          _defineProperty(this, "unionName", "");

          _defineProperty(this, "occupyTime", void 0);
        }

        equalsServerData(data) {
          if (this.cityId == data.cityId && this.rid == data.rid && this.name == data.name && this.x == data.x && this.y == data.y && this.isMain == data.is_main && this.level == data.level && this.curDurable == data.cur_durable && this.maxDurable == data.maxDurable && this.unionId == data.union_id && this.parentId == data.parent_id && this.unionName == data.union_name && this.occupyTime == data.occupy_time) {
            return true;
          }

          return false;
        }

        static createCityData(data, id, cityData = null) {
          let city = cityData;

          if (cityData == null) {
            city = new MapCityData();
          }

          city.id = id;
          city.cityId = data.cityId;
          city.rid = data.rid;
          city.name = data.name;
          city.x = data.x;
          city.y = data.y;
          city.isMain = data.is_main;
          city.level = data.level;
          city.curDurable = data.cur_durable;
          city.maxDurable = data.max_durable;
          city.unionId = data.union_id;
          city.parentId = data.parent_id;
          city.unionName = data.union_name;
          city.occupyTime = data.occupy_time;
          return city;
        }

        getCellRadius() {
          return 2;
        }

      });

      _export("default", MapCityProxy = class MapCityProxy {
        constructor() {
          _defineProperty(this, "_mapCitys", []);

          _defineProperty(this, "_lastCityCellIds", new Map());

          _defineProperty(this, "_myCitys", []);

          _defineProperty(this, "myId", 0);

          _defineProperty(this, "myUnionId", 0);

          _defineProperty(this, "myParentId", 0);
        }

        // 初始化数据
        initData() {
          this._mapCitys.length = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapCellCount;

          this._lastCityCellIds.clear();

          this.updateMyCityIds();
        }

        clearData() {
          this._mapCitys.length = 0;

          this._lastCityCellIds.clear();
        }

        addCityData(data, cellId) {
          let cityData = MapCityData.createCityData(data, cellId, this._mapCitys[cellId]);
          this._mapCitys[cellId] = cityData;
          this._mapCitys[cellId - 1] = cityData;
          this._mapCitys[cellId + 1] = cityData;
          this._mapCitys[cellId - (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapSize.width] = cityData;
          this._mapCitys[cellId - (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapSize.width - 1] = cityData;
          this._mapCitys[cellId - (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapSize.width + 1] = cityData;
          this._mapCitys[cellId + (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapSize.width] = cityData;
          this._mapCitys[cellId + (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapSize.width - 1] = cityData;
          this._mapCitys[cellId + (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapSize.width + 1] = cityData;
        }

        removeCityData(cellId) {
          let cityData = this._mapCitys[cellId];

          if (cityData) {
            this._mapCitys[cellId] = null;
            this.checkAndRemoveCityCell(cellId - 1, cityData.cityId);
            this.checkAndRemoveCityCell(cellId + 1, cityData.cityId);
            this.checkAndRemoveCityCell(cellId - (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).mapSize.width, cityData.cityId);
            this.checkAndRemoveCityCell(cellId - (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).mapSize.width - 1, cityData.cityId);
            this.checkAndRemoveCityCell(cellId - (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).mapSize.width + 1, cityData.cityId);
            this.checkAndRemoveCityCell(cellId + (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).mapSize.width, cityData.cityId);
            this.checkAndRemoveCityCell(cellId + (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).mapSize.width - 1, cityData.cityId);
            this.checkAndRemoveCityCell(cellId + (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).mapSize.width + 1, cityData.cityId);
          }
        }

        checkAndRemoveCityCell(cellId, cityId) {
          let cityData = this._mapCitys[cellId];

          if (cityData && cityData.cityId == cityId) {
            this._mapCitys[cityId] = null;
            return true;
          }

          return false;
        }
        /**我的建筑信息*/


        initMyCitys(citys) {
          this._myCitys.length = 0;

          for (let i = 0; i < citys.length; i++) {
            let id = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).getIdByCellPoint(citys[i].x, citys[i].y);
            let city = MapCityData.createCityData(citys[i], id);

            if (city.isMain) {
              this._myCitys.unshift(city);
            } else {
              this._myCitys.push(city);
            }
          }
        }
        /**更新建筑id*/


        updateMyCityIds() {
          for (let i = 0; i < this._myCitys.length; i++) {
            let id = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).getIdByCellPoint(this._myCitys[i].x, this._myCitys[i].y);
            this._myCitys[i].id = id;
            this._mapCitys[id] = this._myCitys[i];
          }
        }
        /**更新建筑*/


        updateCity(city) {
          let id = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).getIdByCellPoint(city.x, city.y);
          let cityData = null;

          if (this._mapCitys[id] == null) {
            //代表是新增
            cityData = MapCityData.createCityData(city, id);
            this._mapCitys[id] = cityData;

            if (city.rid == this.myId) {
              this._myCitys.push(cityData);

              this.myUnionId = cityData.unionId;
              this.myParentId = cityData.parentId;
            }
          } else {
            cityData = MapCityData.createCityData(city, id, this._mapCitys[id]);

            if (city.rid == this.myId) {
              this.myUnionId = cityData.unionId;
              this.myParentId = cityData.parentId;
            }
          }

          return cityData;
        }

        setMapScanBlock(scanDatas, areaId = 0) {
          let cBuilds = scanDatas.mc_builds;

          if (cBuilds.length > 0) {
            let lastCityCellIds = null;

            if (this._lastCityCellIds.has(areaId)) {
              lastCityCellIds = this._lastCityCellIds.get(areaId);
            }

            let cityCellIds = [];
            let addCityCellIds = [];
            let updateCityCellIds = [];
            let removeCityCellIds = [];

            for (let i = 0; i < cBuilds.length; i++) {
              let areaIndex = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                error: Error()
              }), MapUtil) : MapUtil).getAreaIdByCellPoint(cBuilds[i].x, cBuilds[i].y);

              if (areaIndex != areaId) {
                //代表服务端给过来的数据不在当前区域
                continue;
              }

              let cellId = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                error: Error()
              }), MapUtil) : MapUtil).getIdByCellPoint(cBuilds[i].x, cBuilds[i].y);
              cityCellIds.push(cellId);

              if (lastCityCellIds) {
                let index = lastCityCellIds.indexOf(cellId);

                if (index != -1) {
                  //存在就列表中 就代表是已存在的数据
                  if (this._mapCitys[cellId].equalsServerData(cBuilds[i]) == false) {
                    //代表数据不一样需要刷新
                    this.addCityData(cBuilds[i], cellId);
                    updateCityCellIds.push(cellId);
                  }

                  lastCityCellIds.splice(index, 1); //移除重复数据

                  continue;
                }
              } //其他情况就是新数据了


              this.addCityData(cBuilds[i], cellId);
              addCityCellIds.push(cellId);
            }

            if (lastCityCellIds && lastCityCellIds.length > 0) {
              //代表有需要删除的数据
              removeCityCellIds = lastCityCellIds;

              for (let i = 0; i < removeCityCellIds.length; i++) {
                this.removeCityData(removeCityCellIds[i]);
              }
            }

            this._lastCityCellIds.set(areaId, cityCellIds);

            if (addCityCellIds.length > 0 || removeCityCellIds.length > 0 || updateCityCellIds.length > 0) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit("update_citys", areaId, addCityCellIds, removeCityCellIds, updateCityCellIds);
            }
          }
        }

        getCity(id) {
          return this._mapCitys[id];
        }

        getMyMainCity() {
          if (this._myCitys.length > 0) {
            return this._myCitys[0];
          }

          return null;
        }

        isMyCity(cityId) {
          return this.getMyCityById(cityId) != null;
        }

        getMyCityById(cityId) {
          for (let i = 0; i < this._myCitys.length; i++) {
            if (this._myCitys[i].cityId == cityId) {
              return this._myCitys[i];
            }
          }

          return null;
        }

        getMyCitys() {
          return this._myCitys;
        }

        getMyPlayerId() {
          if (this._myCitys.length > 0) {
            return this._myCitys[0].rid;
          }

          return 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapCityProxy.js.map