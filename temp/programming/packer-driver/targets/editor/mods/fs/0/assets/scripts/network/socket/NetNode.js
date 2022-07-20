System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RequestObject, NetEvent, NetTimer, WebSock, EventMgr, NetNode, _crd, NetTipsType, NetNodeState, NetNodeType;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfRequestObject(extras) {
    _reporterNs.report("RequestObject", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetEvent(extras) {
    _reporterNs.report("NetEvent", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetTimer(extras) {
    _reporterNs.report("NetTimer", "./NetTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSock(extras) {
    _reporterNs.report("WebSock", "./WebSock", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../utils/EventMgr", _context.meta, extras);
  }

  _export({
    NetNode: void 0,
    NetTipsType: void 0,
    NetNodeState: void 0,
    NetNodeType: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      RequestObject = _unresolved_2.RequestObject;
      NetEvent = _unresolved_2.NetEvent;
    }, function (_unresolved_3) {
      NetTimer = _unresolved_3.NetTimer;
    }, function (_unresolved_4) {
      WebSock = _unresolved_4.WebSock;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "23475IO5jVAd4K/8W4dQVBa", "NetNode", undefined);

      (function (NetTipsType) {
        NetTipsType[NetTipsType["Connecting"] = 0] = "Connecting";
        NetTipsType[NetTipsType["ReConnecting"] = 1] = "ReConnecting";
        NetTipsType[NetTipsType["Requesting"] = 2] = "Requesting";
      })(NetTipsType || _export("NetTipsType", NetTipsType = {}));

      (function (NetNodeState) {
        NetNodeState[NetNodeState["Closed"] = 0] = "Closed";
        NetNodeState[NetNodeState["Connecting"] = 1] = "Connecting";
        NetNodeState[NetNodeState["Checking"] = 2] = "Checking";
        NetNodeState[NetNodeState["Working"] = 3] = "Working";
      })(NetNodeState || _export("NetNodeState", NetNodeState = {}));

      (function (NetNodeType) {
        NetNodeType[NetNodeType["BaseServer"] = 0] = "BaseServer";
        NetNodeType[NetNodeType["ChatServer"] = 1] = "ChatServer";
      })(NetNodeType || _export("NetNodeType", NetNodeType = {}));

      _export("NetNode", NetNode = class NetNode {
        constructor() {
          _defineProperty(this, "_connectOptions", null);

          _defineProperty(this, "_autoReconnect", 0);

          _defineProperty(this, "_autoReconnectMax", 3);

          _defineProperty(this, "_state", NetNodeState.Closed);

          _defineProperty(this, "_socket", null);

          _defineProperty(this, "_timer", null);

          _defineProperty(this, "_keepAliveTimer", null);

          _defineProperty(this, "_reconnectTimer", null);

          _defineProperty(this, "_heartTime", 10 * 1000);

          _defineProperty(this, "_receiveTime", 15 * 1000);

          _defineProperty(this, "_reconnetTimeOut", 2 * 1000);

          _defineProperty(this, "_requests", Array());

          _defineProperty(this, "_maxSeqId", 1000000);

          _defineProperty(this, "_seqId", 1);

          _defineProperty(this, "_invokePool", []);
        }

        /********************** 网络相关处理 *********************/
        init() {
          console.log(`NetNode init socket`);
          this._socket = new (_crd && WebSock === void 0 ? (_reportPossibleCrUseOfWebSock({
            error: Error()
          }), WebSock) : WebSock)();
          this.initSocket();
          this._timer = new (_crd && NetTimer === void 0 ? (_reportPossibleCrUseOfNetTimer({
            error: Error()
          }), NetTimer) : NetTimer)();
          this.initTimer();
          this._invokePool = [];
        }

        connect(options) {
          console.log(`NetNode connect socket:`, options);

          if (this._socket && this._state == NetNodeState.Closed) {
            this._state = NetNodeState.Connecting;

            if (!this._socket.connect(options)) {
              this.updateNetTips(NetTipsType.Connecting, false);
              return false;
            }

            if (this._connectOptions == null) {
              options.autoReconnect = options.autoReconnect;
            }

            this._connectOptions = options;
            this.updateNetTips(NetTipsType.Connecting, true);
            return true;
          }

          return false;
        }
        /**
         * 更换线路
         * @param options 
         */


        changeConect(options) {
          if (options == this._connectOptions) {
            return;
          }

          if (this._state != NetNodeState.Closed) {
            this.closeSocket();
          }

          this.connect(options);
        }

        initSocket() {
          this._autoReconnect = this._autoReconnectMax;

          this._socket.onConnected = event => {
            this.onConnected(event);
          };

          this._socket.onJsonMessage = msg => {
            this.onMessage(msg);
          };

          this._socket.onError = event => {
            this.onError(event);
          };

          this._socket.onClosed = event => {
            this.onClosed(event);
          };

          this._socket.onGetKey = () => {
            this.onGetKey();
          };

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
            error: Error()
          }), NetEvent) : NetEvent).ServerHandShake, this.onChecked, this);
        }

        onGetKey() {
          this._state = NetNodeState.Working; // if(this._connectOptions.type == NetNodeType.BaseServer){
          // }else{
          //     this.onChecked();
          // }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
            error: Error()
          }), NetEvent) : NetEvent).ServerCheckLogin);
        }

        initTimer() {
          this._timer.init();

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
            error: Error()
          }), NetEvent) : NetEvent).ServerTimeOut, this.onTimeOut, this);
        }

        onTimeOut(msg) {
          console.log("NetNode onTimeOut!", msg); //超时删除 请求队列

          for (var i = 0; i < this._requests.length; i++) {
            let req = this._requests[i];

            if (msg.name == req.rspName && msg.seq == req.seq) {
              this._requests.splice(i, 1);

              this.destroyInvoke(req);
              i--;
            }
          }
        }

        updateNetTips(tipsType, isShow) {
          if (tipsType == NetTipsType.Requesting) {// EventMgr.emit(NetEvent.ServerRequesting, isShow);
          } else if (tipsType == NetTipsType.Connecting) {} else if (tipsType == NetTipsType.ReConnecting) {}
        } // 网络连接成功


        onConnected(event) {
          console.log("NetNode onConnected!");
          this._autoReconnect = this._autoReconnectMax;
          this.clearTimer(); // 启动心跳

          this.resetHearbeatTimer(); // EventMgr.emit(NetEvent.ServerConnected);
        } // 连接验证成功，进入工作状态


        onChecked() {
          console.log("NetNode onChecked!"); // 关闭连接或重连中的状态显示

          this.updateNetTips(NetTipsType.Connecting, false);
          this.updateNetTips(NetTipsType.ReConnecting, false);

          if (this._requests.length > 0) {
            for (var i = 0; i < this._requests.length; i++) {
              let req = this._requests[i];

              if (req.sended == false) {
                this.socketSend(req);
              }
            } // 如果还有等待返回的请求，启动网络请求层

          }
        } // 接收到一个完整的消息包


        onMessage(msg) {
          // console.log(`NetNode onMessage msg ` ,msg);
          if (msg) {
            // 接受到数据，重新定时收数据计时器
            //推送
            if (msg.seq == 0) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emit(msg.name, msg); // console.log("all_push:",msg.name, msg);
            } else {
              this.cannelMsgTimer(msg); // console.log("this._requests.length:",this._requests.length)

              for (var i = 0; i < this._requests.length; i++) {
                let req = this._requests[i];

                if (msg.name == req.rspName && msg.seq == req.seq && req.sended == true) {
                  this._requests.splice(i, 1);

                  i--; // console.log("返回:",msg.name,"耗时:",new Date().getTime() - req.startTime)

                  (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emit(msg.name, msg, req.otherData);
                  this.destroyInvoke(req);
                  (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                    error: Error()
                  }), EventMgr) : EventMgr).emit((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
                    error: Error()
                  }), NetEvent) : NetEvent).ServerRequestSucess, msg);
                }
              }
            }
          }
        }

        onError(event) {
          console.log("onError:", event); //出错后清空定时器 那后断开服务 尝试链接

          this.clearTimer();
          this.restReq();
          this.tryConnet();
        }

        onClosed(event) {
          console.log("onClosed:", event); //出错后

          this.clearTimer();
          this.tryConnet();
        }

        restReq() {
          for (var i = 0; i < this._requests.length; i++) {
            let req = this._requests[i];
            req.sended = false;
          }
        }
        /**
         * 重连
         */


        tryConnet() {
          console.log("tryConnet", this._autoReconnect);

          if (this.isAutoReconnect()) {
            this.updateNetTips(NetTipsType.ReConnecting, true);

            this._socket.close();

            this._state = NetNodeState.Closed;
            this._reconnectTimer = setTimeout(() => {
              console.log("NetNode tryConnet!");
              this.connect(this._connectOptions);

              if (this._autoReconnect > 0) {
                this._autoReconnect -= 1;
              }
            }, this._reconnetTimeOut);
          } else {
            this._state = NetNodeState.Closed;
          }
        } // 只是关闭Socket套接字（仍然重用缓存与当前状态）


        closeSocket(code, reason) {
          this.clearTimer();
          this._requests.length = 0;
          this._seqId = 1;
          this._autoReconnect = 0;

          if (this._socket) {
            this._socket.close(code, reason);
          } else {
            this._state = NetNodeState.Closed;
          }
        }

        send(send_data, otherData, force = false) {
          var data = this.createInvoke(); //new RequestObject();

          data.json = send_data;
          data.rspName = send_data.name;
          data.otherData = otherData;
          this.sendPack(data, force);
        } // 发起请求，如果当前处于重连中，进入缓存列表等待重连完成后发送


        sendPack(obj, force = false) {
          if (this._state == NetNodeState.Working || force) {
            this.socketSend(obj);

            this._requests.push(obj);
          } else if (this._state == NetNodeState.Checking || this._state == NetNodeState.Connecting) {
            this._requests.push(obj);
          } else if (this._state == NetNodeState.Closed) {
            this.connect(this._connectOptions);

            this._requests.push(obj);
          } else {
            console.error("NetNode request error! current state is " + this._state);
          }

          return false;
        }
        /**
         * 打包发送
         * @param obj 
         */


        socketSend(obj) {
          obj.seq = obj.json.seq = this._seqId;
          obj.startTime = new Date().getTime();

          this._socket.packAndSend(obj.json);

          this._seqId += 1;
          obj.sended = true;

          this._timer.schedule(obj.json, this._receiveTime);
        }
        /**
         * 心跳
         */


        getHearbeat() {
          var obj = this.createInvoke(); //new RequestObject();

          obj.json = {
            name: "heartbeat",
            msg: {
              ctime: new Date().getTime()
            },
            seq: 0
          };
          obj.rspName = "heartbeat";
          obj.seq = 0;
          return obj;
        }
        /********************** 心跳、超时相关处理 *********************/


        cannelMsgTimer(data = null) {
          this._timer.cancel(data);
        }

        resetHearbeatTimer() {
          if (this._keepAliveTimer !== null) {
            clearInterval(this._keepAliveTimer);
          }

          this._keepAliveTimer = setInterval(() => {
            this.sendPack(this.getHearbeat());
          }, this._heartTime);
        }

        clearTimer() {
          if (this._keepAliveTimer !== null) {
            clearTimeout(this._keepAliveTimer);
          }

          if (this._reconnectTimer !== null) {
            clearTimeout(this._reconnectTimer);
          }

          this._timer.destroy();
        }

        isAutoReconnect() {
          return this._autoReconnect != 0;
        }

        rejectReconnect() {
          this._autoReconnect = 0;
          this.clearTimer();
        }

        createInvoke() {
          // console.log("createInvoke_invokePool :",this._invokePool.length)
          if (this._invokePool.length > 0) {
            return this._invokePool.shift();
          }

          return new (_crd && RequestObject === void 0 ? (_reportPossibleCrUseOfRequestObject({
            error: Error()
          }), RequestObject) : RequestObject)();
        }

        destroyInvoke(invoke) {
          invoke.destroy();

          this._invokePool.push(invoke); // console.log("destroyInvoke_invokePool :",this._invokePool.length)

        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NetNode.js.map