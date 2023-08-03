<template>
    <section class="chart-container">
        <Bar v-if="data && options" :chart-data="data" :chart-options="options" :width="400" :height="200" />
    </section>
</template>

<script>
    import { Bar } from "vue-chartjs"
    import { computed, ref } from "vue"
    import { storeToRefs } from "pinia"
    import useDeckStore from "@/stores/deck"

    export default {
        name: "Chart",
        components: { Bar },
        setup() {
            const deckStore = useDeckStore()
            const { supertypes } = storeToRefs(deckStore)

            // computed hack to deeply watch changes
            const data = computed(() => ({
                labels: Object.keys(supertypes.value),
                datasets: [{
                    backgroundColor: "rgb(186, 168, 202, 0.4)",
                    borderWidth: 1,
                    data: Object.keys(supertypes.value).map(s => supertypes.value[s])
                }]
            }))

            const options = ref({
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            })

            return { data, options }
        }
    }
</script>

<style>
    .chart-container {
        position: relative;
        width: 40vw;
    }

    @media screen and (max-width: 768px) {
        .chart-container {
            width: 100%;
        }
    }
</style>