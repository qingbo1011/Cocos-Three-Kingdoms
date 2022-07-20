System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GeneralConfig, GenaralLevelConfig, GeneralCampType, GeneralCommonConfig, gSkill, GeneralData, GeneralProxy, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    GeneralConfig: void 0,
    GenaralLevelConfig: void 0,
    GeneralCampType: void 0,
    GeneralCommonConfig: void 0,
    gSkill: void 0,
    GeneralData: void 0,
    default: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a494hp4dBD57mac11WaP3Y", "GeneralProxy", undefined);

      /**武将(配置)*/
      _export("GeneralConfig", GeneralConfig = class GeneralConfig {
        constructor() {
          _defineProperty(this, "name", "");

          _defineProperty(this, "cfgId", 0);

          _defineProperty(this, "force", 0);

          _defineProperty(this, "strategy", 0);

          _defineProperty(this, "defense", 0);

          _defineProperty(this, "speed", 0);

          _defineProperty(this, "destroy", 0);

          _defineProperty(this, "cost", 0);

          _defineProperty(this, "force_grow", 0);

          _defineProperty(this, "strategy_grow", 0);

          _defineProperty(this, "defense_grow", 0);

          _defineProperty(this, "speed_grow", 0);

          _defineProperty(this, "destroy_grow", 0);

          _defineProperty(this, "physical_power_limit", 0);

          _defineProperty(this, "cost_physical_power", 0);

          _defineProperty(this, "probability", 0);

          _defineProperty(this, "star", 0);

          _defineProperty(this, "arms", []);

          _defineProperty(this, "camp", 0);
        }

      });
      /**武将等级配置*/


      _export("GenaralLevelConfig", GenaralLevelConfig = class GenaralLevelConfig {
        constructor() {
          _defineProperty(this, "level", 0);

          _defineProperty(this, "exp", 0);

          _defineProperty(this, "soldiers", 0);
        }

      });
      /**武将阵营枚举*/


      _export("GeneralCampType", GeneralCampType = class GeneralCampType {});
      /**武将共有配置*/


      _defineProperty(GeneralCampType, "Han", 1);

      _defineProperty(GeneralCampType, "Qun", 2);

      _defineProperty(GeneralCampType, "Wei", 3);

      _defineProperty(GeneralCampType, "Shu", 4);

      _defineProperty(GeneralCampType, "Wu", 5);

      _export("GeneralCommonConfig", GeneralCommonConfig = class GeneralCommonConfig {
        constructor() {
          _defineProperty(this, "physical_power_limit", 100);

          _defineProperty(this, "cost_physical_power", 10);

          _defineProperty(this, "recovery_physical_power", 10);

          _defineProperty(this, "reclamation_time", 3600);

          _defineProperty(this, "draw_general_cost", 0);
        }

      });

      _export("gSkill", gSkill = class gSkill {
        constructor() {
          _defineProperty(this, "id", 0);

          _defineProperty(this, "lv", 0);

          _defineProperty(this, "cfgId", 0);
        }

      });
      /**武将数据*/


      _export("GeneralData", GeneralData = class GeneralData {
        constructor() {
          _defineProperty(this, "id", 0);

          _defineProperty(this, "cfgId", 0);

          _defineProperty(this, "exp", 0);

          _defineProperty(this, "level", 0);

          _defineProperty(this, "physical_power", 0);

          _defineProperty(this, "order", 0);

          _defineProperty(this, "star_lv", 0);

          _defineProperty(this, "parentId", 0);

          _defineProperty(this, "state", 0);

          _defineProperty(this, "hasPrPoint", 0);

          _defineProperty(this, "usePrPoint", 0);

          _defineProperty(this, "force_added", 0);

          _defineProperty(this, "strategy_added", 0);

          _defineProperty(this, "defense_added", 0);

          _defineProperty(this, "speed_added", 0);

          _defineProperty(this, "destroy_added", 0);

          _defineProperty(this, "config", new GeneralConfig());

          _defineProperty(this, "skills", []);
        }

        static createFromServer(serverData, generalData, generalCfg) {
          if (generalData === void 0) {
            generalData = null;
          }

          var data = generalData;

          if (data == null) {
            data = new GeneralData();
          }

          data.id = serverData.id;
          data.cfgId = serverData.cfgId;
          data.exp = serverData.exp;
          data.level = serverData.level;
          data.order = serverData.order;
          data.physical_power = serverData.physical_power;
          data.star_lv = serverData.star_lv;
          data.parentId = serverData.parentId;
          data.state = serverData.state;
          data.hasPrPoint = serverData.hasPrPoint;
          data.usePrPoint = serverData.usePrPoint;
          data.force_added = serverData.force_added;
          data.strategy_added = serverData.strategy_added;
          data.defense_added = serverData.defense_added;
          data.speed_added = serverData.speed_added;
          data.destroy_added = serverData.destroy_added;
          data.config = generalCfg;
          data.skills = serverData.skills; // console.log("createFromServer:", data);

          return data;
        }

        static getPrValue(pr, group, add) {
          if (pr === void 0) {
            pr = 0;
          }

          if (add === void 0) {
            add = 0;
          }

          return (pr + group + add) / 100;
        }

        static getPrStr(pr, add, lv, grow) {
          if (pr === void 0) {
            pr = 0;
          }

          if (add === void 0) {
            add = 0;
          }

          if (lv === void 0) {
            lv = 0;
          }

          if (grow === void 0) {
            grow = 0;
          }

          return (pr + add) / 100 + "+(" + lv * grow / 100 + ")";
        }

      });

      _export("default", GeneralProxy = class GeneralProxy {
        constructor() {
          _defineProperty(this, "_generalConfigs", new Map());

          _defineProperty(this, "_levelConfigs", []);

          _defineProperty(this, "_commonConfig", new GeneralCommonConfig());

          _defineProperty(this, "_generalTexs", new Map());

          _defineProperty(this, "_myGenerals", new Map());
        }

        clearData() {
          this._myGenerals.clear();
        }

        initGeneralConfig(cfgs, bCost) {
          var cfgData = null;
          var levelData = null;

          for (var i = 0; i < cfgs.length; i++) {
            console;

            if (cfgs[i]._name == "general") {
              cfgData = cfgs[i].json.list;
            } else if (cfgs[i]._name == "general_basic") {
              levelData = cfgs[i].json.levels;
            }
          }

          if (cfgData) {
            this._generalConfigs.clear();

            for (var _i = 0; _i < cfgData.length; _i++) {
              var cfg = new GeneralConfig();
              cfg.cfgId = cfgData[_i].cfgId;
              cfg.name = cfgData[_i].name;
              cfg.force = cfgData[_i].force;
              cfg.strategy = cfgData[_i].strategy;
              cfg.defense = cfgData[_i].defense;
              cfg.speed = cfgData[_i].speed;
              cfg.destroy = cfgData[_i].destroy;
              cfg.cost = cfgData[_i].cost;
              cfg.force_grow = cfgData[_i].force_grow;
              cfg.strategy_grow = cfgData[_i].strategy_grow;
              cfg.defense_grow = cfgData[_i].defense_grow;
              cfg.speed_grow = cfgData[_i].speed_grow;
              cfg.destroy_grow = cfgData[_i].destroy_grow;
              cfg.physical_power_limit = bCost.general.physical_power_limit;
              cfg.cost_physical_power = bCost.general.cost_physical_power;
              cfg.star = cfgData[_i].star;
              cfg.arms = cfgData[_i].arms;
              cfg.camp = cfgData[_i].camp;

              this._generalConfigs.set(cfg.cfgId, cfg);
            }
          }

          if (levelData) {
            this._levelConfigs.length = levelData.length;

            for (var _i2 = 0; _i2 < levelData.length; _i2++) {
              var levelCfg = new GenaralLevelConfig();
              levelCfg.level = levelData[_i2].level;
              levelCfg.exp = levelData[_i2].exp;
              levelCfg.soldiers = levelData[_i2].soldiers;
              this._levelConfigs[levelCfg.level - 1] = levelCfg;
            }
          }

          this._commonConfig.physical_power_limit = bCost.general.physical_power_limit;
          this._commonConfig.cost_physical_power = bCost.general.cost_physical_power;
          this._commonConfig.recovery_physical_power = bCost.general.recovery_physical_power;
          this._commonConfig.reclamation_time = bCost.general.reclamation_time;
          this._commonConfig.draw_general_cost = bCost.general.draw_general_cost;
        }

        initGeneralTex(texs) {
          this._generalTexs.clear();

          for (var i = 0; i < texs.length; i++) {
            var id = Number(String(texs[i].name).split("_")[1]);

            this._generalTexs.set(id, texs[i]);
          }
        }

        updateMyGenerals(datas) {
          for (var i = 0; i < datas.length; i++) {
            var data = GeneralData.createFromServer(datas[i], null, this._generalConfigs.get(datas[i].cfgId));

            this._myGenerals.set(data.id, data);
          }
        }

        updateGeneral(data) {
          if (data.state != 0) {
            this._myGenerals.delete(data.id);
          } else {
            var ids = [];
            var general = GeneralData.createFromServer(data, this._myGenerals.get(data.id), this._generalConfigs.get(data.cfgId));

            this._myGenerals.set(general.id, general);

            ids.push(general.id);
          }
        }

        removeMyGenerals(ids) {
          ids.forEach(id => {
            this._myGenerals.delete(id);
          });
        }
        /**武将配置*/


        getGeneralCfg(cfgId) {
          if (this._generalConfigs.has(cfgId)) {
            return this._generalConfigs.get(cfgId);
          }

          return null;
        }

        getGeneralAllCfg() {
          return this._generalConfigs;
        }
        /**武将等级配置*/


        getGeneralLevelCfg(level) {
          if (level > 0 && level <= this._levelConfigs.length) {
            return this._levelConfigs[level - 1];
          }

          return null;
        }

        getMaxLevel() {
          return this._levelConfigs.length;
        }
        /**武将头像素材*/


        getGeneralTex(cfgId) {
          if (this._generalTexs.has(cfgId)) {
            return this._generalTexs.get(cfgId);
          }

          return null;
        }

        setGeneralTex(cfgId, frame) {
          this._generalTexs.set(cfgId, frame);
        }
        /**武将相关公有配置*/


        getCommonCfg() {
          return this._commonConfig;
        }

        getMyActiveGeneralCnt() {
          var arr = this.getMyGenerals();
          var cnt = 0;
          arr.forEach(g => {
            if (g.state == 0) {
              cnt += 1;
            }
          });
          return cnt;
        }
        /**我的武将列表*/


        getMyGenerals() {
          return Array.from(this._myGenerals.values());
        }

        getMyGeneralsNotUse() {
          var arr = Array.from(this._myGenerals.values());
          var generals = [];

          for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];

            if (obj.order == 0 && obj.state == 0) {
              generals.push(obj);
            }
          }

          return generals;
        }
        /**我的武将*/


        getMyGeneral(id) {
          if (this._myGenerals.has(id)) {
            return this._myGenerals.get(id);
          }

          return null;
        }
        /**相同类型的武将id */


        getGeneralIds(cfgId) {
          var myGenerals = this.getMyGenerals();
          var tempGenerals = [];

          for (var i = 0; i < myGenerals.length; i++) {
            if (myGenerals[i].cfgId == cfgId) {
              tempGenerals.push(myGenerals[i].id);
            }
          }

          return tempGenerals;
        }

        sortStar(a, b) {
          if (a.config.star < b.config.star) {
            return 1;
          } else if (a.config.star == b.config.star) {
            return a.cfgId - b.cfgId;
          } else {
            return -1;
          }
        }
        /**
         * 排序 已经使用的
         */


        getUseGenerals() {
          var tempArr = this.getMyGenerals().concat();
          tempArr.sort(this.sortStar);
          var temp = [];

          for (var i = 0; i < tempArr.length; i++) {
            if (tempArr[i].order > 0) {
              console.log("tempArr[i].order:", tempArr[i].order, tempArr[i].config.name);
              temp.push(tempArr[i]);
              tempArr.splice(i, 1);
              i--;
            }
          }

          for (var i = 0; i < tempArr.length; i++) {
            if (tempArr[i].parentId > 0) {
              tempArr.splice(i, 1);
              i--;
            }
          }

          temp = temp.concat(tempArr);
          return temp;
        }

        getComposeGenerals(cfgId, id) {
          if (cfgId === void 0) {
            cfgId = 0;
          }

          if (id === void 0) {
            id = 0;
          }

          var temp = [];
          var tempArr = this.getMyGenerals().concat();

          for (var i = 0; i < tempArr.length; i++) {
            if (tempArr[i].order > 0 || tempArr[i].id == id || tempArr[i].cfgId != cfgId || tempArr[i].parentId > 0) {
              continue;
            }

            temp.push(tempArr[i]);
          }

          return temp;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GeneralProxy.js.map