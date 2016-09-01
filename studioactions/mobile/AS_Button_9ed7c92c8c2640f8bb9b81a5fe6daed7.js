function AS_Button_9ed7c92c8c2640f8bb9b81a5fe6daed7(eventobject) {
    function ___ide_onClick_5bc6419b52cc4a89b818c06091899ff6_Callback() {}
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
        "animationEnd": ___ide_onClick_5bc6419b52cc4a89b818c06091899ff6_Callback
    });
}