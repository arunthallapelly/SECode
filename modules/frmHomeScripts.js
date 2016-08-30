//Type your code here
function setRotateTimer() {
  printDebug({"msg":"Creating carosel timer.","size":frmHome.sgmntPromotion.data.length});
  var size = frmHome.sgmntPromotion.data.length;
  var current = 1;

  var f = function() {
    printDebug({"msg":"Rotating to "+current % size});
    frmHome.sgmntPromotion.selectedRowIndex = [0, current % size];
    current = current + 1;
  };

  kony.timer.schedule("carosel_timer", f, 5, true);


}


