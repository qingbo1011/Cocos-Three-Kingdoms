System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec2, TiledMap, MapResBuildLogic, MapBuildTipsLogic, MapCityLogic, MapCommand, MapLogic, MapResType, MapResLogic, MapUtil, MapFacilityBuildLogic, MapBuildTagLogic, MapSysCityLogic, EventMgr, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, MapScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapResBuildLogic(extras) {
    _reporterNs.report("MapResBuildLogic", "../map/MapResBuildLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapBuildTipsLogic(extras) {
    _reporterNs.report("MapBuildTipsLogic", "../map/MapBuildTipsLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityLogic(extras) {
    _reporterNs.report("MapCityLogic", "../map/MapCityLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "../map/MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../map/MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapLogic(extras) {
    _reporterNs.report("MapLogic", "../map/MapLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapAreaData(extras) {
    _reporterNs.report("MapAreaData", "../map/MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResType(extras) {
    _reporterNs.report("MapResType", "../map/MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResLogic(extras) {
    _reporterNs.report("MapResLogic", "../map/MapResLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUtil(extras) {
    _reporterNs.report("MapUtil", "../map/MapUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapFacilityBuildLogic(extras) {
    _reporterNs.report("MapFacilityBuildLogic", "../map/MapFacilityBuildLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapBuildTagLogic(extras) {
    _reporterNs.report("MapBuildTagLogic", "../map/MapBuildTagLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapSysCityLogic(extras) {
    _reporterNs.report("MapSysCityLogic", "../map/MapSysCityLogic", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
      TiledMap = _cc.TiledMap;
    }, function (_unresolved_2) {
      MapResBuildLogic = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapBuildTipsLogic = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapCityLogic = _unresolved_4.default;
    }, function (_unresolved_5) {
      MapCommand = _unresolved_5.default;
    }, function (_unresolved_6) {
      MapLogic = _unresolved_6.default;
    }, function (_unresolved_7) {
      MapResType = _unresolved_7.MapResType;
    }, function (_unresolved_8) {
      MapResLogic = _unresolved_8.default;
    }, function (_unresolved_9) {
      MapUtil = _unresolved_9.default;
    }, function (_unresolved_10) {
      MapFacilityBuildLogic = _unresolved_10.default;
    }, function (_unresolved_11) {
      MapBuildTagLogic = _unresolved_11.default;
    }, function (_unresolved_12) {
      MapSysCityLogic = _unresolved_12.default;
    }, function (_unresolved_13) {
      EventMgr = _unresolved_13.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fe1bBzM0xPR67blHwOkdPd", "MapScene", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MapScene = (_dec = ccclass('MapScene'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class MapScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mapLayer", _descriptor, this);

          _defineProperty(this, "_cmd", null);

          _defineProperty(this, "_centerX", 0);

          _defineProperty(this, "_centerY", 0);

          _defineProperty(this, "_lastUpPosTime", 0);
        }

        onLoad() {
          this._cmd = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance(); //初始化地图

          let tiledMap = this.mapLayer.addComponent(TiledMap);
          tiledMap.tmxAsset = this._cmd.proxy.tiledMapAsset;
          (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).initMapConfig(tiledMap);

          this._cmd.initData();

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("map_show_area_change", this.onMapShowAreaChange, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("scroll_to_map", this.onScrollToMap, this);
          this.scheduleOnce(() => {
            let myCity = this._cmd.cityProxy.getMyMainCity();

            this.node.getComponent(_crd && MapLogic === void 0 ? (_reportPossibleCrUseOfMapLogic({
              error: Error()
            }), MapLogic) : MapLogic).setTiledMap(tiledMap);
            this.node.getComponent(_crd && MapLogic === void 0 ? (_reportPossibleCrUseOfMapLogic({
              error: Error()
            }), MapLogic) : MapLogic).scrollToMapPoint(new Vec2(myCity.x, myCity.y));
            this.onTimer(); //立即执行一次
          });
          this.schedule(this.onTimer, 0.2);
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);

          this._cmd.proxy.clearData();

          this._cmd = null;
        }

        onTimer() {
          if (this._cmd.proxy.qryAreaIds && this._cmd.proxy.qryAreaIds.length > 0) {
            let qryIndex = this._cmd.proxy.qryAreaIds.shift();

            let qryData = this._cmd.proxy.getMapAreaData(qryIndex);

            if (qryData.checkAndUpdateQryTime()) {
              this._cmd.qryNationMapScanBlock(qryData);
            }
          }

          let nowTime = Date.now();

          if (nowTime - this._lastUpPosTime > 1000) {
            this._lastUpPosTime = nowTime; //间隔一秒检测中心点是否改变

            let point = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().proxy.getCurCenterPoint();

            if (point != null && (this._centerX != point.x || this._centerY != point.y)) {
              this._centerX = point.x;
              this._centerY = point.y;
              (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
                error: Error()
              }), MapCommand) : MapCommand).getInstance().upPosition(point.x, point.y);
            }
          }
        }

        onMapShowAreaChange(centerPoint, centerAreaId, addIds, removeIds) {
          console.log("map_show_area_change", arguments);
          let resLogic = this.node.getComponent(_crd && MapResLogic === void 0 ? (_reportPossibleCrUseOfMapResLogic({
            error: Error()
          }), MapResLogic) : MapResLogic);
          let buildResLogic = this.node.getComponent(_crd && MapResBuildLogic === void 0 ? (_reportPossibleCrUseOfMapResBuildLogic({
            error: Error()
          }), MapResBuildLogic) : MapResBuildLogic);
          let buildFacilityLogic = this.node.getComponent(_crd && MapFacilityBuildLogic === void 0 ? (_reportPossibleCrUseOfMapFacilityBuildLogic({
            error: Error()
          }), MapFacilityBuildLogic) : MapFacilityBuildLogic);
          let tagLogic = this.node.getComponent(_crd && MapBuildTagLogic === void 0 ? (_reportPossibleCrUseOfMapBuildTagLogic({
            error: Error()
          }), MapBuildTagLogic) : MapBuildTagLogic);
          let buildTipsLogic = this.node.getComponent(_crd && MapBuildTipsLogic === void 0 ? (_reportPossibleCrUseOfMapBuildTipsLogic({
            error: Error()
          }), MapBuildTipsLogic) : MapBuildTipsLogic);
          let cityLogic = this.node.getComponent(_crd && MapCityLogic === void 0 ? (_reportPossibleCrUseOfMapCityLogic({
            error: Error()
          }), MapCityLogic) : MapCityLogic);
          let sysCityLogic = this.node.getComponent(_crd && MapSysCityLogic === void 0 ? (_reportPossibleCrUseOfMapSysCityLogic({
            error: Error()
          }), MapSysCityLogic) : MapSysCityLogic); //更新展示区域

          resLogic.udpateShowAreas(addIds, removeIds);
          buildResLogic.udpateShowAreas(addIds, removeIds);
          buildFacilityLogic.udpateShowAreas(addIds, removeIds);
          tagLogic.udpateShowAreas(addIds, removeIds);
          buildTipsLogic.udpateShowAreas(addIds, removeIds);
          cityLogic.udpateShowAreas(addIds, removeIds);
          sysCityLogic.udpateShowAreas(addIds, removeIds); //更新区域内的具体节点

          for (let i = 0; i < addIds.length; i++) {
            let areaData = this._cmd.proxy.getMapAreaData(addIds[i]); // console.log("areaData", areaData);


            for (let x = areaData.startCellX; x < areaData.endCellX; x++) {
              for (let y = areaData.startCellY; y < areaData.endCellY; y++) {
                let cellId = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                  error: Error()
                }), MapUtil) : MapUtil).getIdByCellPoint(x, y); //资源

                if (this._cmd.proxy.getResData(cellId)) {
                  resLogic.addItem(addIds[i], this._cmd.proxy.getResData(cellId));
                }

                if (this._cmd.proxy.getResData(cellId).type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
                  error: Error()
                }), MapResType) : MapResType).SYS_CITY) {
                  sysCityLogic.addItem(addIds[i], this._cmd.proxy.getResData(cellId));
                } //建筑


                if (this._cmd.buildProxy.getBuild(cellId) != null) {
                  var build = this._cmd.buildProxy.getBuild(cellId);

                  if (build.type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
                    error: Error()
                  }), MapResType) : MapResType).SYS_CITY) {
                    //系统城池
                    sysCityLogic.addItem(addIds[i], build);
                  } else if (build.type == (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
                    error: Error()
                  }), MapResType) : MapResType).SYS_FORTRESS) {
                    console.log("MapResType.SYS_FORTRESS");
                    resLogic.addItem(addIds[i], build);
                  } else {
                    buildResLogic.addItem(addIds[i], build);
                  }
                }

                if (this._cmd.buildProxy.getBuild(cellId) != null) {
                  buildFacilityLogic.addItem(addIds[i], this._cmd.buildProxy.getBuild(cellId));
                } //标记


                if (this._cmd.proxy.getResData(cellId).type <= (_crd && MapResType === void 0 ? (_reportPossibleCrUseOfMapResType({
                  error: Error()
                }), MapResType) : MapResType).FORTRESS) {
                  tagLogic.addItem(addIds[i], this._cmd.proxy.getResData(cellId));
                }

                if (this._cmd.buildProxy.getBuild(cellId) != null) {
                  buildTipsLogic.addItem(addIds[i], this._cmd.buildProxy.getBuild(cellId));
                } //城池


                if (this._cmd.cityProxy.getCity(cellId) != null) {
                  cityLogic.addItem(addIds[i], this._cmd.cityProxy.getCity(cellId));
                }
              }
            }
          }
        }

        onScrollToMap(x, y) {
          this.node.getComponent(_crd && MapLogic === void 0 ? (_reportPossibleCrUseOfMapLogic({
            error: Error()
          }), MapLogic) : MapLogic).scrollToMapPoint(new Vec2(x, y));
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mapLayer", [_dec2], {
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
//# sourceMappingURL=MapScene.js.map