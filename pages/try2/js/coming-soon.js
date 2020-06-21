$(document).ready(function () {
  $(":text").after("<span> </span>");

  $("#registration_form").submit(function (event) {
    var isValid = true;

    // First name
    var firstName = $("#first_name").val().trim();
    if (firstName == "") {
      $("#first_name").next().text("First name is required.");
      isValid = false;
    } else {
      $("#first_name").val(firstName);
      $("#first_name").next();
    }

    // Last name
    var lastName = $("#last_name").val().trim();
    if (lastName == "") {
      $("#last_name").next().text("Last name is required.");
      isValid = false;
    } else {
      $("#last_name").val(lastName);
      $("#last_name").next();
    }

    // Email validation
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    var email = $("#email_1").val();
    if (email == "") {
      $("#email_1").next().text("Email is required.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      $("#email_1").next().text("Must be a valid email address.");
      isValid = false;
    } else {
      $("#email_1").next();
    }

    // Emails must match
    var email2 = $("#email_2").val();
    if (email2 == "") {
      $("#email_2").next().text("Email is required");
      isValid = false;
    } else if (email !== email2) {
      $("#email_2").next().text("Emails must match.");
      isValid = false;
    } else {
      $("#email_2").next().text("");
    }

    // Zip code in 5 digits
    var zip = $("#zip").val();
    if (zip == "") {
      $("#zip").next().text("Zip code is required.");
      isValid = false;
    } else if (zip.length != 5) {
      $("#zip").next().text("Use 99999 format.");
      isValid = false;
    } else {
      $("#zip").next();
    }

    // submit if all entries are valid
    if (isValid == false) {
      event.preventDefault();
    }
  });
});

$last = $("#last");
$next = $("#next");
$landscape = $("#landscape");
$count = 1;
$total = 4;

$("img").hide();

$last.click(function () {
  if ($count > 1) {
    $count--;
  } else {
    $count = $total;
  }
  $item = $("#" + $count);
  $("img").hide();
  $item.fadeIn();
});

$next.click(function () {
  if ($count < 4) {
    $count++;
  } else {
    $count = 1;
  }
  $item = $("#" + $count);
  $("img").hide();
  $item.fadeIn();
});
