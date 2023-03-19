let version = AgoraRTC.VERSION;

document.getElementById("version").innerHTML = version;

let supportText = "";
let isSupported = AgoraRTC.checkSystemRequirements();

switch (isSupported) {
  case true:
    supportText = "supports";
    break;
  case false:
    supportText = "does not support";
    break;
}

document.getElementById("compatibility").innerHTML = supportText;
