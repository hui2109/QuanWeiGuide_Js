function drawCircle ({x,y,radius,color:[r,g,b]}) {
    return {x,y,radius,r,g,b};
}

console.log(drawCircle({a: 1, b: 1, c: 2,x:12,y:3,
    radius:9, color: [23, 45, 67],color_y:[5,6,8]}));