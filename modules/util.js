
/**
 * Author: Scott Hathaway
 *
 * This file contains utilty methods for creating mobile apps using the Kony Visualizer.
 *
**/


/*
 * Show a loading spinnger
 */
function showLoading() {
  kony.application.showLoadingScreen("skinLoading", "Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER,true, false, true,{});
}

function dismissLoading() {
  kony.application.dismissLoadingScreen();
}

/*
 * Display an error message to the user
 */
function showErrorMsg(msg) {
  
 kony.ui.Alert({
                message: msg,
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "",
                yesLabel: "OK"
            }, {});

}

/*
 * Used to print errors to the console.
 */
function printError(msg) {
  kony.print(">>>>>>>ERROR: " + JSON.stringify(msg));
}

/*
 * Used to print debug messages to the console.
 * Toggle via global debug variable.
 */
function printDebug(msg) {
  if(debug)
  	kony.print(">>>>>>>DEBUG: " + JSON.stringify(msg));
}

