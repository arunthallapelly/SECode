function addWidgetsfrmNews() {
    frmNews.setDefaultUnit(kony.flex.DP);
    var brwsNews = new kony.ui.Browser({
        "detectTelNumber": true,
        "enableZoom": false,
        "height": "100%",
        "id": "brwsNews",
        "isVisible": true,
        "left": "0dp",
        "requestURLConfig": {
            "URL": "https://portaltest.pxd.com",
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    frmNews.add(brwsNews);
};

function frmNewsGlobals() {
    frmNews = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmNews,
        "enabledForIdleTimeout": false,
        "id": "frmNews",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm",
        "title": "News"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
    frmNews.info = {
        "kuid": "aa12cb277e77440895246a1389ded3bc"
    };
};