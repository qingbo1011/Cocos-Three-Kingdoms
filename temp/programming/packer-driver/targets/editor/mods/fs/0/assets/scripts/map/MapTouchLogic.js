System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, Node, Vec2, instantiate, Vec3, MapClickUILogic, MapCommand, MapUtil, EventMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, MapTouchLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapBuildData(extras) {
    _reporterNs.report("MapBuildData", "./MapBuildProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "./MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapClickUILogic(extras) {
    _reporterNs.report("MapClickUILogic", "./MapClickUILogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "./MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapResData(extras) {
    _reporterNs.report("MapResData", "./MapProxy", _context.meta, extras);
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
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      MapClickUILogic = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapUtil = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6337K+VJNGSL37Z+nbcH86", "MapTouchLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MapTouchLogic = (_dec = ccclass('MapTouchLogic'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class MapTouchLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "clickUIPrefab", _descriptor, this);

          _initializerDefineProperty(this, "touch", _descriptor2, this);

          _defineProperty(this, "_cmd", void 0);

          _defineProperty(this, "_clickUINode", null);
        }

        onLoad() {
          this._cmd = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("touch_map", this.onTouchMap, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("move_map", this.onMoveMap, this);
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
          this._cmd = null;
          this._clickUINode = null;
        }

        onTouchMap(mapPoint, clickPixelPoint) {
          console.log("点击区域 (" + mapPoint.x + "," + mapPoint.y + ")");
          this.removeClickUINode();

          if ((_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).isVaildCellPoint(mapPoint) == false) {
            console.log("点击到无效区域");
            return;
          }

          let cellId = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).getIdByCellPoint(mapPoint.x, mapPoint.y);

          let cityData = this._cmd.cityProxy.getCity(cellId);

          ;

          if (cityData != null) {
            //代表点击的是城市
            clickPixelPoint = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).mapCellToPixelPoint(new Vec2(cityData.x, cityData.y));
            this.showClickUINode(cityData, clickPixelPoint);
            return;
          }

          let buildData = this._cmd.buildProxy.getBuild(cellId);

          if (buildData != null) {
            if (buildData.isSysCity() == false) {
              //代表点击被占领的区域
              console.log("点击被占领的区域", buildData);
              this.showClickUINode(buildData, clickPixelPoint);
              return;
            }
          }

          let resData = this._cmd.proxy.getResData(cellId);

          if (resData.type > 0) {
            var temp = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().proxy.getSysCityResData(resData.x, resData.y);

            if (temp) {
              clickPixelPoint = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                error: Error()
              }), MapUtil) : MapUtil).mapCellToPixelPoint(new Vec2(temp.x, temp.y));
              let cellId = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                error: Error()
              }), MapUtil) : MapUtil).getIdByCellPoint(temp.x, temp.y);

              let buildData = this._cmd.buildProxy.getBuild(cellId);

              if (buildData) {
                this.showClickUINode(buildData, clickPixelPoint);
              } else {
                this.showClickUINode(temp, clickPixelPoint);
              }

              console.log("点击野外城池", temp);
            } else {
              this.showClickUINode(resData, clickPixelPoint);
              console.log("点击野外区域", resData);
            }
          } else {
            console.log("点击山脉河流区域");
          }
        }

        onMoveMap() {
          this.removeClickUINode();
        }

        showClickUINode(data, pos) {
          if (this._clickUINode == null) {
            this._clickUINode = instantiate(this.clickUIPrefab);
          }

          this._clickUINode.parent = this.touch;

          this._clickUINode.setPosition(new Vec3(pos.x, pos.y, 0));

          this._clickUINode.getComponent(_crd && MapClickUILogic === void 0 ? (_reportPossibleCrUseOfMapClickUILogic({
            error: Error()
          }), MapClickUILogic) : MapClickUILogic).setCellData(data, pos);
        }

        removeClickUINode() {
          if (this._clickUINode) {
            this._clickUINode.parent = null;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clickUIPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "touch", [_dec3], {
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
//# sourceMappingURL=MapTouchLogic.js.map