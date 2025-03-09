<script setup>
import { storeToRefs } from 'pinia';
import Computed from './components/Computed.vue';
import PiniaCom from './components/PiniaCom.vue';
import Plugins from './components/Plugins.vue';
import TeleportCom from './components/TeleportCom.vue';
import TemplateRef from './components/TemplateRef.vue';
import VDirectives from './components/VDirectives.vue';
import VModel from './components/VModel.vue';
import { useUserStore } from './store';

const {name,loginCount} =  storeToRefs(useUserStore())
</script>

<template>
  <header>
    xxxx系统
    用户信息： {{ name }}
    登录次数： {{  loginCount }}
  </header>
  <main>
    <!-- <Computed />
    <TemplateRef />
    <VModel/>
    <VDirectives/>
    <Plugins/>
    <TeleportCom/> -->
    <PiniaCom/>
  </main>
</template>

<style scoped>
div.com{
  margin: 20px 0;
  padding: 5px;
  border:  1px solid;
}
</style>
