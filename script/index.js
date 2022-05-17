    function desplegarMenu() {
        const btn = document.querySelector(".burguernav_button");
        const menu = document.querySelector(".burgermenu")

        btn.addEventListener("click", function () {
            console.log("apretaste el boton")
            menu.classList.toggle("visible")
        }
        )
    }



