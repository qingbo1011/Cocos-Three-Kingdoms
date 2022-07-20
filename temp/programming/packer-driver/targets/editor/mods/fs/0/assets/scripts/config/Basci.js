System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Conscript, General, Role, City, Build, Union, NpcLevel, Npc, Basic, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    Conscript: void 0,
    General: void 0,
    Role: void 0,
    City: void 0,
    Build: void 0,
    Union: void 0,
    NpcLevel: void 0,
    Npc: void 0,
    Basic: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc925MW/SZICZpv2scfdvM5", "Basci", undefined);

      _export("Conscript", Conscript = class Conscript {
        constructor() {
          _defineProperty(this, "cost_wood", 0);

          _defineProperty(this, "cost_iron", 0);

          _defineProperty(this, "cost_stone", 0);

          _defineProperty(this, "cost_grain", 0);

          _defineProperty(this, "cost_gold", 0);
        }

      });

      _export("General", General = class General {
        constructor() {
          _defineProperty(this, "physical_power_limit", 0);

          _defineProperty(this, "cost_physical_power", 0);

          _defineProperty(this, "recovery_physical_power", 0);

          _defineProperty(this, "reclamation_time", 0);

          _defineProperty(this, "reclamation_cost", 0);

          _defineProperty(this, "draw_general_cost", 0);

          _defineProperty(this, "pr_point", 0);

          _defineProperty(this, "limit", 0);
        } //武将数量上限


      });

      _export("Role", Role = class Role {
        constructor() {
          _defineProperty(this, "wood", 0);

          _defineProperty(this, "iron", 0);

          _defineProperty(this, "stone", 0);

          _defineProperty(this, "grain", 0);

          _defineProperty(this, "gold", 0);

          _defineProperty(this, "decree", 0);

          _defineProperty(this, "wood_yield", 0);

          _defineProperty(this, "iron_yield", 0);

          _defineProperty(this, "stone_yield", 0);

          _defineProperty(this, "grain_yield", 0);

          _defineProperty(this, "gold_yield", 0);

          _defineProperty(this, "depot_capacity", 0);

          _defineProperty(this, "build_limit", 0);

          _defineProperty(this, "recovery_time", 0);

          _defineProperty(this, "decree_limit", 0);

          _defineProperty(this, "collect_times_limit", 0);

          _defineProperty(this, "collect_interval", 0);

          _defineProperty(this, "pos_tag_limit", 0);
        } //位置标签上限


      });

      _export("City", City = class City {
        constructor() {
          _defineProperty(this, "cost", 0);

          _defineProperty(this, "durable", 0);

          _defineProperty(this, "recovery_time", 0);

          _defineProperty(this, "transform_rate", 0);
        }

      });

      _export("Build", Build = class Build {
        constructor() {
          _defineProperty(this, "war_free", 0);

          _defineProperty(this, "giveUp_time", 0);

          _defineProperty(this, "fortress_limit", 0);
        } //要塞上限


      });

      _export("Union", Union = class Union {
        constructor() {
          _defineProperty(this, "member_limit", 0);
        }

      });

      _export("NpcLevel", NpcLevel = class NpcLevel {
        constructor() {
          _defineProperty(this, "soilders", void 0);
        }

      });

      _export("Npc", Npc = class Npc {
        constructor() {
          _defineProperty(this, "levels", void 0);
        }

      });

      _export("Basic", Basic = class Basic {
        constructor() {
          _defineProperty(this, "conscript", void 0);

          _defineProperty(this, "general", void 0);

          _defineProperty(this, "role", void 0);

          _defineProperty(this, "city", void 0);

          _defineProperty(this, "build", void 0);

          _defineProperty(this, "union", void 0);

          _defineProperty(this, "npc", void 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Basci.js.map