<template>
    <Button icon="file_download" @click="openPlaysetPDF(card.id)" />
</template>

<script>
    import Button from "@/components/card/buttons/Button"
    import { openDeckPDF } from "@/lib/utils"

    export default {
        name: "DownloadButton",
        components: { Button },
        props: [ "card" ],
        setup() {
            const openPlaysetPDF = id => openDeckPDF(`${id}~4`)

            return { openPlaysetPDF }
        }
    }
</script>