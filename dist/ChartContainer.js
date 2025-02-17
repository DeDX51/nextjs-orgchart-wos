"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _service = require("./service");
var _jsonDigger = _interopRequireDefault(require("json-digger"));
var _ChartNode = _interopRequireDefault(require("./ChartNode"));
var _reactZoomPanPinch = require("react-zoom-pan-pinch");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var propTypes = {
  datasource: _propTypes.default.object.isRequired,
  pan: _propTypes.default.bool,
  zoom: _propTypes.default.bool,
  zoomoutLimit: _propTypes.default.number,
  zoominLimit: _propTypes.default.number,
  containerClass: _propTypes.default.string,
  chartClass: _propTypes.default.string,
  NodeTemplate: _propTypes.default.elementType,
  draggable: _propTypes.default.bool,
  collapsible: _propTypes.default.bool,
  multipleSelect: _propTypes.default.bool,
  onClickNode: _propTypes.default.func,
  onClickChart: _propTypes.default.func
};
var defaultProps = {
  pan: false,
  zoom: false,
  zoomoutLimit: 0.5,
  zoominLimit: 7,
  containerClass: "",
  chartClass: "",
  draggable: false,
  collapsible: true,
  multipleSelect: false
};
var ChartContainer = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var datasource = _ref.datasource,
    pan = _ref.pan,
    zoom = _ref.zoom,
    zoomoutLimit = _ref.zoomoutLimit,
    zoominLimit = _ref.zoominLimit,
    containerClass = _ref.containerClass,
    chartClass = _ref.chartClass,
    NodeTemplate = _ref.NodeTemplate,
    draggable = _ref.draggable,
    collapsible = _ref.collapsible,
    multipleSelect = _ref.multipleSelect,
    onClickNode = _ref.onClickNode,
    onClickChart = _ref.onClickChart,
    transformOptions = _ref.transformOptions;
  var container = (0, _react.useRef)();
  var chart = (0, _react.useRef)();
  var downloadButton = (0, _react.useRef)();
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    startX = _useState2[0],
    setStartX = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    startY = _useState4[0],
    setStartY = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    transform = _useState6[0],
    setTransform = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    panning = _useState8[0],
    setPanning = _useState8[1];
  var _useState9 = (0, _react.useState)("default"),
    _useState10 = _slicedToArray(_useState9, 2),
    cursor = _useState10[0],
    setCursor = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    exporting = _useState12[0],
    setExporting = _useState12[1];
  var _useState13 = (0, _react.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    dataURL = _useState14[0],
    setDataURL = _useState14[1];
  var _useState15 = (0, _react.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    download = _useState16[0],
    setDownload = _useState16[1];
  var attachRel = function attachRel(data, flags) {
    data.relationship = flags + (data.children && data.children.length > 0 ? 1 : 0);
    if (data.children) {
      data.children.forEach(function (item) {
        attachRel(item, "1" + (data.children.length > 1 ? 1 : 0));
      });
    }
    return data;
  };
  var _useState17 = (0, _react.useState)(datasource),
    _useState18 = _slicedToArray(_useState17, 2),
    ds = _useState18[0],
    setDS = _useState18[1];
  (0, _react.useEffect)(function () {
    setDS(datasource);
  }, [datasource]);
  var dsDigger = new _jsonDigger.default(datasource, "id", "children", "isCollapsed", "country");
  var clickChartHandler = function clickChartHandler(event) {
    if (!event.target.closest(".oc-node")) {
      if (onClickChart) {
        onClickChart();
      }
      _service.selectNodeService.clearSelectedNodeInfo();
    }
  };
  var panEndHandler = function panEndHandler() {
    setPanning(false);
    setCursor("default");
  };
  var panHandler = function panHandler(e) {
    var newX = 0;
    var newY = 0;
    if (!e.targetTouches) {
      // pand on desktop
      newX = e.pageX - startX;
      newY = e.pageY - startY;
    } else if (e.targetTouches.length === 1) {
      // pan on mobile device
      newX = e.targetTouches[0].pageX - startX;
      newY = e.targetTouches[0].pageY - startY;
    } else if (e.targetTouches.length > 1) {
      return;
    }
    if (transform === "") {
      if (transform.indexOf("3d") === -1) {
        setTransform("matrix(1,0,0,1," + newX + "," + newY + ")");
      } else {
        setTransform("matrix3d(1,0,0,0,0,1,0,0,0,0,1,0," + newX + ", " + newY + ",0,1)");
      }
    } else {
      var matrix = transform.split(",");
      if (transform.indexOf("3d") === -1) {
        matrix[4] = newX;
        matrix[5] = newY + ")";
      } else {
        matrix[12] = newX;
        matrix[13] = newY;
      }
      setTransform(matrix.join(","));
    }
  };
  var panStartHandler = function panStartHandler(e) {
    if (e.target.closest(".oc-node")) {
      setPanning(false);
      return;
    } else {
      setPanning(true);
      setCursor("move");
    }
    var lastX = 0;
    var lastY = 0;
    if (transform !== "") {
      var matrix = transform.split(",");
      if (transform.indexOf("3d") === -1) {
        lastX = parseInt(matrix[4]);
        lastY = parseInt(matrix[5]);
      } else {
        lastX = parseInt(matrix[12]);
        lastY = parseInt(matrix[13]);
      }
    }
    if (!e.targetTouches) {
      // pand on desktop
      setStartX(e.pageX - lastX);
      setStartY(e.pageY - lastY);
    } else if (e.targetTouches.length === 1) {
      // pan on mobile device
      setStartX(e.targetTouches[0].pageX - lastX);
      setStartY(e.targetTouches[0].pageY - lastY);
    } else if (e.targetTouches.length > 1) {
      return;
    }
  };
  var updateChartScale = function updateChartScale(newScale) {
    var matrix = [];
    var targetScale = 1;
    if (transform === "") {
      setTransform("matrix(" + newScale + ", 0, 0, " + newScale + ", 0, 0)");
    } else {
      matrix = transform.split(",");
      if (transform.indexOf("3d") === -1) {
        targetScale = Math.abs(window.parseFloat(matrix[3]) * newScale);
        if (targetScale > zoomoutLimit && targetScale < zoominLimit) {
          matrix[0] = "matrix(" + targetScale;
          matrix[3] = targetScale;
          setTransform(matrix.join(","));
        }
      } else {
        targetScale = Math.abs(window.parseFloat(matrix[5]) * newScale);
        if (targetScale > zoomoutLimit && targetScale < zoominLimit) {
          matrix[0] = "matrix3d(" + targetScale;
          matrix[5] = targetScale;
          setTransform(matrix.join(","));
        }
      }
    }
  };
  var zoomHandler = function zoomHandler(e) {
    var newScale = 1 + (e.deltaY > 0 ? -0.2 : 0.2);
    updateChartScale(newScale);
  };
  var exportPDF = function exportPDF(canvas, exportFilename) {
    Promise.resolve().then(function () {
      return _interopRequireWildcard(require("jspdf"));
    }).then(function (jsPDF) {
      var canvasWidth = Math.floor(canvas.width);
      var canvasHeight = Math.floor(canvas.height);
      var doc = canvasWidth > canvasHeight ? new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvasWidth, canvasHeight]
      }) : new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvasHeight, canvasWidth]
      });
      doc.addImage(canvas.toDataURL("image/jpeg", 1.0), "JPEG", 0, 0);
      doc.save(exportFilename + ".pdf");
    });
  };
  var exportPNG = function exportPNG(canvas, exportFilename) {
    var isWebkit = ("WebkitAppearance" in document.documentElement.style);
    var isFf = !!window.sidebar;
    var isEdge = navigator.appName === "Microsoft Internet Explorer" || navigator.appName === "Netscape" && navigator.appVersion.indexOf("Edge") > -1;
    if (!isWebkit && !isFf || isEdge) {
      window.navigator.msSaveBlob(canvas.msToBlob(), exportFilename + ".png");
    } else {
      setDataURL(canvas.toDataURL());
      setDownload(exportFilename + ".png");
      downloadButton.current.click();
    }
  };
  var changeHierarchy = function changeHierarchy(draggedItemData, dropTargetId) {
    return dsDigger.removeNode(draggedItemData.id).then(function () {
      return dsDigger.addChildren(dropTargetId, draggedItemData);
    }).then(function () {
      setDS(_objectSpread({}, dsDigger.ds));
    });
  };
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      exportTo: function exportTo(exportFilename, exportFileextension) {
        exportFilename = exportFilename || "OrgChart";
        exportFileextension = exportFileextension || "png";
        setExporting(true);
        var originalScrollLeft = container.current.scrollLeft;
        container.current.scrollLeft = 0;
        var originalScrollTop = container.current.scrollTop;
        container.current.scrollTop = 0;
        Promise.resolve().then(function () {
          return _interopRequireWildcard(require("html2canvas"));
        }).then(function (html2canvas) {
          html2canvas(chart.current, {
            width: chart.current.clientWidth,
            height: chart.current.clientHeight,
            onclone: function onclone(clonedDoc) {
              clonedDoc.querySelector(".orgchart").style.background = "none";
              clonedDoc.querySelector(".orgchart").style.transform = "";
            }
          }).then(function (canvas) {
            if (exportFileextension.toLowerCase() === "pdf") {
              exportPDF(canvas, exportFilename);
            } else {
              exportPNG(canvas, exportFilename);
            }
            setExporting(false);
            container.current.scrollLeft = originalScrollLeft;
            container.current.scrollTop = originalScrollTop;
          }, function () {
            setExporting(false);
            container.current.scrollLeft = originalScrollLeft;
            container.current.scrollTop = originalScrollTop;
          });
        });
      },
      expandAllNodes: function expandAllNodes() {
        chart.current.querySelectorAll(".oc-node.hidden, .oc-hierarchy.hidden, .isSiblingsCollapsed, .isAncestorsCollapsed").forEach(function (el) {
          el.classList.remove("hidden", "isSiblingsCollapsed", "isAncestorsCollapsed");
        });
      }
    };
  });
  return /*#__PURE__*/_react.default.createElement(_reactZoomPanPinch.TransformWrapper, transformOptions, function (_ref2) {
    var zoomIn = _ref2.zoomIn,
      zoomOut = _ref2.zoomOut;
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: container,
      className: "orgchart-container " + containerClass
      // onWheel={zoom ? zoomHandler : undefined}
      // onMouseUp={pan && panning ? panEndHandler : undefined}
    }, /*#__PURE__*/_react.default.createElement(_reactZoomPanPinch.TransformComponent, {
      wrapperClass: "zoom-wrap",
      contentClass: "zoom-content-wrap"
    }, /*#__PURE__*/_react.default.createElement("div", {
      ref: chart,
      className: "orgchart " + chartClass,
      style: {
        transform: transform,
        cursor: cursor
      },
      onClick: clickChartHandler
      // onMouseDown={pan ? panStartHandler : undefined}
      // onMouseMove={pan && panning ? panHandler : undefined}
    }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement(_ChartNode.default, {
      datasource: attachRel(ds, "00"),
      NodeTemplate: NodeTemplate,
      draggable: draggable,
      collapsible: collapsible,
      multipleSelect: multipleSelect,
      changeHierarchy: changeHierarchy,
      onClickNode: onClickNode
    })))), /*#__PURE__*/_react.default.createElement("a", {
      className: "oc-download-btn hidden",
      ref: downloadButton,
      href: dataURL,
      download: download
    }, "\xA0"), /*#__PURE__*/_react.default.createElement("div", {
      className: "btnWrap"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "zoomBtn",
      onClick: function onClick() {
        return zoomIn();
      }
    }, /*#__PURE__*/_react.default.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M6.6671 11.1115V6.6671M6.6671 6.6671V2.22266M6.6671 6.6671H11.1115M6.6671 6.6671H2.22266",
      stroke: "black",
      "stroke-width": "1.5",
      "stroke-linecap": "round"
    }))), /*#__PURE__*/_react.default.createElement("button", {
      className: "zoomBtn",
      onClick: function onClick() {
        return zoomOut();
      }
    }, /*#__PURE__*/_react.default.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M11.1115 8H6.6671H2.22266",
      stroke: "black",
      "stroke-width": "1.5",
      "stroke-linecap": "round"
    })))), /*#__PURE__*/_react.default.createElement("div", {
      className: "oc-mask ".concat(exporting ? "" : "hidden")
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "oci oci-spinner spinner"
    })));
  });
});
ChartContainer.propTypes = propTypes;
ChartContainer.defaultProps = defaultProps;
var _default = ChartContainer;
exports.default = _default;