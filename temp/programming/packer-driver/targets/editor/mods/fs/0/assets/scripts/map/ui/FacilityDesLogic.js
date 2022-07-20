System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, RichText, Button, Node, Prefab, NodePool, instantiate, UITransform, LoginCommand, DateUtil, FacilityAdditionItemLogic, MapUICommand, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, FacilityDesLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLoginCommand(extras) {
    _reporterNs.report("LoginCommand", "../../login/LoginCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacilityAdditionItemLogic(extras) {
    _reporterNs.report("FacilityAdditionItemLogic", "./FacilityAdditionItemLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./MapUICommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacility(extras) {
    _reporterNs.report("Facility", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacilityAdditionCfg(extras) {
    _reporterNs.report("FacilityAdditionCfg", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacilityConfig(extras) {
    _reporterNs.report("FacilityConfig", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacilityUpLevel(extras) {
    _reporterNs.report("FacilityUpLevel", "./MapUIProxy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      RichText = _cc.RichText;
      Button = _cc.Button;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      LoginCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      DateUtil = _unresolved_3.default;
    }, function (_unresolved_4) {
      FacilityAdditionItemLogic = _unresolved_4.default;
    }, function (_unresolved_5) {
      MapUICommand = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfb4eEZYGRAepM2gM5L2GYa", "FacilityDesLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", FacilityDesLogic = (_dec = ccclass('FacilityDesLogic'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(RichText), _dec5 = property(RichText), _dec6 = property(Button), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Prefab), _dec(_class = (_class2 = (_temp = class FacilityDesLogic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelTitle", _descriptor, this);

          _initializerDefineProperty(this, "labelDes", _descriptor2, this);

          _initializerDefineProperty(this, "labelConditions", _descriptor3, this);

          _initializerDefineProperty(this, "labelNeed", _descriptor4, this);

          _initializerDefineProperty(this, "btnUp", _descriptor5, this);

          _initializerDefineProperty(this, "labelUp", _descriptor6, this);

          _initializerDefineProperty(this, "labelNeedTime", _descriptor7, this);

          _initializerDefineProperty(this, "additionNode", _descriptor8, this);

          _initializerDefineProperty(this, "additionItemPrefab", _descriptor9, this);

          _defineProperty(this, "_cityId", 0);

          _defineProperty(this, "_data", null);

          _defineProperty(this, "_cfg", null);

          _defineProperty(this, "_additonCfg", null);

          _defineProperty(this, "_isUnLock", false);

          _defineProperty(this, "_isNeedComplete", false);

          _defineProperty(this, "_isLevelMax", false);

          _defineProperty(this, "_additionPool", new NodePool());
        }

        onLoad() {
          this.schedule(this.updateNeedTime);
        }

        onDestroy() {}

        removeAllAdditionItems() {
          let children = this.additionNode.children.concat();
          this.additionNode.removeAllChildren();

          for (let i = 0; i < children.length; i++) {
            this._additionPool.put(children[i]);
          }
        }

        getAdditionItem() {
          if (this._additionPool.size() > 0) {
            return this._additionPool.get();
          } else {
            return instantiate(this.additionItemPrefab);
          }
        } //更新加成描述界面


        updateAdditionView() {
          this.removeAllAdditionItems();

          for (let i = 0; i < this._cfg.additions.length; i++) {
            let item = this.getAdditionItem();
            item.parent = this.additionNode;
            item.getComponent(_crd && FacilityAdditionItemLogic === void 0 ? (_reportPossibleCrUseOfFacilityAdditionItemLogic({
              error: Error()
            }), FacilityAdditionItemLogic) : FacilityAdditionItemLogic).setData(this._data, this._cfg, i);
          }
        } //更新解锁条件


        updateContidionView() {
          this._isUnLock = true;

          if (this._cfg.conditions.length > 0) {
            //有解锁条件
            let contidionList = [];

            for (let i = 0; i < this._cfg.conditions.length; i++) {
              let data = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
                error: Error()
              }), MapUICommand) : MapUICommand).getInstance().proxy.getMyFacilityByType(this._cityId, this._cfg.conditions[i].type);
              let cfg = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
                error: Error()
              }), MapUICommand) : MapUICommand).getInstance().proxy.getFacilityCfgByType(this._cfg.conditions[i].type);

              if (data == null || data.level < this._cfg.conditions[i].level) {
                //不满足条件
                contidionList.push("<color=#ff0000>" + cfg.name + this._cfg.conditions[i].level + "级</color>");
                this._isUnLock = false;
              } else {
                //满足条件
                contidionList.push("<color=#00ff00>" + cfg.name + this._cfg.conditions[i].level + "级</color>");
              }
            }

            this.labelConditions.node.parent.active = true;
            this.labelConditions.string = contidionList.join("<br/>");
            this.labelConditions.node.parent.getComponent(UITransform).height = this.labelConditions.node.getComponent(UITransform).height + 30;
          } else {
            this.labelConditions.node.parent.active = false;
          }
        } //更新资源需求


        updateNeedView() {
          this._isNeedComplete = true;
          let curLevel = this._data.level;

          if (curLevel >= 0 && curLevel < this._cfg.upLevels.length) {
            //未达到最高级时
            let roleRes = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
              error: Error()
            }), LoginCommand) : LoginCommand).getInstance().proxy.getRoleResData();
            let upLevel = this._cfg.upLevels[curLevel];
            let needStrList = [];

            if (upLevel.grain > 0) {
              if (roleRes.grain < upLevel.grain) {
                this._isNeedComplete = false;
                needStrList.push("粮食：<color=#ff0000>" + upLevel.grain + "/" + roleRes.grain + "</color>");
              } else {
                needStrList.push("粮食：<color=#00ff00>" + upLevel.grain + "/" + roleRes.grain + "</color>");
              }
            }

            if (upLevel.wood > 0) {
              if (roleRes.wood < upLevel.wood) {
                this._isNeedComplete = false;
                needStrList.push("木材：<color=#ff0000>" + upLevel.wood + "/" + roleRes.wood + "</color>");
              } else {
                needStrList.push("木材：<color=#00ff00>" + upLevel.wood + "/" + roleRes.wood + "</color>");
              }
            }

            if (upLevel.iron > 0) {
              if (roleRes.iron < upLevel.iron) {
                this._isNeedComplete = false;
                needStrList.push("铁矿：<color=#ff0000>" + upLevel.iron + "/" + roleRes.iron + "</color>");
              } else {
                needStrList.push("铁矿：<color=#00ff00>" + upLevel.iron + "/" + roleRes.iron + "</color>");
              }
            }

            if (upLevel.stone > 0) {
              if (roleRes.stone < upLevel.stone) {
                this._isNeedComplete = false;
                needStrList.push("石头：<color=#ff0000>" + upLevel.stone + "/" + roleRes.stone + "</color>");
              } else {
                needStrList.push("石头：<color=#00ff00>" + upLevel.stone + "/" + roleRes.stone + "</color>");
              }
            }

            if (upLevel.decree > 0) {
              if (roleRes.decree < upLevel.decree) {
                this._isNeedComplete = false;
                needStrList.push("政令：<color=#ff0000>" + upLevel.decree + "/" + roleRes.decree + "</color>");
              } else {
                needStrList.push("政令：<color=#00ff00>" + upLevel.decree + "/" + roleRes.decree + "</color>");
              }
            }

            this.labelNeed.node.parent.active = true;
            this.labelNeed.string = needStrList.join("<br/>");
            this.labelNeed.node.parent.getComponent(UITransform).height = this.labelNeed.node.getComponent(UITransform).height + 30;
            this._isLevelMax = false;
          } else {
            this.labelNeed.node.parent.active = false;
            this._isLevelMax = true;
          }
        }

        updateNeedTime() {
          if (this._isLevelMax == false) {
            var level = this._cfg.upLevels[this._data.level];

            if (this._data.isUping() == false) {
              this.labelNeedTime.string = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
                error: Error()
              }), DateUtil) : DateUtil).converSecondStr(level.time * 1000);
            } else {
              this.labelNeedTime.string = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
                error: Error()
              }), DateUtil) : DateUtil).converSecondStr(this._data.upLastTime());
            }
          } else {
            this.labelNeedTime.string = "等级已满";
          }
        } //更新升级按钮


        updateUpBtn() {
          if (this._isLevelMax) {
            //升满级了
            this.btnUp.node.active = false;
          } else {
            this.btnUp.node.active = true;

            if (this._isUnLock == false) {
              //未解锁
              this.btnUp.interactable = false;
              this.labelUp.string = "未解锁";
            } else if (this._isNeedComplete == false) {
              //资源不足
              this.btnUp.interactable = false;
              this.labelUp.string = "升级";
            } else if (this._data.isUping()) {
              //正在升级中
              this.btnUp.interactable = false;
              this.labelUp.string = "升级中";
            } else {
              this.btnUp.interactable = true;
              this.labelUp.string = "升级";
            }
          }
        }

        setData(cityId, data, cfg) {
          this._cityId = cityId;
          this._data = data;
          this._cfg = cfg;
          this.labelTitle.string = cfg.name;
          this.labelDes.string = cfg.des;
          this.updateAdditionView();
          this.updateContidionView();
          this.updateNeedView();
          this.updateNeedTime();
          this.updateUpBtn();
        }

        onClickUp() {
          (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().upFacility(this._cityId, this._data.type);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelDes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelConditions", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelNeed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnUp", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelUp", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labelNeedTime", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "additionNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "additionItemPrefab", [_dec10], {
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
//# sourceMappingURL=FacilityDesLogic.js.map