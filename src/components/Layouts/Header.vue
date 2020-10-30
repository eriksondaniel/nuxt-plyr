<template>
    <header class="flex items-center justify-between">
        <a href="">
            <h2 class="text-6xl font-bold uppercase flex items-center">
                <!-- <Logo class="mr-3"/> -->
                <span class="heading-stroke" data-title="Nuxt Plyr">
                    Nuxt Plyr
                </span>
            </h2>
        </a>
        <a href="https://github.com/dyprast" target="blank">
            <IconGithub/>
        </a>
    </header>
</template>

<script>
    import Logo from "@/src/components/Logo"
    import IconGithub from "@/src/components/Icons/Github"

    export default {
        components: {
            Logo, IconGithub
        }
    }
</script>