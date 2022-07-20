System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, ToggleContainer, instantiate, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, GeneralInfoLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../utils/EventMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      ToggleContainer = _cc.ToggleContainer;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96f82GnEetMXqUHg/i/STtF", "GeneralInfoLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", GeneralInfoLogic = (_dec = ccclass('GeneralInfoLogic'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(ToggleContainer), _dec(_class = (_class2 = (_temp = class GeneralInfoLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "generalDesPrefab", _descriptor, this);

          _initializerDefineProperty(this, "generalComposePrefab", _descriptor2, this);

          _initializerDefineProperty(this, "generalAddPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "generalToggleContainer", _descriptor4, this);

          _defineProperty(this, "_currData", null);

          _defineProperty(this, "_cfgData", null);

          _defineProperty(this, "_curIndex", 0);

          _defineProperty(this, "_nodeList", []);
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("update_one_generals", this.updateOnce, this);
          var des = instantiate(this.generalDesPrefab);
          des.parent = this.node;
          des.active = false;
          var comp = instantiate(this.generalComposePrefab);
          comp.parent = this.node;
          comp.active = false;
          var addd = instantiate(this.generalAddPrefab);
          addd.parent = this.node;
          addd.active = false;
          this._nodeList[0] = des;
          this._nodeList[1] = comp;
          this._nodeList[2] = addd;
        }

        updateOnce(curData) {
          this.setData(this._cfgData, curData);
        }

        onDestroy() {
          this._nodeList = [];
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        onClickClose() {
          this.node.active = false;
        }

        setData(cfgData, curData) {
          this._currData = curData;
          this._cfgData = cfgData;
          this.setIndex(this._curIndex);
        }

        setIndex(index = 0) {
          this._curIndex = index;
          this.allVisible();
          this._nodeList[index].active = true;
          this.generalToggleContainer.toggleItems[index].isChecked = true;
          let logicNameArr = ["GeneralDesLogic", "GeneralComposeLogic", "GeneralAddPrLogic"];

          let com = this._nodeList[index].getComponent(logicNameArr[index]);

          if (com) {
            com.setData(this._cfgData, this._currData);
          }
        }

        allVisible() {
          for (var i = 0; i < this._nodeList.length; i++) {
            this._nodeList[i].active = false;
          }
        }

        selectHandle(event, other) {
          // console.log("event:",event,other)
          this.setIndex(other);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "generalDesPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "generalComposePrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "generalAddPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "generalToggleContainer", [_dec5], {
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
//# sourceMappingURL=GeneralInfoLogic.js.map