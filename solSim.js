// $("#starRadio").onclick(() => {
//     console.log("onclick is running");
//     $("body_setup").append(
//         " <form>\n" +
//         "            <input type = \"text\" name = \"\">Name<br>\n" +
//         "            <input type = \"text\" name = \"\">Mass<br>\n" +
//         "            <input type = \"text\" name = \"\">Radius<br>\n" +
//         "            <input type = \"text\" name = \"\">Temperature<br>\n" +
//         "</form>\n"
//     )
// }




function populateStar() {
    document.getElementById("body_setup").innerHTML = "   <form id = \"starText\">\n" +
        "        Name:<br>\n" +
        "        <input type = \"text\" id = \"name1\"><br>\n" +
        "        Mass:<br>\n" +
        "        <input type = \"text\" id = \"mass1\"><br>\n" +
        "        Radius:<br>\n" +
        "        <input type = \"text\" id = \"radius1\"><br>\n" +
        "        Temperature:<br>\n" +
        "        <input type = \"text\" id = \"temp\"><br>\n" +
        "    </form>";
}

function populatePlanet() {
    document.getElementById("body_setup").innerHTML = "    <form id = \"planetText\">\n" +
        "        <label for=\"name2\">Name:</label><br>\n" +
        "        <input type = \"text\" id = \"name2\"><br>\n" +
        "        <label for=\"mass2\">Mass:</label><br>\n" +
        "        <input type = \"text\" id = \"mass2\"><br>\n" +
        "        <label for=\"radius2\">Radius:</label><br>\n" +
        "        <input type = \"text\" id = \"radius2\"><br>\n" +
        //TODO: Slider and color picker
        "    </form>";
}
