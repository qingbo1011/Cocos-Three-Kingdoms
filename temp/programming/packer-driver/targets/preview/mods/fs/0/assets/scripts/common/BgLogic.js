System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Enum, Widget, UITransform, view, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BgScaleType, BgAlignmentType, BgLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    BgScaleType: void 0,
    BgAlignmentType: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Enum = _cc.Enum;
      Widget = _cc.Widget;
      UITransform = _cc.UITransform;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "791008KQaNLzIyR/L9Rataa", "BgLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (BgScaleType) {
        BgScaleType[BgScaleType["FULL_SCREEN"] = 1] = "FULL_SCREEN";
        BgScaleType[BgScaleType["SCALE_BY_WIDTH"] = 2] = "SCALE_BY_WIDTH";
        BgScaleType[BgScaleType["SCALE_BY_HEIGHT"] = 3] = "SCALE_BY_HEIGHT";
        BgScaleType[BgScaleType["SCALE_ONLY_WIDTH"] = 4] = "SCALE_ONLY_WIDTH";
        BgScaleType[BgScaleType["SCALE_ONLY_HEIGHT"] = 5] = "SCALE_ONLY_HEIGHT";
      })(BgScaleType || _export("BgScaleType", BgScaleType = {}));

      ; // //bg对齐方位

      (function (BgAlignmentType) {
        BgAlignmentType[BgAlignmentType["TOP"] = 1] = "TOP";
        BgAlignmentType[BgAlignmentType["BOTTOM"] = 2] = "BOTTOM";
        BgAlignmentType[BgAlignmentType["CENTER"] = 3] = "CENTER";
        BgAlignmentType[BgAlignmentType["LEFT"] = 4] = "LEFT";
        BgAlignmentType[BgAlignmentType["RIGHT"] = 5] = "RIGHT";
      })(BgAlignmentType || _export("BgAlignmentType", BgAlignmentType = {}));

      ;

      _export("default", BgLogic = (_dec = ccclass('BgLogic'), _dec2 = property({
        type: Enum(BgScaleType)
      }), _dec3 = property({
        type: Enum(BgAlignmentType)
      }), _dec(_class = (_class2 = (_temp = class BgLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scaleType", _descriptor, this);

          _initializerDefineProperty(this, "alignmentType", _descriptor2, this);

          _defineProperty(this, "_realW", 0);

          _defineProperty(this, "_realH", 0);
        }

        onLoad() {
          this._realW = this.node.getComponent(UITransform).width;
          this._realH = this.node.getComponent(UITransform).height;
          this.updateFrameSize();
        }

        updateFrameSize() {
          var scaleW = view.getVisibleSize().width / this._realW;

          var scaleH = view.getVisibleSize().height / this._realH;

          var scaleX = 1;
          var scaleY = 1;

          if (this.scaleType == BgScaleType.SCALE_BY_WIDTH) {
            scaleX = scaleY = scaleW;
          } else if (this.scaleType == BgScaleType.SCALE_BY_HEIGHT) {
            scaleX = scaleY = scaleH;
          } else if (this.scaleType == BgScaleType.SCALE_ONLY_WIDTH) {
            scaleX = scaleW;
            scaleY = 1;
          } else if (this.scaleType == BgScaleType.SCALE_ONLY_HEIGHT) {
            scaleX = 1;
            scaleY = scaleH;
          } else {
            scaleX = scaleY = Math.max(scaleW, scaleH);
          }

          this.node.getComponent(UITransform).width = this._realW * scaleX;
          this.node.getComponent(UITransform).height = this._realH * scaleY;
          var widget = this.node.getComponent(Widget);

          if (widget == null) {
            widget = this.node.addComponent(Widget);
          }

          if (this.alignmentType == BgAlignmentType.BOTTOM) {
            widget.isAlignHorizontalCenter = true;
            widget.isAlignBottom = true;
            widget.bottom = 0;
          } else if (this.alignmentType == BgAlignmentType.TOP) {
            widget.isAlignHorizontalCenter = true;
            widget.isAlignTop = true;
            widget.top = 0;
          } else if (this.alignmentType == BgAlignmentType.LEFT) {
            widget.isAlignVerticalCenter = true;
            widget.isAlignLeft = true;
            widget.left = 0;
          } else if (this.alignmentType == BgAlignmentType.RIGHT) {
            widget.isAlignVerticalCenter = true;
            widget.isAlignRight = true;
            widget.right = 0;
          } else if (this.alignmentType == BgAlignmentType.CENTER) {
            widget.isAlignHorizontalCenter = true;
            widget.isAlignVerticalCenter = true;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scaleType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BgScaleType.FULL_SCREEN;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "alignmentType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BgAlignmentType.CENTER;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BgLogic.js.map