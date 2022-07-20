System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Vec2, Vec3, BuildTipsLogic, MapBaseLayerLogic, MapUtil, EventMgr, _dec, _class, _crd, ccclass, MapBuildTipsLogic;

  function _reportPossibleCrUseOfBuildTipsLogic(extras) {
    _reporterNs.report("BuildTipsLogic", "./entries/BuildTipsLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapBaseLayerLogic(extras) {
    _reporterNs.report("MapBaseLayerLogic", "./MapBaseLayerLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapBuildData(extras) {
    _reporterNs.report("MapBuildData", "./MapBuildProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUtil(extras) {
    _reporterNs.report("MapUtil", "./MapUtil", _context.meta, extras);
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
      BuildTipsLogic = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapBaseLayerLogic = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapUtil = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f3bcL0J/NCGLDRBb1UYtHx", "MapBuildTipsLogic", undefined);

      ({
        ccclass
      } = _decorator);

      _export("default", MapBuildTipsLogic = (_dec = ccclass('MapBuildTipsLogic'), _dec(_class = class MapBuildTipsLogic extends (_crd && MapBaseLayerLogic === void 0 ? (_reportPossibleCrUseOfMapBaseLayerLogic({
        error: Error()
      }), MapBaseLayerLogic) : MapBaseLayerLogic) {
        onLoad() {
          super.onLoad();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_builds", this.onUpdateBuilds, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_build", this.onUpdateBuild, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("delete_build", this.onDeleteBuild, this);
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
          super.onDestroy();
        }

        onUpdateBuilds(areaIndex, addIds, removeIds, updateIds) {
          if (this._itemMap.has(areaIndex)) {
            for (var i = 0; i < addIds.length; i++) {
              this.addItem(areaIndex, this._cmd.buildProxy.getBuild(addIds[i]));
            }

            for (var _i = 0; _i < removeIds.length; _i++) {
              this.removeItem(areaIndex, removeIds[_i]);
            }

            for (var _i2 = 0; _i2 < updateIds.length; _i2++) {
              this.updateItem(areaIndex, this._cmd.buildProxy.getBuild(updateIds[_i2]));
            }
          }
        }

        onUpdateBuild(data) {
          // console.log("update_build", data);
          var areaIndex = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).getAreaIdByCellPoint(data.x, data.y);
          this.addItem(areaIndex, data);
        }

        onDeleteBuild(id, x, y) {
          var areaIndex = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).getAreaIdByCellPoint(x, y);
          this.removeItem(areaIndex, id);
        }

        setItemData(item, data) {
          var buildData = data;
          var position = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapCellToPixelPoint(new Vec2(buildData.x, buildData.y));
          item.setPosition(new Vec3(position.x, position.y, 0));
          item.getComponent(_crd && BuildTipsLogic === void 0 ? (_reportPossibleCrUseOfBuildTipsLogic({
            error: Error()
          }), BuildTipsLogic) : BuildTipsLogic).setBuildData(buildData);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapBuildTipsLogic.js.map