<style src='style.scss' lang='scss'></style>
<script src='script.js'></script>
<template>
  <div class='check _touch' v-on:click='place' v-bind:class='active'>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
