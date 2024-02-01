// carousel function start ==============

let imgArray = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/MFD/1._CB583514833_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/GW/BAU/CUSTOM/Desktop_Hero_3000x1200_2copy2x._CB584609033_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Aman/Jan/5300-Kitchen---Hero-stripe-change--BAU-Adapt-3000-X-1200._CB583761349_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Jan/unrecatf/icici/PC-3Less._CB583013789_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/shoes/2024/MFD/Jan/Unrec/Sports/3000._CB583024006_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/jan24atf/unrec/citi/pc-1_2x._CB584618827_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/June/HMD/HMD_Jan_Unrec__3000X1200-UN-REC._CB583023498_.jpg",
  ];
  
  let carousalImg = document.getElementById("car_img");
  var i = 0;
  carousalImg.src = imgArray[i];
  setInterval(function () {
    i++;
    if (i > 5) {
      i = 0;
    }
    // console.log(i);
    carousalImg.src = imgArray[i];
  }, 5000);
  
  document.getElementById("prev").addEventListener("click", function () {
    prev(i);
  });
  document.getElementById("next").addEventListener("click", function () {
    next(i);
  });
  // git remote add origin https://github.com/IzanAnsari/Final-e-commerce.git
  function prev() {
    i--;
    if (i < 0) {
      i = 5;
    }
    carousalImg.src = imgArray[i];
  }
  function next() {
    i++;
    if (i > 5) {
      i = 0;
    }
    carousalImg.src = imgArray[i];
  }
  
  // carousel function end ================

   


carousel_productObj = [
    {
      name: "boAt Airdopes 175",
      price: 1699,
      category: "Wireless Earbuds",
      description:
        "Experience calling like never before with Airdopes 175 that sends across your voice without ambient disturbances via quad mics with ENx™️ Technology. Immerse in the sound of 10mm drivers for 35 hours straight with its massive battery backup. Experience the best sound!",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/3_dde24c57-aa19-4a19-ab08-64fbd375ef2e.jpg?v=1653469965",
    },
  
    {
      name: "boAt Wave Connect | Bluetooth Smartwatch",
      price: 3499,
      category: "Smartwatch",
      description:
        "Take calls from your watch using boAt Wave Connect — our newest bluetooth calling smartwatch. Choose from 60+ sports modes using a larger than life 1.69” HD display. Dial up and #StayConnected!",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1_43c46150-2889-4f7b-bd06-719a0046fddb.jpg?v=1654591342",
    },
  
    {
      name: "boAt Airdopes 135",
      price: 799,
      category: "Bluetooth Speakers",
      description:
        "Fits your pocket, matches your vibe! Stone 135— super portable Bluetooth Speaker is here with its 5W RMS playing nonstop for 11HRS! Be the life of the party as you double the fun with its TWS Functionality!",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stone-2.png?v=1655208846",
    },
  ];
  
  let new_i = 0;
  newLaunchesChange(new_i);
  setInterval(function () {
    new_i++;
    if (new_i > 2) {
      new_i = 0;
    }
  
    newLaunchesChange(new_i);
  }, 5000);
  
  function newLaunchesChange(new_i) {
    let newLaunches = document.querySelector("#content");
  
    newLaunches.innerHTML = `
  <p class="newTag">New</p>
  <img
    src=${carousel_productObj[new_i].image}
  />
  
  <div class="details">
    <img
      src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Vector_Smart_Object_6085a897-ef0f-41c5-9690-3de81a71112f.png?v=1642419136"
    />
    <h5>${carousel_productObj[new_i].category}</h5>
    <h4>${carousel_productObj[new_i].name}</h4>
    <h5>Special Launch Price</h5>
    <h2>Rs. ${carousel_productObj[new_i].price}</h2>
    <p>Description</p>
    <p class="text">
    ${carousel_productObj[new_i].description}
      <span class="readmore" onMouseover="readmore()">Read More...</span>
    </p>
    <div>
      <button>EXPLORE MORE</button>
    </div>
  </div>
  `;
  }
  
  
  let left = document.querySelector("#left");
  left.addEventListener("click", left_pdt);
  
  let right = document.querySelector("#right");
  right.addEventListener("click", right_pdt);
  
  function left_pdt() {
    new_i--;
    if (new_i < 0) {
      new_i = 2;
    }
  
    newLaunchesChange(new_i);
  }
  
  function right_pdt() {
    new_i++;
    if (new_i > 2) {
      new_i = 0;
    }
  
    newLaunchesChange(new_i);
  }

  // sidebar Function


  // search-box open close js code
  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .bx-search");
  let sidebarButton = document.getElementById("mode-toggler");
  // let searchBoxCancel = document.querySelector(".search-box .bx-x");

  searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
      searchBox.classList.replace("bx-search", "bx-x");
    } else {
      searchBox.classList.replace("bx-x", "bx-search");
    }
  });

  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");

  menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
  };

  menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
    navLinks.classList.remove("show1", "show2", "show3");
  };

  // sidebar submenu open close js code
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
  };
  let moreArrow = document.querySelector(".more-arrow");
  moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
  };
  let jsArrow = document.querySelector(".js-arrow");
  jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
  };

  // Close sidebar when clicking on any link or button
  let sidebarLinks = document.querySelectorAll(".nav-links a");

  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.style.left = "-100%";
      navLinks.classList.remove("show1", "show2", "show3");
    });
  });

  sidebarButton.addEventListener("click", () => {
    navLinks.style.left = "-100%";
    navLinks.classList.remove("show1", "show2", "show3");
  });