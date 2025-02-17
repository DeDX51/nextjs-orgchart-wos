"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _service = require("./service");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var propTypes = {
  datasource: _propTypes.default.object,
  NodeTemplate: _propTypes.default.elementType,
  draggable: _propTypes.default.bool,
  collapsible: _propTypes.default.bool,
  multipleSelect: _propTypes.default.bool,
  changeHierarchy: _propTypes.default.func,
  onClickNode: _propTypes.default.func
};
var defaultProps = {
  draggable: false,
  collapsible: true,
  multipleSelect: false
};
var ChartNode = function ChartNode(_ref) {
  var datasource = _ref.datasource,
    NodeTemplate = _ref.NodeTemplate,
    draggable = _ref.draggable,
    collapsible = _ref.collapsible,
    multipleSelect = _ref.multipleSelect,
    changeHierarchy = _ref.changeHierarchy,
    onClickNode = _ref.onClickNode;
  var node = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isChildrenCollapsed = _useState2[0],
    setIsChildrenCollapsed = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    topEdgeExpanded = _useState4[0],
    setTopEdgeExpanded = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    rightEdgeExpanded = _useState6[0],
    setRightEdgeExpanded = _useState6[1];
  var _useState7 = (0, _react.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    bottomEdgeExpanded = _useState8[0],
    setBottomEdgeExpanded = _useState8[1];
  var _useState9 = (0, _react.useState)(),
    _useState10 = _slicedToArray(_useState9, 2),
    leftEdgeExpanded = _useState10[0],
    setLeftEdgeExpanded = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    allowedDrop = _useState12[0],
    setAllowedDrop = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    selected = _useState14[0],
    setSelected = _useState14[1];
  var nodeClass = ["oc-node wos-node", datasource.country ? "wos-country-node" : "", isChildrenCollapsed ? "isChildrenCollapsed" : "", allowedDrop ? "allowedDrop" : "", selected ? "selected" : ""].filter(function (item) {
    return item;
  }).join(" ");
  (0, _react.useEffect)(function () {
    var subs1 = _service.dragNodeService.getDragInfo().subscribe(function (draggedInfo) {
      if (draggedInfo) {
        setAllowedDrop(!document.querySelector("#" + draggedInfo.draggedNodeId).closest("li").querySelector("#" + node.current.id) ? true : false);
      } else {
        setAllowedDrop(false);
      }
    });
    var subs2 = _service.selectNodeService.getSelectedNodeInfo().subscribe(function (selectedNodeInfo) {
      if (selectedNodeInfo) {
        if (multipleSelect) {
          if (selectedNodeInfo.selectedNodeId === datasource.id) {
            setSelected(true);
          }
        } else {
          setSelected(selectedNodeInfo.selectedNodeId === datasource.id);
        }
      } else {
        setSelected(false);
      }
    });
    if (datasource.isCollapsed) {
      setIsChildrenCollapsed(true);
    } else {
      setIsChildrenCollapsed(false);
    }
    return function () {
      subs1.unsubscribe();
      subs2.unsubscribe();
    };
  }, [multipleSelect, datasource]);
  var addArrows = function addArrows(e) {
    var node = e.target.closest("li");
    var parent = node.parentNode.closest("li");
    var isAncestorsCollapsed = node && parent ? parent.firstChild.classList.contains("hidden") : undefined;
    var isSiblingsCollapsed = Array.from(node.parentNode.children).some(function (item) {
      return item.classList.contains("hidden");
    });
    setTopEdgeExpanded(!isAncestorsCollapsed);
    setRightEdgeExpanded(!isSiblingsCollapsed);
    setLeftEdgeExpanded(!isSiblingsCollapsed);
    setBottomEdgeExpanded(!isChildrenCollapsed);
  };
  var removeArrows = function removeArrows() {
    setTopEdgeExpanded(undefined);
    setRightEdgeExpanded(undefined);
    setBottomEdgeExpanded(undefined);
    setLeftEdgeExpanded(undefined);
  };
  var toggleAncestors = function toggleAncestors(actionNode) {
    var node = actionNode.parentNode.closest("li");
    if (!node) return;
    var isAncestorsCollapsed = node.firstChild.classList.contains("hidden");
    if (isAncestorsCollapsed) {
      // 向上展开，只展开一级
      actionNode.classList.remove("isAncestorsCollapsed");
      node.firstChild.classList.remove("hidden");
    } else {
      var _actionNode$classList;
      // 向下折叠，则折叠所有祖先节点以及祖先节点的兄弟节点
      var isSiblingsCollapsed = Array.from(actionNode.parentNode.children).some(function (item) {
        return item.classList.contains("hidden");
      });
      if (!isSiblingsCollapsed) {
        toggleSiblings(actionNode);
      }
      (_actionNode$classList = actionNode.classList).add.apply(_actionNode$classList, _toConsumableArray(("isAncestorsCollapsed" + (isSiblingsCollapsed ? "" : " isSiblingsCollapsed")).split(" ")));
      node.firstChild.classList.add("hidden");
      // 如果还有展开的祖先节点，那继续折叠关闭之
      if (node.parentNode.closest("li") && !node.parentNode.closest("li").firstChild.classList.contains("hidden")) {
        toggleAncestors(node);
      }
    }
  };
  var topEdgeClickHandler = function topEdgeClickHandler(e) {
    e.stopPropagation();
    setTopEdgeExpanded(!topEdgeExpanded);
    toggleAncestors(e.target.closest("li"));
  };
  var bottomEdgeClickHandler = function bottomEdgeClickHandler(e) {
    e.stopPropagation();
    setIsChildrenCollapsed(!isChildrenCollapsed);
    setBottomEdgeExpanded(!bottomEdgeExpanded);
  };
  var toggleSiblings = function toggleSiblings(actionNode) {
    var node = actionNode.previousSibling;
    var isSiblingsCollapsed = Array.from(actionNode.parentNode.children).some(function (item) {
      return item.classList.contains("hidden");
    });
    actionNode.classList.toggle("isSiblingsCollapsed", !isSiblingsCollapsed);
    // 先处理同级的兄弟节点
    while (node) {
      if (isSiblingsCollapsed) {
        node.classList.remove("hidden");
      } else {
        node.classList.add("hidden");
      }
      node = node.previousSibling;
    }
    node = actionNode.nextSibling;
    while (node) {
      if (isSiblingsCollapsed) {
        node.classList.remove("hidden");
      } else {
        node.classList.add("hidden");
      }
      node = node.nextSibling;
    }
    // 在展开兄弟节点的同时，还要展开父节点
    var isAncestorsCollapsed = actionNode.parentNode.closest("li").firstChild.classList.contains("hidden");
    if (isAncestorsCollapsed) {
      toggleAncestors(actionNode);
    }
  };
  var hEdgeClickHandler = function hEdgeClickHandler(e) {
    e.stopPropagation();
    setLeftEdgeExpanded(!leftEdgeExpanded);
    setRightEdgeExpanded(!rightEdgeExpanded);
    toggleSiblings(e.target.closest("li"));
  };
  var filterAllowedDropNodes = function filterAllowedDropNodes(id) {
    _service.dragNodeService.sendDragInfo(id);
  };
  var clickNodeHandler = function clickNodeHandler(event) {
    if (onClickNode) {
      onClickNode(datasource);
    }
    _service.selectNodeService.sendSelectedNodeInfo(datasource.id);
  };
  var dragstartHandler = function dragstartHandler(event) {
    var copyDS = _objectSpread({}, datasource);
    delete copyDS.relationship;
    event.dataTransfer.setData("text/plain", JSON.stringify(copyDS));
    // highlight all potential drop targets
    filterAllowedDropNodes(node.current.id);
  };
  var dragoverHandler = function dragoverHandler(event) {
    // prevent default to allow drop
    event.preventDefault();
  };
  var dragendHandler = function dragendHandler() {
    // reset background of all potential drop targets
    _service.dragNodeService.clearDragInfo();
  };
  var dropHandler = function dropHandler(event) {
    if (!event.currentTarget.classList.contains("allowedDrop")) {
      return;
    }
    _service.dragNodeService.clearDragInfo();
    changeHierarchy(JSON.parse(event.dataTransfer.getData("text/plain")), event.currentTarget.id);
  };
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "oc-hierarchy"
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: node,
    id: datasource.id,
    className: nodeClass,
    draggable: draggable ? "true" : undefined,
    onClick: clickNodeHandler,
    onDragStart: dragstartHandler,
    onDragOver: dragoverHandler,
    onDragEnd: dragendHandler,
    onDrop: dropHandler
    // onMouseEnter={addArrows}
    // onMouseLeave={removeArrows}
  }, NodeTemplate ? /*#__PURE__*/_react.default.createElement(NodeTemplate, {
    nodeData: datasource
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "oc-heading"
  }, datasource.relationship && datasource.relationship.charAt(2) === "1" && /*#__PURE__*/_react.default.createElement("i", {
    className: "oci oci-leader oc-symbol"
  }), datasource.name), /*#__PURE__*/_react.default.createElement("div", {
    className: "oc-content"
  }, datasource.title)), collapsible && datasource.relationship && datasource.relationship.charAt(0) === "1" && /*#__PURE__*/_react.default.createElement("i", {
    className: "oc-edge verticalEdge topEdge oci ".concat(topEdgeExpanded === undefined ? "" : topEdgeExpanded ? "oci-chevron-down" : "oci-chevron-up"),
    onClick: topEdgeClickHandler
  }), collapsible && datasource.relationship && datasource.relationship.charAt(1) === "1" && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("i", {
    className: "oc-edge horizontalEdge rightEdge oci ".concat(rightEdgeExpanded === undefined ? "" : rightEdgeExpanded ? "oci-chevron-left" : "oci-chevron-right"),
    onClick: hEdgeClickHandler
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "oc-edge horizontalEdge leftEdge oci ".concat(leftEdgeExpanded === undefined ? "" : leftEdgeExpanded ? "oci-chevron-right" : "oci-chevron-left"),
    onClick: hEdgeClickHandler
  })), collapsible && datasource.relationship && datasource.relationship.charAt(2) === "1" && /*#__PURE__*/_react.default.createElement("div", {
    className: "oc-edge verticalEdge bottomEdge oci node-bottom-bar",
    onClick: bottomEdgeClickHandler
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "children-count"
  }, datasource.children.length), /*#__PURE__*/_react.default.createElement("span", {
    className: "expand-arrow"
  }, bottomEdgeExpanded ? /*#__PURE__*/_react.default.createElement("svg", {
    width: "11",
    height: "6",
    viewBox: "0 0 11 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.5 1L5.5 5L1.5 1",
    stroke: "white",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "11",
    height: "6",
    viewBox: "0 0 11 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.5 1L5.5 5L1.5 1",
    stroke: "white",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))))), datasource.children && datasource.children.length > 0 && /*#__PURE__*/_react.default.createElement("ul", {
    className: isChildrenCollapsed ? "hidden" : ""
  }, datasource.children.map(function (node) {
    return /*#__PURE__*/_react.default.createElement(ChartNode, {
      datasource: node,
      NodeTemplate: NodeTemplate,
      id: node.id,
      key: node.id,
      draggable: draggable,
      collapsible: collapsible,
      multipleSelect: multipleSelect,
      changeHierarchy: changeHierarchy,
      onClickNode: onClickNode
    });
  })));
};
ChartNode.propTypes = propTypes;
ChartNode.defaultProps = defaultProps;
var _default = ChartNode;
exports.default = _default;