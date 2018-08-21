<template id="post-editt">
    <div>
        <h3>Delete post : {{ post.title }}</h3>

        <form v-on:submit.prevent="deletePost">
            <p>The Action can't be undone</p>
            <button type="submit" class="btn btn-danger">Yes, Delete Post</button>
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
        deletePost: function(){
            let uri = 'http://localhost:8000/posts/'+this.$route.params.id;
            Axios.delete(uri, this.post).then((response) => {
                this.$router.push({name: 'Listposts'})
            })
        }
    }

    
}
</script>
