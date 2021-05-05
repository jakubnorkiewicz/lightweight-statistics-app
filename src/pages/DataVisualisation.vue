<template>
  <div id="charts">
      <div class="row">
        <div class="col-sm-12">
    <apexchart
      type="bar"
      height="500"
      :options="options"
      :series="series"
    ></apexchart>
    </div>
    </div>
    <div class="row">
        <div class="col-sm-12 col-md-6">
    <apexchart
    type="line"
    height="500"
    :options="options2"
    :series="series2">
  </apexchart>
  </div>
  </div></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      options: {
        chart: {
          height: 500,  
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            show: true,
            autoSelected: 'zoom',
            tools: {
                 download: true,
          selection: false,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true
            }
          },
          selection: {
              enabled: true
          }
        },
        title: {
              text: 'Dataset distribution',
              align: 'left'
            },
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                {
                  from: -100,
                  to: 0,
                  color: '#F17C26'
                }
              ]
            },
            columnWidth: '75%'
          }
        },
        dataLabels: {
          enabled: false
        },
        yaxis: {
          title: {
            text: 'Numbers'
          }
        },
        xaxis: {
          title: {
            text: 'Index'
          },
          categories: this.$store.getters.isPopulated
            ? [...this.$store.getters.toArray.keys()].map(i => i + 1)
            : [],
          labels: {
            rotate: -90
          },
          tickPlacement: 'on'
        }
      },
      series: [
        {
          name: 'Value',
          data: this.$store.getters.isPopulated
            ? this.$store.getters.toArray
            : []
        }
      ],
      options2: {
            colors: ['#77B6EA'],
            dataLabels: {
              enabled: true,
            },
            stroke: {
              curve: 'smooth'
            },
            title: {
              text: 'Basic information',
              align: 'left'
            },
            grid: {
              borderColor: '#e7e7e7',
              row: {
                colors: ['#f3f3f3'],
                opacity: 0.5
              },
            },
            markers: {
              size: 1
            },
            xaxis: {
              categories: ['Min', 'Max', 'Mean', 'Sum'],
            },
            yaxis: {
              title: {
                text: 'Values'
              },
              min: this.$store.getters.min,
            },
            legend: {
              position: 'top',
              horizontalAlign: 'right',
              floating: true,
              offsetY: -25,
              offsetX: -5
            }
      },
      series2: [{
          name: "Value",
          data: [this.$store.getters.min, this.$store.getters.max, this.$store.getters.mean, this.$store.getters.sum]
          }],

    };
  },
  computed: {
    formula: {
      get() {
        return this.$store.state.formula;
      }
    }
  },
  methods: {
    ...mapGetters([
      'isPopulated',
      'toArray',
      'mean',
      'weightedMean',
      'median',
      'sum',
      'variance',
      'standardDeviation',
      'mode',
      'max',
      'min',
      'range',
      'zScore',
      'meanAbsoluteDeviation'
    ])
  }
};
</script>
