System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, SpriteFrame, resources, GeneralCommand, _dec, _class, _crd, ccclass, GeneralHeadLogic;

  function _reportPossibleCrUseOfGeneralCommand(extras) {
    _reporterNs.report("GeneralCommand", "../../general/GeneralCommand", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      GeneralCommand = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e558bByICxFd5ynB+Xun+9b", "GeneralHeadLogic", undefined);

      ({
        ccclass
      } = _decorator);

      _export("default", GeneralHeadLogic = (_dec = ccclass('GeneralHeadLogic'), _dec(_class = class GeneralHeadLogic extends Component {
        setHeadId(id) {
          // console.log("setHeadId:", id);
          var frame = (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
            error: Error()
          }), GeneralCommand) : GeneralCommand).getInstance().proxy.getGeneralTex(id);

          if (frame) {
            var sp = this.node.getComponent(Sprite);

            if (sp) {
              sp.spriteFrame = frame;
            }
          } else {
            console.log("load setHeadId:", id);
            resources.load("./generalpic/card_" + id + "/spriteFrame", SpriteFrame, (finish, total) => {}, (error, asset) => {
              if (error != null) {
                console.log("setHeadId error:", error.message);
              } else {
                var frame = asset;
                var sp = this.node.getComponent(Sprite);

                if (sp) {
                  sp.spriteFrame = frame;
                }

                (_crd && GeneralCommand === void 0 ? (_reportPossibleCrUseOfGeneralCommand({
                  error: Error()
                }), GeneralCommand) : GeneralCommand).getInstance().proxy.setGeneralTex(id, frame);
              }
            });
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GeneralHeadLogic.js.map