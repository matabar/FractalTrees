function checkSliders(m,a){
  if(mSlider.value()!=m)
    background(0);
  else if(aSlider.value()!=a)
    background(0);
}

function setup() {
  createCanvas(800, 600);
  background(0);
	aSlider = createSlider(0,PI/7,PI/18,0.01);
	aSlider.position(20,60);
	mSlider = createSlider(0,210,0);
	mSlider.position(20,20);
}

function draw() {
  translate(width/2,height);
  let l = height/5;
  let a = PI*aSlider.value();
  let m = mSlider.value()/255;
  checkSliders();
  ln(l,a,m);
}

function ln(l,a,m){
  stroke(255);
  l*=m;
  let w = height/5;
  w=l/w;
  w*=3;
  strokeWeight(w);
  line (0,0,0,-l);
  lnSub(l,-a,m);
  lnSub(l,a,m);
}

function lnSub(l,a,m){
  push();
  translate(0,-l,m);
  rotate(a/2);
  line(0,0,0,-l*m);
  if(l>12)
    ln(l,a,m);
  pop();
}