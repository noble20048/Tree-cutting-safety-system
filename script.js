function assessTree() {
    const height = Number(document.getElementById("treeHeight").value);
    const circumference = document.getElementById("trunkCircumference").value;
    const wind = Number(document.getElementById("windSpeed").value);

    document.getElementById("result").innerText = 
    "Tree Height: " + height + " m, " +
    "Trunk Circumference: " + circumference + " cm, " +
    "Wind Speed: " + wind + " km/h";
}
