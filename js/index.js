// chack device support
if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    console.log('media devices exist');
}

// log what devices are available to access
const devices = navigator.mediaDevices.enumerateDevices();
console.log(devices);

//const constraints = {
//    video: {
//        width: 320,
//        height: 180,
//        facingMode: 'environment',
//    }
//}
//
//// request user permission
//navigator.mediaDevices.getUserMedia(constraints)
