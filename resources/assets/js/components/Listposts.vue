<template id="post-list">
    <div class="row">
        <div class="col-md-12">
            <div class="pull-right">
                <router-link class="btn btn-xs btn-primary" v-bind:to="{name: 'Addpost'}">
                    <span class="glyphicon glyphicon-plus"></span>
                    Add New Post
                </router-link>
            </div>
        </div>
        <br><br>
        <div class="col-md-12">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Post Title</th>
                        <th>Post Body</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(post, index) in filteredPosts" :key="post.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.body }}</td>
                        <td align="center">
                            <router-link class="btn btn-info btn-xs" v-bind:to="{name: 'Viewpost', params: {id: post.id}}">Show</router-link>
                            <router-link class="btn btn-warning btn-xs" v-bind:to="{name: 'Editpost', params: {id: post.id}}">Edit</router-link>
                            <router-link class="btn btn-danger btn-xs" v-bind:to="{name: 'Deletepost', params: {id: post.id}}">Delete</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {posts: ''};
    },

    created: function(){
        let uri = 'http://localhost:8000/posts';
        Axios.get(uri).then((response) => {
            this.posts = response.data;
        });
    },

    computed: {
        filteredPosts: function(){
            if(this.posts.length){
                return this.posts;
            }
        }
    }
}
</script>

