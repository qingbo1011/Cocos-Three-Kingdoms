System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Enum, sys, UITransform, Widget, view, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BGScaleType, BGAlignmentType, BgScale;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    BGScaleType: void 0,
    BGAlignmentType: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Enum = _cc.Enum;
      sys = _cc.sys;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95c8cs2Y1VPuZTnkrmbn3po", "BgScale", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (BGScaleType) {
        BGScaleType[BGScaleType["FULL_SCREEN"] = 0] = "FULL_SCREEN";
        BGScaleType[BGScaleType["SCALE_BY_WIDTH"] = 1] = "SCALE_BY_WIDTH";
        BGScaleType[BGScaleType["SCALE_BY_HEIGHT"] = 2] = "SCALE_BY_HEIGHT";
        BGScaleType[BGScaleType["SCALE_ONLY_WIDTH"] = 3] = "SCALE_ONLY_WIDTH";
        BGScaleType[BGScaleType["SCALE_ONLY_HEIGHT"] = 4] = "SCALE_ONLY_HEIGHT";
      })(BGScaleType || _export("BGScaleType", BGScaleType = {}));

      (function (BGAlignmentType) {
        BGAlignmentType[BGAlignmentType["TOP"] = 0] = "TOP";
        BGAlignmentType[BGAlignmentType["BOTTOM"] = 1] = "BOTTOM";
        BGAlignmentType[BGAlignmentType["CENTER"] = 2] = "CENTER";
        BGAlignmentType[BGAlignmentType["LEFT"] = 3] = "LEFT";
        BGAlignmentType[BGAlignmentType["RIGHT"] = 4] = "RIGHT";
      })(BGAlignmentType || _export("BGAlignmentType", BGAlignmentType = {}));

      _export("default", BgScale = (_dec = property({
        type: Enum(BGAlignmentType)
      }), _dec2 = property({
        type: Enum(BGScaleType)
      }), ccclass(_class = (_class2 = (_temp = class BgScale extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "alignmentType", _descriptor, this);

          _initializerDefineProperty(this, "scaleType", _descriptor2, this);

          _defineProperty(this, "realW", 0);

          _defineProperty(this, "realH", 0);

          _defineProperty(this, "_resizeCallback", null);
        }

        onLoad() {
          this.realW = this.node.getComponent(UITransform).width;
          this.realH = this.node.getComponent(UITransform).height;
          this.setMyFrameSize();

          if (sys.isBrowser) {
            this._resizeCallback = this.setMyFrameSizeAgain.bind(this);
            window.addEventListener('resize', this._resizeCallback);
            window.addEventListener('orientationchange', this._resizeCallback);
            document.addEventListener('rotateScreen', this._resizeCallback);
            document.addEventListener('resetScreen', this._resizeCallback);
          }
        }

        onDestroy() {
          if (sys.isBrowser) {
            window.removeEventListener('resize', this._resizeCallback);
            window.removeEventListener('orientationchange', this._resizeCallback);
            document.removeEventListener('rotateScreen', this._resizeCallback);
            document.removeEventListener('resetScreen', this._resizeCallback);
            this._resizeCallback = null;
          }
        }

        setMyFrameSize() {
          if (!this.node) {
            return;
          }

          var wsize = null;
          wsize = view.getVisibleSize();
          var scale1 = wsize.width / this.realW;
          var scale2 = wsize.height / this.realH;
          var max_scale = Math.max(scale1, scale2);
          var scaleX, scaleY;

          if (this.scaleType == BGScaleType.SCALE_BY_WIDTH) {
            scaleX = scaleY = scale1;
          } else if (this.scaleType == BGScaleType.SCALE_BY_HEIGHT) {
            scaleX = scaleY = scale2;
          } else if (this.scaleType == BGScaleType.SCALE_ONLY_WIDTH) {
            scaleX = scale1;
            scaleY = 1;
          } else if (this.scaleType == BGScaleType.SCALE_ONLY_HEIGHT) {
            scaleX = 1;
            scaleY = scale2;
          } else if (sys.isBrowser) {
            //横向浏览器 只缩放宽度
            scaleX = scaleY = max_scale; // scaleY = 1;
          } else {
            scaleX = scaleY = max_scale;
          }

          this.node.getComponent(UITransform).width = this.realW * scaleX;
          this.node.getComponent(UITransform).height = this.realH * scaleY;
          var widget = this.node.getComponent(Widget);

          if (widget == null) {
            widget = this.node.addComponent(Widget);
          }

          if (this.alignmentType == BGAlignmentType.BOTTOM) {
            widget.isAlignHorizontalCenter = true;
            widget.isAlignBottom = true;
            widget.bottom = 0;
          } else if (this.alignmentType == BGAlignmentType.TOP) {
            widget.isAlignHorizontalCenter = true;
            widget.isAlignTop = true;
            widget.top = 0;
          } else if (this.alignmentType == BGAlignmentType.LEFT) {
            widget.isAlignVerticalCenter = true;
            widget.isAlignLeft = true;
            widget.left = 0;
          } else if (this.alignmentType == BGAlignmentType.RIGHT) {
            widget.isAlignVerticalCenter = true;
            widget.isAlignRight = true;
            widget.right = 0;
          } else if (this.alignmentType == BGAlignmentType.CENTER) {
            widget.isAlignHorizontalCenter = true;
            widget.isAlignVerticalCenter = true;
          }
        }

        setMyFrameSizeAgain() {
          this.scheduleOnce(function () {
            this.setMyFrameSize();
          }.bind(this), 0.05);
        }

        changeOrientation(flag) {
          this.setMyFrameSize();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "alignmentType", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return BGAlignmentType.CENTER;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scaleType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return BGScaleType.FULL_SCREEN;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BgScale.js.map