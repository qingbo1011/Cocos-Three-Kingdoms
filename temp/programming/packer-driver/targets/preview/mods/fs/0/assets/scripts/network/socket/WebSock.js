System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, crypto, gzip, convert, WebSock, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfISocket(extras) {
    _reporterNs.report("ISocket", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvert(extras) {
    _reporterNs.report("convert", "../../libs/convert", _context.meta, extras);
  }

  _export("WebSock", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      crypto = _unresolved_2;
    }, function (_unresolved_3) {
      gzip = _unresolved_3;
    }, function (_unresolved_4) {
      convert = _unresolved_4.convert;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd622ondnZLdL82Gkw+thy7", "WebSock", undefined);

      _export("WebSock", WebSock = class WebSock {
        constructor() {
          _defineProperty(this, "_ws", null);

          _defineProperty(this, "_key", "");
        }

        onConnected(event) {
          console.log("websocket onConnected:", event);
        }

        onJsonMessage(data) {}

        onGetKey() {}

        onMessage(msg) {
          // console.log("websocket onMessage0:",msg)
          var ab = msg;
          var view = new Uint8Array(ab);
          var undata = gzip.unzip(view);
          var c = new (_crd && convert === void 0 ? (_reportPossibleCrUseOfconvert({
            error: Error()
          }), convert) : convert)();
          msg = c.byteToString(undata); // console.log("websocket onMessage1:",msg)
          //第一次

          if (this._key == "") {
            try {
              var hand_data = JSON.parse(msg);
              console.log("hand_data:", hand_data);

              if (hand_data.name == "handshake") {
                this._key = hand_data.msg.key;
                this.onGetKey();
                return;
              }
            } catch (error) {
              console.log("handshake parse error:", error);
            }
          } // console.log("websocket onMessage2:",msg)


          var decrypted = null;

          try {
            decrypted = this.getAnddecrypt(msg);
          } catch (error) {
            console.log("message ecrypt error:", error);
          }

          if (decrypted == "") {
            this._key = "";
          } // console.log("onMessage decrypted :",decrypted);


          if (decrypted) {
            var json = JSON.parse(decrypted);
            this.onJsonMessage(json);
          }
        }

        onError(event) {
          console.log("websocket onError:", event);
        }

        onClosed(event) {
          console.log("websocket onClosed:", event);
        }

        connect(options) {
          if (this._ws) {
            if (this._ws.readyState === WebSocket.CONNECTING) {
              console.log("websocket connecting, wait for a moment...");
              return false;
            }
          }

          var url = null;

          if (options.url) {
            url = options.url;
          } else {
            var ip = options.ip;
            var port = options.port;
            var protocol = options.protocol;
            url = protocol + "://" + ip + ":" + port;
          }

          console.log();
          this._ws = new WebSocket(url);
          this._ws.binaryType = options.binaryType ? options.binaryType : "arraybuffer";

          this._ws.onmessage = event => {
            this.onMessage(event.data);
          };

          this._ws.onopen = this.onConnected;
          this._ws.onerror = this.onError;
          this._ws.onclose = this.onClosed;
          return true;
        }

        send(buffer) {
          if (this._ws.readyState == WebSocket.OPEN) {
            this._ws.send(buffer);

            return true;
          }

          return false;
        }

        close(code, reason) {
          this._key = "";

          this._ws.close(code, reason);
        }
        /**
         * json 加密打包
         * @param send_data 
         */


        packAndSend(send_data) {
          //console.log("WebSocke packAndSend:",send_data)
          var encrypt = this._key == "" ? send_data : this.encrypt(send_data); //console.log("encrypt:",encrypt);

          var data = gzip.zip(encrypt, {
            level: 9
          });
          var c = new (_crd && convert === void 0 ? (_reportPossibleCrUseOfconvert({
            error: Error()
          }), convert) : convert)();
          var undata = gzip.unzip(data); //var msg = c.byteToString(undata)
          //console.log("unzip:", msg);

          var buffer = new ArrayBuffer(data.length);
          var i8arr = new Int8Array(buffer);

          for (var i = 0; i < i8arr.length; i++) {
            i8arr[i] = data[i];
          } // console.log("i8arr:",i8arr)


          this.send(i8arr);
        }
        /**
         * 解密
         * @param msg 
         */


        getAnddecrypt(get_msg) {
          var decrypt = this._key == "" ? get_msg : this.decrypt(get_msg); // console.log("decrypt:",decrypt);

          return decrypt;
        }

        encrypt(data) {
          var key = crypto.enc.Utf8.parse(this._key);
          var iv = crypto.enc.Utf8.parse(this._key);

          if (typeof data == 'object') {
            data = JSON.stringify(data);
          }

          var srcs = crypto.enc.Utf8.parse(data);
          var encrypted = crypto.AES.encrypt(srcs, key, {
            iv: iv,
            mode: crypto.mode.CBC,
            padding: crypto.pad.ZeroPadding
          });
          return encrypted.ciphertext.toString();
        }

        decrypt(message) {
          var key = crypto.enc.Utf8.parse(this._key);
          var iv = crypto.enc.Utf8.parse(this._key);
          var encryptedHexStr = crypto.enc.Hex.parse(message);
          var srcs = crypto.Base64.stringify(encryptedHexStr);
          var decrypt = crypto.AES.decrypt(srcs, key, {
            iv: iv,
            mode: crypto.mode.CBC,
            padding: crypto.pad.ZeroPadding
          }); // console.log("decrypt:", decrypt);

          var decryptedStr = decrypt.toString(crypto.enc.Utf8); // console.log("decryptedStr 1111:", typeof(decryptedStr), decryptedStr, decryptedStr.length);

          var str = decryptedStr.replaceAll("\u0000", ""); // console.log("decryptedStr 2222:", typeof(str), str, str.length);

          return str;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=WebSock.js.map