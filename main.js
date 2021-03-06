X = 0;
Y = 0;
function preload() {
}
function setup() {
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300)
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', getPose);
}
function draw() {
image(video, 0, 0, 300, 300);
}
function take_snapshot() {
save('myFilterImage.png');
}
function modelLoaded() {
console.log('PoseNet is initialized');
}
function getPose(results) {
if (results.length > 0) {
console.log(results);
X = results[0].pose.nose.x;
Y = results[0].pose.nose.y + 20;
console.log("moustache placement x = " + X);
console.log("moustache placement y = " + Y);
}
}