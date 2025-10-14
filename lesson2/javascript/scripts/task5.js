"use strict";
var enableDisableTypes;
(function (enableDisableTypes) {
    enableDisableTypes["enable"] = "enabled";
    enableDisableTypes["disable"] = "disabled";
})(enableDisableTypes || (enableDisableTypes = {}));
const settings = {
    message: enableDisableTypes.enable,
    pushNotification: enableDisableTypes.disable,
    emailNotification: enableDisableTypes.enable,
    email: enableDisableTypes.disable,
    popup: enableDisableTypes.enable,
};
const enableSettings = Object.keys(settings).filter((key) => settings[key] === enableDisableTypes.enable);
const result5 = document.getElementById("result");
result5.innerHTML = `<p>${enableSettings.join(", ")}</p>`;
