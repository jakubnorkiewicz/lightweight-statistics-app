<template>
    <div>
        <button class="btn btn-primary mb-3" @click="previousStep" v-show="!isFirstStep()">
            Back
        </button>
        
        <button :disabled="!isDisable()" class="btn btn-primary mb-3" @click="nextStep" v-show="!isLastStep()">
            {{ nextStepButtonText() }}
        </button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        computed: {
    dataset: {
      get() {
        return this.$store.state.dataset
      },
    }
        },
        methods: {
            isFirstStep() {
                return this.$route.name === "input"
            },
            isLastStep() {
                return this.$route.name === "result"
            },
            nextStepButtonText() {
                if (this.$route.name === 'calculate') {
                    return 'Submit'
                } else {
                    return 'Next'
                }
            },
            previousStep() {
                if (this.$route.name === 'calculate') {
                    this.$router.push('/input')
                } else if (this.$route.name === 'result') {
                    this.$router.push('/calculate') 
                }
            },
            nextStep() {
                if (this.$route.name === 'calculate') {
                    this.submit(); 
                } else if (this.$route.name === 'input') {
                    this.$router.push('/calculate')
                }
            },
            submit() {
                alert('Submitted')
            },
            ...mapGetters([
            'isDisable'
            ])
        }
    }
</script>