"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var calculateTax = function (subtotal, taxRate) {
  var sales_tax = (taxRate * subtotal) / 100;
  return sales_tax;
};

var calculateTotal = function (subtotal, sales_tax) {
  var total = sales_tax + subtotal;
  return total;
};

var processNumbers = function (subtotal, tax_rate, total) {
  var subtotal = parseFloat($("subtotal").value);
  var taxRate = parseFloat($("tax_rate").value);

  if (isNaN(subtotal) || subtotal <= 0 || subtotal > 10000) {
    alert("Subtoal amount must be greater 0 and less 10000.");
  } else if (isNaN(taxRate) || taxRate <= 0 || taxRate > 12) {
    alert("Tax rate must be greater 0 and less 12");
  } else {
    $("sales_tax").value = calculateTax(subtotal, taxRate);
  }
};
var clear_click = function () {
  $("subtotal").value = "";
  $("tax_rate").value = "";
  $("sales_tax").value = "";
  $("total").value = "";
  $("subtotal").focus();
};

window.onload = function () {
  $("calculate").onclick = processNumbers;
  $("clear").onclick = clear_click;
};
