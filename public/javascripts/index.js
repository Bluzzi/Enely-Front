document.addEventListener("mousemove", event => {
    let profilPicture = document.getElementById("profil-picture");
    let screenMiddle = window.innerWidth / 2;

    if(Math.abs(screenMiddle - event.x) < 50){
        profilPicture.src = "/images/logo/logo-middle.png";
    } else if(event.x < screenMiddle){
        profilPicture.src = "/images/logo/logo-left.png";
    } else {
        profilPicture.src = "/images/logo/logo-right.png";
    }
});