<template>
    <router-link to="Blog">
        <article>
            <h1>{{ post?.frontmatter?.title || "Untitled" }}</h1>
            <section v-html="post?.content" />
        </article>
    </router-link>
</template>

<script>
export default {
    name: "BlogPost",
    props: ["post"],
    setup() {
        return {}
    }
}
</script>

<style scoped>
a {
    color: black;
    text-decoration: none;
}

article {
    width: 320px;
    height: 360px;
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    box-shadow: 0 0.2em 0.6em rgba(0, 0, 0, 0.5);
    transition: transform 0.25s;
    display: flex;
    flex-direction: column;
}

article:hover {
    transform: translateY(-8px);
    transition: transform 0.25s;
}

section {
    flex-grow: 1;
    /* max-height: 50%; */
    overflow: hidden;
    text-overflow: ellipsis;
}

:deep(li) {
    list-style-position: inside;
}

:deep(li)>* {
    display: inline-block;
}
</style>