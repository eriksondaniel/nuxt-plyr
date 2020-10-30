<template>
    <div>
        <div class="nuxt-plyr">
            <vue-plyr>
                <video poster="/img/sample.png" src="/video/sample-video.mp4">
                    <!-- <source src="/video/sample-video.mp4" type="video/mp4" size="720">
                    <source src="/video/sample-video.mp4" type="video/mp4" size="1080"> -->
                    <track kind="captions" label="English" srclang="en" src="/video/sample-subtitles-en.vtt" default>
                </video>
            </vue-plyr>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .nuxt-plyr {
        width: 100%;
        height: auto;
    }
</style>