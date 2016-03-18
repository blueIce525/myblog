/**
 * Created by kinglan525 on 16/2/22.
 */

//js模拟纯虚拟继续
Function.prototype.implementsFor = function(parentClassOrObject) {
    if(parentClassOrObject.constructor === Function) {
        this.prototype = new parentClassOrObject();
        this.prototype.constructor = this;
        this.prototype.parent = new parentClassOrObject();
    } else {
        this.prototype = parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject;
    }

    return this;
};

//享元对象
var CoffeeOrder = {
    serveCoffee: function() {},
    getFlavor: function() {}
};
//实现CoffeeOrder的具体享元对象
function CoffeeFlavor(newFlavor) {
    var flavor = newFlavor;
    if(typeof this.getFlavor === 'function') {
        this.getFlavor = function() {
            return flavor;
        }
    }
    if(typeof this.serveCoffee === 'function') {
        this.serveCoffee = function(context) {
            console.log('Serving Coffee flavor'
                + flavor
                + ' to table number '
                + context.getTable());

        }
    }
}
//为CoffeeOrder实现接口
CoffeeFlavor.implementsFor(CoffeeOrder);

//处理订单的table数
function CoffeeOrderContext(tableNum) {
    return {
        getTable: function() {
            return tableNum;
        }
    }
}

//享元工厂对象
function CoffeeFlavorFactory() {
    var flavors = [];
    return {
        getCoffeeFlavor: function(flavorName) {
            var flavor = flavors[flavorName];
            if(flavor === undefined) {
                flavor = new CoffeeFlavor(flavorName);
                flavors.push([flavorName, flavor]);
            }
            return flavor;
        },
        getTotalCoffeeFlavorMade: function() {
            return flavors.length;
        }
    }
}

//样例用法
function testFlyweight() {
    //已经订购的flavor
    var flavors = new CoffeeFlavor();
    //订单table
    var tables = new CoffeeOrderContext();
    //订单数量
    var ordersMade = 0;
    //CoffeeFlavorFactory 实例
    var flavorFactory = new CoffeeFlavorFactory();

    function takeOrders(flavorIn, table) {
        flavors[ordersMade] = flavorFactory.getCoffeeFlavor(flavorIn);
        tables[ordersMade++] = new CoffeeOrderContext(table);
    }
    takeOrders('cappuccino', 2);
    takeOrders('cappuccino', 2);
    takeOrders('Frappe', 1);
    takeOrders('Frappe', 1);
    takeOrders('Frappe', 897);
    takeOrders('cappuccino', 97);

    for(var i = 0; i < ordersMade; i++) {
        flavors[i].serveCoffee(tables[i]);
    }
    console.log('total coffee:' + flavorFactory.getTotalCoffeeFlavorMade());

}
testFlyweight();

//图书馆例子
//享元优化版本

var Book = function(title, author, genre, pageCount, publisherID, ISBN) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
};
//书籍工厂单例
var BookFactory = (function() {
    var existingBooks = {};
    var existingBook;
    return {
        createBook: function(title, author, genre, pageCount, publisherID, ISBN) {
            existingBook = existingBooks[ISBN];
            if(!!existingBook) {
                return existingBook;
            } else {
                var book = new Book(title, author, genre, pageCount, publisherID, ISBN);
                existingBooks[ISBN] = book;
                return book;
            }
        }
    }
})();

//书籍记录管理器单例
var BookRecordManage = (function() {
    var bookRecordDatabase = {};
    return {
        addBookRecord: function(id, title, author, genre, pageCount, publisherID, ISBN,
                                checkoutDate, checkoutMember, dueReturnDate, availability) {
            var book = BookFactory.createBook(title, author, genre, pageCount, publisherID, ISBN);
            bookRecordDatabase[id] = {
                checkoutDate: checkoutDate,
                checkoutMember: checkoutMember,
                dueReturnDate: dueReturnDate,
                availability: availability,
                book: book
            }
        },
        updateCheckoutStatus: function(bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
            var record = bookRecordDatabase[bookID];
            record.checkoutDate = checkoutDate;
            record.checkoutMember = checkoutMember;
            record.dueReturnDate = newReturnDate;
            record.availability = newStatus;
        },
        extendCheckoutPeriod: function(bookID, newReturnDate) {
            bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
        },
        isPastDue: function() {
            var currentDate = new Date();
            return currentDate.getTime > Date.parse(bookRecordDatabase[bookID].dueReturnDate);
        }
    }
})();


