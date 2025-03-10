const pepeImageUrl = "https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-superJumbo.jpg"

setInterval(() => {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.src = pepeImageUrl;
    })
}, 500);