const item1 = document.getElementById("item");
const ctx = document.getElementById("confidenceGraph");
console.log(numbersDown(1, 10));
new Chart(ctx, {
  type: "line",
  data: {
    labels: numbersUp(1, 10),
    datasets: [
      {
        label: "Gezondheid met vermoeidheid",
        data: numbersDown(1, 10),
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

let timeout;

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    if (timeout) return;
    timeout = true;
    setTimeout(() => {
      document.getElementById("img").style.animation = "disapear 1s";
      document.getElementById("text").style.animation = "textDisappear 1s";
      setTimeout(() => {
        document.getElementById("text").innerText = "En wil jij dit worden?";
        document.getElementById("img").style.display = "none";
        document.getElementById("img2").style.animation = "appear 1s";
        document.getElementById("text").style.animation = "textAppear 1s";
        setTimeout(() => {
          document.getElementById("img2").style.display = "flex";
        }, 100);
      }, 1000);
    }, 10000);
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "0px 0px";
    document.getElementById("header").style.fontSize = "25px";
    document.getElementById("logo").style.width = "1.5rem";
    document.getElementById("logo").style.height = "7.5rem";
  } else {
    document.getElementById("header").style.padding = "20px 5px";
    document.getElementById("header").style.fontSize = "40px";
    document.getElementById("logo").style.width = "4rem";
    document.getElementById("logo").style.height = "20rem";
  }
}
