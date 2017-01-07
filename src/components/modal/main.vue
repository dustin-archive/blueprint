<style src='style.scss' lang='scss'></style>
<script src='script.js'></script>
<template>
  <div class='modal'>
    <div class='modal-overlay _layer' v-on:click='close()'></div>
    <div class='modal-box _wrap _solid'>
      <slot></slot>
    </div>
  </div>
</template>
