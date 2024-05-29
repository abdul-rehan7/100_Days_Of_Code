"use strict";
// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
let userProfile = (function () {
    let name = "Rehan";
    let age = 18;
    return {
        displayInfo: function () {
            console.log(`\t Name: ${name} \n\t Age:${age}`);
        },
    };
})();
userProfile.displayInfo();
