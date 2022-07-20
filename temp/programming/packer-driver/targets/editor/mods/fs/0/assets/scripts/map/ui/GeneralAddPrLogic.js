System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Prefab, Node, Layout, instantiate, GeneralCommand, GeneralData, GeneralItemLogic, GeneralItemType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, GeneralAddPrLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "../../general/GeneralCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralConfig(extras) {
    _reporterNs.report("GeneralConfig", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralData(extras) {
    _reporterNs.report("GeneralData", "../../general/GeneralProxy", _context.meta, extras);
  }

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
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      Layout = _cc.Layout;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      GeneralCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      GeneralData = _unresolved_3.GeneralData;
    }, function (_unresolved_4) {
      GeneralItemLogic = _unresolved_4.default;
      GeneralItemType = _unresolved_4.GeneralItemType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53556/JHc5L3ZS5cHBNc4/k", "GeneralAddPrLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", GeneralAddPrLogic = (_dec = ccclass('GeneralAddPrLogic'), _dec2 = property(Label), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Layout), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property([Node]), _dec(_class = (_class2 = (_temp = class GeneralAddPrLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nameLab", _descriptor, this);

          _initializerDefineProperty(this, "generalItemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "generalItemParent", _descriptor3, this);

          _initializerDefineProperty(this, "srollLayout", _descriptor4, this);

          _initializerDefineProperty(this, "prLabel", _descriptor5, this);

          _initializerDefineProperty(this, "addPr", _descriptor6, this);

          _defineProperty(this, "_currData", null);

          _defineProperty(this, "_cfgData", null);

          _defineProperty(this, "_generalNode", null);

          _defineProperty(this, "_nameObj", {});

          _defineProperty(this, "_addPrObj", {});

          _defineProperty(this, "_addPrArr", []);

          _defineProperty(this, "_canUsePr", -1);

          _defineProperty(this, "_step", 100);

          _defineProperty(this, "_curAll", 0);

          _initializerDefineProperty(this, "prItems", _descriptor7, this);
        }

        onLoad() {
          this._generalNode = instantiate(this.generalItemPrefab);
          this._generalNode.parent = this.generalItemParent;
          this._nameObj = {
            force: "武力",
            strategy: "战略",
            defense: "防御",
            speed: "速度",
            destroy: "破坏"
          };
          this._addPrArr = ["force", "strategy", "defense", "speed", "destroy"];
        }

        setData(cfgData, curData) {
          console.log("curData:", curData);
          this._canUsePr = -1;
          this._currData = curData;
          this._cfgData = cfgData;
          this.nameLab.string = this._cfgData.name;

          var com = this._generalNode.getComponent(_crd && GeneralItemLogic === void 0 ? (_reportPossibleCrUseOfGeneralItemLogic({
            error: Error()
          }), GeneralItemLogic) : GeneralItemLogic);

          if (com) {
            com.updateItem(this._currData, (_crd && GeneralItemType === void 0 ? (_reportPossibleCrUseOfGeneralItemType({
              error: Error()
            }), GeneralItemType) : GeneralItemType).GeneralNoThing);
          }

          this._addPrObj = {
            force: this._currData.force_added,
            strategy: this._currData.strategy_added,
            defense: this._currData.defense_added,
            speed: this._currData.speed_added,
            destroy: this._currData.destroy_added
          };
          this._curAll = Math.abs(this._currData.hasPrPoint - this._currData.usePrPoint);
          this.updateView();
        }

        updateView() {
          var children = this.srollLayout.node.children;
          var i = 0;

          for (var key in this._nameObj) {
            children[i].getChildByName("New Label").getComponent(Label).string = this._nameObj[key] + ":" + (_crd && GeneralData === void 0 ? (_reportPossibleCrUseOfGeneralData({
              error: Error()
            }), GeneralData) : GeneralData).getPrStr(this._cfgData[key], this._addPrObj[key], this._currData.level, this._cfgData[key + "_grow"]);
            var node = children[i].getChildByName("New Sprite").getChildByName("change Label").getComponent(Label);
            node.string = this._addPrObj[key] / this._step + '';
            i++;
          }

          if (this._canUsePr == -1) {
            this._canUsePr = Math.abs(this._currData.hasPrPoint - this._currData.usePrPoint);
          }

          this.prLabel.string = "可用属性点:" + this._canUsePr / this._step + "/" + this._currData.hasPrPoint / this._step;
          this.addPr.active = this._currData.hasPrPoint > 0 ? true : false;
        }

        plus(target, index = 0) {
          var num = this._addPrObj[this._addPrArr[index]];

          if (!this.isCanePlus() || num >= this._currData.hasPrPoint) {
            return;
          }

          num = num + this._step;
          num = num > this._currData.hasPrPoint ? this._currData.hasPrPoint : num;
          this._addPrObj[this._addPrArr[index]] = num;
          this._canUsePr -= this._step;
          this.updateView();
        }

        reduce(target, index = 0) {
          var num = this._addPrObj[this._addPrArr[index]];

          if (!this.isCaneReduce() || num == 0) {
            return;
          }

          num = num - this._step;
          num = num < 0 ? 0 : num;
          this._addPrObj[this._addPrArr[index]] = num;
          this._canUsePr += this._step;
          this.updateView();
        }

        getAllUse() {
          var num = 0;

          for (var key in this._addPrObj) {
            num += this._addPrObj[key];
          }

          return num;
        }

        isCanePlus() {
          var all = this.getAllUse();

          if (all + this._step > this._currData.hasPrPoint) {
            return false;
          }

          return true;
        }

        isCaneReduce() {
          var all = this.getAllUse();

          if (all - this._step < 0) {
            return false;
          }

          return true;
        }

        onClickAddPr() {
          (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().addPrGeneral(this._currData.id, this._addPrObj.force, this._addPrObj.strategy, this._addPrObj.defense, this._addPrObj.speed, this._addPrObj.destroy);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "generalItemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "generalItemParent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "srollLayout", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "prLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "addPr", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "prItems", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GeneralAddPrLogic.js.map