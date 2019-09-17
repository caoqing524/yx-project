<template>
    <div class="app">
        <!-- 使用组件 -->
        <HeaderNav/>
        <FooterNav/>
    </div>
</template>

<script>
// 引入头部导航
import HeaderNav from './components/HeaderNav/HeaderNav.vue';
// 引入底部导航
import FooterNav from './components/FooterNav/FooterNav.vue';
export default {
    data() {
        return {

        }
    },
    // 注册组件
    components:{
        HeaderNav,
        FooterNav,
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >

 
</style>
