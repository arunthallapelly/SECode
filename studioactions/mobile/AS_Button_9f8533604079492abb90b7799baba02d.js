function AS_Button_9f8533604079492abb90b7799baba02d(eventobject) {
    function MOVE_ACTION____9757c45cba0f4b66b2d941905cd73028_Callback() {}
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
        "animationEnd": MOVE_ACTION____9757c45cba0f4b66b2d941905cd73028_Callback
    });
}