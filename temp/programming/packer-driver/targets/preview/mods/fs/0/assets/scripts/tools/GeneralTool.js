System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EditBox, Label, Node, Prefab, ToggleContainer, instantiate, JsonAsset, SpriteFrame, LoaderManager, LoadData, LoadDataType, GeneralCommand, GeneralRosterLogic, JSB, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _temp, _crd, ccclass, property, GeneralTool;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLoaderManager(extras) {
    _reporterNs.report("LoaderManager", "../core/LoaderManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadData(extras) {
    _reporterNs.report("LoadData", "../core/LoaderManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadDataType(extras) {
    _reporterNs.report("LoadDataType", "../core/LoaderManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "../general/GeneralCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralConfig(extras) {
    _reporterNs.report("GeneralConfig", "../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralRosterLogic(extras) {
    _reporterNs.report("GeneralRosterLogic", "../map/ui/GeneralRosterLogic", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ToggleContainer = _cc.ToggleContainer;
      instantiate = _cc.instantiate;
      JsonAsset = _cc.JsonAsset;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      LoaderManager = _unresolved_2.default;
      LoadData = _unresolved_2.LoadData;
      LoadDataType = _unresolved_2.LoadDataType;
    }, function (_unresolved_3) {
      GeneralCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      GeneralRosterLogic = _unresolved_4.default;
    }, function (_ccEnv) {
      JSB = _ccEnv.JSB;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54280DvOBxOgKoOuff2qh1x", "GeneralTool", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", GeneralTool = (_dec = ccclass('GeneralTool'), _dec2 = property(EditBox), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Prefab), _dec7 = property(ToggleContainer), _dec8 = property(ToggleContainer), _dec9 = property(EditBox), _dec10 = property(EditBox), _dec11 = property(EditBox), _dec12 = property(EditBox), _dec13 = property(EditBox), _dec14 = property(EditBox), _dec15 = property(EditBox), _dec16 = property(EditBox), _dec17 = property(EditBox), _dec18 = property(EditBox), _dec19 = property(EditBox), _dec20 = property(EditBox), _dec21 = property(EditBox), _dec(_class = (_class2 = (_temp = class GeneralTool extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "outDirEditBox", _descriptor, this);

          _initializerDefineProperty(this, "tipsLab", _descriptor2, this);

          _initializerDefineProperty(this, "generalParentNode", _descriptor3, this);

          _initializerDefineProperty(this, "opNode", _descriptor4, this);

          _initializerDefineProperty(this, "generalRoster", _descriptor5, this);

          _initializerDefineProperty(this, "toggleCampGroup", _descriptor6, this);

          _initializerDefineProperty(this, "toggleArmGroup", _descriptor7, this);

          _initializerDefineProperty(this, "nameEditBox", _descriptor8, this);

          _initializerDefineProperty(this, "xjEditBox", _descriptor9, this);

          _initializerDefineProperty(this, "wlEditBox", _descriptor10, this);

          _initializerDefineProperty(this, "mlEditBox", _descriptor11, this);

          _initializerDefineProperty(this, "fyEditBox", _descriptor12, this);

          _initializerDefineProperty(this, "gcEditBox", _descriptor13, this);

          _initializerDefineProperty(this, "sdEditBox", _descriptor14, this);

          _initializerDefineProperty(this, "costEditBox", _descriptor15, this);

          _initializerDefineProperty(this, "wlAddEditBox", _descriptor16, this);

          _initializerDefineProperty(this, "mlAddEditBox", _descriptor17, this);

          _initializerDefineProperty(this, "fyAddEditBox", _descriptor18, this);

          _initializerDefineProperty(this, "gcAddEditBox", _descriptor19, this);

          _initializerDefineProperty(this, "sdAddEditBox", _descriptor20, this);

          _defineProperty(this, "_generalNode", null);

          _defineProperty(this, "_cfgs", []);

          _defineProperty(this, "_isLoading", true);

          _defineProperty(this, "_curIndex", 0);
        }

        onLoad() {
          this.tipsLab.string = "加载中...";
          this.opNode.active = false;
          var dataList = [];
          dataList.push(new (_crd && LoadData === void 0 ? (_reportPossibleCrUseOfLoadData({
            error: Error()
          }), LoadData) : LoadData)("./config/json/general/", (_crd && LoadDataType === void 0 ? (_reportPossibleCrUseOfLoadDataType({
            error: Error()
          }), LoadDataType) : LoadDataType).DIR, JsonAsset));
          dataList.push(new (_crd && LoadData === void 0 ? (_reportPossibleCrUseOfLoadData({
            error: Error()
          }), LoadData) : LoadData)("./generalpic", (_crd && LoadDataType === void 0 ? (_reportPossibleCrUseOfLoadDataType({
            error: Error()
          }), LoadDataType) : LoadDataType).DIR, SpriteFrame));
          dataList.push(new (_crd && LoadData === void 0 ? (_reportPossibleCrUseOfLoadData({
            error: Error()
          }), LoadData) : LoadData)("./config/basic", (_crd && LoadDataType === void 0 ? (_reportPossibleCrUseOfLoadDataType({
            error: Error()
          }), LoadDataType) : LoadDataType).FILE, JsonAsset));
          (_crd && LoaderManager === void 0 ? (_reportPossibleCrUseOfLoaderManager({
            error: Error()
          }), LoaderManager) : LoaderManager).getInstance().startLoadList(dataList, null, (error, paths, datas) => {
            if (error != null) {
              console.log("加载配置文件失败");
              return;
            }

            console.log("loadComplete", paths, datas);
            (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().proxy.initGeneralConfig(datas[0], datas[2].json);
            (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().proxy.initGeneralTex(datas[1]);
            this.loadFinish();
          }, this);
        }

        loadFinish() {
          this.opNode.active = true;
          this.tipsLab.string = "";
          this._isLoading = false;
          var cfgs = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralAllCfg();
          this._cfgs = Array.from(cfgs.values());

          this._cfgs.sort(this.sortStar);

          var probability = 100;

          for (var index = 0; index < this._cfgs.length; index++) {
            var e = this._cfgs[index];

            if (e.star == 5) {
              probability = Math.floor(Math.random() * 20) + 5;
            } else if (e.star == 4) {
              probability = Math.floor(Math.random() * 30) + 20;
            } else if (e.star == 3) {
              probability = Math.floor(Math.random() * 200) + 300;
            } else if (e.star == 2) {
              probability = Math.floor(Math.random() * 200) + 400;
            } else if (e.star == 1) {
              probability = Math.floor(Math.random() * 200) + 500;
            }

            e.probability = probability;
          }

          this.show(this._curIndex);
        }

        show(idx) {
          if (this._cfgs.length > 0) {
            if (idx < 0) {
              idx = this._cfgs.length - 1;
            } else if (idx >= this._cfgs.length) {
              idx = 0;
            }

            if (this._generalNode == null) {
              var g = instantiate(this.generalRoster);
              g.parent = this.generalParentNode;
              this._generalNode = g;
            }

            var cfg = this._cfgs[idx];

            this._generalNode.getComponent(_crd && GeneralRosterLogic === void 0 ? (_reportPossibleCrUseOfGeneralRosterLogic({
              error: Error()
            }), GeneralRosterLogic) : GeneralRosterLogic).setData(cfg);

            this.nameEditBox.string = cfg.name;
            this.xjEditBox.string = cfg.star + "";
            this.wlEditBox.string = cfg.force / 100 + "";
            this.fyEditBox.string = cfg.defense / 100 + "";
            this.mlEditBox.string = cfg.strategy / 100 + "";
            this.sdEditBox.string = cfg.speed / 100 + "";
            this.gcEditBox.string = cfg.destroy / 100 + "";
            this.wlAddEditBox.string = cfg.force_grow / 100 + "";
            this.fyAddEditBox.string = cfg.defense_grow / 100 + "";
            this.mlAddEditBox.string = cfg.strategy_grow / 100 + "";
            this.sdAddEditBox.string = cfg.speed_grow / 100 + "";
            this.gcAddEditBox.string = cfg.defense_grow / 100 + "";
            this.costEditBox.string = cfg.cost + "";
            this.toggleCampGroup.toggleItems[cfg.camp - 1].isChecked = true;
            console.log("cfg.arms:", cfg);

            if (cfg.arms[0] == 1) {
              this.toggleArmGroup.toggleItems[0].isChecked = true;
            } else if (cfg.arms[0] == 2) {
              this.toggleArmGroup.toggleItems[1].isChecked = true;
            } else {
              this.toggleArmGroup.toggleItems[2].isChecked = true;
            }
          }
        }

        refresh() {
          console.log("refresh"); //刷新

          this._cfgs[this._curIndex].name = this.nameEditBox.string;
          var xj = parseInt(this.xjEditBox.string);

          if (0 < xj && xj <= 5) {
            this._cfgs[this._curIndex].star = xj;
          }

          this._cfgs[this._curIndex].force = parseInt(this.wlEditBox.string) * 100;
          this._cfgs[this._curIndex].strategy = parseInt(this.mlEditBox.string) * 100;
          this._cfgs[this._curIndex].defense = parseInt(this.fyEditBox.string) * 100;
          this._cfgs[this._curIndex].speed = parseInt(this.sdEditBox.string) * 100;
          this._cfgs[this._curIndex].destroy = parseInt(this.gcEditBox.string) * 100;
          this._cfgs[this._curIndex].force_grow = Number(this.wlAddEditBox.string) * 100;
          this._cfgs[this._curIndex].strategy_grow = Number(this.mlAddEditBox.string) * 100;
          this._cfgs[this._curIndex].defense_grow = Number(this.fyAddEditBox.string) * 100;
          this._cfgs[this._curIndex].speed_grow = Number(this.sdAddEditBox.string) * 100;
          this._cfgs[this._curIndex].destroy_grow = Number(this.gcAddEditBox.string) * 100;
          this._cfgs[this._curIndex].cost = parseInt(this.costEditBox.string);
          var items = this.toggleCampGroup.toggleItems;

          for (var index = 0; index < items.length; index++) {
            var item = items[index];

            if (item.isChecked) {
              this._cfgs[this._curIndex].camp = index + 1;
            }
          }

          var items2 = this.toggleArmGroup.toggleItems;

          for (var _index = 0; _index < items2.length; _index++) {
            var _item = items2[_index];

            if (_item.isChecked) {
              if (_index == 0) {
                this._cfgs[this._curIndex].arms = [1, 4, 7];
              } else if (_index == 1) {
                this._cfgs[this._curIndex].arms = [2, 5, 8];
              } else {
                this._cfgs[this._curIndex].arms = [3, 6, 9];
              }
            }
          }
        }

        onClickMake() {
          if (this._isLoading) {
            return;
          }

          this.refresh();

          if (this.outDirEditBox.string == "") {
            this.tipsLab.string = "请输入生成输出目录";
            return;
          }

          if (!JSB) {
            this.tipsLab.string = "请使用 Windows 模拟器运行";
            return;
          }

          var path = this.outDirEditBox.string;

          if (jsb.fileUtils.isDirectoryExist(path) == false) {
            this.tipsLab.string = "目录不存在";
            return;
          }

          var obj = Object();
          obj.title = "武将配置";
          obj.list = this._cfgs;
          var str = JSON.stringify(obj, null, "\t");
          jsb.fileUtils.writeStringToFile(str, path + "/general.json");
          this.tipsLab.string = "保存成功";
        }

        onClickPre() {
          if (this._isLoading) {
            return;
          }

          this.refresh();
          this._curIndex -= 1;
          this.show(this._curIndex);
        }

        onClickNext() {
          if (this._isLoading) {
            return;
          }

          this.refresh();
          this._curIndex += 1;
          this.show(this._curIndex);
        }

        sortStar(a, b) {
          if (a.star < b.star) {
            return 1;
          } else if (a.star == b.star) {
            return a.cfgId - b.cfgId;
          } else {
            return -1;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "outDirEditBox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tipsLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "generalParentNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "opNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "generalRoster", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "toggleCampGroup", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "toggleArmGroup", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nameEditBox", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "xjEditBox", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "wlEditBox", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "mlEditBox", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "fyEditBox", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "gcEditBox", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "sdEditBox", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "costEditBox", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "wlAddEditBox", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "mlAddEditBox", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "fyAddEditBox", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "gcAddEditBox", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "sdAddEditBox", [_dec21], {
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
//# sourceMappingURL=GeneralTool.js.map