export enum theme {
  LIGHT = "light",
  DARK = "dark",
}

const lightTheme =
  "--themeColor: rgb(185, 232, 255); --themeColor1: rgb(157, 222, 255); --themeColor2: rgb(110, 207, 255); --textColor: rgb(53, 53, 53); --switchOff: rgb(179, 198, 207); --tip: rgb(180, 180, 180); --bodyColor: rgb(255, 255, 255); --footerBg: rgba(255, 255, 255, 0.4); --codeBg: rgb(50, 57, 63); --textColor2: rgb(122, 122, 122); --inlineCode: rgb(136, 215, 255);";

const darkTheme =
  "--themeColor: rgb(12, 29, 27); --themeColor1: rgb(22, 54, 51); --themeColor2: rgb(39, 95, 89); --textColor: rgb(255, 255, 255); --switchOff: rgb(77, 77, 77); --tip: rgb(116, 116, 116); --bodyColor: rgb(0, 0, 0); --footerBg: rgba(0, 0, 0, 0.3); --codeBg: rgb(37, 43, 48); --textColor2: rgb(167, 167, 167); --inlineCode: rgb(29, 71, 67);";

let currentTheme = theme.LIGHT;
// get body element
const map = {
  [theme.LIGHT]: lightTheme,
  [theme.DARK]: darkTheme,
};

const body = document.querySelector("body");

export function setTheme(theme: theme) {
  currentTheme = theme;
  body.style.cssText = map[currentTheme];
}

export function toggleTheme() {
  currentTheme = currentTheme === theme.LIGHT ? theme.DARK : theme.LIGHT;
  body.style.cssText = map[currentTheme];
}

export function gettheme() {
  return currentTheme;
}
