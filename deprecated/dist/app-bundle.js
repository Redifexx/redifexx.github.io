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
        activeCards: [],
        expanded: null,
        expandedCard: null,
        defaultCard: null,
        isAscending: null,
        sortBy: null,
        tags: null,
        activeTags: null,
        cardSize: null,
        columns: null,
        minColumns: null,
        loadCards: function () {
            return __awaiter(this, void 0, void 0, function () {
                var res, cards, _i, _a, card, _b, _c, tag;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            console.log("load");
                            return [4 /*yield*/, fetch("./../../public/cards.json")];
                        case 1:
                            res = _d.sent();
                            return [4 /*yield*/, res.json()];
                        case 2:
                            cards = _d.sent();
                            this.cards = cards.cards;
                            this.defaultCard = this.cards[0];
                            this.isAscending = true;
                            this.sortBy = 0; // 0 - date, 1 - name, 2 - length
                            this.tags = new Set;
                            this.activeTags = new Set;
                            this.minColumns = 1;
                            for (_i = 0, _a = this.cards; _i < _a.length; _i++) {
                                card = _a[_i];
                                for (_b = 0, _c = card.category; _b < _c.length; _b++) {
                                    tag = _c[_b];
                                    this.tags.add(tag);
                                }
                            }
                            this.reloadCards();
                            return [4 /*yield*/, this.$nextTick()];
                        case 3:
                            _d.sent();
                            this.resize();
                            return [2 /*return*/];
                    }
                });
            });
        },
        resize: function () {
            var container = document.getElementById('card-container');
            if (!container)
                return;
            var gapValue = getComputedStyle(container.querySelector('.grid')).gap;
            var gap = parseFloat(gapValue) || 0;
            var maxCardWidth = 320; // desired max width per card
            var minCardWidth = 180; // don’t shrink smaller than this
            var totalWidth = container.clientWidth;
            // ✅ Start by estimating columns
            var cols = Math.floor((totalWidth + gap) / (maxCardWidth + gap));
            cols = Math.max(cols, 1);
            // ✅ Compute width that fits this column count
            var cardWidth = (totalWidth - (cols - 1) * gap) / cols;
            console.log(totalWidth);
            console.log(cardWidth);
            // ✅ Reduce columns if too small
            while (cardWidth < minCardWidth && cols > 1) {
                cols--;
                cardWidth = (totalWidth - (cols - 1) * gap) / cols;
            }
            // ✅ Only add columns if we *still* have leftover space after filling current cols at max width
            while (cols < 8 && // prevent runaway columns on ultrawide
                (cols + 1) * (maxCardWidth + gap) <= totalWidth) {
                cols++;
                cardWidth = (totalWidth - (cols - 1) * gap) / cols;
            }
            // ✅ Clamp to min/max to keep scaling smooth
            cardWidth = Math.min(Math.max(cardWidth, minCardWidth), maxCardWidth);
            this.columns = cols;
            this.cardSize = cardWidth;
            //console.log(`cols: ${cols}, cardWidth: ${cardWidth.toFixed(2)}`);
        },
        sortByDate: function () {
            var _this = this;
            if (this.isAscending) {
                this.activeCards.sort(function (a, b) { return _this.parseDate(a.date) - _this.parseDate(b.date); });
            }
            else {
                this.activeCards.sort(function (a, b) { return _this.parseDate(b.date) - _this.parseDate(a.date); });
            }
            this.sortBy = 0;
        },
        sortByName: function () {
            if (this.isAscending) {
                this.activeCards.sort(function (a, b) { return a.title.localeCompare(b.title); });
            }
            else {
                this.activeCards.sort(function (a, b) { return b.title.localeCompare(a.title); });
            }
            this.sortBy = 1;
        },
        sortByLength: function () {
            if (this.isAscending) {
                this.activeCards.sort(function (a, b) { return a.projectLength - b.projectLength; });
            }
            else {
                this.activeCards.sort(function (a, b) { return b.projectLength - a.projectLength; });
            }
            this.sortBy = 2;
        },
        toggleAsc: function () {
            this.isAscending = !this.isAscending;
            switch (this.sortBy) {
                case 0:
                    this.sortByDate();
                    break;
                case 1:
                    this.sortByName();
                    break;
                case 2:
                    this.sortByLength();
                    break;
            }
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
        },
        parseDate: function (dateStr) {
            // Expecting format "MMYY"
            if (dateStr.length !== 4)
                return 0;
            var month = parseInt(dateStr.slice(0, 2));
            var year = 2000 + parseInt(dateStr.slice(2, 4)); // e.g., "24" → 2024
            return new Date(year, month - 1).getTime(); // Convert to timestamp
        },
        reloadCards: function () {
            this.activeCards.length = 0;
            for (var _i = 0, _a = this.cards; _i < _a.length; _i++) {
                var card = _a[_i];
                if (this.cardInActiveTags(card)) {
                    this.activeCards.push(card);
                }
            }
        },
        getActiveTag: function (tag) {
            return this.activeTags.has(tag);
        },
        setActiveTag: function (tag) {
            if (!this.activeTags.has(tag)) {
                this.activeTags.add(tag);
            }
            else {
                this.activeTags.delete(tag);
            }
            this.reloadCards();
        },
        isActiveTagsEmpty: function () {
            return (this.activeTags.size === 0);
        },
        cardInActiveTags: function (card) {
            if (this.isActiveTagsEmpty()) {
                return true;
            }
            for (var _i = 0, _a = card.category; _i < _a.length; _i++) {
                var tag = _a[_i];
                if (this.activeTags.has(tag)) {
                    return true;
                }
            }
            return false;
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFFRCxpQkFBaUI7WUFFZixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVELGdCQUFnQixZQUFDLElBQVM7WUFFeEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFDNUIsQ0FBQztnQkFDQyxPQUFPLElBQUksQ0FBQztZQUNkLENBQUM7WUFFRCxLQUFrQixVQUFhLEVBQWIsU0FBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYSxFQUMvQixDQUFDO2dCQURJLElBQU0sR0FBRztnQkFFWixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUM1QixDQUFDO29CQUNDLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7WUFDSCxDQUFDO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFQSxNQUFjLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7Ozs7Ozs7VUU5T3BDO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRpZmV4eC5naXRodWIuaW8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcmVkaWZleHguZ2l0aHViLmlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVkaWZleHguZ2l0aHViLmlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZWRpZmV4eC5naXRodWIuaW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFscGluZSBmcm9tIFwiYWxwaW5lanNcIjtcclxuXHJcbmludGVyZmFjZSBDYXJkXHJcbntcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRhdGU6IHN0cmluZztcclxuICBwcm9qZWN0TGVuZ3RoOiBudW1iZXI7XHJcbiAgc2hvcnREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHRodW1ibmFpbDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uMDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uMTogc3RyaW5nO1xyXG4gIGNhdGVnb3J5OiBzdHJpbmdbXTtcclxuICBtZWRpYTogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYXJkR3JpZCgpXHJcbntcclxuICByZXR1cm4ge1xyXG4gICAgY2FyZHM6IFtdIGFzIENhcmRbXSxcclxuICAgIGFjdGl2ZUNhcmRzOiBbXSBhcyBDYXJkW10sXHJcbiAgICBleHBhbmRlZDogbnVsbCBhcyBudW1iZXIgfCBudWxsLFxyXG4gICAgZXhwYW5kZWRDYXJkOiBudWxsIGFzIENhcmQgfCBudWxsLFxyXG4gICAgZGVmYXVsdENhcmQ6IG51bGwgYXMgQ2FyZCxcclxuICAgIGlzQXNjZW5kaW5nOiBudWxsIGFzIEJvb2xlYW4sXHJcbiAgICBzb3J0Qnk6IG51bGwgYXMgbnVtYmVyLFxyXG4gICAgdGFnczogbnVsbCBhcyBTZXQ8c3RyaW5nPixcclxuICAgIGFjdGl2ZVRhZ3M6IG51bGwgYXMgU2V0PHN0cmluZz4sXHJcbiAgICBjYXJkU2l6ZTogbnVsbCBhcyBudW1iZXIgfCBudWxsLFxyXG4gICAgY29sdW1uczogbnVsbCBhcyBudW1iZXIgfCBudWxsLFxyXG4gICAgbWluQ29sdW1uczogbnVsbCBhcyBudW1iZXIgfCBudWxsLFxyXG5cclxuICAgIGFzeW5jIGxvYWRDYXJkcygpXHJcbiAgICB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9hZFwiKTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIuLy4uLy4uL3B1YmxpYy9jYXJkcy5qc29uXCIpO1xyXG4gICAgICBjb25zdCBjYXJkcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHRoaXMuY2FyZHMgPSBjYXJkcy5jYXJkcztcclxuICAgICAgdGhpcy5kZWZhdWx0Q2FyZCA9IHRoaXMuY2FyZHNbMF07XHJcbiAgICAgIHRoaXMuaXNBc2NlbmRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNvcnRCeSA9IDA7IC8vIDAgLSBkYXRlLCAxIC0gbmFtZSwgMiAtIGxlbmd0aFxyXG4gICAgICB0aGlzLnRhZ3MgPSBuZXcgU2V0PHN0cmluZz47XHJcbiAgICAgIHRoaXMuYWN0aXZlVGFncyA9IG5ldyBTZXQ8c3RyaW5nPjtcclxuICAgICAgdGhpcy5taW5Db2x1bW5zID0gMTtcclxuICAgICAgZm9yIChjb25zdCBjYXJkIG9mIHRoaXMuY2FyZHMpXHJcbiAgICAgIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRhZyBvZiBjYXJkLmNhdGVnb3J5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMudGFncy5hZGQodGFnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucmVsb2FkQ2FyZHMoKTtcclxuXHJcbiAgICAgIGF3YWl0IHRoaXMuJG5leHRUaWNrKCk7XHJcbiAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2l6ZSgpXHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLWNvbnRhaW5lcicpO1xyXG4gICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgZ2FwVmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpKS5nYXA7XHJcbiAgICAgIGNvbnN0IGdhcCA9IHBhcnNlRmxvYXQoZ2FwVmFsdWUpIHx8IDA7XHJcbiAgICAgIGNvbnN0IG1heENhcmRXaWR0aCA9IDMyMDsgICAgICAgLy8gZGVzaXJlZCBtYXggd2lkdGggcGVyIGNhcmRcclxuICAgICAgY29uc3QgbWluQ2FyZFdpZHRoID0gMTgwOyAgICAgICAvLyBkb27igJl0IHNocmluayBzbWFsbGVyIHRoYW4gdGhpc1xyXG5cclxuICAgICAgY29uc3QgdG90YWxXaWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgIC8vIOKchSBTdGFydCBieSBlc3RpbWF0aW5nIGNvbHVtbnNcclxuICAgICAgbGV0IGNvbHMgPSBNYXRoLmZsb29yKCh0b3RhbFdpZHRoICsgZ2FwKSAvIChtYXhDYXJkV2lkdGggKyBnYXApKTtcclxuICAgICAgY29scyA9IE1hdGgubWF4KGNvbHMsIDEpO1xyXG5cclxuICAgICAgLy8g4pyFIENvbXB1dGUgd2lkdGggdGhhdCBmaXRzIHRoaXMgY29sdW1uIGNvdW50XHJcbiAgICAgIGxldCBjYXJkV2lkdGggPSAodG90YWxXaWR0aCAtIChjb2xzIC0gMSkgKiBnYXApIC8gY29scztcclxuICAgICAgY29uc29sZS5sb2codG90YWxXaWR0aCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNhcmRXaWR0aCk7XHJcblxyXG4gICAgICAvLyDinIUgUmVkdWNlIGNvbHVtbnMgaWYgdG9vIHNtYWxsXHJcbiAgICAgIHdoaWxlIChjYXJkV2lkdGggPCBtaW5DYXJkV2lkdGggJiYgY29scyA+IDEpIHtcclxuICAgICAgICBjb2xzLS07XHJcbiAgICAgICAgY2FyZFdpZHRoID0gKHRvdGFsV2lkdGggLSAoY29scyAtIDEpICogZ2FwKSAvIGNvbHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOKchSBPbmx5IGFkZCBjb2x1bW5zIGlmIHdlICpzdGlsbCogaGF2ZSBsZWZ0b3ZlciBzcGFjZSBhZnRlciBmaWxsaW5nIGN1cnJlbnQgY29scyBhdCBtYXggd2lkdGhcclxuICAgICAgd2hpbGUgKFxyXG4gICAgICAgIGNvbHMgPCA4ICYmIC8vIHByZXZlbnQgcnVuYXdheSBjb2x1bW5zIG9uIHVsdHJhd2lkZVxyXG4gICAgICAgIChjb2xzICsgMSkgKiAobWF4Q2FyZFdpZHRoICsgZ2FwKSA8PSB0b3RhbFdpZHRoXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbHMrKztcclxuICAgICAgICBjYXJkV2lkdGggPSAodG90YWxXaWR0aCAtIChjb2xzIC0gMSkgKiBnYXApIC8gY29scztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g4pyFIENsYW1wIHRvIG1pbi9tYXggdG8ga2VlcCBzY2FsaW5nIHNtb290aFxyXG4gICAgICBjYXJkV2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChjYXJkV2lkdGgsIG1pbkNhcmRXaWR0aCksIG1heENhcmRXaWR0aCk7XHJcblxyXG4gICAgICB0aGlzLmNvbHVtbnMgPSBjb2xzO1xyXG4gICAgICB0aGlzLmNhcmRTaXplID0gY2FyZFdpZHRoO1xyXG5cclxuICAgICAgLy9jb25zb2xlLmxvZyhgY29sczogJHtjb2xzfSwgY2FyZFdpZHRoOiAke2NhcmRXaWR0aC50b0ZpeGVkKDIpfWApO1xyXG4gICAgfSxcclxuXHJcbiAgICBzb3J0QnlEYXRlKClcclxuICAgIHtcclxuICAgICAgaWYgKHRoaXMuaXNBc2NlbmRpbmcpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNhcmRzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB0aGlzLnBhcnNlRGF0ZShhLmRhdGUpIC0gdGhpcy5wYXJzZURhdGUoYi5kYXRlKSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDYXJkcy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gdGhpcy5wYXJzZURhdGUoYi5kYXRlKSAtIHRoaXMucGFyc2VEYXRlKGEuZGF0ZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc29ydEJ5ID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgc29ydEJ5TmFtZSgpXHJcbiAgICB7XHJcbiAgICAgIGlmICh0aGlzLmlzQXNjZW5kaW5nKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDYXJkcy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNhcmRzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBiLnRpdGxlLmxvY2FsZUNvbXBhcmUoYS50aXRsZSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc29ydEJ5ID0gMTtcclxuICAgIH0sXHJcblxyXG4gICAgc29ydEJ5TGVuZ3RoKClcclxuICAgIHtcclxuICAgICAgaWYgKHRoaXMuaXNBc2NlbmRpbmcpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNhcmRzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiBhLnByb2plY3RMZW5ndGggLSBiLnByb2plY3RMZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ2FyZHMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IGIucHJvamVjdExlbmd0aCAtIGEucHJvamVjdExlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zb3J0QnkgPSAyO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVBc2MoKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmlzQXNjZW5kaW5nID0gIXRoaXMuaXNBc2NlbmRpbmc7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5zb3J0QnkpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLnNvcnRCeURhdGUoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHRoaXMuc29ydEJ5TmFtZSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGhpcy5zb3J0QnlMZW5ndGgoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZUV4cGFuZChpOiBudW1iZXIgfCBudWxsKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmV4cGFuZGVkID0gdGhpcy5leHBhbmRlZCA9PT0gaSA/IG51bGwgOiBpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRFeHBhbmRlZChlOiBDYXJkIHwgbnVsbClcclxuICAgIHtcclxuICAgICAgaWYgKCFlKVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5leHBhbmRlZENhcmQgPSB0aGlzLmRlZmF1bHRDYXJkO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAge1xyXG4gICAgICAgIHRoaXMuZXhwYW5kZWRDYXJkID0gZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwYXJzZURhdGUoZGF0ZVN0cjogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAvLyBFeHBlY3RpbmcgZm9ybWF0IFwiTU1ZWVwiXHJcbiAgICAgIGlmIChkYXRlU3RyLmxlbmd0aCAhPT0gNCkgcmV0dXJuIDA7XHJcbiAgICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQoZGF0ZVN0ci5zbGljZSgwLCAyKSk7XHJcbiAgICAgIGNvbnN0IHllYXIgPSAyMDAwICsgcGFyc2VJbnQoZGF0ZVN0ci5zbGljZSgyLCA0KSk7IC8vIGUuZy4sIFwiMjRcIiDihpIgMjAyNFxyXG4gICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxKS5nZXRUaW1lKCk7IC8vIENvbnZlcnQgdG8gdGltZXN0YW1wXHJcbiAgICB9LFxyXG5cclxuICAgIHJlbG9hZENhcmRzKClcclxuICAgIHtcclxuICAgICAgdGhpcy5hY3RpdmVDYXJkcy5sZW5ndGggPSAwO1xyXG4gICAgICBmb3IgKGNvbnN0IGNhcmQgb2YgdGhpcy5jYXJkcylcclxuICAgICAge1xyXG4gICAgICAgIGlmICh0aGlzLmNhcmRJbkFjdGl2ZVRhZ3MoY2FyZCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVDYXJkcy5wdXNoKGNhcmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRBY3RpdmVUYWcodGFnOiBzdHJpbmcpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVRhZ3MuaGFzKHRhZyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEFjdGl2ZVRhZyh0YWc6IHN0cmluZyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgaWYgKCF0aGlzLmFjdGl2ZVRhZ3MuaGFzKHRhZykpXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRhZ3MuYWRkKHRhZyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVUYWdzLmRlbGV0ZSh0YWcpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVsb2FkQ2FyZHMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgaXNBY3RpdmVUYWdzRW1wdHkoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICByZXR1cm4gKHRoaXMuYWN0aXZlVGFncy5zaXplID09PSAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2FyZEluQWN0aXZlVGFncyhjYXJkOiBhbnkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgIGlmICh0aGlzLmlzQWN0aXZlVGFnc0VtcHR5KCkpXHJcbiAgICAgIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZm9yIChjb25zdCB0YWcgb2YgY2FyZC5jYXRlZ29yeSlcclxuICAgICAge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVRhZ3MuaGFzKHRhZykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuKHdpbmRvdyBhcyBhbnkpLmNhcmRHcmlkID0gY2FyZEdyaWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9pbmRleC50c1wiXSgwLCBfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==