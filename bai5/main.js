var result = 3;

function handleClickLeft() {
    result = result + 1;
    if(result % 2 != 0 ){
        image.style.backgroundImage = 'url(../images/Rectangle17.png)';
    }else{
        image.style.backgroundImage = 'url(../images/Rectangle9.png)';
    }
}

function handleClickRight() {
    result = result - 1;
    if(result % 2 != 0 ){
        image.style.backgroundImage = 'url(../images/Rectangle17.png)';
    }else{
        image.style.backgroundImage = 'url(../images/Rectangle9.png)';
    }
}
