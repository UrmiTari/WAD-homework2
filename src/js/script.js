window.onload = function () {

    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
        }
    };

    req.open("GET", "https://api.jsonbin.io/v3/c/635a782b0e6a79321e363375/bins", true);
    req.setRequestHeader("X-Master-Key", "$2b$10$bVhrrlf.0MCRaFk8hWyH4u8F0Y5phhwuAmeN6xbBF8Y1FbwG2DfIe");
    req.send();

    midagi = req.response;
    console.log(midagi);
    /*
    fetch("/res/json/posts.json").then((response) => response.json())
        .then(json => {
            console.log(json);
            for (const el of json) {
                var postEl = document.createElement("div");
                var header = document.createElement("div");
                var body = document.createElement("div");
                var footer = document.createElement("div");
                postEl.className = "post"
                header.className = "post-header"
                body.className = "post-body"
                footer.className = "post-footer"
                if (el.bodyImage != undefined) {
                    var postImg = document.createElement("img")
                    postImg.src = el.bodyImage
                    postImg.alt = el.postImageAlt
                    body.appendChild(postImg)
                }
                var bodyText = document.createElement("p")
                bodyText.innerHTML = el.body
                body.appendChild(bodyText)

                var profilePic = document.createElement("img")
                profilePic.src = el.profilePic
                profilePic.alt = "Profile Picture"

                var  dateText = document.createElement("p")
                dateText.innerHTML = el.date

                header.appendChild(profilePic)
                header.appendChild(dateText)

                var likeButton = document.createElement("img")
                likeButton.src = "/res/images/likebutton.png"
                footer.appendChild(likeButton)

                postEl.appendChild(header)
                postEl.appendChild(body)
                postEl.appendChild(footer)
                var postsDiv = document.getElementsByClassName("center")
                postsDiv[0].appendChild(postEl)

            }

        }).catch(err => {
        let errDiv = document.createElement("div");
        errDiv.className = 'post';
        errDiv.innerText = err;
        document.body.appendChild(errDiv);
    }).finally(() => {
        let footer = document.createElement("footer");
        date = new Date().toLocaleString()
        footer.innerText = date;
        document.body.appendChild(footer);
    })

}

     */

    function menuToggle() {
        const toggleMenu = document.querySelector(".menu");
        toggleMenu.classList.toggle("active");
    }
}