// so first thing we need to create an array that holds all images on the page
const IMAGES = document.querySelectorAll("img");

//create a loop, that loops through each of the images
for (let i = 0; i < IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    /* take the image sources and strip off 8 characters off the end, so that the name is the same for all
     this takes off the -###.jpg at the end of each image , so that later we can put the right size for the image*/
    imgSrc = imgSrc.slice(0, -8);

    console.log(imgSrc);

    //in addition to the source atrribute we need an addition source for the image , and that is the datatype
    //--(note this attribute was custom created)
    let type = IMAGES[i].getAttribute("data-type");
    console.log(type);

}
