$(document).ready(function() {
  $('#example').dataTable({
    "columnDefs": [{
      "targets": [2],
      "visible": false,
      "searchable": false
    }, {
      "targets": [3],
      "visible": false
    }]
  });

$('#example').on('page.dt', function() {
$('html,body').animate({
  scrollTop: 0
}, 500, 'easeOutExpo');
});

// new $.fn.dataTable.FixedHeader(table);
//$('.example_paginate').stick_in_parent();

});