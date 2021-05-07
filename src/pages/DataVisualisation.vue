<template>
  <div v-if="!isPopulated()">
    <alert-no-input></alert-no-input>
  </div>
  <div v-else>
    <div id="chart">
      <div class="row">
        <div class="col-sm-12 col-md-6 mb-3 mt-sm-0">
          <div class="card info text-dark bg-secondary">
          <div class="card-header">
            <b>How to use graphs?</b>
          </div>
            <div class="card-body">
              <div class="card-text ms-2 me-2">
                <p>The graphs displayed on this page allow you to get a visualisation of your dataset.</p>
                <p>You can zoom the graph if the data difference makes some values unreadable.</p>
                <p>You can download the graphs by clicking the burger menu and then selecting one of the download options.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <apexchart
            type="line"
            height="500"
            :options="options2"
            :series="series2"
          >
          </apexchart>
        </div>
      </div>
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AlertNoInput from '../components/blocks/AlertNoInput.vue';

export default {
  components: {
    AlertNoInput
  },
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
          enabled: true
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
          }
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['Min', 'Max', 'Mean', 'Sum']
        },
        yaxis: {
          title: {
            text: 'Values'
          },
          min: this.$store.getters.isPopulated ? this.$store.getters.min : []
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      },
      series2: [
        {
          name: 'Value',
          data: [
            this.$store.getters.isPopulated ? this.$store.getters.min : '',
            this.$store.getters.isPopulated ? this.$store.getters.max : '',
            this.$store.getters.isPopulated ? this.$store.getters.mean : '',
            this.$store.getters.isPopulated ? this.$store.getters.sum : ''
          ]
        }
      ]
    };
  },
  methods: {
    ...mapGetters(['isPopulated'])
  }
};
</script>


<style>
.card-header,
.card.info > p,
.card.info .card-title,
.card.info .card-text {
  color: #fff;
}
</style>
