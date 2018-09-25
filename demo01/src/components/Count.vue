<template>
    <div>
        {{msg}}
        <!--<p>{{$store.state.count}}</p>-->
        <p>{{count}}</p>
        <!--<button @click="$store.commit('add',10)">++</button>-->
        <!--<button @click="add(10)">++</button>-->
        <button @click="addAction">++</button>
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        name: "count",
        data(){
            return {
                msg:'Hello Vuex'
            }
        },
        // computed:{
        //   count(){
        //       return this.$store.state.count
        //   }
        // },
        // computed:mapState({
        //     count:state=>state.count
        // }),
        // computed:mapState(['count']),
        computed:{
            ...mapState(['count']),
            // count(){
            //     return this.$store.getters.count
            // }
            // ...mapGetters(['count'])
        },
        methods:{
            ...mapMutations(['add']),
            ...mapActions(['addAction'])
        },
        store
    }
</script>

<style scoped>

</style>