System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, NodePool, instantiate, MapCommand, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, MapBaseLayerLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "./MapCommand", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      MapCommand = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6875amra0tNYaW85tKSQLpy", "MapBaseLayerLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MapBaseLayerLogic = (_dec = ccclass('MapBaseLayerLogic'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = (_temp = class MapBaseLayerLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "parentLayer", _descriptor, this);

          _initializerDefineProperty(this, "entryPrefab", _descriptor2, this);

          _defineProperty(this, "_cmd", void 0);

          _defineProperty(this, "_itemPool", new NodePool());

          _defineProperty(this, "_itemMap", new Map());
        }

        onLoad() {
          this._cmd = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance();
        }

        onDestroy() {
          this._cmd = null;

          this._itemMap.forEach((value, key) => {
            value.clear();
          });

          this._itemMap.clear();

          this._itemMap = null;

          this._itemPool.clear();

          this._itemPool = null;
        }

        addItem(areaIndex, data) {
          if (this._itemMap.has(areaIndex)) {
            var id = this.getIdByData(data);
            var item = this.getItem(areaIndex, id);

            if (item == null) {
              item = this.createItem();
              item.parent = this.parentLayer;

              var list = this._itemMap.get(areaIndex);

              list.set(this.getIdByData(data), item);
            }

            this.updateItem(areaIndex, data, item);
            return item;
          }

          return null;
        }

        updateItem(areaIndex, data, item) {
          if (item === void 0) {
            item = null;
          }

          if (this._itemMap.has(areaIndex)) {
            var realItem = item;

            if (item == null) {
              var id = this.getIdByData(data);
              realItem = this.getItem(areaIndex, id);
            }

            if (realItem) {
              this.setItemData(realItem, data);
            }
          }
        } //子类重写


        setItemData(item, data) {}

        removeItem(areaIndex, id) {
          var list = this._itemMap.get(areaIndex);

          if (list.has(id)) {
            var item = list.get(id);

            this._itemPool.put(item);

            list.delete(id);
            return true;
          }

          return false;
        }

        getItem(areaIndex, id) {
          var list = this._itemMap.get(areaIndex);

          if (list.has(id)) {
            return list.get(id);
          }

          return null;
        }

        createItem() {
          if (this._itemPool.size() > 0) {
            return this._itemPool.get();
          }

          var node = instantiate(this.entryPrefab);
          return node;
        }

        removeArea(areaIndex) {
          if (this._itemMap.has(areaIndex)) {
            var list = this._itemMap.get(areaIndex);

            list.forEach((node, key) => {
              this._itemPool.put(node);
            });
            list.clear();

            this._itemMap.delete(areaIndex);
          }
        }

        addArea(areaIndex) {
          if (this._itemMap.has(areaIndex) == false) {
            this._itemMap.set(areaIndex, new Map());
          }
        }

        udpateShowAreas(addIndexs, removeIndexs) {
          for (var i = 0; i < removeIndexs.length; i++) {
            this.removeArea(removeIndexs[i]);
          }

          for (var _i = 0; _i < addIndexs.length; _i++) {
            this.addArea(addIndexs[_i]);
          }
        }

        initNodeByArea(areaIndex) {}

        getIdByData(data) {
          return data.id;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "parentLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "entryPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapBaseLayerLogic.js.map