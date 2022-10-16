<template>
    <Button icon="file_download" />
</template>

<script>
    import Button from "@/components/card/buttons/Button"

    export default {
        name: "DownloadButton",
        components: { Button },
        props: [ "card" ]
    }
</script>