System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Vec2, Vec3, BuildTagLogic, MapBaseLayerLogic, MapUtil, _dec, _class, _crd, ccclass, MapBuildTagLogic;

  function _reportPossibleCrUseOfBuildTagLogic(extras) {
    _reporterNs.report("BuildTagLogic", "./entries/BuildTagLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapBaseLayerLogic(extras) {
    _reporterNs.report("MapBaseLayerLogic", "./MapBaseLayerLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResData(extras) {
    _reporterNs.report("MapResData", "./MapProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUtil(extras) {
    _reporterNs.report("MapUtil", "./MapUtil", _context.meta, extras);
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
      BuildTagLogic = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapBaseLayerLogic = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapUtil = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3419d4J5EVN5I9Y2q5L933N", "MapBuildTagLogic", undefined);

      ({
        ccclass
      } = _decorator);

      _export("default", MapBuildTagLogic = (_dec = ccclass('MapBuildTagLogic'), _dec(_class = class MapBuildTagLogic extends (_crd && MapBaseLayerLogic === void 0 ? (_reportPossibleCrUseOfMapBaseLayerLogic({
        error: Error()
      }), MapBaseLayerLogic) : MapBaseLayerLogic) {
        onLoad() {
          super.onLoad();
        }

        onDestroy() {
          super.onDestroy();
        }

        setItemData(item, data) {
          var resData = data;
          var position = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapCellToPixelPoint(new Vec2(resData.x, resData.y));
          item.setPosition(new Vec3(position.x, position.y, 0));
          item.getComponent(_crd && BuildTagLogic === void 0 ? (_reportPossibleCrUseOfBuildTagLogic({
            error: Error()
          }), BuildTagLogic) : BuildTagLogic).setResourceData(resData);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapBuildTagLogic.js.map