System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, size, v2, UITransform, view, MapCommand, MapUtil, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMapCommand(extras) {
    _reporterNs.report("MapCommand", "./MapCommand", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      size = _cc.size;
      v2 = _cc.v2;
      UITransform = _cc.UITransform;
      view = _cc.view;
    }, function (_unresolved_2) {
      MapCommand = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8439emXefxKwbZpxvCZZCcZ", "MapUtil", undefined);

      _export("default", MapUtil = class MapUtil {
        //地图像素大小
        //地图锚点偏移量
        //格子大小
        //地图大小 宽高需要相同
        //地图 (0, 0)点对应的像素坐标
        //划分区域的格子大小
        // 初始化地图配置
        static initMapConfig(map) {
          var uit = map.node.getComponent(UITransform);
          this._mapPixelSize = size(uit.width, uit.height);
          this._mapOffsetPoint = v2(uit.width * uit.anchorX, uit.height * uit.anchorY);
          this._tileSize = map.getTileSize();
          this._mapSize = map.getMapSize();
          this._mapPixelSize = size(uit.width, uit.height);
          this._zeroPixelPoint.x = this._mapSize.width * this._tileSize.width * 0.5;
          this._zeroPixelPoint.y = this._mapSize.height * this._tileSize.height - this._tileSize.height * 0.5;
          var vsize = view.getVisibleSize(); //划分区域的大小

          var showH = Math.min(Math.ceil(vsize.height / this._tileSize.height / 2) * 2 + 2, this._mapSize.height);
          this._areaCellSize = size(showH, showH);
          this._areaSize = size(Math.ceil(this._mapSize.width / showH), Math.ceil(this._mapSize.height / showH));
        }
        /**地图的像素大小*/


        static get mapPixcelSize() {
          return this._mapPixelSize;
        }

        static get mapSize() {
          return this._mapSize;
        }
        /**格子数量*/


        static get mapCellCount() {
          return this._mapSize.width * this._mapSize.height;
        }
        /**每个区域包含的格子数量*/


        static get areaCellSize() {
          return this._areaCellSize;
        }
        /**区域大小*/


        static get areaSize() {
          return this._areaSize;
        }
        /**区域数量*/


        static get areaCount() {
          return this._areaSize.width * this._areaSize.height;
        }
        /**获取格子id*/


        static getIdByCellPoint(x, y) {
          return x + y * this._mapSize.width;
        }
        /**获取格子坐标*/


        static getCellPointById(id) {
          return v2(id % this._mapSize.width, Math.floor(id / this._mapSize.width));
        }
        /**获取区域id*/


        static getIdByAreaPoint(x, y) {
          return x + y * this._areaSize.width;
        }
        /**获取区域坐标*/


        static getAreaPointById(id) {
          return v2(id % this._areaSize.width, Math.floor(id / this._areaSize.width));
        }
        /**获取格子为中点的九宫格id列表*/


        static get9GridCellIds(id) {
          return [id + this._mapSize.width - 1, id + this._mapSize.width, id + this._mapSize.width + 1, id - 1, id, id + 1, id - this._mapSize.width - 1, id - this._mapSize.width, id - this._mapSize.width + 1];
        }

        static getSideIdsForRoleCity(id) {
          return [id + this._mapSize.width * 2 - 2, id + this._mapSize.width * 2 - 1, id + this._mapSize.width * 2, id + this._mapSize.width * 2 + 1, id + this._mapSize.width * 2 + 2, id + this._mapSize.width - 2, id + this._mapSize.width + 2, id - 2, id + 2, id - this._mapSize.width - 2, id - this._mapSize.width + 2, id - this._mapSize.width * 2 - 2, id - this._mapSize.width * 2 - 1, id - this._mapSize.width - 1, id - this._mapSize.width * 2 + 1, id - this._mapSize.width * 2 + 2];
        }

        static getSideIdsForSysCity(x, y, level) {
          var ids = [];
          var dis = 0;

          if (level >= 8) {
            dis = 3;
          } else if (level >= 5) {
            dis = 2;
          } else {
            dis = 1;
          } //上


          for (var _tx = x - dis; _tx <= x + dis; _tx++) {
            var ty = y + dis;
            var id = MapUtil.getIdByCellPoint(_tx, ty);
            ids.push(id);
          } //下


          for (var _tx2 = x - dis; _tx2 <= x + dis; _tx2++) {
            var ty = y - dis;
            var id = MapUtil.getIdByCellPoint(_tx2, ty);
            ids.push(id);
          } //左


          for (var _ty = y - dis; _ty <= y + dis; _ty++) {
            var tx = x - dis;
            var id = MapUtil.getIdByCellPoint(tx, _ty);
            ids.push(id);
          } //右


          for (var _ty2 = y - dis; _ty2 <= y + dis; _ty2++) {
            var tx = x + dis;
            var id = MapUtil.getIdByCellPoint(tx, _ty2);
            ids.push(id);
          }

          return ids;
        }
        /**获取区域为中点的九宫格id列表*/


        static get9GridAreaIds(id) {
          return [id + this._areaSize.width - 1, id + this._areaSize.width, id + this._areaSize.width + 1, id - 1, id, id + 1, id - this._areaSize.width - 1, id - this._areaSize.width, id - this._areaSize.width + 1];
        }

        static get9GridVaildAreaIds(id) {
          var list = [];
          var totalList = this.get9GridAreaIds(id);

          for (var i = 0; i < totalList.length; i++) {
            if (this.isVaildAreaId(totalList[i])) {
              list.push(totalList[i]);
            }
          }

          return list;
        }

        static getAreaPointByCellPoint(x, y) {
          return v2(Math.floor(x / this._areaCellSize.width), Math.floor(y / this._areaCellSize.height));
        }
        /**获取区域id*/


        static getAreaIdByCellPoint(x, y) {
          var point = this.getAreaPointByCellPoint(x, y);
          return this.getIdByAreaPoint(point.x, point.y);
        }

        static getStartCellPointByAreaPoint(x, y) {
          return v2(x * this._areaCellSize.width, y * this._areaCellSize.height);
        }

        static getEndCellPointByAreaPoint(x, y) {
          return v2((x + 1) * this._areaCellSize.width, (y + 1) * this._areaCellSize.height);
        }

        static getVaildAreaIdsByPixelPoints() {
          var list = [];

          for (var _len = arguments.length, points = new Array(_len), _key = 0; _key < _len; _key++) {
            points[_key] = arguments[_key];
          }

          for (var i = 0; i < points.length; i++) {
            var cellPoint = this.mapPixelToCellPoint(points[i]);
            var areaPoint = this.getAreaPointByCellPoint(cellPoint.x, cellPoint.y);
            var index = this.getIdByAreaPoint(areaPoint.x, areaPoint.y);

            if (this.isVaildAreaId(index) && list.indexOf(index) == -1) {
              list.push(index);
            }
          }

          return list;
        } //是否是有效的格子


        static isVaildCellPoint(point) {
          if (point.x >= 0 && point.x < this._mapSize.width && point.y >= 0 && point.y < this._mapSize.height) {
            return true;
          }

          return false;
        } //是否是有效的格子


        static isVaildAreaPoint(point) {
          if (point.x >= 0 && point.x < this._areaSize.width && point.y >= 0 && point.y < this._areaSize.height) {
            return true;
          }

          return false;
        }

        static isVaildAreaId(id) {
          if (id >= 0 && id < this.areaCount) {
            return true;
          }

          return false;
        } // 世界像素坐标转地图坐标


        static worldPixelToMapCellPoint(point) {
          //  转换原理 
          //  tiledMap 45度地图是已上方为(0,0)点 以左上方边界为y轴 右上方边界为x轴的坐标系
          //  所以只需要将点击坐标点的平行映射到地图坐标系的边界上 求解出映射点的像素坐标 / 格子大小 即可计算出对饮的 格子坐标
          var x = Math.floor(0.5 * this._mapSize.height + point.x / this._tileSize.width - point.y / this._tileSize.height);
          var y = Math.floor(1.5 * this._mapSize.width - point.x / this._tileSize.width - point.y / this._tileSize.height);
          return v2(x, y);
        } //地图坐标(格子的中心点)转世界像素坐标


        static mapCellToWorldPixelPoint(point) {
          var pixelX = this._zeroPixelPoint.x - (point.y - point.x) * this._tileSize.width * 0.5;
          var pixelY = this._zeroPixelPoint.y - (point.x + point.y) * this._tileSize.height * 0.5;
          return v2(pixelX, pixelY);
        } // 地图坐标转地图像素坐标


        static mapCellToPixelPoint(point) {
          var worldPoint = this.mapCellToWorldPixelPoint(point);
          return worldPoint.subtract(this._mapOffsetPoint);
        } //地图像素转地图坐标


        static mapPixelToCellPoint(point) {
          var temp = point.clone();
          var worldPoint = temp.add(this._mapOffsetPoint);
          return this.worldPixelToMapCellPoint(worldPoint);
        }

        static armyIsInView(x, y) {
          var buildProxy = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().buildProxy;
          var cityProxy = (_crd && MapCommand === void 0 ? (_reportPossibleCrUseOfMapCommand({
            error: Error()
          }), MapCommand) : MapCommand).getInstance().cityProxy;
          var myId = cityProxy.getMyPlayerId();
          var myUnionId = cityProxy.myUnionId; // let parentId = cityProxy.myParentId;
          //可视觉区域以当前为原点，半径为5

          for (var i = Math.max(0, x - 5); i <= Math.min(x + 5, this._mapSize.width); i++) {
            for (var j = Math.max(0, y - 5); j <= Math.min(y + 5, this._mapSize.height); j++) {
              var id = MapUtil.getIdByCellPoint(i, j);
              var b = buildProxy.getBuild(id);

              if (!b) {
                continue;
              }

              if (b.rid == myId || myUnionId != 0 && (b.unionId == myUnionId || b.parentId == myUnionId)) {
                return true;
              }

              var c = cityProxy.getCity(id);

              if (!c) {
                continue;
              }

              if (c.rid == myId || myUnionId != 0 && (b.unionId == myUnionId || b.parentId == myUnionId)) {
                return true;
              }
            }
          }

          return false;
        }

      });

      _defineProperty(MapUtil, "_mapPixelSize", null);

      _defineProperty(MapUtil, "_mapOffsetPoint", null);

      _defineProperty(MapUtil, "_tileSize", size(256, 128));

      _defineProperty(MapUtil, "_mapSize", size(20, 20));

      _defineProperty(MapUtil, "_zeroPixelPoint", v2(0, 0));

      _defineProperty(MapUtil, "_areaCellSize", null);

      _defineProperty(MapUtil, "_areaSize", null);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapUtil.js.map