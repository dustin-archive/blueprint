<style src='style.scss' lang='scss'></style>
<script src='script.js'></script>
<template>
  <div>
    <div class='appbar'>
      <div class='appbar-wrap _wrap'>
        <a class='appbar-logo' href='/'>
          <img src='assets/logo.png'>
        </a>
        <div class='appbar-inner'>
          <div class='appbar-nav'>
            <a class='-active' href='/listings'>Listings</a>
            <a href='/dashboard#'>Dashboard</a> <!-- hash is on purpose -->
            <a v-on:click='login'>Login</a>
            <a v-on:click='register'>Register</a>
          </div>
          <!-- <drop>
            <template slot='toggle'>
              <div class='toolbar-toggle'>Welcome, Dustin!</div>
            </template>
            <template slot='region'>
              <navigation></navigation>
            </template>
          </drop> -->
        </div>
      </div>
    </div>
  </div>
</template>
