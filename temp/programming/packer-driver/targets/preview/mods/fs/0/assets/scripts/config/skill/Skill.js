System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, trigger, triggerType, effect, effectType, target, targetType, SkillOutline, SkillLevel, SkillConf, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    trigger: void 0,
    triggerType: void 0,
    effect: void 0,
    effectType: void 0,
    target: void 0,
    targetType: void 0,
    SkillOutline: void 0,
    SkillLevel: void 0,
    SkillConf: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "167f6BNs6BPcb0zA8LGy20R", "Skill", undefined);

      _export("trigger", trigger = class trigger {
        constructor() {
          _defineProperty(this, "type", void 0);

          _defineProperty(this, "des", void 0);
        }

      });

      _export("triggerType", triggerType = class triggerType {
        constructor() {
          _defineProperty(this, "des", void 0);

          _defineProperty(this, "list", void 0);
        }

      });

      _export("effect", effect = class effect {
        constructor() {
          _defineProperty(this, "type", void 0);

          _defineProperty(this, "des", void 0);

          _defineProperty(this, "isRate", void 0);
        }

      });

      _export("effectType", effectType = class effectType {
        constructor() {
          _defineProperty(this, "des", void 0);

          _defineProperty(this, "list", void 0);
        }

      });

      _export("target", target = class target {
        constructor() {
          _defineProperty(this, "type", void 0);

          _defineProperty(this, "des", void 0);
        }

      });

      _export("targetType", targetType = class targetType {
        constructor() {
          _defineProperty(this, "des", void 0);

          _defineProperty(this, "list", void 0);
        }

      });

      _export("SkillOutline", SkillOutline = class SkillOutline {
        constructor() {
          _defineProperty(this, "trigger_type", void 0);

          _defineProperty(this, "effect_type", void 0);

          _defineProperty(this, "target_type", void 0);
        }

      });

      _export("SkillLevel", SkillLevel = class SkillLevel {
        constructor() {
          _defineProperty(this, "probability", void 0);

          _defineProperty(this, "effect_value", void 0);

          _defineProperty(this, "effect_round", void 0);
        } //效果持续回合数


      });

      _export("SkillConf", SkillConf = class SkillConf {
        constructor() {
          _defineProperty(this, "cfgId", void 0);

          _defineProperty(this, "name", void 0);

          _defineProperty(this, "des", void 0);

          _defineProperty(this, "trigger", void 0);

          _defineProperty(this, "target", void 0);

          _defineProperty(this, "limit", void 0);

          _defineProperty(this, "arms", void 0);

          _defineProperty(this, "include_effect", void 0);

          _defineProperty(this, "levels", void 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Skill.js.map