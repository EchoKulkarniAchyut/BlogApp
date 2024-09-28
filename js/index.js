// data from api parsed 
const postData = [
  {
    id: "yfw76t27r",
    genre: "sports",
    image: "https://echokulkarniachyut.github.io/BlogApp/images/sports1.jpg",
    caption:
      "Cricket is a globally popular sport that originated in England and has since captivated millions worldwide. Played between two teams of eleven players, the game involves batting, bowling, and fielding. The objective is for one team to score runs while the other team tries to limit runs and dismiss players. Cricket is played in different formats, from the traditional five-day Test matches to the fast-paced Twenty20 games. The sport is especially popular in countries like India, Australia, and England, where it enjoys a massive fan following and cultural significance.",
    timeStamp: "2024-08-26 12:15",
    likes: 26,
    comments: 3,
    shares: 11,
    user: "Achyut",
  },
  {
    id: "iuhis98e319",
    genre: "technology",
    image:
      "https://echokulkarniachyut.github.io/BlogApp/images/technology1.jpg",
    caption:
      "Blockchain technology is a decentralized digital ledger that records transactions across multiple computers, ensuring security and transparency. Each transaction, grouped into blocks, is linked to the previous one, creating a secure chain. This technology underpins cryptocurrencies like Bitcoin and Ethereum but extends beyond finance, offering potential applications in supply chain management, healthcare, and voting systems. By eliminating intermediaries, blockchain can reduce costs and enhance efficiency. Its immutable nature increases trust among participants, making it a transformative force in various industries, paving the way for innovative solutions and new business models.",
    timeStamp: "2024-08-26 12:15",
    likes: 5,
    comments: 6,
    shares: 1,
    user: "Rohan",
  },
  {
    id: "hf95s36dn",
    genre: "food",
    image: "https://echokulkarniachyut.github.io/BlogApp/images/food1.jpg",
    caption:
      "Vegetarian food consists of dishes made from plant-based ingredients, excluding meat, fish, and poultry. This diet offers numerous health benefits, including lower risks of chronic diseases such as heart disease, diabetes, and obesity. Rich in fruits, vegetables, whole grains, and legumes, vegetarian meals provide essential nutrients, fiber, and antioxidants. Additionally, adopting a vegetarian lifestyle can have positive environmental impacts, as it reduces carbon footprints and resource consumption associated with meat production. With a diverse range of cuisines and recipes available, vegetarian food can be both delicious and satisfying, appealing to a wide audience.",
    timeStamp: "2024-08-26 12:15",
    likes: 1,
    comments: 5,
    shares: 0,
    user: "Rubia",
  },
  {
    id: "f5r6x7q9t",
    genre: "education",
    image: "https://echokulkarniachyut.github.io/BlogApp/images/education1.jpg",
    caption:
      "Education is a fundamental pillar of society, fostering personal growth and societal progress. It equips individuals with essential knowledge and skills, empowering them to navigate the complexities of the world. Education promotes critical thinking, creativity, and problem-solving abilities, preparing students for future challenges. Beyond academics, it nurtures values such as empathy, respect, and collaboration, shaping responsible citizens. Access to quality education is crucial for reducing inequality and driving economic development. As technology evolves, integrating innovative teaching methods and lifelong learning becomes essential, ensuring that education remains relevant in an ever-changing landscape.",
    timeStamp: "2024-08-26 12:15",
    likes: 7,
    comments: 15,
    shares: 9,
    user: "Pooja",
  },
  {
    id: "e8732buqep",
    genre: "sports",
    image: "https://echokulkarniachyut.github.io/BlogApp/images/sports2.jpg",
    caption:
      "Football, known as soccer in some countries, is the world’s most popular sport, played by two teams of eleven players. The game’s objective is to score by getting the ball into the opposing team’s goal using any body part except the hands and arms (except for the goalkeeper). Played professionally and recreationally across the globe, football’s simplicity and excitement have made it a universal sport. Major tournaments like the FIFA World Cup captivate millions of fans, while clubs and national teams foster immense loyalty and passion from supporters worldwide",
    timeStamp: "2024-08-26 12:15",
    likes: 76,
    comments: 36,
    shares: 1,
    user: "Achyut",
  },
  {
    id: "ufw8e29221",
    genre: "movies",
    image: "https://echokulkarniachyut.github.io/BlogApp/images/movie1.jpg",
    caption:
      "The latest Kannada movie, K.G.F: Chapter 2, has garnered immense attention and acclaim, captivating audiences with its gripping storyline and stunning visuals. Continuing the saga of Rocky, portrayed by Yash, the film delves into his rise to power and the challenges he faces in the gold mining underworld. Directed by Prashanth Neel, it features a stellar cast and exceptional production quality. The film's high-octane action sequences and powerful performances resonate with viewers, making it a blockbuster hit. K.G.F: Chapter 2 not only entertains but also showcases the richness of Kannada cinema on a global stage.",
    timeStamp: "2024-08-26 12:15",
    likes: 24,
    comments: 8,
    shares: 4,
    user: "Pawan",
  },
  {
    id: "leg09mi09",
    genre: "technology",
    image:
      "https://echokulkarniachyut.github.io/BlogApp/images/technology2.jpg",
    caption:
      "Java is a versatile and widely-used programming language in software development, known for its portability, security, and robustness. Designed with the principle of write once, run anywhere, Java enables developers to create applications that can run on any platform with a Java Virtual Machine (JVM). Its object-oriented nature promotes code reusability and maintainability, making it a preferred choice for large-scale enterprise applications, web development, and mobile applications through frameworks like Spring and Android. With a strong community and extensive libraries, Java continues to be a foundational technology in the software development industry.",
    timeStamp: "2024-08-26 12:15",
    likes: 2,
    comments: 6,
    shares: 5,
    user: "Tejas",
  },
];


