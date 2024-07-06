


// dashboard page

document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');

  burgerIcon.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // date picker
  $(function () {
    $('input[name="daterange"]').daterangepicker();
  });

  // current date display section
  function formatDate(date) {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formatter.format(date);
  }
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  document.querySelector(".current-date").textContent = formattedDate;


  // displaying line chart
  const chartData = {
    labels: ["Apr 1", "Apr 2", "Apr 3", "Apr 4", "Apr 5", "Apr 6"],
    datasets: [
      {
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "#7499CC",
        borderWidth: 1,
        data: [0.4, 0.3, 0.6, 0.6, 0.4, 1.2],
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        grid:{
          display: false
        },
        ticks: {
          callback: function (value, index, ticks) {
            if (index === 0 || index === ticks.length - 1) {
              return this.getLabelForValue(value);
            } else {
              return "•";
            }
          },
        },
      },
      y: {
        title: {
          display: false,
        },
        grid:{
          display: false
        },
      },
    },
  };

  // Initialize charts for each canvas
  ["chart1", "chart2", "chart3", "chart11", "chart12"].forEach((id) => {
    const ctx = document.getElementById(id).getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: chartData,
      options: chartOptions,
    });
  });
});













const modelBtn = document.querySelector('.module-add-button');
const model = document.querySelector('.model');
const modelHide = document.querySelector('.module-remove-button');

modelBtn.addEventListener('click', ()=>{
  model.classList.remove('hidden');
});

modelHide.addEventListener('click', ()=>{
  model.classList.add('hidden');
});
