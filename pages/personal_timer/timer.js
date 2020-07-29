var timer = undefined;

$(document).ready(function () {
  $("#start_timer").click(function () {
    var totalTime = $("#time").val();
    var interval = $("#interval").val();
    var isValid = true;

    // validate the time
    if (totalTime == "") {
      $("#time_error").text("This field is required.");
      isValid = false;
    } else if (isNaN(totalTime)) {
      $("#time_error").text("Time must be a number.");
      isValid = false;
    } else {
      $("#time_error").text("");
    }
    // validate the interval
    if (interval == "") {
      $("#interval_error").text("This field is required.");
      isValid = false;
    } else if (isNaN(interval)) {
      $("#interval_error").text("Interval must be a number.");
      isValid = false;
    } else {
      $("#interval_error").text("");
    }

    if (isValid) {
      totalTime = totalTime * 1000;
      interval = interval * 1000;
      var elapsedTime = 0;
      var progressbar = $("#progressbar");
      var progressLabel = $(".progress-label");
      progressbar.progressbar({
        value: 0,
        max: 100,
      });

      function bar() {
        elapsedTime += interval;
        var val = (100.0 * elapsedTime) / totalTime;
        if (val > 100) {
          val = 100;
          progressbar.progressbar("value", val);
          $("#start_timer").removeAttr("disabled");
        } else {
          progressLabel.text(val.toFixed(2) + "%");
          progressbar.progressbar("value", val);
          setTimeout(bar, interval);
        }
      }
      progressLabel.text("0%");
      setTimeout(bar, interval);
      $("#start_timer").attr("disabled", "disabled");
    }
  });
  $("#totalTime").focus();
});
