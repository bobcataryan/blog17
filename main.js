var images=["monkey1.png","monkey2.png","monkey3.png","monkey4.png","monkey5.png","monkey6.png","monkey7.png","monkey8.png","monkey9.png","monkey10.png"];
console.log("images_success");
i=0;
function walk(){
    console.log(i);
    document.getElementById("monkey_img").src= images[i];
    i++
    if (i == 9){
        i=0;
    }
}