function refreshTooltips() {
    $("[rel=tooltip-bottom]").tooltip({placement: 'bottom', animation: false});
    $("[rel=tooltip-top]").tooltip({placement: 'top', animation: false});
    $("[rel=tooltip-left]").tooltip({placement: 'left', animation: false});
    $("[rel=tooltip-right]").tooltip({placement: 'right', animation: false});
    $("[rel=tooltip-auto]").tooltip({placement: 'auto', animation: false});
    $("[rel=tooltip]").tooltip({placement: 'bottom', animation: false});
}
$(document).ready(function() {
    refreshTooltips();
});
setInterval(function() {
    refreshTooltips();
}, 5000);
