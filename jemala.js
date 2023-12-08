document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".logo").addEventListener("click", () => {
        location.href = "#";
    });

    let previousScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        let currentScrollY = window.scrollY;
        if (previousScrollY > currentScrollY) {
            document.querySelector(".head").style.top = '0';
        } else {
            document.querySelector(".head").style.top = "-9vh";
            document.querySelector(".head").addEventListener("mouseover", () => {
                document.querySelector(".head").style.top = "0";
            });

        }
        previousScrollY = currentScrollY;
    });

    let box1BG = "#F1662A";
    let box2BG = "#33A9DC";
    let box3BG = "#F5DE19";

    document.querySelectorAll(".box").forEach((box, index) => {
        let BGcolor = "#2f0272";
        box.addEventListener("mouseover", () => {
            if (index === 0) {
                BGcolor = box1BG;
            } else if (index === 1) {
                BGcolor = box2BG;
            } else if (index === 2) {
                BGcolor = box3BG;
            }
            document.querySelector(".head").style.top = 0;
            document.querySelector(".head").style.background = BGcolor;
        })
    })

    document.querySelectorAll(".box").forEach((box) => {
        box.addEventListener("mouseleave", () => {
            document.querySelector(".head").style.background = "#2f0272";
        })
    })
});