// display post data
postData.forEach((data) => {
  const postContainer = document.querySelector(".post-container");
  const postCard = document.createElement('div')
  postCard.classList.add("post-card");
  postCard.setAttribute('genre', data.genre)
  postCard.innerHTML = `<div id="post-id" class="${data.id}">${data.id}</div>
            <div class="post-img" style="background-image: url('${data.image}');"></div>
            <div class="post-caption">${data.caption}</div>
            <div class="post-actions">
                <div class="post-like like-action"><i class="fa-solid fa-heart"></i><span class="likes-count-card">${data.likes}</span></div>
                <div class="post-comment comment-action"><i class="fa-solid fa-comment"></i><span class="comments-count-card">${data.comments}</span></div>
                <div class="post-share share-action"><i class="fa-solid fa-share-nodes"></i><span class="shares-count-card">${data.shares}</span></div>
            </div>`;
  postContainer.appendChild(postCard)
})



// post filter event
const filter = document.querySelectorAll(".filter");
filter.forEach((ele) => {
  ele.addEventListener("click", () => {
    const selectedGenre = ele.classList[1];
    const postCardList = document.querySelectorAll(".post-card");
    postCardList.forEach((card) => {
      const currentGenre = card.getAttribute("genre");
      if (selectedGenre == "all") {
        card.style.display = "flex";
      } else {
        if (currentGenre == selectedGenre) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      }
    });
  });
});

// add post event
const addPostButton = document.querySelector(".add-post")
let showaddPostModal = false
addPostButton.addEventListener('click', () => {
  showaddPostModal = !showaddPostModal
  const addPostModal = document.querySelector('.add-post-modal')
  if (showaddPostModal) {
    addPostModal.style.display = "flex";
    //close button of add post
    const closeButton = document.querySelector("#add-post-modal-close");
    closeButton.addEventListener("click", () => {
      // showaddPostModal = !showaddPostModal
      addPostModal.style.display = "none"
    });
  }
  else {
    addPostModal.style.display = 'none'
  }
})
// delete post event
let deletePostFlag = false
const removePostButton = document.querySelector(".remove-post")
removePostButton.addEventListener('click', () => {
  deletePostFlag = !deletePostFlag
  if (deletePostFlag) {
    removePostButton.style.color = 'red'
    alert('choose one or more posts to delete')
  }
  else {
    removePostButton.style.color = "gray";
  }
})

const allDeleteOrShowPostList = document.querySelectorAll(".post-card")
allDeleteOrShowPostList.forEach((myPost) => {
  myPost.addEventListener("click", () => {
    if (deletePostFlag) {
      myPost.remove();
    } else {

    }
  });
});


// handle view post event
const postIdList = document.querySelectorAll("#post-id");
for (let i = 0; i < postIdList.length; i++){
  const postId = postIdList[i]
  const post = postId.parentElement;
  post.addEventListener("click", () => {
    if (!deletePostFlag){
      // get all post details and insert in below div
      const id = post.querySelector("#post-id").innerText;
      const image = post.querySelector(".post-img").style.backgroundImage;
      const caption = post.querySelector(".post-caption").innerText;
      const likes = post
        .querySelector(".post-actions")
        .querySelector(".likes-count-card").innerText;
      const comments = post
        .querySelector(".post-actions")
        .querySelector(".comments-count-card").innerText;
      const shares = post
        .querySelector(".post-actions")
        .querySelector(".shares-count-card").innerText;
      const viewCurrentPost = document.createElement("div");
      viewCurrentPost.classList.add("view-current-post");
      viewCurrentPost.innerHTML = `<div id="view-current-post-close"><i class="fa-solid fa-xmark"></i></div>
            <div id="post-id" class="${id}"></div>
            <div class="view-current-post-img" style='background-image: ${image};'></div>
            <div class="view-current-post-caption">${caption}</div>
            <div class="view-current-post-actions">
                <div class="view-current-post-like like-action"><i class="fa-solid fa-heart"></i><span class="likes-count-card">${likes}</span></div>
                <div class="view-current-post-comment comment-action"><i class="fa-solid fa-comment"></i><span class="comments-count-card">${comments}</span></div>
                <div class="view-current-post-share share-action"><i class="fa-solid fa-share-nodes"></i><span class="shares-count-card">${shares}</span></div>
            </div>`;
      const viewCurrentPostContainer = document.querySelector(
        ".view-current-post-container"
      );
      viewCurrentPostContainer.innerHTML = ``;
      viewCurrentPostContainer.appendChild(viewCurrentPost);
      viewCurrentPost.style.display = "flex";

      const closeButton = document.querySelector("#view-current-post-close");
      closeButton.addEventListener("click", () => {
        viewCurrentPost.style.display = "none";
      });

      // handle like event
      updateLike(id, i)

    }
  });
};


function updateLike(id, i) {
  // like count feature
  const idDivList = document.querySelectorAll(`.${id}`);
  idDivList.forEach((idDiv) => {
    const likeButton = idDiv.parentElement.querySelector(".fa-heart");
    likeButton.addEventListener("click", () => {
      //persist data
      postData[i].likes++
      let likeCount =
        likeButton.parentElement.querySelector(".likes-count-card").innerText;
      likeCount++;
      const updateLikeList = document.querySelectorAll(`.${id}`);
      updateLikeList.forEach((lc) => {
        lc.parentElement.querySelector(".likes-count-card").innerText =
          likeCount;
      });
    });
  });
}
//comment feature
//share feature