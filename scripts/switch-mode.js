function switch_mode() {
    let mode = document.documentElement;

    // if (mode.classList.contains("light")){
    //     mode.classList.remove("light");
    // } else {
    //     mode.classList.add("light");}

    mode.classList.toggle("light");

    let image = document.getElementById("avatar");
    if (mode.classList.contains("light")){
        image.setAttribute('src', '../../assets/profile-light.png');
    } else {
        image.setAttribute('src', '../../assets/profile.png');
    }
}