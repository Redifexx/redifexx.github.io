/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cardGrid = cardGrid;
function cardGrid() {
    return {
        cards: [],
        expanded: null,
        expandedCard: null,
        defaultCard: null,
        loadCards: function () {
            return __awaiter(this, void 0, void 0, function () {
                var res, cards;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("load");
                            return [4 /*yield*/, fetch("./../../public/cards.json")];
                        case 1:
                            res = _a.sent();
                            return [4 /*yield*/, res.json()];
                        case 2:
                            cards = _a.sent();
                            this.cards = cards.cards;
                            this.defaultCard = this.cards[0];
                            return [2 /*return*/];
                    }
                });
            });
        },
        toggleExpand: function (i) {
            this.expanded = this.expanded === i ? null : i;
        },
        setExpanded: function (e) {
            if (!e) {
                this.expandedCard = this.defaultCard;
            }
            else {
                this.expandedCard = e;
            }
        }
    };
}
window.cardGrid = cardGrid;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQSw0QkFrQ0M7QUFsQ0QsU0FBZ0IsUUFBUTtJQUV0QixPQUFPO1FBQ0wsS0FBSyxFQUFFLEVBQVk7UUFDbkIsUUFBUSxFQUFFLElBQXFCO1FBQy9CLFlBQVksRUFBRSxJQUFtQjtRQUNqQyxXQUFXLEVBQUUsSUFBWTtRQUVuQixTQUFTOzs7Ozs7NEJBRWIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDUixxQkFBTSxLQUFLLENBQUMsMkJBQTJCLENBQUM7OzRCQUE5QyxHQUFHLEdBQUcsU0FBd0M7NEJBQ3RDLHFCQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUU7OzRCQUF4QixLQUFLLEdBQUcsU0FBZ0I7NEJBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs0QkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztTQUNsQztRQUVELFlBQVksWUFBQyxDQUFnQjtZQUUzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBRUQsV0FBVyxZQUFDLENBQWM7WUFFeEIsSUFBSSxDQUFDLENBQUMsRUFDTixDQUFDO2dCQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN2QyxDQUFDO2lCQUVELENBQUM7Z0JBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDeEIsQ0FBQztRQUNILENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVBLE1BQWMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOzs7Ozs7OztVRWpEcEM7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGlmZXh4LmdpdGh1Yi5pby8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWRpZmV4eC5naXRodWIuaW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZWRpZmV4eC5naXRodWIuaW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JlZGlmZXh4LmdpdGh1Yi5pby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQWxwaW5lIGZyb20gXCJhbHBpbmVqc1wiO1xyXG5cclxuaW50ZXJmYWNlIENhcmRcclxue1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgc2hvcnREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHRodW1ibmFpbDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uMDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uMTogc3RyaW5nO1xyXG4gIGNhdGVnb3J5OiBzdHJpbmdbXTtcclxuICBtZWRpYTogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXJkR3JpZCgpXHJcbntcclxuICByZXR1cm4ge1xyXG4gICAgY2FyZHM6IFtdIGFzIENhcmRbXSxcclxuICAgIGV4cGFuZGVkOiBudWxsIGFzIG51bWJlciB8IG51bGwsXHJcbiAgICBleHBhbmRlZENhcmQ6IG51bGwgYXMgQ2FyZCB8IG51bGwsXHJcbiAgICBkZWZhdWx0Q2FyZDogbnVsbCBhcyBDYXJkLFxyXG5cclxuICAgIGFzeW5jIGxvYWRDYXJkcygpXHJcbiAgICB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9hZFwiKTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIuLy4uLy4uL3B1YmxpYy9jYXJkcy5qc29uXCIpO1xyXG4gICAgICBjb25zdCBjYXJkcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHRoaXMuY2FyZHMgPSBjYXJkcy5jYXJkcztcclxuICAgICAgdGhpcy5kZWZhdWx0Q2FyZCA9IHRoaXMuY2FyZHNbMF07XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZUV4cGFuZChpOiBudW1iZXIgfCBudWxsKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmV4cGFuZGVkID0gdGhpcy5leHBhbmRlZCA9PT0gaSA/IG51bGwgOiBpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRFeHBhbmRlZChlOiBDYXJkIHwgbnVsbClcclxuICAgIHtcclxuICAgICAgaWYgKCFlKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5leHBhbmRlZENhcmQgPSB0aGlzLmRlZmF1bHRDYXJkO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuZXhwYW5kZWRDYXJkID0gZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbih3aW5kb3cgYXMgYW55KS5jYXJkR3JpZCA9IGNhcmRHcmlkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvaW5kZXgudHNcIl0oMCwgX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=