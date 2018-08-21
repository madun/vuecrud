<template id="add-post">
    <div>
        <h3>Add new post</h3>

        <form v-on:submit.prevent="createPost">
            <div class="form-group">
                <label for="add-title">Title</label>
                <input id="add-title" v-model="post.title" type="text" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="add-body">Body</label>
                <textarea id="add-body" v-model="post.body" cols="30" rows="10" class="form-control"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Create Post</button>
            <router-link class="btn btn-flat" v-bind:to="{name: 'Listposts'}">Cancel</router-link>
        </form>

    </div>
</template>

<script>
export default {
    data: function(){
        return {post: {title: '', body: ''}};
    },

    methods: {
        createPost: function(){
            let uri = 'http://localhost:8000/posts';
            Axios.post(uri, this.post).then((response) => {
                this.$router.push({name: 'Listposts'})
            });
        }
    }
}
</script>
