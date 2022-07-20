System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, LoginCommand, DateUtil, MapUICommand, EventMgr, GeneralItemLogic, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, WarReportItemLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLoginCommand(extras) {
    _reporterNs.report("LoginCommand", "../../login/LoginCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "../../login/LoginProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./MapUICommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWarReport(extras) {
    _reporterNs.report("WarReport", "./MapUIProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../utils/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralItemLogic(extras) {
    _reporterNs.report("GeneralItemLogic", "./GeneralItemLogic", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      LoginCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      DateUtil = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapUICommand = _unresolved_4.default;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      GeneralItemLogic = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f022SYqZZAF603h5CqxDJz", "WarReportItemLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", WarReportItemLogic = (_dec = ccclass('WarReportItemLogic'), _dec2 = property(Node), _dec3 = property([Node]), _dec4 = property([Node]), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec(_class = (_class2 = (_temp = class WarReportItemLogic extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_curData", null);

          _initializerDefineProperty(this, "readBg", _descriptor, this);

          _initializerDefineProperty(this, "ackNode", _descriptor2, this);

          _initializerDefineProperty(this, "defNode", _descriptor3, this);

          _initializerDefineProperty(this, "winNode", _descriptor4, this);

          _initializerDefineProperty(this, "loseNode", _descriptor5, this);

          _initializerDefineProperty(this, "timeLabel", _descriptor6, this);

          _initializerDefineProperty(this, "leftLabel", _descriptor7, this);

          _initializerDefineProperty(this, "rightLabel", _descriptor8, this);
        }

        onLoad() {
          this.winNode.active = this.loseNode.active = false;
        }

        updateItem(data) {
          this._curData = data;
          var isRead = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.isRead(this._curData.id);
          this.readBg.active = isRead;
          this.setTeams(this.ackNode, this._curData.beg_attack_general);
          this.setTeams(this.defNode, this._curData.beg_defense_general);
          var roleData = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().proxy.getRoleData();
          this.isMeWin(this._curData.attack_rid);
          this.leftLabel.string = roleData.rid == this._curData.attack_rid ? "我" : "敌";
          this.rightLabel.string = roleData.rid == this._curData.defense_rid ? "我" : "敌";
          this.timeLabel.string = (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
            error: Error()
          }), DateUtil) : DateUtil).converTimeStr(this._curData.ctime);
        }

        isMeWin(rid = 0) {
          var roleData = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().proxy.getRoleData();
          this.winNode.active = this.loseNode.active = false;

          if (roleData.rid == rid) {
            if (this._curData.result == 0) {
              this.loseNode.active = true;
            } else if (this._curData.result == 1) {} else {
              this.winNode.active = true;
            }
          } else {
            if (this._curData.result == 0) {
              this.winNode.active = true;
            } else if (this._curData.result == 1) {} else {
              this.loseNode.active = true;
            }
          }
        }

        setTeams(node, generals) {
          for (var i = 0; i < node.length; i++) {
            let item = node[i];
            let com = item.getComponent(_crd && GeneralItemLogic === void 0 ? (_reportPossibleCrUseOfGeneralItemLogic({
              error: Error()
            }), GeneralItemLogic) : GeneralItemLogic);
            var general = generals[i];

            if (general) {
              item.active = true;

              if (com) {
                com.setWarReportData(general);
              }
            } else {
              item.active = false;
            }
          }
        }

        onClickItem() {
          var isRead = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
            error: Error()
          }), MapUICommand) : MapUICommand).getInstance().proxy.isRead(this._curData.id);

          if (!isRead) {
            (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
              error: Error()
            }), MapUICommand) : MapUICommand).getInstance().warRead(this._curData.id);
          }

          console.log("click_war_report:", this._curData);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("click_war_report", this._curData);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "readBg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ackNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "defNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "winNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "loseNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "timeLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "leftLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rightLabel", [_dec9], {
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
//# sourceMappingURL=WarReportItemLogic.js.map