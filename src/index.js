console.log(data);

const dogListUL = document.querySelector(".dogs-list");
const main = document.querySelector(".main");

for (let i = 0; i < data.length; i++) {
  const currentDog = data[i];
  const doglistLI = document.createElement("li");

  doglistLI.setAttribute("class", "dogs-list__button");

  doglistLI.innerText = currentDog.name;

  dogListUL.append(doglistLI);

  doglistLI.addEventListener("click", function (event) {
    const dogSection = document.querySelector(".main__dog-section");
    console.log("Testing", currentDog);
    event.preventDefault();
    dogSection.remove();
    // create a new card
    const section = document.createElement("section");
    const header = document.createElement("h2");
    const dogImg = document.createElement("img");
    const dogBio = document.createElement("bio");
    const goodDog = document.createElement("goodDog");

    section.setAttribute("class", "main__dog-section");
    //add information inside
    header.innerText = currentDog.name;
    dogImg.src = currentDog.image;
    dogBio.innerText = currentDog.bio;
    goodDog.innerText = currentDog.isGoodDog;
    // put the card on the page
    section.append(header, dogImg, "Bio:", dogBio, goodDog);
    main.append(section);
  });
}

// const div = document.createElement("div");
// div.className = "main_dog-section";
// div.append(header, text);

// remove the existing section
// create card element, h2 element
// select the container for the card and append

// const section = document.createElement("section");
// section.setAttribute("class", "main__dog-section");

// WRITE YOUR CODE BELOW!
