System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, sys, LocalCache, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("LocalCache", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b4755qQwpKu5cfm20jUbfA", "LocalCache", undefined);

      _export("LocalCache", LocalCache = class LocalCache {
        static setPersonMemory(keyStr, Value) {
          //log("setPersonMemory:" + keyStr + ", " + Value);
          if (keyStr === undefined || keyStr === null || keyStr === "") {
            return;
          }

          if (Value === undefined || Value === null || Value === "") {
            Value = false;
          }

          var jsonContent = LocalCache.getListForJson();

          if (jsonContent === undefined || jsonContent === null || jsonContent === "") {
            jsonContent = {};
          }

          jsonContent[keyStr] = Value;
          var jsonstring = JSON.stringify(jsonContent);
          sys.localStorage.setItem(LocalCache.userListKey, jsonstring);
        }

        static getPersonMemory(keyStr, defaultValue) {
          //log("getPersonMemory:" + keyStr + ", " + defaultValue);
          //key不存在就gg了
          if (keyStr === undefined || keyStr === null || keyStr === "") {
            return;
          } //获取本地已经保存的


          var jsonContent = LocalCache.getListForJson();

          if (jsonContent === null || jsonContent === undefined || jsonContent === "") {
            jsonContent = {};
          } //如果本身值存在就返回本身


          if (jsonContent[keyStr] !== null && jsonContent[keyStr] !== undefined && jsonContent[keyStr] !== "") {
            return jsonContent[keyStr];
          } else //如果本身不存在就判断默认是否存在
            {
              //默认也不存在 返回false
              if (defaultValue === undefined || defaultValue === null || defaultValue === "") {
                return false;
              } else {
                //默认存在  设置默认保存并且返回默认值
                jsonContent[keyStr] = defaultValue;
                var jsonstring = JSON.stringify(jsonContent);
                sys.localStorage.setItem(LocalCache.userListKey, jsonstring);
                return jsonContent[keyStr];
              }
            }
        }

        static getListForJson() {
          var jsondata = sys.localStorage.getItem(LocalCache.userListKey);
          if (0 == Number(jsondata) || jsondata == undefined) return;
          var jsonArray = JSON.parse(jsondata);
          return jsonArray;
        }

        static getUuid() {
          return LocalCache.getPersonMemory("deviceuuid", "");
        }

        static setUuid(uuid) {
          LocalCache.setPersonMemory("deviceuuid", uuid);
        }

        static setLoginValidation(data) {
          LocalCache.setPersonMemory("loginvalidation", data);
        }

        static getLoginValidation() {
          return LocalCache.getPersonMemory("loginvalidation", "");
        }

      });

      _defineProperty(LocalCache, "userListKey", "userListKey");

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LocalCache.js.map