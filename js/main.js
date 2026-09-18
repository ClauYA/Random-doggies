//Get a dog photo from the dog.ceo api and place the photo in the DOM


document.getElementById('btn-mood').onclick=refreshMood

function refreshMood(){
  const facts="https://dog.ceo/api/breeds/list/all"
  console.log(facts)
  fetch("https://dog.ceo/api/breeds/image/random")
//
    .then(res => res.json()) // parse response as JSON
    //object
    .then(data => {
      //sends to the DOM
      const imageContenedor=document.getElementById('imagen')
      imageContenedor.src=data.message
      console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
//https://dog.ceo/api/breeds/image/random