System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, instantiate, TiledMapAsset, JsonAsset, SpriteFrame, sys, GameConfig, LoaderManager, LoadData, LoadDataType, ArmyCommand, GeneralCommand, LoginCommand, MapCommand, MapUICommand, HttpManager, NetEvent, NetManager, NetNodeType, SkillCommand, Toast, Tools, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, Main;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "./config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoaderManager(extras) {
    _reporterNs.report("LoaderManager", "./core/LoaderManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadData(extras) {
    _reporterNs.report("LoadData", "./core/LoaderManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadDataType(extras) {
    _reporterNs.report("LoadDataType", "./core/LoaderManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmyCommand(extras) {
    _reporterNs.report("ArmyCommand", "./general/ArmyCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "./general/GeneralCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginCommand(extras) {
    _reporterNs.report("LoginCommand", "./login/LoginCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "./map/MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./map/ui/MapUICommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpManager(extras) {
    _reporterNs.report("HttpManager", "./network/http/HttpManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetEvent(extras) {
    _reporterNs.report("NetEvent", "./network/socket/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetManager(extras) {
    _reporterNs.report("NetManager", "./network/socket/NetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetNodeType(extras) {
    _reporterNs.report("NetNodeType", "./network/socket/NetNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillCommand(extras) {
    _reporterNs.report("SkillCommand", "./skill/SkillCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToast(extras) {
    _reporterNs.report("Toast", "./utils/Toast", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTools(extras) {
    _reporterNs.report("Tools", "./utils/Tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "./utils/EventMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      TiledMapAsset = _cc.TiledMapAsset;
      JsonAsset = _cc.JsonAsset;
      SpriteFrame = _cc.SpriteFrame;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      GameConfig = _unresolved_2.GameConfig;
    }, function (_unresolved_3) {
      LoaderManager = _unresolved_3.default;
      LoadData = _unresolved_3.LoadData;
      LoadDataType = _unresolved_3.LoadDataType;
    }, function (_unresolved_4) {
      ArmyCommand = _unresolved_4.default;
    }, function (_unresolved_5) {
      GeneralCommand = _unresolved_5.default;
    }, function (_unresolved_6) {
      LoginCommand = _unresolved_6.default;
    }, function (_unresolved_7) {
      MapCommand = _unresolved_7.default;
    }, function (_unresolved_8) {
      MapUICommand = _unresolved_8.default;
    }, function (_unresolved_9) {
      HttpManager = _unresolved_9.HttpManager;
    }, function (_unresolved_10) {
      NetEvent = _unresolved_10.NetEvent;
    }, function (_unresolved_11) {
      NetManager = _unresolved_11.NetManager;
    }, function (_unresolved_12) {
      NetNodeType = _unresolved_12.NetNodeType;
    }, function (_unresolved_13) {
      SkillCommand = _unresolved_13.default;
    }, function (_unresolved_14) {
      Toast = _unresolved_14.default;
    }, function (_unresolved_15) {
      Tools = _unresolved_15.Tools;
    }, function (_unresolved_16) {
      EventMgr = _unresolved_16.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6d4c4EkOJBPJmQrrj1KW8O", "Main", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Main = (_dec = ccclass('Main'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec(_class = (_class2 = (_temp = class Main extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "loginScenePrefab", _descriptor, this);

          _initializerDefineProperty(this, "mapScenePrefab", _descriptor2, this);

          _initializerDefineProperty(this, "mapUIScenePrefab", _descriptor3, this);

          _initializerDefineProperty(this, "loadingPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "waitPrefab", _descriptor5, this);

          _initializerDefineProperty(this, "toastPrefab", _descriptor6, this);

          _defineProperty(this, "toastNode", null);

          _defineProperty(this, "_loginScene", null);

          _defineProperty(this, "_mapScene", null);

          _defineProperty(this, "_mapUIScene", null);

          _defineProperty(this, "_loadingNode", null);

          _defineProperty(this, "_waitNode", null);

          _defineProperty(this, "_retryTimes", 0);
        }

        onLoad() {
          console.log("main load");
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("enter_map", this.onEnterMap, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("enter_login", this.enterLogin, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("show_toast", this.onShowToast, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
            error: Error()
          }), NetEvent) : NetEvent).ServerRequesting, this.showWaitNode, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
            error: Error()
          }), NetEvent) : NetEvent).ServerRequestSucess, this.onServerRequest, this); //初始化连接

          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().connect({
            url: (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).serverUrl,
            type: (_crd && NetNodeType === void 0 ? (_reportPossibleCrUseOfNetNodeType({
              error: Error()
            }), NetNodeType) : NetNodeType).BaseServer
          });
          (_crd && HttpManager === void 0 ? (_reportPossibleCrUseOfHttpManager({
            error: Error()
          }), HttpManager) : HttpManager).getInstance().setWebUrl((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).webUrl); //初始化业务模块

          (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance();
          (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance();
          (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance();
          (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance();
          (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
            error: Error()
          }), ArmyCommand) : ArmyCommand).getInstance();
          this.enterLogin();
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        clearData() {
          (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().clearData();
          (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().clearData();
          (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
            error: Error()
          }), ArmyCommand) : ArmyCommand).getInstance().clearData();
        }

        enterLogin() {
          this.clearAllScene();
          this.clearData();
          this._loginScene = instantiate(this.loginScenePrefab);
          this._loginScene.parent = this.node;
        }

        onEnterMap() {
          var dataList = [];
          dataList.push(new (_crd && LoadData === void 0 ? (_reportPossibleCrUseOfLoadData({
            error: Error()
          }), LoadData) : LoadData)("./world/map", (_crd && LoadDataType === void 0 ? (_reportPossibleCrUseOfLoadDataType({
            error: Error()
          }), LoadDataType) : LoadDataType).FILE, TiledMapAsset));
          dataList.push(new (_crd && LoadData === void 0 ? (_reportPossibleCrUseOfLoadData({
            error: Error()
          }), LoadData) : LoadData)("./config/mapRes_0", (_crd && LoadDataType === void 0 ? (_reportPossibleCrUseOfLoadDataType({
            error: Error()
          }), LoadDataType) : LoadDataType).FILE, JsonAsset));
          dataList.push(new (_crd && LoadData === void 0 ? (_reportPossibleCrUseOfLoadData({
            error: Error()
          }), LoadData) : LoadData)("./config/json/facility/", (_crd && LoadDataType === void 0 ? (_reportPossibleCrUseOfLoadDataType({
            error: Error()
          }), LoadDataType) : LoadDataType).DIR, JsonAsset));
          dataList.push(new (_crd && LoadData === void 0 ? (_reportPossibleCrUseOfLoadData({
            error: Error()
          }), LoadData) : LoadData)("./config/json/general/", (_crd && LoadDataType === void 0 ? (_reportPossibleCrUseOfLoadDataType({
            error: Error()
          }), LoadDataType) : LoadDataType).DIR, JsonAsset));

          if (sys.isBrowser) {
            dataList.push(new (_crd && LoadData === void 0 ? (_reportPossibleCrUseOfLoadData({
              error: Error()
            }), LoadData) : LoadData)("./generalpic1", (_crd && LoadDataType === void 0 ? (_reportPossibleCrUseOfLoadDataType({
              error: Error()
            }), LoadDataType) : LoadDataType).DIR, SpriteFrame));
          } else {
            dataList.push(new (_crd && LoadData === void 0 ? (_reportPossibleCrUseOfLoadData({
              error: Error()
            }), LoadData) : LoadData)("./generalpic", (_crd && LoadDataType === void 0 ? (_reportPossibleCrUseOfLoadDataType({
              error: Error()
            }), LoadDataType) : LoadDataType).DIR, SpriteFrame));
          }

          dataList.push(new (_crd && LoadData === void 0 ? (_reportPossibleCrUseOfLoadData({
            error: Error()
          }), LoadData) : LoadData)("./config/basic", (_crd && LoadDataType === void 0 ? (_reportPossibleCrUseOfLoadDataType({
            error: Error()
          }), LoadDataType) : LoadDataType).FILE, JsonAsset));
          dataList.push(new (_crd && LoadData === void 0 ? (_reportPossibleCrUseOfLoadData({
            error: Error()
          }), LoadData) : LoadData)("./config/json/skill/", (_crd && LoadDataType === void 0 ? (_reportPossibleCrUseOfLoadDataType({
            error: Error()
          }), LoadDataType) : LoadDataType).DIR, JsonAsset));
          this.addLoadingNode();
          console.log("onEnterMap");
          (_crd && LoaderManager === void 0 ? (_reportPossibleCrUseOfLoaderManager({
            error: Error()
          }), LoaderManager) : LoaderManager).getInstance().startLoadList(dataList, null, (error, paths, datas) => {
            if (error != null) {
              console.log("加载配置文件失败");
              return;
            }

            console.log("loadComplete", paths, datas);
            (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().proxy.tiledMapAsset = datas[0];
            (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().proxy.initMapResConfig(datas[1].json);
            (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
              error: Error()
            }), MapUICommand) : MapUICommand).getInstance().proxy.setAllFacilityCfg(datas[2]);
            (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().proxy.initGeneralConfig(datas[3], datas[5].json);
            (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().proxy.initGeneralTex(datas[4]);
            (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
              error: Error()
            }), MapUICommand) : MapUICommand).getInstance().proxy.setBasic(datas[5]);
            (_crd && SkillCommand === void 0 ? (_reportPossibleCrUseOfSkillCommand({
              error: Error()
            }), SkillCommand) : SkillCommand).getInstance().proxy.initSkillConfig(datas[6]);
            var d = datas[5].json;
            (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().proxy.setWarFree(d["build"].war_free);
            var cityId = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
              error: Error()
            }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity().cityId;
            (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
              error: Error()
            }), GeneralCommand) : GeneralCommand).getInstance().qryMyGenerals();
            (_crd && ArmyCommand === void 0 ? (_reportPossibleCrUseOfArmyCommand({
              error: Error()
            }), ArmyCommand) : ArmyCommand).getInstance().qryArmyList(cityId);
            (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
              error: Error()
            }), MapUICommand) : MapUICommand).getInstance().qryWarReport();
            (_crd && SkillCommand === void 0 ? (_reportPossibleCrUseOfSkillCommand({
              error: Error()
            }), SkillCommand) : SkillCommand).getInstance().qrySkillList();
            this.clearAllScene();
            this._mapScene = instantiate(this.mapScenePrefab);
            this._mapScene.parent = this.node;
            this._mapUIScene = instantiate(this.mapUIScenePrefab);
            this._mapUIScene.parent = this.node;
          }, this);
        }

        addLoadingNode() {
          if (this.loadingPrefab) {
            if (this._loadingNode == null) {
              this._loadingNode = instantiate(this.loadingPrefab);
            }

            this._loadingNode.setSiblingIndex(1);

            this._loadingNode.parent = this.node;
          }
        }

        showWaitNode(isShow) {
          if (this._waitNode == null) {
            this._waitNode = instantiate(this.waitPrefab);
            this._waitNode.parent = this.node;

            this._waitNode.setSiblingIndex(2);
          }

          this._waitNode.active = isShow;
        }

        showTopToast(text) {
          if (text === void 0) {
            text = "";
          }

          if (this.toastNode == null) {
            var toast = instantiate(this.toastPrefab);
            toast.parent = this.node;
            toast.setSiblingIndex(10);
            this.toastNode = toast;
          }

          this.toastNode.active = true;
          this.toastNode.getComponent(_crd && Toast === void 0 ? (_reportPossibleCrUseOfToast({
            error: Error()
          }), Toast) : Toast).setText(text);
        }

        onServerRequest(msg) {
          if (msg.code == undefined || msg.code == 0 || msg.code == 9) {
            this._retryTimes = 0;
            return;
          }

          if (msg.code == -1 || msg.code == -2 || msg.code == -3 || msg.code == -4) {
            if (this._retryTimes < 3) {
              (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
                error: Error()
              }), LoginCommand) : LoginCommand).getInstance().role_enterServer((_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
                error: Error()
              }), LoginCommand) : LoginCommand).getInstance().proxy.getSession(), false);
              this._retryTimes += 1;
              return;
            }
          }

          this.showTopToast((_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
            error: Error()
          }), Tools) : Tools).getCodeStr(msg.code));
        }

        onShowToast(msg) {
          this.showTopToast(msg);
        }

        clearAllScene() {
          if (this._mapScene) {
            this._mapScene.destroy();

            this._mapScene = null;
          }

          if (this._mapUIScene) {
            this._mapUIScene.destroy();

            this._mapUIScene = null;
          }

          if (this._loginScene) {
            this._loginScene.destroy();

            this._loginScene = null;
          }

          if (this._waitNode) {
            this._waitNode.destroy();

            this._waitNode = null;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loginScenePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mapScenePrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mapUIScenePrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadingPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "waitPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "toastPrefab", [_dec7], {
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
//# sourceMappingURL=Main.js.map