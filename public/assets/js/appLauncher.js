import { openApp, loadingShow, loadingHide } from "/assets/js/openapps.js";
import {
  setTransport,
  setWisp,
  makeURL,
  proxySJ,
  proxyUV,
} from "../../lithium.mjs";
function launchApp() {
  let appURL = localStorage.getItem("storeAppURL");
  if (appURL == "https://discord.com/") {
    openApp(appURL, "UV");
    frame.style.zIndex = "1";
  }else {

}
} 
window.addEventListener("load", launchApp);
launchApp();
