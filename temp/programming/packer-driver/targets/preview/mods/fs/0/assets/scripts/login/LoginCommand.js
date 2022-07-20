System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HttpConfig, ServerConfig, HttpManager, NetManager, Tools, LoginProxy, NetEvent, MapCommand, LocalCache, DateUtil, EventMgr, Md5, LoginCommand, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfHttpConfig(extras) {
    _reporterNs.report("HttpConfig", "../config/HttpConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerConfig(extras) {
    _reporterNs.report("ServerConfig", "../config/ServerConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpManager(extras) {
    _reporterNs.report("HttpManager", "../network/http/HttpManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetManager(extras) {
    _reporterNs.report("NetManager", "../network/socket/NetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTools(extras) {
    _reporterNs.report("Tools", "../utils/Tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginProxy(extras) {
    _reporterNs.report("LoginProxy", "./LoginProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetEvent(extras) {
    _reporterNs.report("NetEvent", "../network/socket/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../map/MapCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalCache(extras) {
    _reporterNs.report("LocalCache", "../utils/LocalCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDateUtil(extras) {
    _reporterNs.report("DateUtil", "../utils/DateUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../utils/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMd(extras) {
    _reporterNs.report("Md5", "../libs/crypto/md5", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      HttpConfig = _unresolved_2.HttpConfig;
    }, function (_unresolved_3) {
      ServerConfig = _unresolved_3.ServerConfig;
    }, function (_unresolved_4) {
      HttpManager = _unresolved_4.HttpManager;
    }, function (_unresolved_5) {
      NetManager = _unresolved_5.NetManager;
    }, function (_unresolved_6) {
      Tools = _unresolved_6.Tools;
    }, function (_unresolved_7) {
      LoginProxy = _unresolved_7.default;
    }, function (_unresolved_8) {
      NetEvent = _unresolved_8.NetEvent;
    }, function (_unresolved_9) {
      MapCommand = _unresolved_9.default;
    }, function (_unresolved_10) {
      LocalCache = _unresolved_10.LocalCache;
    }, function (_unresolved_11) {
      DateUtil = _unresolved_11.default;
    }, function (_unresolved_12) {
      EventMgr = _unresolved_12.EventMgr;
    }, function (_unresolved_13) {
      Md5 = _unresolved_13.Md5;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0f449b0sJHkok8Iv4DIgc/", "LoginCommand", undefined);

      _export("default", LoginCommand = class LoginCommand {
        //单例
        static getInstance() {
          if (this._instance == null) {
            this._instance = new LoginCommand();
          }

          return this._instance;
        }

        static destory() {
          if (this._instance) {
            this._instance.onDestory();

            this._instance = null;
            return true;
          }

          return false;
        } //数据model


        constructor() {
          _defineProperty(this, "_proxy", new (_crd && LoginProxy === void 0 ? (_reportPossibleCrUseOfLoginProxy({
            error: Error()
          }), LoginProxy) : LoginProxy)());

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
            error: Error()
          }), NetEvent) : NetEvent).ServerCheckLogin, this.onServerConneted, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).register.name, this.onRegister, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).account_login, this.onAccountLogin, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).role_enterServer, this.onEnterServer, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).account_reLogin, this.onAccountRelogin, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).role_create, this.onRoleCreate, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).account_logout, this.onAccountLogout, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).account_robLogin, this.onAccountRobLogin, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).on((_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).chat_login, this.onChatLogin, this);
        }

        onDestory() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).targetOff(this);
        } //抢登录


        onAccountRobLogin() {
          console.log("onAccountRobLogin");
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("robLoginUI");
        }
        /**注册回调*/


        onRegister(data, otherData) {
          console.log("LoginProxy register:", data, otherData);

          if (data.code == 0) {
            this.accountLogin(otherData.username, otherData.password);
            (_crd && LocalCache === void 0 ? (_reportPossibleCrUseOfLocalCache({
              error: Error()
            }), LocalCache) : LocalCache).setLoginValidation(otherData);
          }
        }
        /**登录回调*/


        onAccountLogin(data, otherData) {
          console.log("LoginProxy  login:", data, otherData);

          if (data.code == 0) {
            // this._proxy.loginData = data.msg;
            this._proxy.saveLoginData(data.msg);

            (_crd && LocalCache === void 0 ? (_reportPossibleCrUseOfLocalCache({
              error: Error()
            }), LocalCache) : LocalCache).setLoginValidation(otherData);
            this.role_enterServer(this._proxy.getSession());
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("loginComplete", data.code);
          }
        }
        /**进入服务器回调*/


        onEnterServer(data, isLoadMap) {
          console.log("LoginProxy  enter:", data, isLoadMap); //没有创建打开创建

          if (data.code == 9) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("CreateRole");
            (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
              error: Error()
            }), DateUtil) : DateUtil).setServerTime(data.msg.time);
          } else {
            if (data.code == 0) {
              this._proxy.saveEnterData(data.msg);

              (_crd && DateUtil === void 0 ? (_reportPossibleCrUseOfDateUtil({
                error: Error()
              }), DateUtil) : DateUtil).setServerTime(data.msg.time); // var roleData = this._proxy.getRoleData();
              // this.chatLogin(roleData.rid, data.msg.token, roleData.nickName);
              //进入游戏

              if (isLoadMap == true) {
                console.log("enterServerComplete");
                (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
                  error: Error()
                }), MapCommand) : MapCommand).getInstance().enterMap();
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emit("enterServerComplete");
              } else {
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emit((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
                  error: Error()
                }), NetEvent) : NetEvent).ServerHandShake);
              }
            }
          }
        }
        /**重连回调*/


        onServerConneted() {
          //重新连接成功 重新登录
          var loginData = this._proxy.getLoginData();

          var roleData = this._proxy.getRoleData();

          console.log("LoginProxy  conneted:", loginData, roleData);

          if (loginData) {
            this.account_reLogin(loginData.session);
          } else {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit((_crd && NetEvent === void 0 ? (_reportPossibleCrUseOfNetEvent({
              error: Error()
            }), NetEvent) : NetEvent).ServerHandShake);
          }
        }
        /**重新登录回调回调*/


        onAccountRelogin(data) {
          //断线重新登录
          console.log("LoginProxy  relogin:", data);

          if (data.code == 0) {
            // EventMgr.emit(NetEvent.ServerHandShake);
            this.role_enterServer(this._proxy.getSession(), false);
          }
        }
        /**创建角色回调*/


        onRoleCreate(data) {
          //重换成功再次调用
          if (data.code == 0) {
            this.role_enterServer(this._proxy.getSession());
          }
        }
        /**登出回调*/


        onAccountLogout(data) {
          //重换成功再次调用
          if (data.code == 0) {
            this._proxy.clear();

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emit("enter_login");
          }
        } //聊天登录


        onChatLogin(data) {
          console.log("onChatLogin:", data);
        }

        get proxy() {
          return this._proxy;
        }
        /**
         * register
         * @param data 
         */


        register(name, password) {
          var pwd = (_crd && Md5 === void 0 ? (_reportPossibleCrUseOfMd({
            error: Error()
          }), Md5) : Md5).encrypt(password);
          var params = "username=" + name + "&password=" + pwd + "&hardware=" + (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
            error: Error()
          }), Tools) : Tools).getUUID();
          console.log("register:", params);
          var otherData = {
            username: name,
            password: password
          };
          (_crd && HttpManager === void 0 ? (_reportPossibleCrUseOfHttpManager({
            error: Error()
          }), HttpManager) : HttpManager).getInstance().doGet((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).register.name, (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).register.url, params, otherData);
        }
        /**
         * login
         * @param data 
         */


        accountLogin(name, password) {
          var api_name = (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).account_login;
          var pwd = (_crd && Md5 === void 0 ? (_reportPossibleCrUseOfMd({
            error: Error()
          }), Md5) : Md5).encrypt(password);
          var send_data = {
            name: api_name,
            msg: {
              username: name,
              password: pwd,
              hardware: (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
                error: Error()
              }), Tools) : Tools).getUUID()
            }
          };
          console.log("accountLogin:", send_data);
          var otherData = {
            username: name,
            password: password
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(send_data, otherData);
        }
        /**
         * create
         * @param uid 
         * @param nickName 
         * @param sex 
         * @param sid 
         * @param headId 
         */


        role_create(uid, nickName, sex, sid, headId) {
          if (sex === void 0) {
            sex = 0;
          }

          if (sid === void 0) {
            sid = 0;
          }

          if (headId === void 0) {
            headId = 0;
          }

          var api_name = (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).role_create;
          var send_data = {
            name: api_name,
            msg: {
              uid: uid,
              nickName: nickName,
              sex: sex,
              sid: sid,
              headId: headId
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(send_data);
        }

        role_enterServer(session, isLoadMap) {
          if (isLoadMap === void 0) {
            isLoadMap = true;
          }

          var api_name = (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).role_enterServer;
          var send_data = {
            name: api_name,
            msg: {
              session: session
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(send_data, isLoadMap);
        }
        /**
         * 重新登录
         * @param session 
         */


        account_reLogin(session) {
          var api_name = (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).account_reLogin;
          var send_data = {
            name: api_name,
            msg: {
              session: session,
              hardware: (_crd && Tools === void 0 ? (_reportPossibleCrUseOfTools({
                error: Error()
              }), Tools) : Tools).getUUID()
            }
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(send_data);
        }
        /**
         * logout
         */


        account_logout() {
          var api_name = (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).account_logout;
          var send_data = {
            name: api_name,
            msg: {}
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(send_data);
        }

        chatLogin(rid, token, nick_name) {
          if (nick_name === void 0) {
            nick_name = '';
          }

          var api_name = (_crd && ServerConfig === void 0 ? (_reportPossibleCrUseOfServerConfig({
            error: Error()
          }), ServerConfig) : ServerConfig).chat_login;
          var send_data = {
            name: api_name,
            msg: {
              rid: rid,
              token: token,
              nickName: nick_name
            }
          };
          console.log("send_data:", send_data);
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().send(send_data);
        }

      });

      _defineProperty(LoginCommand, "_instance", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LoginCommand.js.map