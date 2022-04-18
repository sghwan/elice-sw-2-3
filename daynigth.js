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