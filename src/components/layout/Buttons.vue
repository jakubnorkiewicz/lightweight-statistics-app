<template>
    <div class="buttons mt-3">
        <button class="btn btn-primary btn-lg me-3" @click="previousStep" v-show="!isFirstStep()">
            Back
        </button>
        
        <button :disabled="!isPopulated()" class="btn btn-primary btn-lg" @click="nextStep" v-show="!isLastStep()">
            {{ nextText() }}
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
                return this.$route.name === "home"
            },
            isLastStep() {
                return this.$route.name === "data visualisation"
            },
            previousStep() {
                if (this.$route.name === 'calculate') {
                    this.$router.push('/home')
                } else if (this.$route.name === 'data visualisation') {
                    this.$router.push('/calculate') 
                }
            },
            nextStep() {
                if (this.$route.name === 'calculate') {
                    this.$router.push('/data-visualisation'); 
                } else if (this.$route.name === 'home') {
                    this.$router.push('/calculate')
                } 
            },
            nextText() {
                if(this.$route.name === 'calculate') {
                    return 'Show Graphs'
                } else {
                    return 'Next'
                }
            },
            ...mapGetters([
            'isPopulated'
            ])
        }
    }
</script>