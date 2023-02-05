const myObj = {
    name: 'dania',
    printName: function () {
        console.log(this.name);
    },
    nameAgain: function () {
        setTimeout(this.printName.bind(myObj),1000);
    }
}

myObj.printName();
myObj.nameAgain();