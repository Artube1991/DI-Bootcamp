const formElement = document.getElementById('form1');
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement); 
  const name = formData.get('name');
   console.log(name);
  let newdiv = document.createElement("div");
  newdiv.innerText = "Hello, " + name + "!"
  console.log(newdiv)
  document.body.append(newdiv)
});