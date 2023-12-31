const vid = document.getElementById('player');

// chack device support
if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    console.log('media devices exist');
}

//const constraints = {
//  video: {
//    facingMode: {
//      exact: "environment"
//    }
//  }
//};

const constraints = {
  video: {
    facingMode: "environment",
  }
};

//const constraints = {
//    video: {
//        width: 320,
//        height: 180,
//        facingMode: 'environment',
//    }
//};

navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {vid.srcObject=stream})
    .catch(console.error);

//async function initCam() {
//    try {
//        const vidStream = await navigator.mediaDevices.getUserMedia(constraints);
//        vid.srcObject = vidStream;
//    } catch (err) {
//        console.log('access to camera denied');
//    }
//}
//
//initCam();
