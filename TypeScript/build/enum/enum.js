"use strict";
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
let membership = Membership.Simple;
let membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "\u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAMM"] = "INSTAGRAMM";
})(SocialMedia || (SocialMedia = {}));
let social = SocialMedia.INSTAGRAMM;
console.log(social);
