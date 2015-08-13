$("#selectableTable tbody").on("click", "tr.selectable", function() {
    var $this = $(this);

    if ($this.hasClass("selected")) {
        $this.removeClass("selected");
    } else {
        $this.addClass("selected");
    }
});

$(".tableSelectSubmit").click(function() {
    var chassisIds = [];
    $("#selectableTable tbody").find("tr.selected").each(function() {
        chassisIds.push($(this).data("chassis_id"));
    });
    alert("Selected chassis id's: " + chassisIds.join(","));
});
