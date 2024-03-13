const nameMap = "천주교 대구대교구 주교좌 범어대성당";
const latMap = "35.855777";
const lngMap = "128.622524";

let numss = 0;

window.onload = function () {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  counter();
  getHeWi();
};

$(document).ready(function () {
  setingjang();
  $("#imginjang").css("transform", "rotateX(0deg) rotateY(0deg) rotateZ(0deg)");
  setImg();
});

function getHeWi() {
  const wiiii = window.innerWidth;
  const heeee = window.innerHeight;

  console.log(wiiii);
  console.log(heeee);

  $(".title-main").each(function () {
    $(this).css("width", wiiii);
    $(this).css("height", heeee);
  });

  $(".boody").each(function () {
    $(this).css("width", wiiii);
    $(this).css("height", heeee);
  });

  $(".bgclaswi").each(function () {
    $(this).css("width", wiiii);
    $(this).css("height", heeee);
  });

  $(".bgclashe").each(function () {
    $(this).css("width", wiiii);
    $(this).css("height", heeee);
  });

  $(".bgclas").each(function () {
    $(this).css("width", wiiii);
    $(this).css("height", heeee);
  });

  $(".main00").each(function () {
    $(this).css("min-height", heeee);
  });

  $(".chang").each(function () {
    $(this).css("height", heeee * 0.6);
  });

  $(".main000").each(function () {
    $(this).css("height", heeee);
  });

  $(".main0009").each(function () {
    $(this).css("min-height", heeee - 10);
  });

  $(".main0009").each(function () {
    $(this).css("min-height", heeee - 10);
  });

  $(".main01").each(function () {
    $(this).css("min-height", heeee - 10);
  });

  $(".main02").each(function () {
    $(this).css("min-height", heeee - 10);
  });

  $(".main03").each(function () {
    $(this).css("min-height", heeee - 10);
  });

  $(".carousmain").each(function () {
    $(this).css("min-height", heeee - 15);
  });
}

function setImg() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

  console.log(shuffledArray);

  let arrImg = {};
  for (let i = 0; i < array.length; i++) {
    let namee = "";
    if (parseInt(array[i]) < 10) {
      namee = "img/img00" + array[i] + ".jpg";
    } else {
      namee = "img/img0" + array[i] + ".jpg";
    }

    arrImg[i] = namee;
  }

  console.log(arrImg);

  $("#imgg001").attr("src", arrImg[0]);
  $("#imgg002").attr("src", arrImg[1]);
  $("#imgg003").attr("src", arrImg[2]);
  $("#imgg004").attr("src", arrImg[3]);
  $("#imgg005").attr("src", arrImg[4]);
  $("#imgg006").attr("src", arrImg[5]);
  $("#imgg007").attr("src", arrImg[6]);
  $("#imgg008").attr("src", arrImg[7]);
  $("#imgg009").attr("src", arrImg[8]);
  $("#imgg010").attr("src", arrImg[9]);
  $("#imgg011").attr("src", arrImg[10]);
  $("#imgg012").attr("src", arrImg[11]);
  $("#imgg013").attr("src", arrImg[12]);
  $("#imgg014").attr("src", arrImg[13]);
  $("#imgg015").attr("src", arrImg[14]);
  $("#imgg016").attr("src", arrImg[15]);
  $("#imgg017").attr("src", arrImg[16]);
}

$(document).on("click", "#showMd01Call", function () {
  $("#md01Call").modal("show");
});

$(document).on("click", "#showMd02Map", function () {
  $("#md02Map").modal("show");
});

$(document).on("click", "#tableMap", function () {
  $("#md02Map").modal("show");
});

$(document).on("click", "#naverGoMap1", function () {
  naverMap1();
});

$(document).on("click", "#kakaoGoMap1", function () {
  kakaoMap1();
});

$(document).on("click", "#tmapGoMap1", function () {
  googleMap1();
});

$(document).on("click", "#naverGoMap2", function () {
  naverMap2();
});

$(document).on("click", "#kakaoGoMap2", function () {
  kakaoMap2();
});

$(document).on("click", "#tmapGoMap2", function () {
  tMap();
});

function setingjang() {
  min = Math.ceil(1);
  max = Math.floor(5);

  const num = Math.floor(Math.random() * (max - min + 1)) + min;

  const nameee = "injang/" + "injang" + num + ".png";

  $("#imginjang").attr("src", nameee);
}

//네이버맵 길안내
function naverMap1() {
  const location = "https://naver.me/G0lc2i3G";
  window.open(location, "_blank");
}
function naverMap2() {
  const location =
    "http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat=" +
    latMap +
    "&elng=" +
    lngMap +
    "&etitle=" +
    nameMap;
  window.open(location, "_blank");
}

//카카오맵 길안내
function kakaoMap1() {
  const location = "https://kko.to/JJsG0MB2H8";
  window.open(location, "_blank");
}
function kakaoMap2() {
  const location =
    "https://map.kakao.com/link/to/" + nameMap + "," + latMap + "," + lngMap;
  window.open(location, "_blank");
}

//구글 길안내
function googleMap1() {
  const location = "https://maps.app.goo.gl/TwrN2uU8DjAySzXh8";
  window.open(location, "_blank");
}

