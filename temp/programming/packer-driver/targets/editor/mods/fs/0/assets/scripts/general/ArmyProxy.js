System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DateUtil, ArmyCmd, ArmyData, ArmyProxy, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../utils/DateUtil", _context.meta, extras);
  }

  _export({
    ArmyCmd: void 0,
    ArmyData: void 0,
    default: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DateUtil = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e294b9oOHdCUpsXghUh/a2P", "ArmyProxy", undefined);

      /**军队命令*/
      _export("ArmyCmd", ArmyCmd = class ArmyCmd {});
      /**军队数据*/


      _defineProperty(ArmyCmd, "Idle", 0);

      _defineProperty(ArmyCmd, "Attack", 1);

      _defineProperty(ArmyCmd, "Garrison", 2);

      _defineProperty(ArmyCmd, "Reclaim", 3);

      _defineProperty(ArmyCmd, "Return", 4);

      _defineProperty(ArmyCmd, "Conscript", 5);

      _defineProperty(ArmyCmd, "Transfer", 6);

      _export("ArmyData", ArmyData = class ArmyData {
        constructor() {
          _defineProperty(this, "id", 0);

          _defineProperty(this, "cityId", 0);

          _defineProperty(this, "order", 0);

          _defineProperty(this, "generals", []);

          _defineProperty(this, "soldiers", []);

          _defineProperty(this, "conTimes", []);

          _defineProperty(this, "conCnts", []);

          _defineProperty(this, "cmd", 0);

          _defineProperty(this, "state", 0);

          _defineProperty(this, "fromX", 0);

          _defineProperty(this, "fromY", 0);

          _defineProperty(this, "toX", 0);

          _defineProperty(this, "toY", 0);

          _defineProperty(this, "startTime", 0);

          _defineProperty(this, "endTime", 0);

          _defineProperty(this, "x", 0);

          _defineProperty(this, "y", 0);
        }

        static createFromServer(serverData, armyData = null) {
          let data = armyData;

          if (armyData == null) {
            data = new ArmyData();
          }

          data.id = serverData.id;
          data.cityId = serverData.cityId;
          data.order = serverData.order;
          data.generals = serverData.generals;
          data.soldiers = serverData.soldiers;
          data.conTimes = serverData.con_times;
          data.conCnts = serverData.con_cnts;
          data.state = serverData.state;
          data.cmd = serverData.cmd;

          if (data.cmd == ArmyCmd.Return) {
            //返回的时候 坐标是反的
            data.fromX = serverData.to_x;
            data.fromY = serverData.to_y;
            data.toX = serverData.from_x;
            data.toY = serverData.from_y;
          } else {
            data.fromX = serverData.from_x;
            data.fromY = serverData.from_y;
            data.toX = serverData.to_x;
            data.toY = serverData.to_y;
          }

          if (data.cmd == ArmyCmd.Idle || data.cmd == ArmyCmd.Conscript) {
            //代表是停留在城池中
            data.x = data.fromX;
            data.y = data.fromY;
          } else {
            data.x = data.toX;
            data.y = data.toY;
          }

          data.startTime = serverData.start * 1000;
          data.endTime = serverData.end * 1000;
          return data;
        }

        isGenConEnd() {
          for (let index = 0; index < this.conTimes.length; index++) {
            const conTime = this.conTimes[index];

            if (conTime == 0) {
              continue;
            }

            if ((_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).isAfterServerTime(conTime * 1000)) {
              return true;
            }
          }

          return false;
        }

      });

      _export("default", ArmyProxy = class ArmyProxy {
        constructor() {
          _defineProperty(this, "_maxArmyCnt", 5);

          _defineProperty(this, "_armys", new Map());
        }

        clearData() {
          this._armys.clear();
        }

        getArmyList(cityId) {
          if (this._armys.has(cityId) == false) {
            return null;
          }

          return this._armys.get(cityId);
        }

        updateArmys(cityId, datas) {
          let list = this.getArmyList(cityId);

          if (list == null) {
            list = new Array(this._maxArmyCnt);

            this._armys.set(cityId, list);
          }

          for (var i = 0; i < datas.length; i++) {
            let armyData = ArmyData.createFromServer(datas[i]);
            list[armyData.order - 1] = armyData;
          }

          return list;
        }

        updateArmy(cityId, data) {
          let list = this.getArmyList(cityId);

          if (list == null) {
            list = new Array(this._maxArmyCnt);

            this._armys.set(cityId, list);
          }

          let armyData = list[data.order - 1];
          list[data.order - 1] = ArmyData.createFromServer(data, armyData);
          return list[data.order - 1];
        }

        updateArmysNoCity(datas) {
          let list = [];

          for (var i = 0; i < datas.length; i++) {
            let armyData = ArmyData.createFromServer(datas[i]);
            this.updateArmy(armyData.cityId, armyData);
            list.push(armyData);
          }

          return list;
        }
        /**根据id获取军队*/


        getArmyById(id, cityId) {
          let list = this.getArmyList(cityId);

          if (list) {
            for (let i = 0; i < list.length; i++) {
              if (list[i] && list[i].id == id) {
                return list[i];
              }
            }
          }

          return null;
        }
        /**根据位置获取军队*/


        getArmyByOrder(order, cityId) {
          let list = this.getArmyList(cityId);
          console.log("getArmyByOrder", order, cityId, list);

          if (list) {
            return list[order - 1];
          }

          return null;
        }

        getAllArmys() {
          let list = [];

          this._armys.forEach(datas => {
            list = list.concat(datas);
          });

          return list;
        }

        getArmysByPos(x, y) {
          let list = [];

          this._armys.forEach(armys => {
            armys.forEach(army => {
              if (army.fromX == x && army.fromY == y) {
                list.push(army);
              }
            });
          });

          return list;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ArmyProxy.js.map