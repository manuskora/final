let capture
let tracker

function setup() {

    createCanvas(800, 600).parent('p5')

    // start capturing video
    capture = createCapture(VIDEO)
    capture.size(800, 600)
    capture.hide()

    // create the tracker
    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)

}

function draw() {

    // draw background stuff
    background(0)

    // show the mirrored video feed
    showFlippedCapture()

    // get new data from tracker
    let features = tracker.getCurrentPosition()

    // sometimes the tracker doesn't capture anything
    // in that case, we want to stop the function right here using 'return'
    if (features.length == 0) {
        return
      }
      let flength = features[7].y-features[33].y
      let fwidth = features[7].x-features[33].x
      let fsize = pow(pow(flength,2)+pow(fwidth,2),.5)/200
      let tilt_y = (features[37].y-features[33].y)/(features[7].y-features[37].y)
      let point74 = {x:features[33].x-(fwidth),y:features[33].y-(.1+tilt_y)*(flength)}
      let point77 = {x:features[0].x-.4*(features[4].x-features[0].x),y:features[0].y-tilt_y*.4*(features[4].y-features[0].y)}
      let point71 = {x:features[14].x-.4*(features[10].x-features[14].x),y:features[14].y-tilt_y*.4*(features[10].y-features[14].y)}
      let point76 = {x:features[0].x-3.5*(features[1].x-features[0].x),y:features[0].y-(tilt_y+2.5)*(features[1].y-features[0].y)}
      let point72 = {x:features[14].x-3.5*(features[13].x-features[14].x),y:features[14].y-(tilt_y+2.5)*(features[13].y-features[14].y)}
      let point78 = {x:(point72.x+point74.x)/2,y:(point72.y+point74.y)/2}
      let point79 = {x:(point76.x+point74.x)/2,y:(point76.y+point74.y)/2}
      let point73 = {x:point78.x-(.03+.03*tilt_y)*(features[7].x-point78.x),y:point78.y-(.03+.03*tilt_y)*(features[7].y-point78.y)}
      let point75 = {x:point79.x-(.03+.03*tilt_y)*(features[7].x-point79.x),y:point79.y-(.03+.03*tilt_y)*(features[7].y-point79.y)}
      let point80 = {x:(point74.x+tilt_y*features[33].x)/(tilt_y+1),y:(point74.y+tilt_y*features[33].y)/(tilt_y+1)}
      let point81 = {x:features[1].x-tilt_y*(features[7].x-features[1].x),y:features[1].y-tilt_y*(features[7].y-features[1].y)}
      let point84 = {x:features[13].x-tilt_y*(features[7].x-features[13].x),y:features[13].y-tilt_y*(features[7].y-features[13].y)}
      let point82 = {x:features[2].x-tilt_y*(features[7].x-features[2].x),y:features[2].y-tilt_y*(features[7].y-features[2].y)}
      let point85 = {x:features[12].x-tilt_y*(features[7].x-features[12].x),y:features[12].y-tilt_y*(features[7].y-features[12].y)}
      let point83 = {x:features[0].x-tilt_y*(features[7].x-features[0].x),y:features[0].y-tilt_y*(features[7].y-features[0].y)}
      let point86 = {x:features[14].x-tilt_y*(features[7].x-features[14].x),y:features[14].y-tilt_y*(features[7].y-features[14].y)}

      let jaw=[features[0],
      features[1],
      features[2],
      features[3],
      features[4],
      features[5],
      features[6],
      features[7],
      features[8],
      features[9],
      features[10],
      features[11],
      features[12],
      features[13],
      features[14],
      point71,
      point72,
      point73,
      point74,
      point75,
      point76,
      point77
      ]



      let left_eye =[features[23],
      features[63],
      features[24],
      features[64],
      features[25],
      features[65],
      features[26],
      features[66],
      ]
      let right_eye =[features[28],
      features[67],
      features[29],
      features[68],
      features[30],
      features[69],
      features[31],
      features[70],
    ]


    fill(255,255,0,255)
    noStroke()
        beginShape()
        for (let point of jaw){
          curveVertex(point.x,point.y)
        }
        endShape(CLOSE)

    fill(0)
    noStroke()
        beginShape()
        for (let point of right_eye){
          curveVertex(point.x,point.y)
        }
        endShape(CLOSE)

    fill(0)
    noStroke()
            beginShape()
            for (let point of left_eye){
              curveVertex(point.x,point.y)
            }
            endShape(CLOSE)



    fill(255)
    circle((features[32].x+features[68].x)/2,(features[32].y+features[68].y)/2,10*fsize)
    circle((features[27].x+features[64].x)/2,(features[27].y+features[64].y)/2,10*fsize)

    fill(0)
    triangle(features[62].x,features[62].y,features[62].x+10*fsize,features[62].y-10*fsize,features[62].x-10*fsize,features[62].y-10*fsize)


    fill(0)
    noStroke()
    beginShape()
    curveVertex(features[47].x,features[47].y)
    curveVertex(features[56].x,features[56].y)
    curveVertex(features[44].x,features[44].y)
    curveVertex(features[54].x,features[54].y)
    curveVertex(features[53].x,features[53].y)
    curveVertex(features[52].x,features[52].y)
    curveVertex(features[50].x,features[50].y)
    curveVertex(features[58].x,features[58].y)
    curveVertex(features[47].x,features[47].y)
    curveVertex(features[47].x,features[47].y)
    endShape()

    //ears
    fill(255,255,0,255)
    noStroke()
    beginShape()
    curveVertex(features[0].x,features[0].y)
    curveVertex(point83.x,point83.y)
    point(point81.x,point81.y)
    curveVertex(point82.x,point82.y)
    curveVertex(features[2].x,features[2].y)
    endShape(CLOSE)

    fill(255,255,0,255)
    noStroke()
    beginShape()
    curveVertex(features[14].x,features[14].y)
    curveVertex(point86.x,point86.y)
    point(point84.x,point84.y)
    curveVertex(point85.x,point85.y)
    curveVertex(features[12].x,features[12].y)
    endShape(CLOSE)


    //cheeks
    push()
    ellipseMode(CORNERS)
    fill(255,0,0,255)
    noStroke()
    ellipse((2*features[44].x+features[1].x)/3,(2*features[44].y+features[1].y)/3,(features[44].x+2*features[1].x)/3,(features[44].y+2*features[1].y)/3)
    ellipse((2*features[50].x+features[13].x)/3,(2*features[50].y+features[13].y)/3,(features[50].x+2*features[13].x)/3,(features[50].y+2*features[13].y)/3)
    pop()

      }

// this function flips the webcam and displays it
function showFlippedCapture() {
    push()
    translate(capture.width, 0)
    scale(-1, 1)
    image(capture, 0, 0, capture.width, capture.height)
    pop()
}
