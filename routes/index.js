const axios = require("axios").default;

server.get("/", async (request, response) => {
    let description = (await axios.get("https://api.sketchfab.com/v3/users/3d8bc8cc255d4754849b64723c5063b1")).data.biography;

    let strongKeys = ["pixel artist", "Minecraft", "Bedrock", "textures", "game"];

    strongKeys.forEach(key => {
        description = description.replace(key, "<strong>" + key + "</strong>");
    });

    response.render("index", {
        description: description
    });
});