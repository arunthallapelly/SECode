function AS_Button_1bab13546c49483aa43750f44ceae8fa(eventobject) {
    function ___ide_onClick_41added5951e4541a28eb61e2aaaac6f_Callback() {}
    frmCostPlanDetails["flxCostCenters"].animate(kony.ui.createAnimation({
        "100": {
            "centerX": "50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___ide_onClick_41added5951e4541a28eb61e2aaaac6f_Callback
    });
}