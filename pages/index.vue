<template>
  <div>
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-gray-800 overflow-hidden rounded-xl">
        <div class="py-3 text-center">
          <div
            role="alert"
            class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          >
            <span
              class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
              >File</span
            >
            <span class="font-semibold mr-2 text-left flex-auto"
              >video element from local file</span
            >
          </div>
        </div>
        <vue-plyr>
          <video poster="/img/sample.png" src="/video/sample-video.mp4">
            <!-- <source src="/video/sample-video.mp4" type="video/mp4" size="720">
            <source src="/video/sample-video.mp4" type="video/mp4" size="1080"> -->
            <track
              kind="captions"
              label="English"
              srclang="en"
              src="/video/sample-subtitles-en.vtt"
              default
            />
          </video>
        </vue-plyr>
      </div>
      <div class="bg-gray-800 overflow-hidden rounded-xl">
        <div class="py-3 text-center">
          <div
            role="alert"
            class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          >
            <span
              class="flex rounded-full bg-red-700 uppercase px-2 py-1 text-xs font-bold mr-3"
              >Youtube</span
            >
            <span class="font-semibold mr-2 text-left flex-auto"
              >iframe with progressive enhancement</span
            >
          </div>
        </div>
        <vue-plyr>
          <div class="plyr__video-embed">
            <iframe
              src="https://www.youtube.com/embed/7TavVZMewpY?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
              allowfullscreen
              allowtransparency
              allow="autoplay"
            >
            </iframe>
          </div>
        </vue-plyr>
      </div>
    </div>
    <div class="flex justify-center mt-16">
      <div class="bg-gray-800 overflow-hidden rounded-xl">
        <vue-plyr>
        <audio>
            <source src="/audio/sample.mp3" type="audio/mp3"/>
        </audio>
        </vue-plyr>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>