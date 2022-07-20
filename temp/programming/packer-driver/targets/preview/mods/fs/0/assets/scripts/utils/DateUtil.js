System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, DateUtil, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffdadMktgVHv5zMxWT1npgd", "DateUtil", undefined);

      _export("default", DateUtil = class DateUtil {
        static setServerTime(time) {
          this._serverTime = time;
          this._getServerTime = Date.now();
        }

        static getServerTime() {
          var nowTime = Date.now();
          return nowTime - this._getServerTime + this._serverTime;
        } //是否在该时间之后


        static isAfterServerTime(stms) {
          var st = this.getServerTime();
          return st - stms > 0;
        }

        static leftTime(stms) {
          var st = this.getServerTime();
          return stms - st;
        }

        static leftTimeStr(stms) {
          var diff = this.leftTime(stms);
          return this.converSecondStr(diff);
        }
        /**补零*/


        static fillZero(str, num) {
          if (num === void 0) {
            num = 2;
          }

          while (str.length < num) {
            str = "0" + str;
          }

          return str;
        }
        /**时间字符串格式转换
         * 年 YYYY
         * 月 MM
         * 日 DD
         * 时 hh
         * 分 mm
         * 秒 ss
         * 毫秒 zzz*/


        static converTimeStr(ms, format) {
          if (format === void 0) {
            format = "hh:mm:ss";
          }

          var date = new Date(ms);
          var year = this.fillZero(date.getFullYear() + "", 4);
          var month = this.fillZero(date.getMonth() + 1 + "", 2);
          var dat = this.fillZero(date.getDate() + "", 2);
          var hour = this.fillZero(date.getHours() + "", 2);
          var minute = this.fillZero(date.getMinutes() + "", 2);
          var second = this.fillZero(date.getSeconds() + "", 2);
          var minSecond = this.fillZero(date.getMilliseconds() + "", 3);
          var str = format + "";
          str = format.replace(/YYYY/, year);
          str = str.replace(/MM/, month);
          str = str.replace(/DD/, dat);
          str = str.replace(/hh/, hour);
          str = str.replace(/mm/, minute);
          str = str.replace(/ss/, second);
          str = str.replace(/zzz/, minSecond);
          return str;
        }
        /**简易时间字符串格式转换*/


        static converSecondStr(ms, format) {
          if (format === void 0) {
            format = "hh:mm:ss";
          }

          var second = Math.floor(ms / 1000);
          var hour = Math.floor(second / 3600); // console.log("hour:", hour);

          second -= hour * 3600;
          var minute = Math.floor(second / 60);
          second -= minute * 60;
          var str = format + "";

          if (hour > 0) {
            str = str.replace(/hh/, this.fillZero(hour + "", 2));
          } else {
            str = str.replace(/hh:/, "");
          }

          str = str.replace(/mm/, this.fillZero(minute + "", 2));
          str = str.replace(/ss/, this.fillZero(second + "", 2));
          return str;
        }

      });

      _defineProperty(DateUtil, "_serverTime", 0);

      _defineProperty(DateUtil, "_getServerTime", 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DateUtil.js.map