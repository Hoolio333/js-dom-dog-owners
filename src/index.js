console.log(data);

const dogListUL = document.querySelector(".dogs-list");
const main = document.querySelector(".main");
const addDogButton = document.querySelector(".dogs-list__button--add");

for (let i = 0; i < data.length; i++) {
  const currentDog = data[i];
  const doglistLI = document.createElement("li");

  doglistLI.setAttribute("class", "dogs-list__button");

  doglistLI.innerText = currentDog.name;

  dogListUL.append(doglistLI);

  doglistLI.addEventListener("click", function (event) {
    const dogSection = document.querySelector(".main__dog-section");
    console.log(dogSection);
    event.preventDefault();
    dogSection.remove();
    // create a new card
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const dogImg = document.createElement("img");

    // const dogBio = document.createElement("bio");
    // const goodDog = document.createElement("goodDog");
    const h3Bio = document.createElement("h3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const em = document.createElement("em");
    const button = document.createElement("button");
    const answer = document.createTextNode("yes! ");

    section.setAttribute("class", "main__dog-section");
    //add information inside
    h2.innerText = currentDog.name;
    dogImg.src = currentDog.image;
    // dogBio.innerText = currentDog.bio;
    // goodDog.innerText = currentDog.isGoodDog;
    h3Bio.innerText = "Bio";
    p1.innerText = currentDog.bio;
    em.innerText = "Is naughty?";
    button.innerText = "Good dog!";

    // put the card on the page
    p2.append(em);
    section.append(h2, dogImg, h3Bio, p1, p2, answer, button);
    main.append(section);
  });
}

addDogButton.addEventListener("click", () => {
  main.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.innerText = "Add a new Dog";

  const form = document.createElement("form");
  form.setAttribute("class", "form");

  const inputText = document.createElement("input");
  inputText.setAttribute("type", "text");
  inputText.setAttribute("id", "name");
  inputText.setAttribute("id", "name");
  inputText.setAttribute("name", "name");

  const inputUrl = document.createElement("input");
  inputUrl.setAttribute("type", "url");
  inputUrl.setAttribute("id", "image");
  inputUrl.setAttribute("name", "image");

  const textArea = document.createElement("textarea");
  textArea.setAttribute("rows", "5");
  textArea.setAttribute("id", "bio");
  textArea.setAttribute("name", "bio");

  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "submit");
  submitButton.setAttribute("name", "submit");
  submitButton.setAttribute("value", "Let's add a dog!");
  submitButton.setAttribute("class", "form__button");

  form.append(inputText);
  form.append(inputUrl);
  form.append(textArea);
  form.append(submitButton);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newDogItem = document.createElement("li");
    newDogItem.setAttribute("class", "dogs-list__button");
    newDogItem.innerText = event.target[0].value;

    dogListUL.insertBefore(newDogItem, dogListUL.children[1]);

    newDogItem.addEventListener("click", () => {
      main.innerHTML = "";

      const h2 = document.createElement("h2");
      h2.innerText = event.target[0].value;

      const img = document.createElement("img");
      img.setAttribute("src", event.target[1].value);
      img.setAttribute("alt", "");

      const div = document.createElement("div");
      div.setAttribute("class", "main__dog-section__desc");

      const h3 = document.createElement("h3");
      h3.innerText = "Bio";

      const p1 = document.createElement("p");
      p1.innerText = event.target[2].value;

      div.append(h3);
      div.append(p1);

      const p2 = document.createElement("p");

      const em = document.createElement("em");
      em.innerText = "Is naughty?";

      const strText = document.createTextNode(" Yes!");

      p2.append(em);
      p2.appendChild(strText);

      const button = document.createElement("button");
      button.innerText = "Good dog!";

      main.append(h2);
      main.append(img);
      main.append(div);
      main.append(p2);
      main.append(button);
    });
  });

  main.append(h2);
  main.append(form);
});
