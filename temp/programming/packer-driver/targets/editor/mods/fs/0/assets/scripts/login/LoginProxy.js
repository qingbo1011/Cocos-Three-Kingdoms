System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Role, LoginProxy, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    Role: void 0,
    default: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "466181/uG9OiJkKSv1n8p0K", "LoginProxy", undefined);

      _export("Role", Role = class Role {
        constructor() {
          _defineProperty(this, "rid", 0);

          _defineProperty(this, "uid", 0);

          _defineProperty(this, "nickName", "");

          _defineProperty(this, "sex", 0);

          _defineProperty(this, "sid", 0);

          _defineProperty(this, "balance", 0);

          _defineProperty(this, "headId", 0);

          _defineProperty(this, "profile", "");
        }

      });

      _export("default", LoginProxy = class LoginProxy {
        constructor() {
          _defineProperty(this, "_loginData", null);

          _defineProperty(this, "serverId", 0);

          _defineProperty(this, "_roleData", null);

          _defineProperty(this, "_roleResData", null);

          _defineProperty(this, "_token", null);
        }

        clear() {
          this._loginData = null;
          this._roleData = null;
          this._roleResData = null;
          this._token = "";
        }

        saveEnterData(data) {
          if (data.role) {
            this.setRoleData(data.role);
          }

          if (data.role_res) {
            this.setRoleResData(data.role_res);
          }

          if (data.token) {
            this._token = data.token;
          }
        }

        setRoleResData(data) {
          this._roleResData = data;
        }

        setRoleData(data) {
          if (!this._roleData) {
            this._roleData = new Role();
          }

          this._roleData.rid = data.rid;
          this._roleData.uid = data.uid;
          this._roleData.nickName = data.nickName;
          this._roleData.sex = data.sex;
          this._roleData.sid = data.sid;
          this._roleData.balance = data.balance;
          this._roleData.headId = data.headId;
          this._roleData.profile = data.profile;
        }

        getRoleData() {
          return this._roleData;
        }

        getRoleResData() {
          return this._roleResData;
        }

        saveLoginData(data) {
          this._loginData = data;
        }

        getLoginData() {
          return this._loginData;
        }

        getToken() {
          return this._token;
        }

        getSession() {
          return this._loginData.session;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LoginProxy.js.map