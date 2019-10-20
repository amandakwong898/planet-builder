// $.ajax({
//     type: "POST",
//     url: "~/RealTempCalc.py",
//     data: { param: text}
// }).done(function( o ) {
//     // do something
// });

var dummy_array = [

    {
        "start_x": 1.496 * Math.pow(10, 11),           //earths m from the sun at aphehedron
        "start_y": 0,
        "x_velocity":0,
        "y_velocity": 30000,                         //velocity in m/s assuming the earth starts at 0
        "planet_mass": 5.92 * Math.pow(10, 24),      //kg
        "sun_mass": 1.989 * Math.pow(10, 30)         //kg
    },

    {
        "start_x": 1.8 * 1.496 * Math.pow(10, 11) * 1.017,           //earths m from the sun at aphehedron
        "start_y": 0,
        "x_velocity":0,
        "y_velocity": 0,                         //velocity in m/s assuming the earth starts at 0
        "planet_mass": 2.5 * 5.92 * Math.pow(10, 24),      //kg
        "sun_mass": 1.989 * Math.pow(10, 30)         //kg
    },

    {
        "start_x": 2.2 * 1.496 * Math.pow(10, 11) * 1.017,           //earths m from the sun at aphehedron
        "start_y": 0,
        "x_velocity":0,
        "y_velocity": 0,                         //velocity in m/s assuming the earth starts at 0
        "planet_mass": 3 * 5.92 * Math.pow(10, 24),      //kg
        "sun_mass": 1.989 * Math.pow(10, 30)         //kg
    },

    {
        "start_x": 2.6 * 1.496 * Math.pow(10, 11) * 1.017,           //earths m from the sun at aphehedron
        "start_y": 0,
        "x_velocity":0,
        "y_velocity": 0,                                                //velocity in m/s assuming the earth starts at 0
        "planet_mass": .6 * 5.92 * Math.pow(10, 24),      //kg
        "sun_mass": 1.989 * Math.pow(10, 30)         //kg
    }
];




var hours = 0;
var frame_array;
var initial_array = [];

function getData() {
    var sun_temp = document.getElementById("Star_Temp").value,
        sun_radius = document.getElementById("Star_Radii").value,
        planet_distance = document.getElementById("Planet_Distance").value,
        //atmosphere_type = document.getElementById("Atmosphere_Type").value,
        planet_mass = document.getElementById("Planet_Mass").value;

    var planet_info = {
        "start_x": planet_distance * 1.496 * Math.pow(10, 11) * 1.017,           //earths m from the sun at aphehedron
        "start_y": 0,
        "x_velocity": 0,
        "y_velocity": 0,                                                //velocity in m/s assuming the earth starts at 0
        "planet_mass": planet_mass * 5.92 * Math.pow(10, 24),     //kg
        "sun_mass": 1.989 * Math.pow(10, 30),                       //kg
        "sun_radius": sun_radius,
        "sun_temp": sun_temp,
       // "planet_atmosphere": atmosphere_type;
    }

    initial_array.push(planet_info)
    startMotion(initial_array)
}

function startMotion(data) {
    console.log(data)
    getNewArray(data);
    setInterval(function(){getNewArray(frame_array)}, 2);
    setInterval(function(){hours = hours + 1}, 2);
    setInterval(function(){renderObjects(frame_array)}, 33);

}



function getNewArray(data) {

    frame_array = [];

    for (i=0 ; i < data.length ; i++) {
        //frame_array.shift();
        frame_array.push(moveBody(data[i].start_x, data[i].start_y, data[i].x_velocity, data[i].y_velocity, data[i].planet_mass, 3600))
    }
    //console.log(frame_array)
    //return frame_array
    //renderObjects(frame_array)
}

function moveBody(x, y, dx, dy, m_planet, time) {

    // var theta       =   (y == 0) ? 3.14159 / 2 :  Math.atan(y / x),
    var theta       =   Math.atan2(y, x),
        radius      =   Math.sqrt( Math.pow(x ,2) + Math.pow(y ,2)),
        G           =   6.67408 * Math.pow(10, -11),
        m_sun       =   1.989 * Math.pow(10, 30),
        force       =   (m_planet * m_sun * G ) / Math.pow(radius, 2),
        force_x     =   force * Math.cos(theta) * -1,
        force_y     =   force * Math.sin(theta) * -1,
        ddx         =   force_x / m_planet,
        ddy         =   force_y / m_planet;


    if (dy == 0 ) {dy = Math.sqrt(force * radius / m_planet) }        // given no starting velocity, an initial condition of 0, give the planet a stable circular orbit, then give it a bit of a boost

    // console.log(theta)
    // console.log(radius)

    dx = dx + ddx * time
    dy = dy + ddy * time

    x = x + dx * time + .5 * ddx * Math.pow(time, 2)
    y = y + dy * time + .5 * ddy * Math.pow(time, 2)

    return {"start_x": x, "start_y": y, "x_velocity": dx, "y_velocity": dy, "planet_mass": m_planet, "time": time}

}



function renderObjects(data) {

    var colors = ["magenta", "silver", "turquoise", "teal", "gold", "green", "skyblue", "tomato"];
    console.log(colors[2]);

    var width = "800";
    var height = "800";
    var xMargin = 30;
    var yMargin = 30;


    d3.select("#map").selectAll("svg").remove();

    var mapScale = 500 * Math.pow(10, 9);

    var svg = d3.select("#map").append("svg")
        .attr("width", width)
        .attr("height", height);

    var x = d3.scaleLinear()
        .domain([-mapScale, mapScale])
        .range([0, width]);

    var y = d3.scaleLinear()
        .domain([-mapScale, mapScale])
        .range([height, 0]);

    svg.selectAll("star").data(data)
        .enter().append("circle")
        .attr("r", 8)
        .attr("fill", "orange")
        .attr("cx", function(d) { return x(0); })
        .attr("cy", function(d) { return y(0); });


    for (i=0 ; i < data.length ; i++) {
        svg.selectAll("dot").data(data)
            .enter().append("circle")
            // .attr("id", `planet_${i}`)
            .attr("class", `planet`)
            .attr("r", 3)
            // .attr("fill", `${colors[i]}`)
            .attr("cx", function(d) { return x(d.start_x); })
            .attr("cy", function(d) { return y(d.start_y); })
    }

    document.getElementById('counter').innerHTML = `<p style="{color: "white";}"> Total Days: ${Math.round( hours / 24 ) } </p>`
}
