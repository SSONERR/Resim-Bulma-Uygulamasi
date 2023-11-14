const araİnput = document.querySelector("#araİnput")
const araTuş = document.querySelector("#araTuş")
const temizleTuş = document.querySelector("#temizleTuş")
const altKısım = document.querySelector("#altKısım")
run()
function run() {
    araTuş.addEventListener("click", resimAra)
    temizleTuş.addEventListener("click", temizle)
}
function temizle() {
    altKısım.innerHTML = ""
}
function resimAra() {
    altKısım.innerHTML = ""
    const değer = araİnput.value.trim()
    fetch(`https://api.unsplash.com/search/photos?query=${değer}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID COZIYt3DRGa1DMrXxebcTFkp2mpkBQKhsoBTOf96XZw"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            araİnput.value = ""

            data.results.forEach((img) => {
                const image = document.createElement("img")
                image.setAttribute("src", img.urls.small)

                const i = document.createElement("a")
                i.className = "btn bi bi-download ms-2"
                i.href=img.links.download
                i.target="_blank"

                const bilgi = document.createElement("card-body")
                bilgi.className = "card-body p-1"

                const div = document.createElement("div")
                div.className = "card align-self-end border border-dark m-3"
                
                div.appendChild(image)
                bilgi.appendChild(i)
                div.appendChild(bilgi)
                altKısım.appendChild(div)
                console.log(img.links.download);
            })
        })
        .catch(() => console.log("hata"))
}
