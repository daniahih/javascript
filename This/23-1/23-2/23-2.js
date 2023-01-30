const storm = {
   superPower:"is Flying"
    }
    function printSuperPower() {
    console.log("my superpower is " +
    this.superPower);
    }
    printSuperPower.apply(storm)