System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, RichText, Label, GeneralCommand, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, WarReportDesItemLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "../../general/GeneralCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWarReportRound(extras) {
    _reporterNs.report("WarReportRound", "./MapUIProxy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RichText = _cc.RichText;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      GeneralCommand = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15d17h2x1RGrrMVW/ctqz8x", "WarReportDesItemLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", WarReportDesItemLogic = (_dec = ccclass('WarReportDesItemLogic'), _dec2 = property(RichText), _dec3 = property(RichText), _dec4 = property(Label), _dec(_class = (_class2 = (_temp = class WarReportDesItemLogic extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_curData", null);

          _initializerDefineProperty(this, "warLab1", _descriptor, this);

          _initializerDefineProperty(this, "warLab2", _descriptor2, this);

          _initializerDefineProperty(this, "roundsLabel", _descriptor3, this);
        }

        onLoad() {}

        updateItem(data) {
          console.log("updateItem:", data);
          this._curData = data;
          this.roundsLabel.string = "第" + this._curData.round + "轮/" + this._curData.turn + "回合";
          var att_cfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(this._curData.attack.cfgId);
          var def_cfg = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(this._curData.defense.cfgId);
          var title1 = "";
          var title2 = "";

          if (data.isAttack) {
            title1 = "攻";
            title2 = "防";
          } else {
            title2 = "攻";
            title1 = "防";
          }

          this.warLab1.string = "<color=#ff0000>" + title1 + att_cfg.name + "</color>" + " 对 " + "<color=#00ff00>" + title2 + def_cfg.name + "</color>" + " 发起攻击，" + "<color=#00ff00>" + title2 + def_cfg.name + "</color>" + " 损失 " + "<color=#F2C420>" + this._curData.defenseLoss + "</color>" + " 士兵";
          this.warLab2.string = "<color=#ff0000>" + title2 + def_cfg.name + "</color>" + " 对 " + "<color=#00ff00>" + title1 + att_cfg.name + "</color>" + " 发起攻击，" + "<color=#00ff00>" + title1 + att_cfg.name + "</color>" + " 损失 " + "<color=#F2C420>" + this._curData.attackLoss + "</color>" + " 士兵";
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "warLab1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "warLab2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "roundsLabel", [_dec4], {
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
//# sourceMappingURL=WarReportDesItemLogic.js.map