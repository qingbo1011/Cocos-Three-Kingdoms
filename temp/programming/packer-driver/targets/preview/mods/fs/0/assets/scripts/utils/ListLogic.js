System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ScrollView, Prefab, Node, NodePool, EventHandler, UITransform, instantiate, CCBoolean, CCString, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _temp, _crd, ccclass, property, ListLogic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ScrollView = _cc.ScrollView;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      NodePool = _cc.NodePool;
      EventHandler = _cc.EventHandler;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
      CCBoolean = _cc.CCBoolean;
      CCString = _cc.CCString;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "551e9No1LFKz7GzS5YFonQR", "ListLogic", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ListLogic = (_dec = ccclass('ListLogic'), _dec2 = property(ScrollView), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(CCString), _dec6 = property(CCBoolean), _dec7 = property(CCBoolean), _dec8 = property([EventHandler]), _dec9 = property(CCBoolean), _dec(_class = (_class2 = (_temp = class ListLogic extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "itemNode", _descriptor3, this);

          _initializerDefineProperty(this, "itemLogicScriptName", _descriptor4, this);

          _initializerDefineProperty(this, "isHorizontal", _descriptor5, this);

          _initializerDefineProperty(this, "columnCount", _descriptor6, this);

          _initializerDefineProperty(this, "autoColumnCount", _descriptor7, this);

          _initializerDefineProperty(this, "spaceColumn", _descriptor8, this);

          _initializerDefineProperty(this, "spaceRow", _descriptor9, this);

          _initializerDefineProperty(this, "updateInterval", _descriptor10, this);

          _initializerDefineProperty(this, "scale", _descriptor11, this);

          _initializerDefineProperty(this, "itemClickEvents", _descriptor12, this);

          _initializerDefineProperty(this, "isVirtual", _descriptor13, this);

          _defineProperty(this, "_curOffset", 0);

          _defineProperty(this, "_maxOffset", 0);

          _defineProperty(this, "_startIndex", 0);

          _defineProperty(this, "_itemCount", 0);

          _defineProperty(this, "_updateTimer", 0);

          _defineProperty(this, "_curIndex", 0);

          _defineProperty(this, "_newOffset", 0);

          _defineProperty(this, "_initContentPos", 0);

          _defineProperty(this, "_maxRowColSize", 0);

          _defineProperty(this, "_itemWidth", 0);

          _defineProperty(this, "_itemHeight", 0);

          _defineProperty(this, "_isUpdateList", false);

          _defineProperty(this, "_itemPool", null);

          _defineProperty(this, "_items", []);

          _defineProperty(this, "_datas", null);
        }

        onLoad() {
          this._updateTimer = 0; //上次更新间隔时间

          this._curIndex = -1;
          this._newOffset = 0;
          this._initContentPos = 0;
          this._maxRowColSize = 0; //当前一行或者一列可以显示的最大宽度或者高度

          this._itemWidth = this._itemHeight = 0;

          if (this.itemPrefab) {
            this._itemWidth = this.itemPrefab.data.getComponent(UITransform).width * this.scale; //item宽度

            this._itemHeight = this.itemPrefab.data.getComponent(UITransform).height * this.scale; //item高度
          } else if (this.itemNode) {
            this.itemNode.active = false;
            this._itemWidth = this.itemNode.getComponent(UITransform).width * this.scale; //item宽度

            this._itemHeight = this.itemNode.getComponent(UITransform).height * this.scale; //item高度
          }

          if (this.isHorizontal) {
            this.scrollView.content.getComponent(UITransform).anchorX = 0;
          } else {
            this.scrollView.content.getComponent(UITransform).anchorY = 1;
          }

          this._isUpdateList = false; //是否正在更新列表

          this._itemPool = new NodePool(); //item缓存对象池

          this._items = []; //item列表

          this.updateList();
        }

        onDestroy() {
          this._itemPool.clear();

          this._items.length = 0;
          this._datas = null;
        }

        update(dt) {
          this._updateTimer += dt;

          if (this._updateTimer < this.updateInterval) {
            return; //更新间隔太短
          }

          this._updateTimer = 0; // if (this.isVirtual == false) {
          //     return;//非虚拟列表 不需要刷新位置和数据
          // }

          if (this._isUpdateList) {
            return; //正在重新构建列表的时候 是不刷新的
          }

          var curOffset = 0;

          if (this.isHorizontal) {
            curOffset = this._initContentPos - this.scrollView.content.position.x;
          } else {
            curOffset = this.scrollView.content.position.y - this._initContentPos;
          }

          curOffset = Math.max(Math.min(curOffset, this._maxOffset), 0);
          this.setCurOffset(curOffset);
        }

        setCurOffset(curOffset) {
          if (this._datas == null || this._datas.length == 0) {
            return; //没有数据不执行刷新
          }

          if (this._items == null || this._items.length == 0) {
            return; //没有显示对象也不执行刷新
          }

          if (this._curOffset != curOffset) {
            // console.log("setCurOffset", this._curOffset, curOffset);
            this._curOffset = curOffset;

            if (this.isVirtual) {
              if (this.isHorizontal) {
                var startIndex = Math.floor(this._curOffset / (this._itemWidth + this.spaceColumn)) * this.columnCount;
                this.setStartIndex(startIndex);
              } else {
                var startIndex = Math.floor(this._curOffset / (this._itemHeight + this.spaceRow)) * this.columnCount;
                this.setStartIndex(startIndex);
              }
            } else {
              this.setStartIndex(0); //非虚拟列表startIndex不变
            } //console.log("updatelist11 y", this.scrollView.content.y);

          }
        }

        setStartIndex(index) {
          if (this._startIndex != index && this._items.length > 0) {
            //console.log("setStartIndex", this._startIndex, index);
            this._startIndex = index;
            var suit = this.scrollView.content.getComponent(UITransform);

            for (var i = 0; i < this._items.length; i++) {
              var item = this._items[i];
              var index1 = this._startIndex + i;
              var iuit = item.getComponent(UITransform);
              var pos = item.position.clone();

              if (this.isHorizontal) {
                var _row = i % this.columnCount;

                var _toY = _row * (this._itemHeight + this.spaceRow) + iuit.anchorY * this._itemHeight - suit.height * suit.anchorY;

                pos.y = -_toY - (suit.height - this._maxRowColSize) / 2;
                pos.x = Math.floor(index1 / this.columnCount) * (this._itemWidth + this.spaceColumn) + this.spaceColumn + (1 - iuit.anchorX) * this._itemWidth;
              } else {
                var _col = i % this.columnCount;

                var _toX = _col * (this._itemWidth + this.spaceColumn) + iuit.anchorX * this._itemWidth - suit.width * suit.anchorX;

                pos.x = _toX + (suit.width - this._maxRowColSize) / 2;
                pos.y = -Math.floor(index1 / this.columnCount) * (this._itemHeight + this.spaceRow) - this.spaceRow - (1 - iuit.anchorY) * this._itemHeight;
              }

              item.itemIdx = index1;
              item.setPosition(pos); //console.log("update item position x: " + item.x + ", y: " + item.y);
            }

            this.updateItems();
          }
        }
        /**设置item实例数量*/


        updateItemCount(count) {
          if (this._itemCount != count) {
            this._itemCount = count; //清空列表

            var children = this.scrollView.content.children.slice();
            this.scrollView.content.removeAllChildren();

            for (var i = 0; i < children.length; i++) {
              var item = children[i];

              if (item.isValid) {
                item.off(Node.EventType.TOUCH_END, this.onItemClick, this);

                this._itemPool.put(item); //加入对象池

              }
            }

            this._items.length = 0;

            for (var i = 0; i < this._itemCount; i++) {
              var _item = this.createItem();

              _item.active = false;
              _item.itemIdx = i; //在item上纪录当前下标

              _item.on(Node.EventType.TOUCH_END, this.onItemClick, this);

              this.scrollView.content.addChild(_item);

              this._items.push(_item);
            }

            return true;
          }

          return false;
        }
        /**
        * 更新列表
        */


        updateList() {
          if (this._datas == null || this._items == null || this._itemPool == null) {
            return;
          } //计算布局


          if (this._itemWidth <= 0 || this._itemHeight <= 0) {
            console.log("the list item has no width or height");
            return;
          }

          if (this._datas.length <= 0) {
            this._curOffset = this._startIndex = -1; //重置纪录

            this.hideItems();
            return;
          }

          this._isUpdateList = true;
          this.scrollView.stopAutoScroll(); //更新时 停止滚动

          var rowCount = 1;
          var showCount = 1;
          var dataLen = this._datas.length;
          var uit = this.scrollView.content.parent.getComponent(UITransform);
          var cuit = this.scrollView.content.getComponent(UITransform);

          if (this.isHorizontal) {
            if (this.autoColumnCount) {
              //自动排列
              this.columnCount = Math.floor(uit.height / this._itemHeight);
            }

            if (this.columnCount < 1) {
              this.columnCount = 1;
            }

            this._maxRowColSize = this.columnCount * (this._itemHeight + this.spaceRow) - this.spaceRow;
            rowCount = Math.ceil(uit.width / (this._itemWidth + this.spaceColumn)) + 1;

            if (this.isVirtual) {
              showCount = rowCount * this.columnCount;
            } else {
              showCount = dataLen;
            }

            cuit.width = Math.ceil(dataLen / this.columnCount) * (this._itemWidth + this.spaceColumn);
            this._maxOffset = this.scrollView.getMaxScrollOffset().x;
            this._initContentPos = uit.width * (0 - uit.anchorX);
          } else {
            if (this.autoColumnCount) {
              //自动排列
              this.columnCount = Math.floor(uit.width / this._itemWidth);
            }

            if (this.columnCount < 1) {
              this.columnCount = 1;
            }

            this._maxRowColSize = this.columnCount * (this._itemWidth + this.spaceColumn) - this.spaceColumn;
            rowCount = Math.ceil(uit.height / (this._itemHeight + this.spaceRow)) + 1;

            if (this.isVirtual) {
              showCount = rowCount * this.columnCount;
            } else {
              showCount = dataLen;
            }

            cuit.height = Math.ceil(dataLen / this.columnCount) * (this._itemHeight + this.spaceRow);
            this._maxOffset = this.scrollView.getMaxScrollOffset().y;
            this._initContentPos = uit.height * (1 - uit.anchorY);
          }

          var isItemChange = this.updateItemCount(showCount);
          this._newOffset = Math.max(Math.min(this._newOffset, this._maxOffset), 0);

          if (isItemChange || this._newOffset != this._curOffset) {
            var pos = this.scrollView.content.position.clone();
            this._curOffset = this._newOffset;

            if (this.isHorizontal) {
              pos.x = -Math.abs(this._initContentPos - this._newOffset);
            } else {
              pos.y = Math.abs(this._initContentPos + this._newOffset);
            }

            this._curOffset = -1; //重置纪录

            this._startIndex = -1; //重置纪录

            this.setCurOffset(this._newOffset);
            this.scrollView.content.setPosition(pos);
          } else {
            this.updateItems();
          }

          this._isUpdateList = false; //console.log("updatelist y", this.scrollView.content.y);

          console.log("this.scrollView:", this.scrollView);
        } //刷新所有item数据


        updateItems() {
          for (var i = 0; i < this._items.length; i++) {
            var item = this._items[i];
            console.log("updateItems:", item, item.itemIdx, this._datas.length, item.itemIdx < this._datas.length);
            item.active = item.itemIdx < this._datas.length;

            if (item.active) {
              this.updateItem(item, item.itemIdx);
              this.selectItem(item, item.itemIdx == this._curIndex);
            } //console.log("update item i: " + item.itemIdx + ", active: " + item.active);

          }
        }

        hideItems() {
          for (var i = 0; i < this._items.length; i++) {
            this._items[i].active = false;
          }
        }

        updateItem(item, index) {
          var comp = null;

          if (this.itemLogicScriptName) {
            comp = item.getComponent(this.itemLogicScriptName);

            if (comp && comp.updateItem) {
              comp.updateItem(this._datas[index], index);
            }
          }
        }
        /**
         * 根据下标获取item对象
         */


        getItem(index) {
          var item = null;

          if (this._items) {
            for (var i = 0; i < this._items.length; i++) {
              if (this._items[i].itemIdx == index) {
                item = this._items[i];
                break;
              }
            }
          }

          return item;
        }
        /**
         * 选中item
         */


        selectItem(item, isSelected) {
          var comp = null;

          if (this.itemLogicScriptName) {
            comp = item.getComponent(this.itemLogicScriptName);

            if (comp && comp.isSelected) {
              comp.isSelected(isSelected);
            }
          }
        }
        /**
         * 创建item
         */


        createItem() {
          var item = null;

          if (this._itemPool.size() > 0) {
            // 通过 size 接口判断对象池中是否有空闲的对象
            item = this._itemPool.get();
          } else if (this.itemPrefab) {
            // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 instantiate 重新创建
            item = instantiate(this.itemPrefab);
          } else if (this.itemNode) {
            // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 instantiate 重新创建
            item = instantiate(this.itemNode);
          }

          item.scale = new Vec3(this.scale, this.scale, this.scale);
          item.acitve = true;
          item.on(Node.EventType.TOUCH_END, this.onItemClick, this);
          return item;
        }

        setIndex(index) {
          if (this._curIndex != index) {
            if (this._curIndex >= 0 && this._curIndex < this._datas.length) {
              var oldItem = this.getItem(this._curIndex);

              if (oldItem) {
                this.selectItem(oldItem, false);
              }
            }

            var newItem = this.getItem(index);

            if (newItem) {
              this.selectItem(newItem, true);
            }

            this._curIndex = index;
          }
        }
        /**
         * item点击回调
         */


        onItemClick(event) {
          var index = event.target.itemIdx;
          this.setIndex(index);
          this.itemClickEvents.forEach(function (handler) {
            handler.emit([this._datas[index], index, event.target]);
          }.bind(this));
        }
        /**
         * 设置列表数据
         * scrollOffset 没有传值代表刷新到初始位置 其他整数代表刷新到当前位置的相对偏移量
         */


        setData(data, scrollOffset) {
          this._datas = data;

          if (scrollOffset != null && scrollOffset != undefined && !isNaN(scrollOffset)) {
            this._newOffset = this._curOffset + scrollOffset;
          } else {
            this._newOffset = 0;
          } // console.log("list logiv setData", data, scrollOffset, this._newOffset);


          this.updateList();
        }

        scrollToIndex(index) {
          if (this._datas == null || this._items == null || this._itemPool == null) {
            return;
          }

          if (this._isUpdateList) {
            return; //正在重新构建列表的时候 是不刷新的
          }

          if (index < 0 || index >= this._datas.length) {
            return; //数据不合法
          }

          var curOffset = 0;

          if (this.isHorizontal) {
            curOffset = Math.ceil(index / this.columnCount) * (this._itemWidth + this.spaceColumn);
          } else {
            curOffset = Math.ceil(index / this.columnCount) * (this._itemHeight + this.spaceRow);
          }

          curOffset = Math.max(Math.min(curOffset, this._maxOffset), 0);
          this.setCurOffset(curOffset);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemLogicScriptName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "isHorizontal", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "columnCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "autoColumnCount", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "spaceColumn", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spaceRow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "updateInterval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "scale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "itemClickEvents", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "isVirtual", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ListLogic.js.map