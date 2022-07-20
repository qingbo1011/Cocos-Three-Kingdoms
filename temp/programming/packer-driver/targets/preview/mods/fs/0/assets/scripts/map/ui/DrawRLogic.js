System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, Layout, instantiate, Vec3, GeneralItemLogic, GeneralItemType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, DrawRLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGeneralItemLogic(extras) {
    _reporterNs.report("GeneralItemLogic", "./GeneralItemLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralItemType(extras) {
    _reporterNs.report("GeneralItemType", "./GeneralItemLogic", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      Layout = _cc.Layout;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GeneralItemLogic = _unresolved_2.default;
      GeneralItemType = _unresolved_2.GeneralItemType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64665eDRIZNk7k/SiMRSiVE", "DrawRLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", DrawRLogic = (_dec = ccclass('DrawRLogic'), _dec2 = property(Prefab), _dec3 = property(Layout), _dec4 = property(Layout), _dec(_class = (_class2 = (_temp = class DrawRLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "generalItemPrefab", _descriptor, this);

          _initializerDefineProperty(this, "tenLayout", _descriptor2, this);

          _initializerDefineProperty(this, "oneLayout", _descriptor3, this);

          _defineProperty(this, "_maxSize", 10);

          _defineProperty(this, "_scale", 0.4);
        }

        onLoad() {
          for (var i = 0; i < this._maxSize; i++) {
            var _generalNode2 = instantiate(this.generalItemPrefab);

            _generalNode2.parent = this.tenLayout.node;
            _generalNode2.scale = new Vec3(this._scale, this._scale, this._scale);
            _generalNode2.active = false;
          }

          var _generalNode = instantiate(this.generalItemPrefab);

          _generalNode.parent = this.oneLayout.node;
          _generalNode.scale = new Vec3(this._scale, this._scale, this._scale);
          _generalNode.active = false;
        }

        setData(data) {
          this.tenLayout.node.active = this.oneLayout.node.active = false;

          if (data.length == 1) {
            this.oneLayout.node.active = true;
            var children = this.oneLayout.node.children;
            var com = children[0].getComponent(_crd && GeneralItemLogic === void 0 ? (_reportPossibleCrUseOfGeneralItemLogic({
              error: Error()
            }), GeneralItemLogic) : GeneralItemLogic);
            children[0].active = true;

            if (com) {
              com.setData(data[0], (_crd && GeneralItemType === void 0 ? (_reportPossibleCrUseOfGeneralItemType({
                error: Error()
              }), GeneralItemType) : GeneralItemType).GeneralNoThing);
            }
          } else {
            this.tenLayout.node.active = true;
            var children = this.tenLayout.node.children;

            for (var i = 0; i < this._maxSize; i++) {
              var child = children[i];

              if (data[i]) {
                child.active = true;

                var _com = child.getComponent(_crd && GeneralItemLogic === void 0 ? (_reportPossibleCrUseOfGeneralItemLogic({
                  error: Error()
                }), GeneralItemLogic) : GeneralItemLogic);

                if (_com) {
                  _com.setData(data[i], (_crd && GeneralItemType === void 0 ? (_reportPossibleCrUseOfGeneralItemType({
                    error: Error()
                  }), GeneralItemType) : GeneralItemType).GeneralNoThing);
                }
              } else {
                child.active = false;
              }
            }
          }
        }

        onClickClose() {
          this.node.active = false;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "generalItemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tenLayout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "oneLayout", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DrawRLogic.js.map