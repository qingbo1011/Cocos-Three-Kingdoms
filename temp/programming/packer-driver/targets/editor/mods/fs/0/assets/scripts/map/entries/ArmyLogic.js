System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DateUtil, MapUtil, Vec2, Animation, Vec3, UITransform, ArmyLogic, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfArmyData(extras) {
    _reporterNs.report("ArmyData", "../../general/ArmyProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUtil(extras) {
    _reporterNs.report("MapUtil", "../MapUtil", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Vec2 = _cc.Vec2;
      Animation = _cc.Animation;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      DateUtil = _unresolved_2.default;
    }, function (_unresolved_3) {
      MapUtil = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39034husJJIv4qP7oHQxKOD", "ArmyLogic", undefined);

      _export("default", ArmyLogic = class ArmyLogic {
        constructor() {
          _defineProperty(this, "data", null);

          _defineProperty(this, "aniNode", null);

          _defineProperty(this, "arrowNode", null);

          _defineProperty(this, "_parentLayer", void 0);

          _defineProperty(this, "_aniName", "");

          _defineProperty(this, "_startPixelPos", new Vec3(0, 0, 0));

          _defineProperty(this, "_endPixelPos", new Vec3(0, 0, 0));

          _defineProperty(this, "_lenX", 0);

          _defineProperty(this, "_lenY", 0);
        }

        clear() {
          this.data = null;
          this.aniNode = null;
          this.arrowNode = null;
          this._parentLayer = null;
        }

        destroy() {
          this.aniNode.parent = null;
          this.arrowNode.parent = null;
          this.clear();
        }

        update() {
          if (this.data && this.data.state > 0) {
            let nowTime = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).getServerTime();

            if (nowTime < this.data.endTime) {
              //代表移动中
              let percent = Math.max(0, (nowTime - this.data.startTime) / (this.data.endTime - this.data.startTime));
              let pos = this.aniNode.position.clone();
              pos.x = this._startPixelPos.x + percent * this._lenX;
              pos.y = this._startPixelPos.y + percent * this._lenY;
              this.aniNode.setPosition(pos);
              let cellPoint = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
                error: Error()
              }), MapUtil) : MapUtil).mapPixelToCellPoint(new Vec2(pos.x, pos.y));
              this.data.x = cellPoint.x;
              this.data.y = cellPoint.y;
            } else {
              this.aniNode.setPosition(this._endPixelPos);
              this.data.x = this.data.toX;
              this.data.y = this.data.toY;
            }

            this.updateArrow();
            return new Vec2(this.data.x, this.data.y);
          }

          return null;
        }

        updateArrow() {
          this.arrowNode.active = this.data && this.data.state > 0;

          if (this.arrowNode.active == true) {
            this.arrowNode.setPosition(this.aniNode.getPosition());
            let len = Math.sqrt(Math.abs((this._endPixelPos.y - this.arrowNode.position.y) * (this._endPixelPos.y - this.arrowNode.position.y)) + Math.abs((this._endPixelPos.x - this.arrowNode.position.x) * (this._endPixelPos.x - this.arrowNode.position.x)));
            let angle = Math.atan2(this._endPixelPos.y - this.arrowNode.position.y, this._endPixelPos.x - this.arrowNode.position.x);
            this.arrowNode.angle = angle * 180 / Math.PI + 90;
            this.arrowNode.getComponent(UITransform).height = len;
          }
        }

        setArmyData(data, aniNode, arrowNode) {
          this.data = data;
          this.aniNode = aniNode;
          this.arrowNode = arrowNode;
          let startPos = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapCellToPixelPoint(new Vec2(this.data.fromX, this.data.fromY));
          this._startPixelPos.x = startPos.x;
          this._startPixelPos.y = startPos.y;
          let endPos = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapCellToPixelPoint(new Vec2(this.data.toX, this.data.toY));
          this._endPixelPos.x = endPos.x;
          this._endPixelPos.y = endPos.y;
          this._lenX = this._endPixelPos.x - this._startPixelPos.x;
          this._lenY = this._endPixelPos.y - this._startPixelPos.y;
          let pos = (_crd && MapUtil === void 0 ? (_reportPossibleCrUseOfMapUtil({
            error: Error()
          }), MapUtil) : MapUtil).mapCellToPixelPoint(new Vec2(this.data.x, this.data.y));
          this.aniNode.setPosition(new Vec3(pos.x, pos.y, 0));
          this._aniName = "qb_run_r";

          if (this._startPixelPos.y == this._endPixelPos.y) {
            //平行
            if (this._startPixelPos.x < this._endPixelPos.x) {
              this._aniName = "qb_run_r";
            } else {
              this._aniName = "qb_run_l";
            }
          } else if (this._startPixelPos.y < this._endPixelPos.y) {
            //往上走
            if (this._startPixelPos.x < this._endPixelPos.x) {
              this._aniName = "qb_run_ru";
            } else if (this._startPixelPos.x == this._endPixelPos.x) {
              this._aniName = "qb_run_u";
            } else {
              this._aniName = "qb_run_lu";
            }
          } else if (this._startPixelPos.y > this._endPixelPos.y) {
            //往下走
            if (this._startPixelPos.x < this._endPixelPos.x) {
              this._aniName = "qb_run_rd";
            } else if (this._startPixelPos.x == this._endPixelPos.x) {
              this._aniName = "qb_run_d";
            } else {
              this._aniName = "qb_run_ld";
            }
          }

          this.aniNode.getComponent(Animation).play(this._aniName);
          this.updateArrow();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ArmyLogic.js.map