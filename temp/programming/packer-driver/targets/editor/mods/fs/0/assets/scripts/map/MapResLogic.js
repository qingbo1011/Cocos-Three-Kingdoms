System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Vec2, Vec3, ResLogic, MapBaseLayerLogic, MapUtil, _dec, _class, _crd, ccclass, property, MapResLogic;

  function _reportPossibleCrUseOfResLogic(extras) {
    _reporterNs.report("ResLogic", "./entries/ResLogic", _context.meta, extras);
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
      ResLogic = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapBaseLayerLogic = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapUtil = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2aed4KkSRZNTI31wE9udYkK", "MapResLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MapResLogic = (_dec = ccclass('MapResLogic'), _dec(_class = class MapResLogic extends (_crd && MapBaseLayerLogic === void 0 ? (_reportPossibleCrUseOfMapBaseLayerLogic({
        error: Error()
      }), MapBaseLayerLogic) : MapBaseLayerLogic) {
        onLoad() {
          super.onLoad();
        }

        onDestroy() {
          super.onDestroy();
        }

        setItemData(item, data) {
          let resData = data;
          let position = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapCellToPixelPoint(new Vec2(resData.x, resData.y));
          item.setPosition(new Vec3(position.x, position.y, 0));
          item.getComponent(_crd && ResLogic === void 0 ? (_reportPossibleCrUseOfResLogic({
            error: Error()
          }), ResLogic) : ResLogic).setResourceData(resData);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapResLogic.js.map