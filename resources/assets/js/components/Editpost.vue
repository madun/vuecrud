<template id="post-editt">
    <div>
        <h3>Edit post</h3>

        <form v-on:submit.prevent="updatePost">
            <div class="form-group">
                <label for="edit-title">Title</label>
                <input id="edit-title" v-model="post.title" type="text" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="edit-body">Body</label>
                <textarea id="edit-body" v-model="post.body" cols="30" rows="10" class="form-control"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Update Post</button>
            <router-link class="btn btn-flat" v-bind:to="{name: 'Listposts'}">Cancel</router-link>
        </form>

    </div>
</template>

<script>
export default {
    data: function(){
        return {post: {title: '', body: ''}}
    },

    created: function(){
        let uri = 'http://localhost:8000/posts/'+this.$route.params.id+'/edit';
        Axios.get(uri).then((response) => {
            this.post = response.data;
        });
    },

    methods: {
        updatePost: function(){
            let uri = 'http://localhost:8000/posts/'+this.$route.params.id;
            Axios.patch(uri, this.post).then((response) => {
                this.$router.push({name: 'Listposts'})
            })
        }
    }



}
</script>
