System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Camera, Node, Vec2, UITransform, Vec3, view, MapCommand, MapUtil, EventMgr, _dec, _class, _temp, _crd, ccclass, property, MapLogic;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "./MapCommand", _context.meta, extras);
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
      Camera = _cc.Camera;
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      MapCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapUtil = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "066degy9q9CMLBapBPioPmF", "MapLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MapLogic = (_dec = ccclass('MapLogic'), _dec(_class = (_temp = class MapLogic extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_cmd", void 0);

          _defineProperty(this, "_tiledMap", null);

          _defineProperty(this, "_mapCamera", null);

          _defineProperty(this, "_isTouch", false);

          _defineProperty(this, "_isMove", false);

          _defineProperty(this, "_minZoomRatio", 1);

          _defineProperty(this, "_maxZoomRatio", 0.8);

          _defineProperty(this, "_changeZoomRadix", 200);

          _defineProperty(this, "_orthoHeight", 360);

          _defineProperty(this, "_maxMapX", 1);

          _defineProperty(this, "_maxMapY", 1);

          _defineProperty(this, "_touchAniNode", null);

          _defineProperty(this, "_centerPoint", null);
        }

        onLoad() {
          console.log("MapLogic onLoad");
          this._cmd = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance();
          this._mapCamera = this.node.parent.getChildByName("Map Camera").getComponent(Camera);
          console.log("_mapCamera:", this._mapCamera);
          this._orthoHeight = this._mapCamera.orthoHeight;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_city_about", this.openCityAbout, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("close_city_about", this.closeCityAbout, this);
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
          this._cmd = null;
        }

        setTiledMap(tiledMap) {
          this._tiledMap = tiledMap;
          this._tiledMap.enableCulling = true;
          this.updateCulling();

          var uit = this._tiledMap.node.getComponent(UITransform);

          this._maxMapX = (uit.width - view.getVisibleSize().width) * 0.5;
          this._maxMapY = (uit.height - view.getVisibleSize().height) * 0.5;

          this._tiledMap.node.on(Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this);

          this._tiledMap.node.on(Node.EventType.TOUCH_START, this.onTouchBegan, this);

          this._tiledMap.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

          this._tiledMap.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);

          this._tiledMap.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }

        openCityAbout(data) {
          this._mapCamera.orthoHeight = this._orthoHeight * this._maxZoomRatio;
        }

        closeCityAbout() {
          this._mapCamera.orthoHeight = this._orthoHeight * this._minZoomRatio;
        }

        onMouseWheel(event) {
          console.log("onMouseWheel");
          var scrollY = event.getScrollY();
          var changeRatio = Number((scrollY / this._changeZoomRadix).toFixed(1));
          var newZoomRatio = Math.min(this._minZoomRatio, Math.max(this._maxZoomRatio, this._mapCamera.orthoHeight / this._orthoHeight + changeRatio));
          console.log("onMouseWheel:", newZoomRatio);
          this._mapCamera.orthoHeight = this._orthoHeight * newZoomRatio;
        }

        onTouchMove(event) {
          if (this._isTouch) {
            var delta = event.getDelta();

            if (delta.x != 0 || delta.y != 0) {
              this._isMove = true;
              var pixelPoint = new Vec2(0, 0);
              pixelPoint.x = this._mapCamera.node.position.x - delta.x;
              pixelPoint.y = this._mapCamera.node.position.y - delta.y;
              pixelPoint.x = Math.min(this._maxMapX, Math.max(-this._maxMapX, pixelPoint.x));
              pixelPoint.y = Math.min(this._maxMapY, Math.max(-this._maxMapY, pixelPoint.y));

              this._mapCamera.node.setPosition(new Vec3(pixelPoint.x, pixelPoint.y, this._mapCamera.node.position.z));

              this.setCenterMapCellPoint((_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                error: Error()
              }), MapUtil) : MapUtil).mapPixelToCellPoint(pixelPoint), pixelPoint);
              this.updateCulling();
            }
          }
        }

        onTouchBegan(event) {
          this._isTouch = true;
          this._isMove = false;
        }

        onTouchEnd(event) {
          this._isTouch = false;

          if (this._isMove == false) {
            var touchLocation = event.touch.getUILocation();
            var touchLocation1 = this.viewPointToWorldPoint(touchLocation);
            var mapPoint = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).worldPixelToMapCellPoint(touchLocation1);
            var clickCenterPoint = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
              error: Error()
            }), MapUtil) : MapUtil).mapCellToPixelPoint(mapPoint); //派发事件
            // console.log("onTouchEnd:", touchLocation1, clickCenterPoint);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("touch_map", mapPoint, clickCenterPoint);
          } else {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("move_map");
          }

          this._isMove = false;
        }

        onTouchCancel(event) {
          this._isTouch = false;
          this._isMove = false;
        } //界面坐标转世界坐标


        viewPointToWorldPoint(point) {
          // console.log("viewPointToWorldPoint in", point.x, point.y);
          var canvasNode = this.node.parent;
          var cuit = canvasNode.getComponent(UITransform);

          var uit = this._tiledMap.node.getComponent(UITransform);

          var cameraWorldX = uit.width * uit.anchorX - view.getVisibleSize().width * cuit.anchorX + this._mapCamera.node.position.x;

          var cameraWorldY = uit.height * uit.anchorY - view.getVisibleSize().height * cuit.anchorY + this._mapCamera.node.position.y;

          return new Vec2(point.x + cameraWorldX, point.y + cameraWorldY);
        } //世界坐标转化为相对地图的像素坐标


        worldToMapPixelPoint(point) {
          var uit = this._tiledMap.node.getComponent(UITransform);

          var pixelX = point.x - uit.width * uit.anchorX;
          var pixelY = point.y - uit.height * uit.anchorY;
          return new Vec2(pixelX, pixelY);
        }

        scrollToMapPoint(point) {
          var pixelPoint = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapCellToPixelPoint(point); // console.log("scrollToMapPoint", pixelPoint.x, pixelPoint.y);

          var positionX = Math.min(this._maxMapX, Math.max(-this._maxMapX, pixelPoint.x));
          var positionY = Math.min(this._maxMapY, Math.max(-this._maxMapY, pixelPoint.y));

          var pos = this._mapCamera.node.position.clone();

          pos.x = positionX;
          pos.y = positionY;
          this._mapCamera.node.position = pos;
          this.setCenterMapCellPoint(point, pixelPoint);
          this.updateCulling();
        }

        setCenterMapCellPoint(point, pixelPoint) {
          this._cmd.proxy.setCurCenterPoint(point, pixelPoint);
        }

        updateCulling() {
          if (this._tiledMap) {
            // let layers = this._tiledMap.getLayers();
            // for (let index = 0; index < layers.length; index++) {
            //     const l = layers[index];
            //     l.updateCulling();
            // }
            // this.scheduleOnce(()=>{
            //     for (let index = 0; index < layers.length; index++) {
            //         const l = layers[index];
            //         l.updateCulling();
            //     }
            // })
            this._tiledMap.node.emit(Node.EventType.TRANSFORM_CHANGED);

            this.scheduleOnce(() => {
              this._tiledMap.node.emit(Node.EventType.TRANSFORM_CHANGED);
            });
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapLogic.js.map