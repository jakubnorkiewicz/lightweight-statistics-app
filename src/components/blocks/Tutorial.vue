<template>
  <div class="guide mb-3">
    <div class="row">
      <div class="col-md-12">
        <div class="card info text-dark bg-secondary">
          <div class="card-header">
            <button
              class="btn btn-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#info"
              aria-expanded="false"
              aria-controls="info"
            >
              <b>Tutorial - how to use this app?</b>
            </button>
          </div>
          <div class="collapse" id="info">
            <div class="card-body">
              <div class="card-text ms-2 me-2">
                <div class="row">
                  <div class="col-sm-12 col-md-4">
                    <p>This app allows you to calculate:</p>
                    <ol>
                      <li>Minimal value</li>
                      <li>Maximal value</li>
                      <li>Range</li>
                      <li>Mean</li>
                      <li>Sum</li>
                      <li>Median</li>
                      <li>Weighted mean</li>
                      <li>Standard deviance</li>
                      <li>Variance</li>
                      <li>Mode</li>
                      <li>Mean Absolute Deviation</li>
                    </ol>
                    <p>basing on your dataset.</p>
                  </div>
                  <div class="col-sm-12 col-md-4">
                      <p><u>Please make sure to use the correct formula for operations listed below.</u></p>
                      <p>At the next step, you will be able to select which methods to that you want to apply to your input.
                         Once the method is selected, the applications display the result at the bottom of the page.</p>
                      <p>The last step generates a visual representation of </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.guide .card.info > a,
.guide .card.info > li,
.guide .card.info > p,
.guide .card.info .card-title,
.guide .card.info .card-text {
  color: #fff;
}
</style>

<script>
export default {
    
}
</script>
