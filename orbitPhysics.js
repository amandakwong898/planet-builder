var dummy_array = [{
    "start_x": 1000,
    "start_y": 1000,
    "x_velocity":10000,
    "y_velocity": 10000,
    "planet_mass": 1000,
    "sun_mass": 100000000000000
}]

function cheapTrick() {
    startMotion(frame_array);
}

var frame_array;

function startMotion(data) {

    for (i=0 ; i < data.length ; i++) {
        //frame_array.shift();
        frame_array = [(moveBody(data[i].start_x, data[i].start_y, data[i].x_velocity, data[i].y_velocity, data[i].planet_mass, data[i].sun_mass, 3))]
    }
    console.log(frame_array)
    //setInterval (startMotion(frame_array), 1000)
}

function moveBody(x, y, dx, dy, m_planet, m_sun, time) {

    var theta       =   Math.atan(x / y),
        radius      =   Math.sqrt(Math.pow(x ,2) + Math.pow(y ,2)   ),
        G           =   6.67408 * Math.pow(10, -11),
        force       =   (m_planet * m_sun * G )/ Math.pow(radius, 2),
        force_x     =   force * Math.cos(theta),
        force_y     =   force * Math.sin(theta),
        ddx         =   force_x / m_planet,
        ddy         =   force_y / m_planet;


    console.log(theta)
    console.log(radius)

    dx = dx + ddx * time
    dy = dy + ddy * time

    x = x + dx * time + .5 * ddx * Math.pow(time, 2)
    y = y + dy * time + .5 * ddy * Math.pow(time, 2)

    return {"start_x": x, "start_y": y, "x_velocity": dx, "y_velocity": dy, "planet_mass": m_planet, "sun_mass": m_sun, "time": time}
};