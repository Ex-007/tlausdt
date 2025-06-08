<template>
  <div class="overall">
    <div class="imageName">
      <img src="/images/logo.png" alt="the logo" />
      <h3>TFL USDT</h3>
    </div>

    <div class="hamburger" @click="toggleMenu">
      <span>&#9776;</span>
    </div>

    <div :class="['navItems', { showMenu: isMenuOpen }]">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#Licensing">License Plans</a></li>
        <li><a href="contact">Contact Us</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.overall {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  flex-wrap: wrap;
  background-color: #f8f9fa;
}

.imageName {
  display: flex;
  align-items: center;
  gap: 10px;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgb(193, 108, 16);
  /* background-color: rgb(193, 108, 16); */
  padding: 5px;
}

.hamburger {
  display: none;
  font-size: 30px;
  cursor: pointer;
}

.navItems {
  display: flex;
  align-items: center;
}

.navItems ul {
  display: flex;
  list-style: none;
  gap: 15px;
  padding: 0;
  margin: 0;
}

.navItems ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  color: rgb(193, 108, 16);
}

@media (max-width: 844px) {
  .hamburger {
    display: block;
  }

  .navItems {
    display: none;
    width: 100%;
  }

  .navItems.showMenu {
    display: block;
  }

  .navItems ul {
    flex-direction: column;
    background-color: #f8f9fa;
    padding: 10px;
    gap: 10px;
  }

  .navItems ul li {
    width: 100%;
    text-align: center;
  }
}
h3,
span {
  color: rgb(193, 108, 16);
}
</style>
