

//**************************************************
let blank_screen_time_ms = 300000;
let qr_display_time_ms = 6000;
//**************************************************


// length of loop to run the QR code of pickup 
let n = 100000;

var images = [], x = -1;
images[0] = "white.png";
images[1] = "qr2drop.png";
images[2] = "white.png";
images[3] = "qr3drop.png";
images[4] = "white.png";
images[5] = "qr4drop.png";
images[6] = "white.png";

var imgs = [], y = -1;
imgs[0] = "qr1drop.png"
imgs[1] = "white.png";
imgs[2] = "qr2pickup.png";
imgs[3] = "white.png";
imgs[4] = "qr3pickup.png";
imgs[5] = "white.png";
imgs[6] = "qr4pickup.png";
imgs[7] = "white.png";


function waitforme(millisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    })
}

async function printimage() {
    for (let i = 0; i < images.length; i++) {
        if(i % 2 == 0)
        {
            await waitforme(qr_display_time_ms);
            x = (x === images.length - 1) ? 0 : x + 1;
            document.getElementById("img").src = images[x];
        }
        else{
            await waitforme(blank_screen_time_ms);
            x = (x === images.length - 1) ? 0 : x + 1;
            document.getElementById("img").src = images[x];
        }
    }

    for (let i = 0; i < n; i++) {
        if(i % 2 != 0)
        {
            await waitforme(qr_display_time_ms);
            y = (y === imgs.length - 1) ? 0 : y + 1;
            document.getElementById("img").src = imgs[y];
        }
        else{
            await waitforme(blank_screen_time_ms);
            y = (y === imgs.length - 1) ? 0 : y + 1;
            document.getElementById("img").src = imgs[y];
        }
    }

    console.log("Loop execution finished!)");
}

 

printimage();
    