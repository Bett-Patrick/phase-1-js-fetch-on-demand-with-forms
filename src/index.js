const init = () => {
  const inputForm = document.querySelector("form")
  inputForm.addEventListener("submit",(event) => {
    event.preventDefault()
    const inputValue = document.querySelector('input#searchByID').value
    console.log(inputValue)

    fetch(`http://localhost:3000/movies/${inputValue}`)
        .then((res) => res.json())
        .then((movies) => {
            console.log(movies)
            const title = document.querySelector("h4")
            const summary = document.querySelector("p")

            title.innerHTML = movies.title
            summary.innerHTML = movies.summary

        })
  })
}

document.addEventListener('DOMContentLoaded', init);