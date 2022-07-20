System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, Node, MapCommand, UnionCommand, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, UnionMemberItemOpLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "../map/MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../map/MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnionCommand(extras) {
    _reporterNs.report("UnionCommand", "./UnionCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMember(extras) {
    _reporterNs.report("Member", "./UnionProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnion(extras) {
    _reporterNs.report("Union", "./UnionProxy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      MapCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      UnionCommand = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c216b0+ZhFSYVhzbgNbrUf", "UnionMemberItemOpLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", UnionMemberItemOpLogic = (_dec = ccclass('UnionMemberItemOpLogic'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec(_class = (_class2 = (_temp = class UnionMemberItemOpLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "kickButton", _descriptor, this);

          _initializerDefineProperty(this, "abdicateButton", _descriptor2, this);

          _initializerDefineProperty(this, "appointButton", _descriptor3, this);

          _initializerDefineProperty(this, "unAppointButton", _descriptor4, this);

          _defineProperty(this, "_menberData", null);
        }

        onLoad() {
          this.node.on(Node.EventType.TOUCH_END, this.click, this);
        }

        onDestroy() {
          this.node.off(Node.EventType.TOUCH_END, this.click, this);
        }

        click() {
          this.node.active = false;
        }

        setData(data) {
          this._menberData = data;
          var city = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity();
          var unionData = (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().proxy.getUnion(city.unionId);

          if (unionData) {
            if (this._menberData.rid == city.rid) {
              this.node.active = false;
            } else {
              if (unionData.getChairman().rid == city.rid) {
                console.log("unionData:", unionData, unionData.getViceChairman(), this._menberData);
                this.unAppointButton.node.active = unionData.getViceChairman().rid == this._menberData.rid;
                this.kickButton.node.active = unionData.isMajor(city.rid);
                this.abdicateButton.node.active = unionData.getChairman().rid == city.rid;
                this.appointButton.node.active = unionData.getChairman().rid == city.rid && unionData.getViceChairman().rid != this._menberData.rid;
              } else if (unionData.getViceChairman().rid == city.rid) {
                if (unionData.getChairman().rid == this._menberData.rid) {
                  this.node.active = false;
                } else {
                  this.unAppointButton.node.active = false;
                  this.kickButton.node.active = true;
                  this.abdicateButton.node.active = unionData.getViceChairman().rid != this._menberData.rid;
                  this.appointButton.node.active = false;
                  this.node.active = true;
                }
              } else {
                this.node.active = false;
              }
            }
          } else {
            this.node.active = false;
          }
        }

        kick() {
          (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().unionKick(this._menberData.rid);
          this.node.active = false;
        }

        appoint() {
          (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().unionAppoint(this._menberData.rid, 1);
          this.node.active = false;
        }

        unAppoint() {
          (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().unionAppoint(this._menberData.rid, 2);
          this.node.active = false;
        }

        abdicate() {
          (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().unionAbdicate(this._menberData.rid);
          this.node.active = false;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "kickButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "abdicateButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "appointButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "unAppointButton", [_dec5], {
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
//# sourceMappingURL=UnionMemberItemOpLogic.js.map