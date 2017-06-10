// so first thing we need to create an array that holds all images on the page
const IMAGES = document.querySelectorAll("img");

//create an object and have each of the proprerties of the object map to the different sizes
const SIZES = {
    showcase: "100vw",
    // that means if the width is narrower than 800px, then the width of the image will be 100vw full width , otherwise it will be 372px
    reason: "(max-width: 799px) 100vw, 372px",
    feature: "(max-width: 799px) 100vw, 558px",
    story: "(max-width: 799px) 100vw, 670px",
}; //end semicolon

// because theres several image sizes, this will create the corrrect URL for the images
function makeSrcset(imgSrc) {
    let markup = [];
    let width = 400; // thats the smallest size for the images , and they increment by 400

    for (let i = 0; i < 5; i++) { //5 times for 5 different image sizes

        //imgSrc is the URL without the -###.jpg at the end
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w"; // this is what it should look like
        width += 400;
    }

    return markup.join(); //to get a comma seperated list
}

//create a loop, that loops through each of the images
for (let i = 0; i < IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    /* take the image sources and strip off 8 characters off the end, so that the name is the same for all
     this takes off the -###.jpg at the end of each image , so that later we can put the right size for the image*/
    imgSrc = imgSrc.slice(0, -8);

    let srcset = makeSrcset(imgSrc);
    console.log(srcset);

    //in addition to the source atrribute we need an addition source for the image , and that is the datatype
    //--(note this attribute was custom created)
    let type = IMAGES[i].getAttribute("data-type");

    let sizes = SIZES[type]; //this allows type to be filled in with the actual data-type for the image,in return we get the actual sizes attribute

    console.log(sizes);
    //console.log(type);

}
