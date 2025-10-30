const buttonCitation = document.querySelector("#citation")
const quoteText = document.querySelector("#quote-text")

function randomQuote(){
    return new Promise(solve => {
        setTimeout(() => {
            const ramdom = Math.floor(Math.random() * quotes.length)
            solve(quotes[ramdom])

        }, 2000)
    })
}

buttonCitation.addEventListener("click", async () => {
    
    Toastify({
        text: "Buscando nova citação...",
        duration: 2000,
        gravity: "top",
        position: "right"

    }).showToast();

    gsap.to("#quote-text", {opacity: 0, duration: 1} )
    const quote = await randomQuote()

    quoteText.textContent = quote
    gsap.to("#quote-text", {opacity: 1, duration: 1})
})