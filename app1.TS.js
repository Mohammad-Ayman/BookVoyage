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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var _this = this;
// GLobal variables
var bookList = document.getElementById("movie-list");
var getBooksEl = document.getElementById("fetch-books");
var titles = [];
var images = [];
var prices = [];
var books = [
    {
        id: "1",
        title: "A Light in the Attic",
        imageUrl: "http://books.toscrape.com/media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg",
        price: "$51.77",
    },
    {
        id: "2",
        title: "Tipping the Velvet",
        imageUrl: "http://books.toscrape.com/media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg",
        price: "$53.74",
    },
    {
        id: "3",
        title: "Soumission",
        imageUrl: "http://books.toscrape.com/media/cache/3e/ef/3eef99c9d9adef34639f510662022830.jpg",
        price: "$50.10",
    },
];
//
var getBooks = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("dbFor372.json", {
                        method: "GET",
                    })];
            case 1:
                res = _a.sent();
                console.log(res);
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
                console.log("Fetched Data: ", data);
                titles = [data.titles];
                images = [data.imageUrl];
                prices = [data.price];
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                alert(error_1.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var renderUi = function (title, image, price) {
    var newBook = document.createElement("li");
    newBook.classList.add("movie-element");
    newBook.innerHTML = "<div class=\"movie-element__image\">\n    <img\n      src=".concat(image, "\n      alt=").concat(title, "\n    />\n  </div>\n  <div class=\"movie-element__info\">\n    <h2>").concat(title, "</h2>\n    <p>").concat(price, "</p>\n  </div>");
    bookList === null || bookList === void 0 ? void 0 : bookList.append(newBook);
};
var updateUi = function () {
    books.forEach(function (book) {
        var title = book.title, imageUrl = book.imageUrl, price = book.price;
        renderUi(title, imageUrl, price);
    });
};
// getBooksEl.addEventListener("click", getBooks);
updateUi();