//티맵 길안내
function tMap() {
  const location =
    "https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx7179ddde21ca4bfb8e6b03c710138f41&name=" +
    nameMap +
    "&lon=" +
    lngMap +
    "&lat=" +
    latMap;

  window.open(location, "_blank");
}

$(document).on("click", "#donGo00", function () {
  donGo00();
});
function donGo00() {
  const location = "https://qr.kakaopay.com/Ej8c967QH";
  window.open(location, "_blank");
}

$(document).on("click", "#donGo01", function () {
  donGo01();
});
function donGo01() {
  const location = "https://qr.kakaopay.com/Ej8Acpcqu";
  window.open(location, "_blank");
}

$(document).on("click", "#donGo04", function () {
  donGo04();
});
function donGo04() {
  const location = "https://qr.kakaopay.com/Ej8bbs8oG";
  window.open(location, "_blank");
}

$(document).on("click", "#donGo05", function () {
  donGo05();
});
function donGo05() {
  const location = "https://qr.kakaopay.com/Ej80snRJ4";
  window.open(location, "_blank");
}

function getDday() {
  const nowD = new Date();

  const h = String(nowD.getHours()).padStart(2, "0");
  const m = String(nowD.getMinutes()).padStart(2, "0");
  const s = String(nowD.getSeconds()).padStart(2, "0");

  const weddingD = new Date();
}

function counter() {
  //var dday = new Date("Apr 7,2018,09:00:00").getTime(); //디데이
  var dday = new Date("Apr 27,2024,14:00:00").getTime(); //디데이
  setInterval(function () {
    var now = new Date(); //현재 날짜 가져오기
    var distance = dday - now;
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);
    var view = "";
    if (s < 10) {
      s = "0" + s;
    }
    if (distance < 0) {
      $("#dday-view").html("마감되었습니다.");
    } else {
      if (d > 0) {
        view = view + d + "일 ";
      }
      if (h > 0) {
        view = view + h + "시간 ";
      }
      if (m > 0) {
        view = view + m + "분 ";
      }
      $("#dDay2").html(d + "일");
      $("#dDay").html(
        `<div style="font-size: 1.3rem">` +
          d +
          `</div><div style="font-size: 0.6rem">일</div>`
      );
      $("#dHour").html(
        `<div style="font-size: 1.3rem">` +
          h +
          `</div><div style="font-size: 0.6rem">시간</div>`
      );
      $("#dMin").html(
        `<div style="font-size: 1.3rem">` +
          m +
          `</div><div style="font-size: 0.6rem">분</div>`
      );
      $("#dSec").html(
        `<div style="font-size: 1.3rem">` +
          s +
          `</div><div style="font-size: 0.6rem">초</div>`
      );
    }
  }, 1000);
}

$(document).on("click", ".dongobtn", function () {
  const aaa = $(this).children()[0];
  const hiddd = $(aaa).val();

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(hiddd)
      .then(function () {
        alert(hiddd + " 복사되었습니다.\n\n붙여넣기하여 사용해주세요.");
      })
      .catch(function (error) {
        alert("실패");
      });
  } else {
    var textarea = document.createElement("textarea");
    textarea.value = hiddd;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 9999);
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert(hiddd + " 복사되었습니다.\n\n붙여넣기하여 사용해주세요.");
  }
});

$(document).on("click", "#bong-main1", function () {
  $("#imginjang").attr(
    "class",
    "animate__animated animate__fadeOutDown animate__slow"
  );

  setTimeout(function () {
    $(location).attr("href", "main_01_00.html");
  }, 800);
});

$(document).on("click", "#bong-main2", function () {
  $("#imginjang").attr(
    "class",
    "animate__animated animate__fadeOutDown animate__slow"
  );

  setTimeout(function () {
    $(location).attr("href", "main_01_01.html");
  }, 800);
});

$(document).on("click", "#bong-main3", function () {
  $("#imginjang").attr(
    "class",
    "animate__animated animate__fadeOutDown animate__slow"
  );

  setTimeout(function () {
    $(location).attr("href", "main_01_02.html");
  }, 800);
});

$(document).on("click", "#bong-main4", function () {
  $("#imginjang").attr(
    "class",
    "animate__animated animate__fadeOutDown animate__slow"
  );

  setTimeout(function () {
    $(location).attr("href", "main_02_00.html");
  }, 800);
});

$(document).on("click", "#bong-main44", function () {
  $("#imginjang").attr(
    "class",
    "animate__animated animate__fadeOutDown animate__slow"
  );

  setTimeout(function () {
    $(location).attr("href", "main_02_000.html");
  }, 800);
});

$(document).on("click", "#bong-main5", function () {
  $("#imginjang").attr(
    "class",
    "animate__animated animate__fadeOutDown animate__slow"
  );

  setTimeout(function () {
    $(location).attr("href", "main_02_01.html");
  }, 800);
});

$(document).on("click", "#bong-main6", function () {
  $("#imginjang").attr(
    "class",
    "animate__animated animate__fadeOutDown animate__slow"
  );

  setTimeout(function () {
    $(location).attr("href", "main_02_02.html");
  }, 800);
});

$(document).on("click", ".main0010-itemimg", function () {
  const srccc = $(this).attr("src");
  $("#mdImg").modal("show");

  $("#imgMdBody").attr("src", srccc);
});

$(document).on("click", "#imgMdBody", function () {
  $("#mdImg").modal("hide");
});
