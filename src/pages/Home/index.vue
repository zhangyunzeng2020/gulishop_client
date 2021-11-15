<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="(floor,index) in floorList" :ke="floor.id" :floor="floor"></Floor>
<!--        <Floor></Floor>-->
<!--        <Floor></Floor>-->
        <Brand></Brand>
    </div>
</template>

<script>
    import ListContainer from './ListContainer/index'
    import Recommend from './Recommend/index'
    import Rank from './Rank/index'
    import Like from './Like/index'
    import Floor from './Floor/index'
    import Brand from './Brand/index'
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        components:{
            Rank,
            ListContainer,
            Recommend,
            Like,
            Floor,
            Brand
        },
        mounted(){
            this.$store.dispatch('getFloorList')
        },
        computed:{
            ...mapState({
                floorList:state => state.home.floorList
            })
        }

    }
</script>

<style lang="less" scoped>

</style>