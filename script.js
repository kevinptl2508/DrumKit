function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    //Stop function from running all together
    if (!audio) return;
}
function removeTransition(e) {
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", playSound);