$("#burger").click( () => {
    if (
        ($("#mobilemenu").attr("class")).split(" ").length == 1
    ) {
        $("#mobilemenu").addClass("navbar-mobilemenu-active")
    } else {
        $("#mobilemenu").removeClass("navbar-mobilemenu-active")
    }
})

