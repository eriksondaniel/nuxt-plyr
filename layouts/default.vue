<template>
    <div>
        <div class="container mx-auto px-4 py-4">
            <Header/>
            <main class="mt-8">
                <nuxt/>
            </main>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Layouts/Header"
    export default {
        components: {
            Header
        }
    }
</script>

<style lang="scss" scoped>

</style>