$(function(){
    jQuery("#checkbox4").change(function(){
        jQuery(".budget").toggleClass("on");
        jQuery(".btnEditBudget").toggleClass("on");
        $( ".btnEditBudget" ).click(function() {
		  $('.budgetInput').prop('readonly', function(i, v) { return !v; });
		  jQuery(".budgetInput").toggleClass("on");
		  jQuery(".btnEditBudget").toggleClass("editing");
		});
        
    });
});

