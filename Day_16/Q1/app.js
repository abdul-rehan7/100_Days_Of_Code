"use strict";
let laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    explain: function () {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    },
};
laptop.explain();
