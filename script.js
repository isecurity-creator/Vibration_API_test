const continue_button = document.getElementById('continue');
const stop_button = document.getElementById('stop');

let vibrateInterval;


continue_button.addEventListener('click', function () {
    try {
        startPersistentVibrate(10000, 10000);
    } catch (error) {
        printError(error);
    }
});

stop_button.addEventListener('click', function () {
    try {
        stopVibrate();
    } catch (error) {
        printError(error);
    }
});

function printError(error){
    alert("エラーが発生しました。\nこのブラウザーでは利用できない可能性があります。\n\n↓のエラーコードを管理者にご連絡ください。\n" + error);
}

// 渡されたレベルでバイブレーションを開始
function startVibrate(duration) {
    navigator.vibrate(duration);
}

// バイブレーションを停止
function stopVibrate() {
    // インターバルをクリアして継続的なバイブレーションを停止
    if(vibrateInterval){
        clearInterval(vibrateInterval);
    }
    navigator.vibrate(0);
}

// 与えられた時間とインターバルによる継続的なバイブレーションを開始
// 数値が与えられるものとする
function startPersistentVibrate(duration, interval) {
    startVibrate(duration);
    vibrateInterval = setInterval(function () {
        startVibrate(duration);
    }, interval);
}