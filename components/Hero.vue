<template>
  <section class="hero">
    <div class="overlay"></div>
    <div class="hero-content">
      <h1 class="headName">TFL USDT SOFTWARE</h1>
      <h2>"Software Designed to Transfer USDT to wallet with 100% confirmation"</h2>
      <br />
      <div class="hero-buttons">
        <a href="#subscriptionsPackage" class="primary-btn">Get Started</a>
        <a href="#operation" class="primary-btn">Watch Video</a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
      background-image: linear-gradient(
        to bottom,
        #b39b58 0%,
        #497a1b 40%,
        #c14712 70%,
        #20b9af 100%
    );
  /* background: gold; */
  /* background: url("/images/tlaHero.jpg") center 30% no-repeat; */
  background-size: cover;
  color: white;
  text-align: center;
  padding: 20px;
  overflow: hidden;
  z-index: 1;
}

@media (min-width: 992px) {
  .hero {
    background-attachment: fixed;
  }
}

@media (max-width: 844px) {
  .hero {
    background-position: center center;
    background-size: cover;
    background-attachment: scroll;
  }
  .headName {
    font-size: 25px;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.hero-content {
  position: relative;
  max-width: 600px;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease-out forwards;
  z-index: 2;
}
h1 {
  font-size: 2.9rem;
  margin-bottom: 10px;
  animation: fadeIn 1.5s ease-in-out;
}
p {
  font-size: 2.5rem;
  margin-bottom: 10px;
  animation: fadeIn 2s ease-in-out;
}
.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}
.hero-buttons a {
  text-decoration: none;
}
.primary-btn,
.secondary-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
}
.primary-btn {
  background-color: rgb(193, 108, 16);
  color: white;
}
.primary-btn:hover {
  background-color: white;
  color: rgb(193, 108, 16);
}
h2 {
  font-size: 15px;
}
.spanning {
  font-size: 19px;
}
a {
  color: white;
  font-size: 18px;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    animation: fadeIn 1.5s ease-in-out;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 10px;
    animation: fadeIn 2s ease-in-out;
  }
}
</style>
