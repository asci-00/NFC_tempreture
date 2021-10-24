const themeColors = require("assets/theme/colors.js").default;
var colors = {
  gray: themeColors.gray,
  theme: {
    default: themeColors.dark.main,
    primary: themeColors.primary.main,
    secondary: "#f4f5f7",
    info: themeColors.info.main,
    success: themeColors.success.main,
    danger: themeColors.error.main,
    warning: themeColors.warning.main,
  },
  black: themeColors.black.light,
  white: themeColors.white.main,
  transparent: themeColors.transparent.main,
};
export const sample_data = {
  temperature: {
    day: [
      {
        avg: 36,
        date: "2021-10-11",
      },
      {
        avg: 35.3333,
        date: "2021-10-12",
      },
      {
        avg: 38.1,
        date: "2021-10-13",
      },
      {
        avg: 37.3,
        date: "2021-10-14",
      },
      {
        avg: 34,
        date: "2021-10-15",
      },
    ],
    week: [
      {
        avg: 37,
        date: "2021-06",
      },
      {
        avg: 36.3333,
        date: "2021-07",
      },
      {
        avg: 38,
        date: "2021-08",
      },
      {
        avg: 35,
        date: "2021-09",
      },
      {
        avg: 39,
        date: "2021-10",
      },
    ],
  },
  visited_building: [
    {
      building_name: "강석규교육관",
      count: 5,
    },
    {
      building_name: "2공학관",
      count: 4,
    },
    {
      building_name: "자연공학관",
      count: 3,
    },
    {
      building_name: "1공학관",
      count: 2,
    },
    {
      building_name: "공학관",
      count: 1,
    },
    {
      building_name: "3공학관",
      count: 0,
    },
  ],
};

const ChartDataTransfer = (data) => {
  return {
    temperature: {
      day: () => ({
        labels: data["temperature"]["day"].map((item) => item["date"]),
        datasets: [
          {
            label: "temperature",
            data: data["temperature"]["day"].map((item) => item["avg"]),
          },
        ],
      }),
      week: () => ({
        labels: data["temperature"]["week"].map((item) => item["date"]),
        datasets: [
          {
            label: "temperature",
            data: data["temperature"]["week"].map((item) => item["avg"]),
          },
        ],
      }),
    },
    visited_building: {
      labels: data["visited_building"].map((item) => item["building_name"]),
      datasets: [
        {
          labels: "방문횟수",
          data: data["visited_building"].map((item) => item["count"]),
          maxBarThickness: 10,
        },
      ],
    },
  };
};
export const options = {
  barchart: {
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                //return '$' + value + 'k'
                return value;
              }
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";
          if (data.datasets.length > 1) {
            content += label;
          }
          content += yLabel;
          return content;
        },
      },
    },
  },
  linechart: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: colors.gray[900],
            zeroLineColor: colors.gray[900],
          },
          ticks: {
            beginAtZero : false,
            callback: function (value) {
              if (!(value % 10)) {
                return value + "°C";
              }
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) content += label;

          content += yLabel + "°C";
          return content;
        },
      },
    }
  },
};
export const transfer_data = ChartDataTransfer(sample_data);
