<style src='style.scss' lang='scss'></style>
<script src='script.js'></script>
<template>
  <div id='#app' class='app'>
    <div class='_layer -wrap _wrap'>
      <compare></compare>
      <page></page>
      <pagination></pagination>
    </div>
    <transition name='fade'>
      <div class='_layer -wrap _wrap' v-if='modal === "compare"'>
        <modal>
          <compare-modal></compare-modal>
        </modal>
      </div>
    </transition>
  </div>
</template>
