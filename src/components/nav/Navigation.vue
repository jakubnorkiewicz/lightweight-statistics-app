<template>
    <div>
        <button @click="previousStep" v-show="!isFirstStep()">
            Back
        </button>

        <button @click="nextStep">
            {{ nextStepButtonText() }}
        </button>
    </div>
</template>

<script>
    export default {
        methods: {
            isFirstStep() {
                return this.$route.name === "input"
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
                    submit() 
                } else if (this.$route.name === 'input') {
                    this.$router.push('/calculate')
                }
            },
            submit() {
                alert('Submitted')
            }
        }   
    }
</script>