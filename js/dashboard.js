var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: 'Berber rugs',
      data: [12, 15, 3, 5, 6, 3],
      backgroundColor: [
        'rgba(57, 118, 67)',
        
      ],
      borderColor: [
        'rgba(57, 118, 67)',
        
      ],
      borderWidth: 1
    },
      {
      label: 'moroccan tajines',
      data: [17,12 , 19, 8, 7, 6],

      backgroundColor: [
        'rgba(214, 204, 153)',
        
      ],
      borderColor: [
        'rgba(214, 204, 153)',
       
      ],
      borderWidth: 1
    }
    ]

  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "berber rugs",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(57, 118, 67)',
      ],
      borderColor: [
        'rgba(57, 118, 67)',
      ],
      borderWidth: 2
    },
    {
      label: " morroccan tajines",
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: [
        'rgba(214, 204, 153)',
      ],
      borderColor: [
        'rgba(214, 204, 153)',
      ],
      borderWidth: 2
    }
    ]
  },
  options: {
    responsive: true
  }
});




//////////////////////

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


