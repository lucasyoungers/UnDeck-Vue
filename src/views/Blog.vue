<template>
    <nav>
        <main>
            <Logo />
            <BlogLogo />
        </main>
    </nav>
    <main>
        <BlogPost v-for="post in posts" :post="post" />
    </main>
</template>

<script>
import Logo from "@/components/nav/Logo"
import BlogLogo from "@/components/blog/BlogLogo"
import BlogPost from "@/components/blog/BlogPost"
import getPosts from "@/composables/getPosts"

export default {
    name: "Blog",
    components: { Logo, BlogLogo, BlogPost },
    setup() {
        const { posts, loadPosts } = getPosts()
        loadPosts().then(console.log(posts))

        return { posts }
    }
}
</script>

<style scoped>
nav {
    --nav-height: 100px;
    padding: 1.5% var(--gap);
    display: grid;
    row-gap: var(--gap);
}

main {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--gap) * 4);
    justify-content: center;
    align-items: center;
}
</style>