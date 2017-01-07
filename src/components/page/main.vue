<style src='style.scss' lang='scss'></style>
<script src='script.js'></script>
<template>
  <div class='page'>
    <div class='page-grid _dashed'>
      <div class='page-item' v-for='id in items'>
        <check v-bind:id='id'>{{ id }}</check>
      </div>
    </div>
  </div>
</template>
