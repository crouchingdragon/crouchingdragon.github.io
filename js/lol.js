const btn = document.getElementById('btn');
const constraints = {
  video: {
    facingMode: {
      exact: "environment"
    }
  }
};
btn.onclick = e => {
	navigator.mediaDevices.getUserMedia(constraints)
		.then((stream) => {video.srcObject = stream})
		.catch( console.error );
};
