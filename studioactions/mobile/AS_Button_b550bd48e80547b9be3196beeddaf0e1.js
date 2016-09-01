function AS_Button_b550bd48e80547b9be3196beeddaf0e1(eventobject) {
    function MOVE_ACTION____2bfcf1691c314a94a01c5315368519c1_Callback() {}
    frmCostPlanDetails["flxCostCenters"].animate(kony.ui.createAnimation({
        "100": {
            "centerX": "150%",
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
        "animationEnd": MOVE_ACTION____2bfcf1691c314a94a01c5315368519c1_Callback
    });
}