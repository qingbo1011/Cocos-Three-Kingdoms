System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EditBox, Toggle, ServerConfig, LoginCommand, EventMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, CreateLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfServerConfig(extras) {
    _reporterNs.report("ServerConfig", "../config/ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginCommand(extras) {
    _reporterNs.report("LoginCommand", "./LoginCommand", _context.meta, extras);
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
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ServerConfig = _unresolved_2.ServerConfig;
    }, function (_unresolved_3) {
      LoginCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "acbebNnj5dCba6wGoJDemL4", "CreateLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CreateLogic = (_dec = ccclass('CreateLogic'), _dec2 = property(EditBox), _dec3 = property(Toggle), _dec4 = property(Toggle), _dec(_class = (_class2 = (_temp = class CreateLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "editName", _descriptor, this);

          _initializerDefineProperty(this, "manToggle", _descriptor2, this);

          _initializerDefineProperty(this, "girlToggle", _descriptor3, this);
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).role_create, this.create, this);
          this.editName.string = this.getRandomName();
        }

        onCreate() {
          var sex = this.manToggle.isChecked ? 0 : 1;
          var loginData = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().proxy.getLoginData();
          (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().role_create(loginData.uid, this.editName.string, sex, (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().proxy.serverId, 0);
        }

        create(data) {
          console.log("create:", data);

          if (data.code == 0) {
            this.node.active = false;
          }
        }

        onRandomName() {
          this.editName.string = this.getRandomName();
        }
        /*
        *@param Number NameLength 要获取的名字长度
        */


        getRandomName() {
          var name = "";
          var firstname = ["李", "西门", "沈", "张", "上官", "司徒", "欧阳", "轩辕"];
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

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "editName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "manToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "girlToggle", [_dec4], {
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
//# sourceMappingURL=CreateLogic.js.map