System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, convert, _crd;

  _export("convert", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "827c1q5w8BKe5kKx/bm5YNA", "convert", undefined);

      _export("convert", convert = class convert {
        stringToByte(str) {
          var bytes = new Array();
          var len, c;
          len = str.length;

          for (var i = 0; i < len; i++) {
            c = str.charCodeAt(i);

            if (c >= 0x010000 && c <= 0x10FFFF) {
              bytes.push(c >> 18 & 0x07 | 0xF0);
              bytes.push(c >> 12 & 0x3F | 0x80);
              bytes.push(c >> 6 & 0x3F | 0x80);
              bytes.push(c & 0x3F | 0x80);
            } else if (c >= 0x000800 && c <= 0x00FFFF) {
              bytes.push(c >> 12 & 0x0F | 0xE0);
              bytes.push(c >> 6 & 0x3F | 0x80);
              bytes.push(c & 0x3F | 0x80);
            } else if (c >= 0x000080 && c <= 0x0007FF) {
              bytes.push(c >> 6 & 0x1F | 0xC0);
              bytes.push(c & 0x3F | 0x80);
            } else {
              bytes.push(c & 0xFF);
            }
          }

          return bytes;
        }

        byteToString(arr) {
          if (typeof arr === 'string') {
            return arr;
          }

          var str = '',
              _arr = arr;

          for (var i = 0; i < _arr.length; i++) {
            var one = _arr[i].toString(2),
                v = one.match(/^1+?(?=0)/);

            if (v && one.length == 8) {
              var bytesLength = v[0].length;

              var store = _arr[i].toString(2).slice(7 - bytesLength);

              for (var st = 1; st < bytesLength; st++) {
                store += _arr[st + i].toString(2).slice(2);
              }

              str += String.fromCharCode(parseInt(store, 2));
              i += bytesLength - 1;
            } else {
              str += String.fromCharCode(_arr[i]);
            }
          }

          return str;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=convert.js.map