axios.get("https://sketchfab.com/v3/search?type=models&user=Enely_").then(response => {
    let models = [];

    response.data.results.forEach(result => {
        models.push({name: result.name, embed: result.embedUrl, image: result.thumbnails.images[1].url}); 
    });

    setModelSelectorImage(models);
    setCurrentModel(models[0].embed);
});

/**
 * @param {[{name: string, embed: string, image: string}]} models 
 */
function setModelSelectorImage(models){
    let container = document.querySelector(".model-selector");

    models.forEach(model => {
        // Create image :
        let image = document.createElement("img");

        image.alt = model.name;
        image.src = model.image;

        image.height = 144 / 2.5;
        image.width = 256 / 2.5;

        image.style.cursor = "pointer";

        image.onclick = () => {
            setCurrentModel(model.embed);
        }

        // Add image in the document :
        container.appendChild(image);
    });
}

/**
 * @param {string} embedLink 
 */
function setCurrentModel(embedLink){
    let iframe = document.getElementById("model");

    iframe.src = embedLink;
}