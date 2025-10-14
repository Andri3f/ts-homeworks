enum enableDisableTypes {
	enable = "enabled",
	disable = "disabled",
}
const settings: { [key: string]: enableDisableTypes } = {
	message: enableDisableTypes.enable,
	pushNotification: enableDisableTypes.disable,
	emailNotification: enableDisableTypes.enable,
	email: enableDisableTypes.disable,
	popup: enableDisableTypes.enable,
}
const enableSettings = Object.keys(settings).filter((key) => settings[key] === enableDisableTypes.enable)
const result5 = document.getElementById("result") as HTMLElement
result5.innerHTML = `<p>${enableSettings.join(", ")}</p>`
