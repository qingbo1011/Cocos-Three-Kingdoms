System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ServerConfig, NetManager, SkillProxy, EventMgr, SkillCommand, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfServerConfig(extras) {
    _reporterNs.report("ServerConfig", "../config/ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetManager(extras) {
    _reporterNs.report("NetManager", "../network/socket/NetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillProxy(extras) {
    _reporterNs.report("SkillProxy", "./SkillProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../utils/EventMgr", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ServerConfig = _unresolved_2.ServerConfig;
    }, function (_unresolved_3) {
      NetManager = _unresolved_3.NetManager;
    }, function (_unresolved_4) {
      SkillProxy = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb7c0zQA85DjYdXqJtra9in", "SkillCommand", undefined);

      _export("default", SkillCommand = class SkillCommand {
        // //单例
        static getInstance() {
          if (this._instance == null) {
            this._instance = new SkillCommand();
          }

          return this._instance;
        }

        static destory() {
          if (this._instance) {
            this._instance.onDestory();

            this._instance = null;
            return true;
          }

          return false;
        }

        constructor() {
          _defineProperty(this, "_proxy", new (_crd && SkillProxy === void 0 ? (_reportPossibleCrUseOfSkillProxy({
            error: Error()
          }), SkillProxy) : SkillProxy)());

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).skill_list, this.onSkillList, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).skill_push, this.onSkillPush, this);
        }

        onDestory() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        }

        get proxy() {
          return this._proxy;
        }

        qrySkillList() {
          var sendData = {
            name: (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
              error: Error()
            }), ServerConfig) : ServerConfig).skill_list,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(sendData);
        }

        onSkillList(data) {
          console.log("onSkillList", data);

          if (data.code == 0) {
            this._proxy.updateSkills(data.msg.list);

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("skill_list_info");
          }
        }

        onSkillPush(data) {
          console.log("onSkillPush", data);

          this._proxy.updateSkills([data.msg]);

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("update_general");
        }

      });

      _defineProperty(SkillCommand, "_instance", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SkillCommand.js.map