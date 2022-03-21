let btn = document.getElementById("result");


function showvalue() {
    let amo = document.getElementById("ammount").value;
    let people = document.getElementById("people").value;
    let charge = document.getElementById("charge").value;
    let tip = amo * (charge/100);
    let totalAmount = Number(amo) + tip;
    let eachAmount = Number(totalAmount)/ people;
    let result = document.getElementById("result_p");
    if (amo=="") {
        alert("Please fill the value")
    }
    if (people=="") {
        alert("please fill the people")
    }
    else(
        resultFu()
    )
    function resultFu() {
        result.style.display = "block";
        document.getElementById("tip").innerText = tip;
        document.getElementById("total_amount").innerText = totalAmount;
        document.getElementById("each_person").innerText = eachAmount;
    }
}
