System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LoginCommand, DateUtil, MapUICommand, CityAddition, CityAdditionType, Facility, FacilityConfig, FacilityAdditionCfg, FacilityOpenCondition, FacilityUpLevel, BasicGeneral, WarReport, WarReportRound, MapUIProxy, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfBasic(extras) {
    _reporterNs.report("Basic", "../../config/Basci", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConscript(extras) {
    _reporterNs.report("Conscript", "../../config/Basci", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneral(extras) {
    _reporterNs.report("General", "../../config/Basci", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginCommand(extras) {
    _reporterNs.report("LoginCommand", "../../login/LoginCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapUICommand(extras) {
    _reporterNs.report("MapUICommand", "./MapUICommand", _context.meta, extras);
  }

  _export({
    CityAddition: void 0,
    CityAdditionType: void 0,
    Facility: void 0,
    FacilityConfig: void 0,
    FacilityAdditionCfg: void 0,
    FacilityOpenCondition: void 0,
    FacilityUpLevel: void 0,
    BasicGeneral: void 0,
    WarReport: void 0,
    WarReportRound: void 0,
    default: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LoginCommand = _unresolved_2.default;
    }, function (_unresolved_3) {
      DateUtil = _unresolved_3.default;
    }, function (_unresolved_4) {
      MapUICommand = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9db4deYrJNGx5R53mK3uxVr", "MapUIProxy", undefined);

      _export("CityAddition", CityAddition = class CityAddition {
        constructor() {
          _defineProperty(this, "cost", 0);

          _defineProperty(this, "armyCnt", 0);

          _defineProperty(this, "vanguardCnt", void 0);

          _defineProperty(this, "soldierCnt", void 0);

          _defineProperty(this, "han", 0);

          _defineProperty(this, "qun", 0);

          _defineProperty(this, "wei", 0);

          _defineProperty(this, "shu", 0);

          _defineProperty(this, "wu", 0);

          _defineProperty(this, "taxRate", 0);

          _defineProperty(this, "durable", 0);
        }

        //耐久
        clear() {
          this.cost = 0;
          this.armyCnt = 0;
          this.vanguardCnt = 0;
          this.soldierCnt = 0;
          this.han = 0;
          this.qun = 0;
          this.wei = 0;
          this.shu = 0;
          this.wu = 0;
          this.durable = 0;
        }

      });

      ;
      /**城池加成类型*/

      _export("CityAdditionType", CityAdditionType = class CityAdditionType {});
      /**设施*/


      _defineProperty(CityAdditionType, "Durable", 1);

      _defineProperty(CityAdditionType, "Cost", 2);

      _defineProperty(CityAdditionType, "ArmyTeams", 3);

      _defineProperty(CityAdditionType, "Speed", 4);

      _defineProperty(CityAdditionType, "Defense", 5);

      _defineProperty(CityAdditionType, "Strategy", 6);

      _defineProperty(CityAdditionType, "Force", 7);

      _defineProperty(CityAdditionType, "ConscriptTime", 8);

      _defineProperty(CityAdditionType, "ReserveLimit", 9);

      _defineProperty(CityAdditionType, "Unkonw", 10);

      _defineProperty(CityAdditionType, "HanAddition", 11);

      _defineProperty(CityAdditionType, "QunAddition", 12);

      _defineProperty(CityAdditionType, "WeiAddition", 13);

      _defineProperty(CityAdditionType, "ShuAddition", 14);

      _defineProperty(CityAdditionType, "WuAddition", 15);

      _defineProperty(CityAdditionType, "DealTaxRate", 16);

      _defineProperty(CityAdditionType, "Wood", 17);

      _defineProperty(CityAdditionType, "Iron", 18);

      _defineProperty(CityAdditionType, "Grain", 19);

      _defineProperty(CityAdditionType, "Stone", 20);

      _defineProperty(CityAdditionType, "Tax", 21);

      _defineProperty(CityAdditionType, "ExtendTimes", 22);

      _defineProperty(CityAdditionType, "WarehouseLimit", 23);

      _defineProperty(CityAdditionType, "SoldierLimit", 24);

      _defineProperty(CityAdditionType, "VanguardLimit", 25);

      _export("Facility", Facility = class Facility {
        constructor() {
          _defineProperty(this, "level", 0);

          _defineProperty(this, "type", 0);

          _defineProperty(this, "upTime", 0);
        }

        //升级的时间，0为该等级已经升级成功
        isUping() {
          return this.upLastTime() > 0;
        }

        isNeedUpdateLevel() {
          return this.upLastTime() < 0;
        }

        upLastTime() {
          if (this.upTime > 0) {
            var cfg = (_crd && MapUICommand === void 0 ? (_reportPossibleCrUseOfMapUICommand({
              error: Error()
            }), MapUICommand) : MapUICommand).getInstance().proxy.getFacilityCfgByType(this.type);
            var costTime = cfg.upLevels[this.level].time;
            return (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).leftTime((this.upTime + costTime) * 1000);
          } else {
            return 0;
          }
        }

      });
      /**设施(配置)*/


      _export("FacilityConfig", FacilityConfig = class FacilityConfig {
        constructor() {
          _defineProperty(this, "name", "");

          _defineProperty(this, "type", 0);

          _defineProperty(this, "des", "");

          _defineProperty(this, "additions", []);

          _defineProperty(this, "conditions", []);

          _defineProperty(this, "upLevels", []);
        }

      });
      /**设施加成类型配置*/


      _export("FacilityAdditionCfg", FacilityAdditionCfg = class FacilityAdditionCfg {
        constructor() {
          _defineProperty(this, "type", 0);

          _defineProperty(this, "des", "");

          _defineProperty(this, "value", "");
        }

      });
      /**设施开启条件配置*/


      _export("FacilityOpenCondition", FacilityOpenCondition = class FacilityOpenCondition {
        constructor() {
          _defineProperty(this, "type", 0);

          _defineProperty(this, "level", 0);
        }

      });
      /**设施升级配置*/


      _export("FacilityUpLevel", FacilityUpLevel = class FacilityUpLevel {
        constructor() {
          _defineProperty(this, "level", 0);

          _defineProperty(this, "values", []);

          _defineProperty(this, "wood", 0);

          _defineProperty(this, "iron", 0);

          _defineProperty(this, "stone", 0);

          _defineProperty(this, "grain", 0);

          _defineProperty(this, "decree", 0);

          _defineProperty(this, "time", 0);
        }

      });

      _export("BasicGeneral", BasicGeneral = class BasicGeneral {
        constructor() {
          _defineProperty(this, "limit", 0);
        }

      });

      _export("WarReport", WarReport = class WarReport {
        constructor() {
          _defineProperty(this, "id", 0);

          _defineProperty(this, "attack_rid", 0);

          _defineProperty(this, "defense_rid", 0);

          _defineProperty(this, "beg_attack_army", {});

          _defineProperty(this, "beg_defense_army", {});

          _defineProperty(this, "end_attack_army", {});

          _defineProperty(this, "end_defense_army", {});

          _defineProperty(this, "result", 0);

          _defineProperty(this, "rounds", {});

          _defineProperty(this, "attack_is_read", false);

          _defineProperty(this, "defense_is_read", false);

          _defineProperty(this, "destroy_durable", 0);

          _defineProperty(this, "occupy", 0);

          _defineProperty(this, "x", 0);

          _defineProperty(this, "y", 0);

          _defineProperty(this, "ctime", 0);

          _defineProperty(this, "beg_attack_general", []);

          _defineProperty(this, "beg_defense_general", []);

          _defineProperty(this, "end_attack_general", []);

          _defineProperty(this, "end_defense_general", []);

          _defineProperty(this, "is_read", false);
        }

      });

      _export("WarReportRound", WarReportRound = class WarReportRound {
        constructor() {
          _defineProperty(this, "isAttack", false);

          _defineProperty(this, "attack", {});

          _defineProperty(this, "defense", {});

          _defineProperty(this, "attackLoss", 0);

          _defineProperty(this, "defenseLoss", 0);

          _defineProperty(this, "round", 0);

          _defineProperty(this, "turn", 0);
        }

      });

      _export("default", MapUIProxy = class MapUIProxy {
        constructor() {
          _defineProperty(this, "_myFacility", new Map());

          _defineProperty(this, "_facilityCfg", new Map());

          _defineProperty(this, "_facilityAdditionCfg", new Map());

          _defineProperty(this, "_warReport", new Map());

          _defineProperty(this, "_additions", new Map());

          _defineProperty(this, "_basic", void 0);
        }

        clearData() {
          this._warReport.clear();

          this._myFacility.clear();

          this._additions.clear();
        }
        /**
         * 当前城市的设施
         * @param data 
         */


        updateMyFacilityList(cityId, datas) {
          console.log("updateMyFacilityList:", datas);
          var list = new Map();

          this._myFacility.set(cityId, list);

          for (var i = 0; i < datas.length; i++) {
            var obj = new Facility();
            obj.level = datas[i].level;
            obj.type = datas[i].type;
            obj.upTime = datas[i].up_time;
            list.set(obj.type, obj);
          }

          console.log("list:", list);
        }

        updateMyFacility(cityId, data) {
          console.log("updateMyFacility:", data);

          if (this._myFacility.has(cityId)) {
            var list = this._myFacility.get(cityId);

            var facilityData = list.get(data.type);

            if (facilityData == null) {
              facilityData = new Facility();
              list.set(data.type, facilityData);
            }

            facilityData.level = data.level;
            facilityData.type = data.type;
            facilityData.upTime = data.up_time;
            return facilityData;
          }

          return null;
        }
        /**更新设施加成数据*/


        updateMyCityAdditions(cityId) {
          if (this._myFacility.has(cityId)) {
            var addition = null;

            if (this._additions.has(cityId)) {
              addition = this._additions.get(cityId);
            } else {
              addition = new CityAddition();

              this._additions.set(cityId, addition);
            }

            addition.clear(); //清除旧数据 重新计算

            var list = this._myFacility.get(cityId);

            list.forEach((data, type) => {
              if (data.level > 0) {
                var cfg = this.getFacilityCfgByType(data.type);

                if (cfg) {
                  var addValue = 0;
                  var index = -1;
                  index = cfg.additions.indexOf(CityAdditionType.ArmyTeams);

                  if (index != -1) {
                    //军队数量加成
                    addValue = cfg.upLevels[data.level - 1].values[index];
                    addition.armyCnt += addValue;
                  }

                  index = cfg.additions.indexOf(CityAdditionType.Cost);

                  if (index != -1) {
                    //cost加成
                    addValue = cfg.upLevels[data.level - 1].values[index];
                    addition.cost += addValue;
                  }

                  index = cfg.additions.indexOf(CityAdditionType.SoldierLimit);

                  if (index != -1) {
                    //带兵数加成
                    addValue = cfg.upLevels[data.level - 1].values[index];
                    addition.soldierCnt += addValue;
                  }

                  index = cfg.additions.indexOf(CityAdditionType.VanguardLimit);

                  if (index != -1) {
                    //带兵数加成
                    addValue = cfg.upLevels[data.level - 1].values[index];
                    addition.vanguardCnt += addValue;
                  }

                  index = cfg.additions.indexOf(CityAdditionType.HanAddition);

                  if (index != -1) {
                    //汉阵营加成
                    addValue = cfg.upLevels[data.level - 1].values[index];
                    addition.han += addValue;
                  }

                  index = cfg.additions.indexOf(CityAdditionType.QunAddition);

                  if (index != -1) {
                    //群阵营加成
                    addValue = cfg.upLevels[data.level - 1].values[index];
                    addition.qun += addValue;
                  }

                  index = cfg.additions.indexOf(CityAdditionType.WeiAddition);

                  if (index != -1) {
                    //魏阵营加成
                    addValue = cfg.upLevels[data.level - 1].values[index];
                    addition.wei += addValue;
                  }

                  index = cfg.additions.indexOf(CityAdditionType.ShuAddition);

                  if (index != -1) {
                    //蜀阵营加成
                    addValue = cfg.upLevels[data.level - 1].values[index];
                    addition.shu += addValue;
                  }

                  index = cfg.additions.indexOf(CityAdditionType.WuAddition);

                  if (index != -1) {
                    //吴阵营加成
                    addValue = cfg.upLevels[data.level - 1].values[index];
                    addition.wu += addValue;
                  }

                  index = cfg.additions.indexOf(CityAdditionType.DealTaxRate);

                  if (index != -1) {
                    //交易税收
                    addValue = cfg.upLevels[data.level - 1].values[index];
                    addition.taxRate += addValue;
                  }

                  index = cfg.additions.indexOf(CityAdditionType.Durable);

                  if (index != -1) {
                    //console.log("CityAdditionType.Durable:", cfg.upLevels, addValue, index);
                    //耐久
                    addValue = cfg.upLevels[data.level - 1].values[index];
                    addition.durable += addValue;
                  }
                }
              }
            });
            console.log("updateMyCityAdditions", cityId, addition);
            return addition;
          }

          return null;
        }
        /**
         * 获取当前拥有的设施
         * @param cityId 
         */


        getMyFacilitys(cityId) {
          if (cityId === void 0) {
            cityId = 0;
          }

          return this._myFacility.get(cityId);
        }

        getMyAllFacilitys() {
          return this._myFacility;
        }
        /**获取指定的设施数据*/


        getMyFacilityByType(cityId, type) {
          if (cityId === void 0) {
            cityId = 0;
          }

          if (type === void 0) {
            type = 0;
          }

          if (this._myFacility.has(cityId)) {
            var list = this._myFacility.get(cityId);

            if (list.has(type)) {
              return list.get(type);
            }
          }

          return null;
        }
        /**获取城池的加成数据*/


        getMyCityAddition(cityId) {
          var addition = null;

          if (this._additions.has(cityId)) {
            addition = this._additions.get(cityId);
          } else {
            addition = new CityAddition();

            this._additions.set(cityId, addition);
          }

          return addition;
        }

        getMyCityCost(cityId) {
          var addition = this.getMyCityAddition(cityId);
          console.log("getMyCityCost:", cityId, addition, this._basic.city.cost);
          return addition.cost + this._basic.city.cost;
        } //最大耐久


        getMyCityMaxDurable(cityId) {
          var addition = this.getMyCityAddition(cityId);
          console.log("getMyCityMaxDurable:", cityId, addition, this._basic.city.durable);
          return addition.durable + this._basic.city.durable;
        }

        getTransformRate() {
          return this._basic.city.transform_rate;
        }
        /**
         * 全部设施配置
         * @param jsonAsset 
         */


        setAllFacilityCfg(jsonAssets) {
          this._facilityCfg = new Map();
          var mainJson = null; //设施类型配置

          var additionJson = null; //升级类型配置

          var otherJsons = []; //具体升级配置

          for (var i = 0; i < jsonAssets.length; i++) {
            if (jsonAssets[i]._name == "facility") {
              mainJson = jsonAssets[i].json;
            } else if (jsonAssets[i]._name == "facility_addition") {
              additionJson = jsonAssets[i].json;
            } else {
              otherJsons.push(jsonAssets[i].json);
            }
          }

          console.log("mainJson", mainJson, additionJson);

          if (mainJson != null && additionJson != null) {
            //主配置存在才处理配置文件
            this._facilityCfg.clear();

            for (var _i = 0; _i < mainJson.list.length; _i++) {
              var cfgData = new FacilityConfig();
              cfgData.type = mainJson.list[_i].type;
              cfgData.name = mainJson.list[_i].name;

              this._facilityCfg.set(cfgData.type, cfgData);
            }

            this._facilityAdditionCfg.clear();

            for (var _i2 = 0; _i2 < additionJson.list.length; _i2++) {
              var _cfgData = new FacilityAdditionCfg();

              _cfgData.type = additionJson.list[_i2].type;
              _cfgData.des = additionJson.list[_i2].des;
              _cfgData.value = additionJson.list[_i2].value;

              this._facilityAdditionCfg.set(_cfgData.type, _cfgData);
            }

            var jsonList = [];

            for (var _i3 = 0; _i3 < otherJsons.length; _i3++) {
              this.getFacilityUpLevelJsonList(otherJsons[_i3], jsonList);
            }

            console.log("jsonList", jsonList, otherJsons);

            for (var _i4 = 0; _i4 < jsonList.length; _i4++) {
              var type = jsonList[_i4].type;

              var _cfgData2 = this._facilityCfg.get(type);

              if (_cfgData2) {
                //存在主配置 才加入升级配置
                _cfgData2.des = jsonList[_i4].des;
                _cfgData2.additions = jsonList[_i4].additions;
                _cfgData2.conditions = [];

                for (var j = 0; j < jsonList[_i4].conditions.length; j++) {
                  var conditionData = new FacilityOpenCondition();
                  conditionData.type = jsonList[_i4].conditions[j].type;
                  conditionData.level = jsonList[_i4].conditions[j].level;

                  _cfgData2.conditions.push(conditionData);
                }

                _cfgData2.upLevels.length = jsonList[_i4].levels.length;

                for (var k = 0; k < jsonList[_i4].levels.length; k++) {
                  var upLevelData = new FacilityUpLevel();
                  upLevelData.level = jsonList[_i4].levels[k].level;
                  upLevelData.values = jsonList[_i4].levels[k].values;
                  upLevelData.wood = jsonList[_i4].levels[k].need.wood;
                  upLevelData.iron = jsonList[_i4].levels[k].need.iron;
                  upLevelData.grain = jsonList[_i4].levels[k].need.grain;
                  upLevelData.wood = jsonList[_i4].levels[k].need.wood;
                  upLevelData.stone = jsonList[_i4].levels[k].need.stone;
                  upLevelData.time = jsonList[_i4].levels[k].time;
                  _cfgData2.upLevels[upLevelData.level - 1] = upLevelData; //console.log("upLevelData:", upLevelData)
                }
              }
            }
          }

          this._facilityCfg.forEach((value, key) => {
            console.log("this._facilityCfg", key, value);
          });
        }

        getFacilityUpLevelJsonList(data, list) {
          if (typeof data == "string" || typeof data == "number") {
            return;
          }

          if (data.type != undefined && data.additions != undefined) {
            //代表是需要的数据
            list.push(data);
          } else {
            //代表有多条数据在更里层
            for (var key in data) {
              this.getFacilityUpLevelJsonList(data[key], list);
            }
          }
        }

        getFacilityCfgByType(type) {
          if (type === void 0) {
            type = 0;
          }

          return this._facilityCfg.get(type);
        }

        getFacilityAdditionCfgByType(type) {
          if (type === void 0) {
            type = 0;
          }

          return this._facilityAdditionCfg.get(type);
        }
        /**设施是否解锁*/


        isFacilityUnlock(cityId, type) {
          var isUnlock = true;
          var cfg = this.getFacilityCfgByType(type);

          for (var i = 0; i < cfg.conditions.length; i++) {
            var data = this.getMyFacilityByType(cityId, cfg.conditions[i].type);

            if (data && data.level < cfg.conditions[i].level) {
              isUnlock = false;
              break;
            }
          }

          return isUnlock;
        }

        setBasic(data) {
          this._basic = data.json;
          console.log("setBasic:", this._basic);
        }

        getConscriptBaseCost() {
          return this._basic.conscript;
        }

        getDefenseSoldiers(level) {
          console.log("getDefenseSoldiers:", level);
          return this._basic.npc.levels[level - 1].soilders;
        }

        getBasicGeneral() {
          return this._basic.general;
        }

        updateWarReports(data) {
          var list = data.list;

          for (var i = 0; i < list.length; i++) {
            var obj = this.createWarReprot(list[i]);

            this._warReport.set(obj.id, obj);
          }
        }

        updateWarReport(data) {
          var obj = this.createWarReprot(data);

          this._warReport.set(obj.id, obj);
        }

        createWarReprot(data) {
          var obj = new WarReport();
          obj.id = data.id;
          obj.attack_rid = data.a_rid;
          obj.defense_rid = data.d_rid;
          obj.beg_attack_general = this.arrayToObject(JSON.parse(data.b_a_general));
          obj.end_attack_general = this.arrayToObject(JSON.parse(data.e_a_general));
          obj.end_attack_army = JSON.parse(data.e_a_army);
          obj.beg_attack_army = JSON.parse(data.b_a_army);

          try {
            obj.beg_defense_army = JSON.parse(data.b_d_army);
            obj.end_defense_army = JSON.parse(data.e_d_army);
            obj.beg_defense_general = this.arrayToObject(JSON.parse(data.b_d_general));
            obj.end_defense_general = this.arrayToObject(JSON.parse(data.e_d_general));
            obj.rounds = this.createRoundsData(data.rounds, obj.beg_attack_general, obj.beg_defense_general);
          } catch (error) {}

          obj.result = data.result;
          obj.defense_is_read = data.d_is_read;
          obj.attack_is_read = data.a_is_read;
          obj.is_read = this.isReadObj(obj);
          obj.destroy_durable = data.destroy;
          obj.occupy = data.occupy;
          obj.x = data.x;
          obj.y = data.y;
          obj.ctime = data.ctime;
          return obj;
        }

        createRoundsData(data, attack_generals, defense_generals) {
          var generals = attack_generals.concat(defense_generals);
          var _list = [];
          var rounds = JSON.parse(data);

          for (var i = 0; i < rounds.length; i++) {
            var round = rounds[i].b;

            if (!round) {
              continue;
            }

            for (var j = 0; j < round.length; j++) {
              var turn = round[j];
              var attack_id = turn[0];
              var defense_id = turn[1];
              var attack_loss = turn[2];
              var defense_loss = turn[3];
              var obj = new WarReportRound();
              obj.attack = this.getMatchGeneral(generals, attack_id);
              obj.defense = this.getMatchGeneral(generals, defense_id);
              obj.isAttack = this.getMatchGeneral(attack_generals, attack_id) != null;
              obj.attackLoss = attack_loss;
              obj.defenseLoss = defense_loss;
              obj.round = i + 1;
              obj.turn = j + 1;

              _list.push(obj);
            }
          }

          return _list;
        }

        arrayToObject(arr) {
          var temp = [];

          for (var i = 0; i < arr.length; i++) {
            var data = arr[i];
            var obj = {};
            obj.id = data[0];
            obj.cfgId = data[1];
            obj.physical_power = data[2];
            obj.order = data[3];
            obj.level = data[4];
            obj.exp = data[5];
            obj.cityId = data[6];
            obj.curArms = data[7];
            obj.hasPrPoint = data[8];
            obj.attack_distance = data[9];
            obj.force_added = data[10];
            obj.strategy_added = data[11];
            obj.defense_added = data[12];
            obj.speed_added = data[13];
            obj.destroy_added = data[14];
            obj.star_lv = data[15];
            obj.star = data[16];
            temp.push(obj);
          }

          return temp;
        }

        getMatchGeneral(generals, id) {
          if (id === void 0) {
            id = 0;
          }

          for (var i = 0; i < generals.length; i++) {
            if (generals[i].id == id) {
              return generals[i];
            }
          }

          return null;
        }

        updateWarRead(id, isRead) {
          if (id === void 0) {
            id = 0;
          }

          if (isRead === void 0) {
            isRead = true;
          }

          var data = this._warReport.get(id);

          var roleData = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().proxy.getRoleData();

          if (data) {
            if (data.defense_rid == roleData.rid) {
              data.defense_is_read = isRead;
              data.is_read = isRead;
            }

            if (data.attack_rid == roleData.rid) {
              data.attack_is_read = isRead;
              data.is_read = isRead;
            }

            this._warReport.set(id, data);
          }
        }

        updateAllWarRead(isRead) {
          if (isRead === void 0) {
            isRead = true;
          }

          this._warReport.forEach(element => {
            this.updateWarRead(element.id, isRead);
          });
        }

        isRead(id) {
          if (id === void 0) {
            id = 0;
          }

          var data = this._warReport.get(id);

          var roleData = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().proxy.getRoleData();

          if (data) {
            if (data.defense_rid == roleData.rid) {
              return data.defense_is_read;
            }

            if (data.attack_rid == roleData.rid) {
              return data.attack_is_read;
            }
          }

          return false;
        }

        isReadObj(obj) {
          var roleData = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().proxy.getRoleData();

          if (obj.defense_rid == roleData.rid) {
            return obj.defense_is_read;
          }

          if (obj.attack_rid == roleData.rid) {
            return obj.attack_is_read;
          }

          return false;
        }

        getWarReport() {
          var arr = Array.from(this._warReport.values());
          arr = arr.sort(this.sortIsRead);
          arr = arr.concat();
          var backArr = []; // for (var i = 0; i < arr.length; i++) {
          //     if (arr[i].is_read == true) {
          //         backArr.push(arr[i]);
          //         arr.splice(i, 1);
          //         i--;
          //     }
          // }

          backArr = arr.concat(backArr); // backArr = backArr.reverse();

          return backArr;
        }

        sortIsRead(a, b) {
          if (a.id < b.id) {
            return 1;
          }

          return -1;
        }

        isReadNum() {
          var num = 0;
          var arr = this.getWarReport();

          for (var i = 0; i < arr.length; i++) {
            if (!this.isRead(arr[i].id)) {
              num++;
            }
          }

          return num;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapUIProxy.js.map