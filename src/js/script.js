window.onload = function () {

    // Data from a file
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


    /* Data from a website

    const url = 'https://api.npoint.io/c3927fd14842d298e7a1';
    async function getDataFromUrl() {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        try {
            for (const el of data) {
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

        }
        catch(error) {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = error;
            document.body.appendChild(errDiv);
        }
        finally {
            let footer = document.createElement("footer");
            date = new Date().toLocaleString()
            footer.innerText = date;
            document.body.appendChild(footer);
        }


    }

    getDataFromUrl();
    */

}



function menuToggle() {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
}
