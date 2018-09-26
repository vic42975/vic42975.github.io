function start() {
    updateClock();
    enableMenu();
}

function dateFormat(x) {
    return (x > 9) ? x : '0' + x;
}

function updateClock() {
    var now = new Date(),
        months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'],
        time = dateFormat(now.getHours()) + ":" + dateFormat(now.getMinutes()) + ":" + dateFormat(now.getSeconds()),
        date = [months[now.getMonth()],
                now.getDate(),
                now.getFullYear()].join(' ');
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
    setTimeout(updateClock, 1000);
}



function enableMenu() {
    // Activates carousel menu
    $("#category").carousel("pause");
    
    // Enable the indicators
    $(".work").click(function(){
        $("#category").carousel(0);
    });
    
    $(".social").click(function(){
        $("#category").carousel(1);
    });
    
    $(".weeb").click(function(){
        $("#category").carousel(2);
    });
    
    // Enable controls
    $(".left").click(function(){
        $("#category").carousel("prev");
    });

    $(".right").click(function(){
        $("#category").carousel("next");
    });
}
