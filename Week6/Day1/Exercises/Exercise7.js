const formElement = document.getElementById('form1'); // извлекаем элемент формы
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
  // теперь можно извлечь данные
  const name = formData.get('name');
   console.log(name);
  let newdiv = document.createElement("div");
  newdiv.innerText = "Hello, " + name + "!"
  console.log(newdiv)
  document.body.append(newdiv)
});