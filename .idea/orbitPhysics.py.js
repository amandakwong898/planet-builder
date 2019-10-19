
function main(data) {

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

    dx = dx + ddx * time
    dy = dy + ddy * time

    x = x + dx * time + .5 * ddx * Math.pow(time, 2)
    y = y + dy * time + .5 * ddy * Math.pow(time, 2)

    return [x, y, dx, dy, m_planet, m_sun, time, m_planet]
}

