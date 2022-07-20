System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, Node, Layout, Label, instantiate, LoginCommand, ArmySelectNodeLogic, CityArmySettingLogic, FacilityListLogic, MapUICommand, Dialog, UnionCommand, MapCommand, FortressAbout, CityAboutLogic, GeneralListLogic, TransformLogic, Tools, GeneralInfoLogic, WarReportLogic, DrawRLogic, SkillLogic, SkillInfoLogic, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _temp, _crd, ccclass, property, MapUILogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLoginCommand(extras) {
    _reporterNs.report("LoginCommand", "../../login/LoginCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArmySelectNodeLogic(extras) {
    _reporterNs.report("ArmySelectNodeLogic", "./ArmySelectNodeLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCityArmySettingLogic(extras) {
    _reporterNs.report("CityArmySettingLogic", "./CityArmySettingLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFacilityListLogic(extras) {
    _reporterNs.report("FacilityListLogic", "./FacilityListLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./MapUICommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialog(extras) {
    _reporterNs.report("Dialog", "./Dialog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnionCommand(extras) {
    _reporterNs.report("UnionCommand", "../../union/UnionCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFortressAbout(extras) {
    _reporterNs.report("FortressAbout", "./FortressAbout", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCityAboutLogic(extras) {
    _reporterNs.report("CityAboutLogic", "./CityAboutLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralListLogic(extras) {
    _reporterNs.report("GeneralListLogic", "./GeneralListLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTransformLogic(extras) {
    _reporterNs.report("TransformLogic", "./TransformLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTools(extras) {
    _reporterNs.report("Tools", "../../utils/Tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralInfoLogic(extras) {
    _reporterNs.report("GeneralInfoLogic", "./GeneralInfoLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWarReportLogic(extras) {
    _reporterNs.report("WarReportLogic", "./WarReportLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDrawRLogic(extras) {
    _reporterNs.report("DrawRLogic", "./DrawRLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralData(extras) {
    _reporterNs.report("GeneralData", "../../general/GeneralProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillLogic(extras) {
    _reporterNs.report("SkillLogic", "./SkillLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillConf(extras) {
    _reporterNs.report("SkillConf", "../../config/skill/Skill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillInfoLogic(extras) {
    _reporterNs.report("SkillInfoLogic", "./SkillInfoLogic", _context.meta, extras);
  }

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
      Node = _cc.Node;
      Layout = _cc.Layout;
      Label = _cc.Label;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      LoginCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      ArmySelectNodeLogic = _unresolved_3.default;
    }, function (_unresolved_4) {
      CityArmySettingLogic = _unresolved_4.default;
    }, function (_unresolved_5) {
      FacilityListLogic = _unresolved_5.default;
    }, function (_unresolved_6) {
      MapUICommand = _unresolved_6.default;
    }, function (_unresolved_7) {
      Dialog = _unresolved_7.default;
    }, function (_unresolved_8) {
      UnionCommand = _unresolved_8.default;
    }, function (_unresolved_9) {
      MapCommand = _unresolved_9.default;
    }, function (_unresolved_10) {
      FortressAbout = _unresolved_10.default;
    }, function (_unresolved_11) {
      CityAboutLogic = _unresolved_11.default;
    }, function (_unresolved_12) {
      GeneralListLogic = _unresolved_12.default;
    }, function (_unresolved_13) {
      TransformLogic = _unresolved_13.default;
    }, function (_unresolved_14) {
      Tools = _unresolved_14.Tools;
    }, function (_unresolved_15) {
      GeneralInfoLogic = _unresolved_15.default;
    }, function (_unresolved_16) {
      WarReportLogic = _unresolved_16.default;
    }, function (_unresolved_17) {
      DrawRLogic = _unresolved_17.default;
    }, function (_unresolved_18) {
      SkillLogic = _unresolved_18.default;
    }, function (_unresolved_19) {
      SkillInfoLogic = _unresolved_19.default;
    }, function (_unresolved_20) {
      EventMgr = _unresolved_20.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "db03dDBJ39EiL9LfLKyZ+VK", "MapUILogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MapUILogic = (_dec = ccclass('MapUILogic'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec12 = property(Prefab), _dec13 = property(Prefab), _dec14 = property(Prefab), _dec15 = property(Prefab), _dec16 = property(Prefab), _dec17 = property(Prefab), _dec18 = property(Prefab), _dec19 = property(Prefab), _dec20 = property(Prefab), _dec21 = property(Prefab), _dec22 = property(Node), _dec23 = property(Layout), _dec24 = property(Label), _dec25 = property(Label), _dec(_class = (_class2 = (_temp = class MapUILogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _initializerDefineProperty(this, "facilityPrefab", _descriptor2, this);

          _defineProperty(this, "_facilityNode", null);

          _initializerDefineProperty(this, "armySettingPrefab", _descriptor3, this);

          _defineProperty(this, "_armySettingNode", null);

          _initializerDefineProperty(this, "dialog", _descriptor4, this);

          _defineProperty(this, "_dialogNode", null);

          _initializerDefineProperty(this, "generalPrefab", _descriptor5, this);

          _defineProperty(this, "_generalNode", null);

          _initializerDefineProperty(this, "generalDesPrefab", _descriptor6, this);

          _defineProperty(this, "_generalDesNode", null);

          _initializerDefineProperty(this, "cityAboutPrefab", _descriptor7, this);

          _defineProperty(this, "_cityAboutNode", null);

          _initializerDefineProperty(this, "fortressAboutPrefab", _descriptor8, this);

          _defineProperty(this, "_fortressAboutNode", null);

          _initializerDefineProperty(this, "warReportPrefab", _descriptor9, this);

          _defineProperty(this, "_warReportNode", null);

          _initializerDefineProperty(this, "armySelectPrefab", _descriptor10, this);

          _defineProperty(this, "_armySelectNode", null);

          _initializerDefineProperty(this, "drawPrefab", _descriptor11, this);

          _defineProperty(this, "_drawNode", null);

          _initializerDefineProperty(this, "drawResultrefab", _descriptor12, this);

          _defineProperty(this, "_drawResultNode", null);

          _initializerDefineProperty(this, "unionPrefab", _descriptor13, this);

          _defineProperty(this, "_unionNode", null);

          _initializerDefineProperty(this, "chatPrefab", _descriptor14, this);

          _defineProperty(this, "_chatNode", null);

          _initializerDefineProperty(this, "collectPrefab", _descriptor15, this);

          _defineProperty(this, "_collectNode", null);

          _initializerDefineProperty(this, "transFormPrefab", _descriptor16, this);

          _defineProperty(this, "_transFormNode", null);

          _initializerDefineProperty(this, "generalConvertPrefab", _descriptor17, this);

          _defineProperty(this, "_generalConvertNode", null);

          _initializerDefineProperty(this, "generalRosterPrefab", _descriptor18, this);

          _defineProperty(this, "_generalRosterNode", null);

          _initializerDefineProperty(this, "skillPrefab", _descriptor19, this);

          _defineProperty(this, "_skillNode", null);

          _initializerDefineProperty(this, "skillInfoPrefab", _descriptor20, this);

          _defineProperty(this, "_skillInfoNode", null);

          _initializerDefineProperty(this, "widgetNode", _descriptor21, this);

          _initializerDefineProperty(this, "srollLayout", _descriptor22, this);

          _initializerDefineProperty(this, "nameLabel", _descriptor23, this);

          _initializerDefineProperty(this, "ridLabel", _descriptor24, this);

          _defineProperty(this, "_resArray", []);

          _defineProperty(this, "_yieldArray", []);
        }

        onLoad() {
          this._resArray.push({
            key: "grain",
            name: "谷:"
          });

          this._resArray.push({
            key: "wood",
            name: "木:"
          });

          this._resArray.push({
            key: "iron",
            name: "铁:"
          });

          this._resArray.push({
            key: "stone",
            name: "石:"
          });

          this._resArray.push({
            key: "gold",
            name: "钱:"
          });

          this._yieldArray.push({
            key: "wood_yield",
            name: "木+"
          });

          this._yieldArray.push({
            key: "iron_yield",
            name: "铁+"
          });

          this._yieldArray.push({
            key: "stone_yield",
            name: "石+"
          });

          this._yieldArray.push({
            key: "grain_yield",
            name: "谷+"
          });

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_city_about", this.openCityAbout, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("close_city_about", this.closeCityAbout, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_fortress_about", this.openFortressAbout, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_facility", this.openFacility, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_army_setting", this.openArmySetting, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("upate_my_roleRes", this.updateRoleRes, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_general_des", this.openGeneralDes, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_general_choose", this.openGeneralChoose, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_army_select_ui", this.onOpenArmySelectUI, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_draw_result", this.openDrawR, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("robLoginUI", this.robLoginUI, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("interior_collect", this.onCollection, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_general_convert", this.onOpenGeneralConvert, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_general_roster", this.onOpenGeneralRoster, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_general", this.openGeneral, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_skill", this.onOpenSkill, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("close_skill", this.onCloseSkill, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on("open_skillInfo", this.onOpenSkillInfo, this);
          this.updateRoleRes();
          this.updateRole();
          var unionId = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy.myUnionId;

          if (unionId > 0) {
            (_crd && UnionCommand === void 0 ? (_reportPossibleCrUseOfUnionCommand({
              error: Error()
            }), UnionCommand) : UnionCommand).getInstance().unionApplyList(unionId);
          }
        }

        robLoginUI() {
          this.showTip("账号在其他地方登录", function () {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("enter_login");
          });
        }

        showTip(text, close) {
          if (this._dialogNode == null) {
            this._dialogNode = instantiate(this.dialog);
            this._dialogNode.parent = this.contentNode;
          } else {
            this._dialogNode.active = true;
          }

          this._dialogNode.setSiblingIndex(this.topLayer());

          this._dialogNode.getComponent(_crd && Dialog === void 0 ? (_reportPossibleCrUseOfDialog({
            error: Error()
          }), Dialog) : Dialog).text(text);

          this._dialogNode.getComponent(_crd && Dialog === void 0 ? (_reportPossibleCrUseOfDialog({
            error: Error()
          }), Dialog) : Dialog).setClose(close);
        }

        onDestroy() {
          this.clearAllNode();
          (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.clearData();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
          console.log("MapUILogic onDestroy");
        }

        onBack() {
          (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().account_logout();
        }

        clearAllNode() {
          this._facilityNode = null;
          this._generalNode = null;
          this._cityAboutNode = null;
          this._fortressAboutNode = null;
          this._armySelectNode = null;
          this._armySettingNode = null;
          this._drawNode = null;
          this._drawResultNode = null;
          this._generalDesNode = null;
          this._dialogNode = null;
        }

        topLayer() {
          return this.contentNode.children.length + 1;
        }
        /**
         * 设施
         */


        openFacility(data) {
          if (this._facilityNode == null) {
            this._facilityNode = instantiate(this.facilityPrefab);
            this._facilityNode.parent = this.contentNode;
          } else {
            this._facilityNode.active = true;
          }

          this._facilityNode.setSiblingIndex(this.topLayer());

          this._facilityNode.getComponent(_crd && FacilityListLogic === void 0 ? (_reportPossibleCrUseOfFacilityListLogic({
            error: Error()
          }), FacilityListLogic) : FacilityListLogic).setData(data);
        }

        openArmySetting(cityId, order) {
          if (this._armySettingNode == null) {
            this._armySettingNode = instantiate(this.armySettingPrefab);
            this._armySettingNode.parent = this.contentNode;
          } else {
            this._armySettingNode.active = true;
          }

          this._armySettingNode.setSiblingIndex(this.topLayer());

          this._armySettingNode.getComponent(_crd && CityArmySettingLogic === void 0 ? (_reportPossibleCrUseOfCityArmySettingLogic({
            error: Error()
          }), CityArmySettingLogic) : CityArmySettingLogic).setData(cityId, order);
        }
        /**
         * 武将
         */


        openGeneral(data, type, position, zIndex) {
          if (type === void 0) {
            type = 0;
          }

          if (position === void 0) {
            position = 0;
          }

          if (zIndex === void 0) {
            zIndex = 0;
          }

          if (this._generalNode == null) {
            this._generalNode = instantiate(this.generalPrefab);
            this._generalNode.parent = this.contentNode;
          } else {
            this._generalNode.active = true;
          }

          this._generalNode.setSiblingIndex(this.topLayer());

          this._generalNode.getComponent(_crd && GeneralListLogic === void 0 ? (_reportPossibleCrUseOfGeneralListLogic({
            error: Error()
          }), GeneralListLogic) : GeneralListLogic).setData(data, type, position);
        }
        /**
         * 武将选择
         * @param data 
         * @param zIndex 
         */


        openGeneralChoose(data, position) {
          if (position === void 0) {
            position = 0;
          }

          this.openGeneral(data, 1, position, 1);
        }
        /**打开军队选择界面*/


        onOpenArmySelectUI(cmd, x, y) {
          if (this._armySelectNode == null) {
            this._armySelectNode = instantiate(this.armySelectPrefab);
            this._armySelectNode.parent = this.node;
          } else {
            this._armySelectNode.active = true;
          }

          this._armySelectNode.setSiblingIndex(this.topLayer());

          this._armySelectNode.getComponent(_crd && ArmySelectNodeLogic === void 0 ? (_reportPossibleCrUseOfArmySelectNodeLogic({
            error: Error()
          }), ArmySelectNodeLogic) : ArmySelectNodeLogic).setData(cmd, x, y);
        }
        /**
         * 武将详情
         */


        openGeneralDes(cfgData, curData) {
          if (this._generalDesNode == null) {
            this._generalDesNode = instantiate(this.generalDesPrefab);
            this._generalDesNode.parent = this.contentNode;
          } else {
            this._generalDesNode.active = true;
          }

          this._generalDesNode.setSiblingIndex(this.topLayer());

          this._generalDesNode.getComponent(_crd && GeneralInfoLogic === void 0 ? (_reportPossibleCrUseOfGeneralInfoLogic({
            error: Error()
          }), GeneralInfoLogic) : GeneralInfoLogic).setData(cfgData, curData);
        }
        /**
         * 城市
         */


        openCityAbout(data) {
          if (this._cityAboutNode == null) {
            this._cityAboutNode = instantiate(this.cityAboutPrefab);
            this._cityAboutNode.parent = this.contentNode;
          } else {
            this._cityAboutNode.active = true;
          }

          this._cityAboutNode.setSiblingIndex(this.topLayer());

          this.widgetNode.active = false;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("scroll_to_map", data.x, data.y);

          this._cityAboutNode.getComponent(_crd && CityAboutLogic === void 0 ? (_reportPossibleCrUseOfCityAboutLogic({
            error: Error()
          }), CityAboutLogic) : CityAboutLogic).setData(data);
        }

        closeCityAbout() {
          this.widgetNode.active = true;
        }

        openFortressAbout(data) {
          if (this._fortressAboutNode == null) {
            this._fortressAboutNode = instantiate(this.fortressAboutPrefab);
            this._fortressAboutNode.parent = this.contentNode;
          } else {
            this._fortressAboutNode.active = true;
          }

          this._fortressAboutNode.setSiblingIndex(this.topLayer());

          this._fortressAboutNode.getComponent(_crd && FortressAbout === void 0 ? (_reportPossibleCrUseOfFortressAbout({
            error: Error()
          }), FortressAbout) : FortressAbout).setData(data);
        }
        /**
         * 战报
         */


        openWarReport() {
          if (this._warReportNode == null) {
            this._warReportNode = instantiate(this.warReportPrefab);
            this._warReportNode.parent = this.contentNode;
          } else {
            this._warReportNode.active = true;
          }

          this._warReportNode.setSiblingIndex(this.topLayer());

          this._warReportNode.getComponent(_crd && WarReportLogic === void 0 ? (_reportPossibleCrUseOfWarReportLogic({
            error: Error()
          }), WarReportLogic) : WarReportLogic).updateView();
        }
        /**
         * 角色信息
         */


        updateRoleRes() {
          var children = this.srollLayout.node.children;
          var roleRes = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().proxy.getRoleResData();
          var i = 0;
          children[i].getChildByName("New Label").getComponent(Label).string = "令牌:" + (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
            error: Error()
          }), Tools) : Tools).numberToShow(roleRes["decree"]);
          i += 1;

          for (var index = 0; index < this._resArray.length; index++) {
            var obj = this._resArray[index];
            var label = children[i].getChildByName("New Label").getComponent(Label);

            if (obj.key == "gold") {
              label.string = obj.name + (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
                error: Error()
              }), Tools) : Tools).numberToShow(roleRes[obj.key]);
            } else {
              label.string = obj.name + (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
                error: Error()
              }), Tools) : Tools).numberToShow(roleRes[obj.key]) + "/" + (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
                error: Error()
              }), Tools) : Tools).numberToShow(roleRes["depot_capacity"]);
            }

            i += 1;
          }

          for (var _index = 0; _index < this._yieldArray.length; _index++) {
            var _obj = this._yieldArray[_index];
            var label = children[i].getChildByName("New Label").getComponent(Label);
            label.string = _obj.name + (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
              error: Error()
            }), Tools) : Tools).numberToShow(roleRes[_obj.key]);
            i += 1;
          }
        }
        /**
         * 抽卡
         */


        openDraw() {
          if (this._drawNode == null) {
            this._drawNode = instantiate(this.drawPrefab);
            this._drawNode.parent = this.contentNode;
          } else {
            this._drawNode.active = true;
          }

          this._drawNode.setSiblingIndex(this.topLayer());
        }
        /**
         * 抽卡结果
         * @param data 
         */


        openDrawR(data) {
          if (this._drawResultNode == null) {
            this._drawResultNode = instantiate(this.drawResultrefab);
            this._drawResultNode.parent = this.contentNode;
          } else {
            this._drawResultNode.active = true;
          }

          this._drawResultNode.setSiblingIndex(this.topLayer());

          this._drawResultNode.getComponent(_crd && DrawRLogic === void 0 ? (_reportPossibleCrUseOfDrawRLogic({
            error: Error()
          }), DrawRLogic) : DrawRLogic).setData(data);

          console.log("openDrawR:", this.contentNode);
        }

        openUnion() {
          if (this._unionNode == null) {
            this._unionNode = instantiate(this.unionPrefab);
            this._unionNode.parent = this.contentNode;
          } else {
            this._unionNode.active = true;
          }

          this._unionNode.setSiblingIndex(this.topLayer());
        }

        openChat() {
          if (this._chatNode == null) {
            this._chatNode = instantiate(this.chatPrefab);
            this._chatNode.parent = this.contentNode;
          } else {
            this._chatNode.active = true;
          }

          this._chatNode.setSiblingIndex(this.topLayer());
        }

        openTr() {
          if (this._transFormNode == null) {
            this._transFormNode = instantiate(this.transFormPrefab);
            this._transFormNode.parent = this.contentNode;
          } else {
            this._transFormNode.active = true;
          }

          this._transFormNode.setSiblingIndex(this.topLayer());

          this._transFormNode.getComponent(_crd && TransformLogic === void 0 ? (_reportPossibleCrUseOfTransformLogic({
            error: Error()
          }), TransformLogic) : TransformLogic).initView();
        }

        onOpenGeneralConvert() {
          console.log("onOpenGeneralConvert");

          if (this._generalConvertNode == null) {
            this._generalConvertNode = instantiate(this.generalConvertPrefab);
            this._generalConvertNode.parent = this.contentNode;
          } else {
            this._generalConvertNode.active = true;
          }

          this._generalConvertNode.setSiblingIndex(this.topLayer());
        }

        onOpenGeneralRoster() {
          console.log("onOpenGeneralRoster");

          if (this._generalRosterNode == null) {
            this._generalRosterNode = instantiate(this.generalRosterPrefab);
            this._generalRosterNode.parent = this.contentNode;
          } else {
            this._generalRosterNode.active = true;
          }

          this._generalRosterNode.setSiblingIndex(this.topLayer());
        }

        onClickSkillBtn() {
          this.onOpenSkill(0);
        }

        onOpenSkill(type, general, skillPos) {
          if (type === void 0) {
            type = 0;
          }

          if (general === void 0) {
            general = null;
          }

          if (skillPos === void 0) {
            skillPos = -1;
          }

          console.log("onOpenSkill", type, general, skillPos);

          if (this._skillNode == null) {
            this._skillNode = instantiate(this.skillPrefab);
            this._skillNode.parent = this.contentNode;
          } else {
            this._skillNode.active = true;
          }

          this._skillNode.setSiblingIndex(this.topLayer());

          this._skillNode.getComponent(_crd && SkillLogic === void 0 ? (_reportPossibleCrUseOfSkillLogic({
            error: Error()
          }), SkillLogic) : SkillLogic).setData(type, general, skillPos);
        }

        onCloseSkill() {
          if (this._skillNode) {
            this._skillNode.active = false;
          }
        }

        onOpenSkillInfo(cfg, type, general, skillPos) {
          if (type === void 0) {
            type = 0;
          }

          if (general === void 0) {
            general = null;
          }

          if (skillPos === void 0) {
            skillPos = -1;
          }

          console.log("onOpenSkillInfo", cfg, type, general, skillPos);

          if (this._skillInfoNode == null) {
            this._skillInfoNode = instantiate(this.skillInfoPrefab);
            this._skillInfoNode.parent = this.contentNode;
          } else {
            this._skillInfoNode.active = true;
          }

          this._skillInfoNode.setSiblingIndex(this.topLayer());

          this._skillInfoNode.getComponent(_crd && SkillInfoLogic === void 0 ? (_reportPossibleCrUseOfSkillInfoLogic({
            error: Error()
          }), SkillInfoLogic) : SkillInfoLogic).setData(cfg, type, general, skillPos);
        } //征收


        onCollection(msg) {
          this.showTip("成功征收到 " + msg.gold + " 金币", null);
        }

        updateRole() {
          var roleData = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().proxy.getRoleData();
          this.nameLabel.string = "昵称: " + roleData.nickName;
          this.ridLabel.string = "角色ID: " + roleData.rid + "";
        }

        onClickCollection() {
          if (this._collectNode == null) {
            this._collectNode = instantiate(this.collectPrefab);
            this._collectNode.parent = this.contentNode;
          }

          this._collectNode.active = true;

          this._collectNode.setSiblingIndex(this.topLayer());
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "facilityPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "armySettingPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "dialog", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "generalPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "generalDesPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "cityAboutPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "fortressAboutPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "warReportPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "armySelectPrefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "drawPrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "drawResultrefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "unionPrefab", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "chatPrefab", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "collectPrefab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "transFormPrefab", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "generalConvertPrefab", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "generalRosterPrefab", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "skillPrefab", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "skillInfoPrefab", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "widgetNode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "srollLayout", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "ridLabel", [_dec25], {
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
//# sourceMappingURL=MapUILogic.js.map