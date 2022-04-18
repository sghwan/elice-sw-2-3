function night() {
    document.querySelector('body').style.backgroundColor = 'black';
    //$('body').css('background-color', "black");
    document.querySelector('body').style.color = 'white';
    //$('body').css('color', "white");
    //$('body').css('background-color', "black").css('color', 'white');
    let aArr = document.querySelectorAll('a');
    for (let i = 0; i < aArr.length; i++) {
        aArr[i].style.color = 'white';
    }
    //$('a').css('color', 'white');
}

function day() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    let aArr = document.querySelectorAll('a');
    for (let i = 0; i < aArr.length; i++) {
        aArr[i].style.color = 'black';
    }
}

//외부애서 쓰는 함수만 export시키고 내부에서 필요한 함수는 밖으로 노출시키지 않는다.
export function dayNight(mode) {
    if(mode === 'night') {
        night();
    } else {
        day();
    }
}