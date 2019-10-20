var dummy_array = [{
    "start_x": 149.6 * Math.pow(10, 9),           //earths km from the sun
    "start_y": 0,
    "x_velocity":0,
    "y_velocity": 30000,                         //velocity in m/s assuming the earth starts at 0
    "planet_mass": 5.92 * Math.pow(10, 24),      //kg
    "sun_mass": 1.989 * Math.pow(10, 30)         //kg
}];

function startMotion(data) {
    pushArray(data);
    setInterval(function(){pushArray(frame_array)}, 30);
}


var frame_array;

function pushArray(data) {

    for (i=0 ; i < data.length ; i++) {
        //frame_array.shift();
        frame_array = [(moveBody(data[i].start_x, data[i].start_y, data[i].x_velocity, data[i].y_velocity, data[i].planet_mass, 86400))]
    }

    //console.log(frame_array)
    return frame_array
}

function moveBody(x, y, dx, dy, m_planet, time) {

    var theta       =   Math.atan(x / y),
        radius      =   Math.sqrt(Math.pow(x ,2) + Math.pow(y ,2)   ),
        G           =   6.67408 * Math.pow(10, -11),
        m_sun       =   1.989 * Math.pow(10, 30),
        force       =   (m_planet * m_sun * G )/ Math.pow(radius, 2),
        force_x     =   force * Math.cos(theta),
        force_y     =   force * Math.sin(theta),
        ddx         =   force_x / m_planet,
        ddy         =   force_y / m_planet;


    // console.log(theta)
    // console.log(radius)

    dx = dx + ddx * time
    dy = dy + ddy * time

    x = x + dx * time + .5 * ddx * Math.pow(time, 2)
    y = y + dy * time + .5 * ddy * Math.pow(time, 2)

    return {"start_x": x, "start_y": y, "x_velocity": dx, "y_velocity": dy, "planet_mass": m_planet, "time": time}
};