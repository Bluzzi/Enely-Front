addCloud(-200, 20, 0.5);

addCloud(0, 200, 1);

addCloud(200, 100, 0.7);

addCloud(400, 200, 1);
addCloud(350, 20, 0.8);

addCloud(700, 250, 1);
addCloud(890, 100, 0.6);

addCloud(1500, 210, 0.8);

addCloud(1200, 150, 0.6);
addCloud(1500, 50, 1);

addCloud(1800, 30, 1);
addCloud(1900, 210, 0.8);

setInterval(() => {
    if(document.querySelector(".cloud").children.length <= 10) addCloud();
}, 15000);

function addCloud(startPosition = -300, y = 0, opacity = 0){
    let cloud = document.createElement("img");

    cloud.src = "/images/cloud/day/cloud" + Math.round(Math.random() * 6) + ".svg";

    cloud.style.position = "absolute";

    cloud.style.height = "80px";
    cloud.style.width = "auto";

    cloud.style.top = y ? y + "px" : (Math.round(Math.random() * 250) + 20) + "px";
    cloud.style.left = startPosition + "px";

    cloud.style.opacity = opacity !== 0 ? opacity : Math.random() + 0.5;

    document.querySelector(".cloud").appendChild(cloud);

    let move = setInterval(() => {
        let screenWidth = window.innerWidth + 500;
        let left = cloud.style.left;

        left = parseFloat(left.substr(0, left.length - 2));

        cloud.style.left = (left + 0.05) + "px";

        if(left > screenWidth + 300){
            cloud.remove();
            clearInterval(move);
        }
    }, 1);
}