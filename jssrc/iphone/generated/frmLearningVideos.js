function addWidgetsfrmLearningVideos() {
    frmLearningVideos.setDefaultUnit(kony.flex.DP);
    frmLearningVideos.add();
};

function frmLearningVideosGlobals() {
    frmLearningVideos = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLearningVideos,
        "enabledForIdleTimeout": false,
        "id": "frmLearningVideos",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
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
    frmLearningVideos.info = {
        "kuid": "dac18ea7f7644633ac832e34da7fb47e"
    };
};