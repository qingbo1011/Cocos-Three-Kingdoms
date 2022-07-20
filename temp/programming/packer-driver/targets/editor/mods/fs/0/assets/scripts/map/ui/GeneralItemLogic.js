System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Sprite, Layout, Node, color, GeneralCommand, GeneralCampType, GeneralHeadLogic, EventMgr, GeneralItemType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, GeneralItemLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "../../general/GeneralCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralCampType(extras) {
    _reporterNs.report("GeneralCampType", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralData(extras) {
    _reporterNs.report("GeneralData", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralHeadLogic(extras) {
    _reporterNs.report("GeneralHeadLogic", "./GeneralHeadLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../utils/EventMgr", _context.meta, extras);
  }

  _export("GeneralItemType", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Layout = _cc.Layout;
      Node = _cc.Node;
      color = _cc.color;
    }, function (_unresolved_2) {
      GeneralCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      GeneralCampType = _unresolved_3.GeneralCampType;
    }, function (_unresolved_4) {
      GeneralHeadLogic = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96e83wqxlJGwprpX8UyowK3", "GeneralItemLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      // /**军队命令*/
      _export("GeneralItemType", GeneralItemType = class GeneralItemType {});

      _defineProperty(GeneralItemType, "GeneralInfo", 0);

      _defineProperty(GeneralItemType, "GeneralDispose", 1);

      _defineProperty(GeneralItemType, "GeneralConScript", 2);

      _defineProperty(GeneralItemType, "GeneralNoThing", 3);

      _defineProperty(GeneralItemType, "GeneralSelect", 4);

      _export("default", GeneralItemLogic = (_dec = ccclass('GeneralItemLogic'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Layout), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = (_temp = class GeneralItemLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nameLabel", _descriptor, this);

          _initializerDefineProperty(this, "lvLabel", _descriptor2, this);

          _initializerDefineProperty(this, "spritePic", _descriptor3, this);

          _initializerDefineProperty(this, "costLabel", _descriptor4, this);

          _initializerDefineProperty(this, "campLabel", _descriptor5, this);

          _initializerDefineProperty(this, "armLabel", _descriptor6, this);

          _initializerDefineProperty(this, "starLayout", _descriptor7, this);

          _initializerDefineProperty(this, "delNode", _descriptor8, this);

          _initializerDefineProperty(this, "useNode", _descriptor9, this);

          _initializerDefineProperty(this, "selectNode", _descriptor10, this);

          _defineProperty(this, "_curData", null);

          _defineProperty(this, "_type", -1);

          _defineProperty(this, "_position", 0);

          _defineProperty(this, "_cityData", null);

          _defineProperty(this, "_orderId", 1);

          _defineProperty(this, "_isSelect", false);
        }

        onLoad() {
          this.delNode.active = false;
          this._isSelect = false;
        }

        setData(curData, type = 0, position = 0) {
          this.updateItem(curData);
        }

        updateItem(curData) {
          this.updateView(curData);
          this._type = this._curData.type == undefined ? -1 : this._curData.type;
          this._position = this._curData.position == undefined ? 0 : this._curData.position;
        }

        updateView(curData) {
          this._curData = curData;
          var cfgData = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralCfg(this._curData.cfgId);
          this.nameLabel.string = cfgData.name;
          this.lvLabel.string = " Lv." + this._curData.level;
          this.spritePic.getComponent(_crd && GeneralHeadLogic === void 0 ? (_reportPossibleCrUseOfGeneralHeadLogic({
            error: Error()
          }), GeneralHeadLogic) : GeneralHeadLogic).setHeadId(this._curData.cfgId);
          this.showStar(cfgData.star, this._curData.star_lv);
          this.delNode.active = false;

          if (cfgData.camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
            error: Error()
          }), GeneralCampType) : GeneralCampType).Han) {
            this.campLabel.string = "汉";
          } else if (cfgData.camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
            error: Error()
          }), GeneralCampType) : GeneralCampType).Qun) {
            this.campLabel.string = "群";
          } else if (cfgData.camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
            error: Error()
          }), GeneralCampType) : GeneralCampType).Wei) {
            this.campLabel.string = "魏";
          } else if (cfgData.camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
            error: Error()
          }), GeneralCampType) : GeneralCampType).Shu) {
            this.campLabel.string = "蜀";
          } else if (cfgData.camp == (_crd && GeneralCampType === void 0 ? (_reportPossibleCrUseOfGeneralCampType({
            error: Error()
          }), GeneralCampType) : GeneralCampType).Wu) {
            this.campLabel.string = "吴";
          }

          this.armLabel.string = this.armstr(cfgData.arms);

          if (this.useNode) {
            if (this._type == GeneralItemType.GeneralInfo && this._curData.order > 0) {
              this.useNode.active = true;
            } else {
              this.useNode.active = false;
            }
          }

          if (this.costLabel) {
            this.costLabel.string = cfgData.cost + "";
          }

          this.select(false);
        }

        armstr(arms) {
          // console.log("armstr:", arms);
          var str = "";

          if (arms.indexOf(1) >= 0 || arms.indexOf(4) >= 0 || arms.indexOf(7) >= 0) {
            str += "步";
          } else if (arms.indexOf(2) >= 0 || arms.indexOf(5) >= 0 || arms.indexOf(8) >= 0) {
            str += "弓";
          } else if (arms.indexOf(3) >= 0 || arms.indexOf(6) >= 0 || arms.indexOf(9) >= 0) {
            str += "骑";
          }

          return str;
        }

        select(flag) {
          if (this.selectNode) {
            this.selectNode.active = flag;
          }

          this._isSelect = flag;
        }

        showStar(star = 3, star_lv = 0) {
          var childen = this.starLayout.node.children;

          for (var i = 0; i < childen.length; i++) {
            if (i < star) {
              childen[i].active = true;

              if (i < star_lv) {
                childen[i].getComponent(Sprite).color = color(255, 0, 0);
              } else {
                childen[i].getComponent(Sprite).color = color(255, 255, 255);
              }
            } else {
              childen[i].active = false;
            }
          }
        }

        setOtherData(cityData, orderId = 1) {
          this._cityData = cityData;
          this._orderId = orderId;
          this.delNode.active = true;
        }

        onClickGeneral(event) {
          if (this._curData) {
            var cfgData = this._curData.config;
            console.log("onClickGeneral:", this._type); //武将详情

            if (this._type == GeneralItemType.GeneralInfo) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit("open_general_des", cfgData, this._curData);
            } //上阵
            else if (this._type == GeneralItemType.GeneralDispose) {
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emit("chosed_general", cfgData, this._curData, this._position);
              } //征兵
              else if (this._type == GeneralItemType.GeneralConScript) {
                  (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emit("open_army_conscript", this._orderId, this._cityData);
                } else if (this._type == GeneralItemType.GeneralSelect) {
                  this._isSelect = !this._isSelect;
                  this.select(this._isSelect);
                  (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emit("open_general_select", cfgData, this._curData, this.node);
                }
          }
        }
        /**
         * 下阵
         */


        onDelete() {
          var cfgData = this._curData.config;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("chosed_general", cfgData, this._curData, -1);
        }
        /**
         * 战报的
         * @param curData 
         */


        setWarReportData(curData) {
          this.updateView(curData);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lvLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spritePic", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "costLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "campLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "armLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "starLayout", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "delNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "useNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "selectNode", [_dec11], {
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
//# sourceMappingURL=GeneralItemLogic.js.map