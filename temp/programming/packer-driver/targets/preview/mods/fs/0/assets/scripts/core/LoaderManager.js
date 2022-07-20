System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Asset, resources, EventMgr, LoadData, LoadCompleteData, LoaderManager, _crd, LoadDataType;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../utils/EventMgr", _context.meta, extras);
  }

  _export({
    LoadData: void 0,
    LoadCompleteData: void 0,
    default: void 0,
    LoadDataType: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Asset = _cc.Asset;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b0f1aF6DplMApDBfMt8tnL0", "LoaderManager", undefined);

      (function (LoadDataType) {
        LoadDataType[LoadDataType["DIR"] = 0] = "DIR";
        LoadDataType[LoadDataType["FILE"] = 1] = "FILE";
      })(LoadDataType || _export("LoadDataType", LoadDataType = {}));

      _export("LoadData", LoadData = class LoadData {
        constructor(path, loadType, fileType) {
          if (path === void 0) {
            path = "";
          }

          if (loadType === void 0) {
            loadType = LoadDataType.FILE;
          }

          if (fileType === void 0) {
            fileType = Asset;
          }

          _defineProperty(this, "path", "");

          _defineProperty(this, "loadType", LoadDataType.FILE);

          _defineProperty(this, "fileType", Asset);

          this.path = path;
          this.loadType = loadType;
          this.fileType = fileType;
        }

      });

      _export("LoadCompleteData", LoadCompleteData = class LoadCompleteData {
        constructor() {
          _defineProperty(this, "path", "");

          _defineProperty(this, "data", void 0);
        }

      });

      _export("default", LoaderManager = class LoaderManager {
        //单例
        static getInstance() {
          if (this._instance == null) {
            this._instance = new LoaderManager();
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
        }

        constructor() {
          _defineProperty(this, "_isLoading", false);

          _defineProperty(this, "_curIndex", -1);

          _defineProperty(this, "_loadDataList", []);

          _defineProperty(this, "_completePaths", []);

          _defineProperty(this, "_completeAssets", []);

          _defineProperty(this, "_progressCallback", null);

          _defineProperty(this, "_completeCallback", null);

          _defineProperty(this, "_target", null);
        }

        onDestory() {
          this._loadDataList.length = 0;
        }

        loadNext() {
          if (this._curIndex >= this._loadDataList.length) {
            this.onComplete();
            return;
          }

          var data = this._loadDataList[this._curIndex];

          if (data.loadType == LoadDataType.DIR) {
            //加载目录
            resources.loadDir(data.path, data.fileType, (finish, total) => {
              this.onProgress(finish, total);
            }, (error, assets) => {
              if (error == null) {
                this._completePaths.push(data.path);

                this._completeAssets.push(assets);

                this._curIndex++;
                this.loadNext();
              } else {
                this.onComplete(error);
              }
            });
          } else {
            //加载文件
            resources.load(data.path, data.fileType, (finish, total) => {
              this.onProgress(finish, total);
            }, (error, asset) => {
              if (error == null) {
                this._completePaths.push(data.path);

                this._completeAssets.push(asset);

                this._curIndex++;
                this.loadNext();
              } else {
                this.onComplete(error);
              }
            });
          }
        }

        onProgress(finish, total) {
          var percent = 1 / this._loadDataList.length;
          var subPercent = finish / total * percent;
          var totalPercent = Number((subPercent + percent * this._curIndex).toFixed(2));

          if (this._target && this._progressCallback) {
            this._progressCallback.call(this._target, totalPercent);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("load_progress", totalPercent);
        }

        onComplete(error) {
          if (error === void 0) {
            error = null;
          }

          if (this._target && this._completeCallback) {
            this._completeCallback.call(this._target, error, this._completePaths, this._completeAssets);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emit("load_complete");
          this.clearData();
        }

        clearData() {
          this._isLoading = false;
          this._loadDataList.length = 0;
          this._progressCallback = null;
          this._completeCallback = null;
          this._target = null;
          this._completeAssets.length = 0;
          this._completePaths.length = 0;
        }

        startLoad(data, loadProgress, loadComplete, target) {
          if (target === void 0) {
            target = null;
          }

          this.startLoadList([data], loadProgress, loadComplete);
        }

        startLoadList(dataList, loadProgress, loadComplete, target) {
          if (target === void 0) {
            target = null;
          }

          if (this._isLoading) {
            return;
          }

          this.clearData();
          this._isLoading = true;
          this._loadDataList = dataList;
          this._progressCallback = loadProgress;
          this._completeCallback = loadComplete;
          this._target = target;
          this._curIndex = 0;
          this.loadNext();
        }

      });

      _defineProperty(LoaderManager, "_instance", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LoaderManager.js.map