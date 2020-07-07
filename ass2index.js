function abc() {

    let corrt = document.getElementById('rightt').value;
    console.log(corrt);;
    var atposition = corrt.indexOf("@");
    var dotposition = corrt.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= corrt.length) {
        console.log("Invalid");
        document.getElementById("imgg").style.visibility = "visible";
    } else {
        console.log("valid")
        document.getElementById("imggg").style.visibility = "visible";

    }
}