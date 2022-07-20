System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Vec2, Vec3, MapBaseLayerLogic, CityLogic, MapUtil, EventMgr, _dec, _class, _crd, ccclass, property, MapCityLogic;

  function _reportPossibleCrUseOfMapBaseLayerLogic(extras) {
    _reporterNs.report("MapBaseLayerLogic", "./MapBaseLayerLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCityLogic(extras) {
    _reporterNs.report("CityLogic", "./entries/CityLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUtil(extras) {
    _reporterNs.report("MapUtil", "./MapUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "./MapCityProxy", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      MapBaseLayerLogic = _unresolved_2.default;
    }, function (_unresolved_3) {
      CityLogic = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapUtil = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "517a68GMuFHj4g1euhHvobE", "MapCityLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MapCityLogic = (_dec = ccclass('MapCityLogic'), _dec(_class = class MapCityLogic extends (_crd && MapBaseLayerLogic === void 0 ? (_reportPossibleCrUseOfMapBaseLayerLogic({
        error: Error()
      }), MapBaseLayerLogic) : MapBaseLayerLogic) {
        onLoad() {
          super.onLoad();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_citys", this.onUpdateCitys, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_city", this.onUpdateCity, this);
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
          super.onDestroy();
        }

        onUpdateCitys(areaIndex, addIds, removeIds, updateIds) {
          // console.log("update_citys", arguments);
          if (this._itemMap.has(areaIndex)) {
            for (let i = 0; i < addIds.length; i++) {
              this.addItem(areaIndex, this._cmd.cityProxy.getCity(addIds[i]));
            }

            for (let i = 0; i < removeIds.length; i++) {
              this.removeItem(areaIndex, removeIds[i]);
            }

            for (let i = 0; i < updateIds.length; i++) {
              this.updateItem(areaIndex, this._cmd.cityProxy.getCity(updateIds[i]));
            }
          }
        }

        onUpdateCity(city) {
          let areaIndex = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).getAreaIdByCellPoint(city.x, city.y);

          if (this._itemMap.has(areaIndex)) {
            this.addItem(areaIndex, city);
          }
        }

        setItemData(item, data) {
          let cityData = data;
          let position = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapCellToPixelPoint(new Vec2(cityData.x, cityData.y));
          item.setPosition(new Vec3(position.x, position.y, 0));
          item.getComponent(_crd && CityLogic === void 0 ? (_reportPossibleCrUseOfCityLogic({
            error: Error()
          }), CityLogic) : CityLogic).setCityData(cityData);
        }

        getIdByData(data) {
          return data.cityId;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapCityLogic.js.map