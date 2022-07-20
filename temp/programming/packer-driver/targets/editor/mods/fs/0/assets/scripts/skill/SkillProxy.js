System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Skill, SkillProxy, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSkillConf(extras) {
    _reporterNs.report("SkillConf", "../config/skill/Skill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillOutline(extras) {
    _reporterNs.report("SkillOutline", "../config/skill/Skill", _context.meta, extras);
  }

  _export({
    Skill: void 0,
    default: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e75b3gBIZRBZqqN7gWi6T/T", "SkillProxy", undefined);

      _export("Skill", Skill = class Skill {
        constructor() {
          _defineProperty(this, "id", 0);

          _defineProperty(this, "cfgId", 0);

          _defineProperty(this, "generals", []);
        }

      });

      _export("default", SkillProxy = class SkillProxy {
        constructor() {
          _defineProperty(this, "_skillCfgMap", new Map());

          _defineProperty(this, "_skillConfs", []);

          _defineProperty(this, "_skillOutLine", void 0);

          _defineProperty(this, "_skills", new Map());
        }

        initSkillConfig(cfgs) {
          this._skillConfs = [];

          this._skillCfgMap.clear();

          for (let i = 0; i < cfgs.length; i++) {
            if (cfgs[i]._name == "skill_outline") {
              console.log("skill_outline");
              this._skillOutLine = cfgs[i].json;
            } else {
              this._skillConfs.push(cfgs[i].json);

              this._skillCfgMap.set(cfgs[i].json.cfgId, cfgs[i].json);
            }
          }
        }

        get skillConfs() {
          return this._skillConfs;
        }

        get outLine() {
          return this._skillOutLine;
        }

        getSkillCfg(cfgId) {
          if (this._skillCfgMap.has(cfgId)) {
            return this._skillCfgMap.get(cfgId);
          } else {
            return null;
          }
        }

        getSkill(cfgId) {
          if (this._skills.has(cfgId)) {
            return this._skills.get(cfgId);
          } else {
            return null;
          }
        }

        updateSkills(skills) {
          skills.forEach(skill => {
            this._skills.set(skill.cfgId, skill);
          });
        }

        get skills() {
          return Array.from(this._skills.values());
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SkillProxy.js.map