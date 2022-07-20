System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LoginCommand, MapCommand, Apply, Member, Union, UnionProxy, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfLoginCommand(extras) {
    _reporterNs.report("LoginCommand", "../login/LoginCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "../login/LoginProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCityData(extras) {
    _reporterNs.report("MapCityData", "../map/MapCityProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "../map/MapCommand", _context.meta, extras);
  }

  _export({
    Apply: void 0,
    Member: void 0,
    Union: void 0,
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
      MapCommand = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70e67jUNsRAEZxmQRCPpxHm", "UnionProxy", undefined);

      _export("Apply", Apply = class Apply {
        constructor() {
          _defineProperty(this, "id", 0);

          _defineProperty(this, "rid", 0);

          _defineProperty(this, "nick_name", "");
        }

      });

      _export("Member", Member = class Member {
        constructor() {
          _defineProperty(this, "rid", 0);

          _defineProperty(this, "name", "");

          _defineProperty(this, "title", 0);

          _defineProperty(this, "x", 0);

          _defineProperty(this, "y", 0);
        }

        get titleDes() {
          if (this.title == 0) {
            return "盟主";
          }

          if (this.title == 1) {
            return "副盟主";
          }

          return "普通成员";
        }

      });

      _export("Union", Union = class Union {
        constructor() {
          _defineProperty(this, "id", 0);

          _defineProperty(this, "name", "");

          _defineProperty(this, "cnt", 0);

          _defineProperty(this, "notice", "");

          _defineProperty(this, "major", []);
        }

        getChairman() {
          var major = this.major.concat();

          for (var i = 0; i < major.length; i++) {
            if (major[i].title == 0) {
              return major[i];
            }
          }

          return new Member();
        }

        getViceChairman() {
          var major = this.major.concat();

          for (var i = 0; i < major.length; i++) {
            if (major[i].title == 1) {
              return major[i];
            }
          }

          return new Member();
        }

        isMajor(rid) {
          var major = this.major.concat();

          for (var i = 0; i < major.length; i++) {
            if (major[i].rid == rid) {
              return true;
            }
          }

          return false;
        }

      });

      _export("default", UnionProxy = class UnionProxy {
        constructor() {
          _defineProperty(this, "_unionMap", new Map());

          _defineProperty(this, "_menberMap", new Map());

          _defineProperty(this, "_applyMap", new Map());
        }

        clearData() {
          this._unionMap.clear();

          this._menberMap.clear();
        }

        updateUnionList(data) {
          this._unionMap.clear();

          for (var i = 0; i < data.length; i++) {
            var obj = this.createUnion(data[i]);

            this._unionMap.set(obj.id, obj);
          }
        }

        createUnion(data) {
          var obj = new Union();
          obj.id = data.id;
          obj.name = data.name;
          obj.cnt = data.cnt;
          obj.notice = data.notice;
          obj.major = data.major.concat();
          return obj;
        }

        createMember(data) {
          var obj = new Member();
          obj.rid = data.rid;
          obj.name = data.name;
          obj.title = data.title;
          obj.x = data.x;
          obj.y = data.y;
          return obj;
        }

        getUnionList() {
          return Array.from(this._unionMap.values());
        }

        updateMemberList(id, data) {
          var member = [];

          var union = this._unionMap.get(id);

          if (union != null) {
            union.major = [];
          }

          for (var i = 0; i < data.length; i++) {
            var obj = this.createMember(data[i]);
            member.push(obj);

            if (obj.title == 0 || obj.title == 1) {
              union.major.push(obj);
            }
          }

          this._menberMap.set(id, member);
        }

        updateNotice(unionid, text) {
          let union = this._unionMap.get(unionid);

          if (union) {
            union.notice = text;
          }
        }

        updateApplyList(id, data) {
          var apply = [];

          for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            apply.push(obj);
          }

          this._applyMap.set(id, apply);
        }

        updateApply(id, data) {
          var apply = this._applyMap.get(id);

          if (apply != null) {
            apply.push(data);

            this._applyMap.set(id, apply);
          } else {
            var t = [];
            t.push(data);
            this.updateApplyList(id, t);
          }
        }

        isChairman(unionid, rid) {
          let union = this._unionMap.get(unionid);

          if (!union) {
            return false;
          }

          var major = union.major.concat();

          for (var i = 0; i < major.length; i++) {
            if (major[i].rid == rid && major[i].title == 0) {
              return true;
            }
          }

          return false;
        }

        isMeInUnion() {
          let city = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy.getMyMainCity();
          return city.unionId > 0 ? true : false;
        }

        isMeChairman(unionid) {
          var roleData = (_crd && LoginCommand === void 0 ? (_reportPossibleCrUseOfLoginCommand({
            error: Error()
          }), LoginCommand) : LoginCommand).getInstance().proxy.getRoleData();
          return this.isChairman(unionid, roleData.rid);
        }

        getMemberList(id) {
          return this._menberMap.get(id);
        }

        getUnion(id = 0) {
          return this._unionMap.get(id);
        }

        getApplyCnt(id = 0) {
          let t = this._applyMap.get(id);

          if (t == null) {
            return 0;
          }

          console.log("getApplyCnt:", t);
          return t.length;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UnionProxy.js.map