function worker_function() {

  this.addEventListener('message', function (e) {
    setInterval(function () {
      var pepesToAdd = e.data / 25;
      this.postMessage(pepesToAdd);
    }, 40);
    // it actually adds 1 second worth of pepes every second, the timings are weird to make
    // the counter look cool
  }, false);
}

if (window != self)
  worker_function();