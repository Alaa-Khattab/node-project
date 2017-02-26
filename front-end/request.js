function requestFunction() {
    var dataList = document.getElementById("json-datalist");
    var input = document.getElementById("word").value;
    var http = new XMLHttpRequest();
     var t0 = performance.now();
    http.onreadystatechange = function(response) {
        var array = [];
        var jsonOptions = "";
        var option = "";
        while (dataList.hasChildNodes()) {
            dataList.removeChild(dataList.lastChild);
        }
        if (http.readyState == 4 && http.status == 200) {
            jsonOptions = JSON.parse(http.responseText);
            array = jsonOptions;

            array.forEach(function(item) {
                option = document.createElement('option');
                option.value = item;
                dataList.appendChild(option);
            });
            var t1 = performance.now();
            console.log("Call to doSomething took " + (t1 - t0) / 1000 + " milliseconds.")

        } else {
            console.log("error");
        }

    };
    http.open("POST", "/findword", true);
    http.send(input);
}
