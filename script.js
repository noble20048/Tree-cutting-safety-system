function assessTree() {
    const height = document.getElementById("treeHeight").value;
    const circumference = document.getElementById("trunkCircumference").value
    const wind = document.getElementById("windSpeed").value

    document.getElementById("result").innerText = 
    "Tree Height: " + height + " m, " +
    "Trunk Circumference: " + circumference + " cm, " +
    "Wind Speed: " + wind + " km/h";
}
