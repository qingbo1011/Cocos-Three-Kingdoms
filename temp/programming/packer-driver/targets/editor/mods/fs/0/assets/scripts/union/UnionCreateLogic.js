System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EditBox, UnionCommand, EventMgr, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, UnionCreateLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUnionCommand(extras) {
    _reporterNs.report("UnionCommand", "./UnionCommand", _context.meta, extras);
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
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      UnionCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e5531wFNdMVrqnWAB41xOe", "UnionCreateLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", UnionCreateLogic = (_dec = ccclass('UnionCreateLogic'), _dec2 = property(EditBox), _dec(_class = (_class2 = (_temp = class UnionCreateLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "editName", _descriptor, this);
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("create_union_success", this.onClickClose, this);
          this.editName.string = this.getRandomName();
        }

        onCreate() {
          (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
            error: Error()
          }), UnionCommand) : UnionCommand).getInstance().unionCreate(this.editName.string);
        }

        onRandomName() {
          this.editName.string = this.getRandomName();
        }

        getRandomName() {
          let name = "";
          var firstname = ["李", "西门", "沈", "张", "上官", "司徒", "欧阳", "轩辕", "咳咳", "妈妈"];
          var nameq = ["彪", "巨昆", "锐", "翠花", "小小", "撒撒", "熊大", "宝强"];
          var xingxing = firstname[Math.floor(Math.random() * firstname.length)];
          var mingming = nameq[Math.floor(Math.random() * nameq.length)];
          name = xingxing + mingming;
          return name;
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        onClickClose() {
          this.node.active = false;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "editName", [_dec2], {
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
//# sourceMappingURL=UnionCreateLogic.js.map