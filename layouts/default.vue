<template>
    <div>
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<script setup>
useHead({
  title: 'TFL USDT SOFTWARE',
  meta: [
    {
      name: 'description',
      content: 'Software Designed to Transfer USDT to wallet with 100% confirmation',
    },
    {
      name: 'keywords',
      content: 'USDT, Crypto, BTC, Flash, Bitcoin',
    },
    {
      name: 'author',
      content: 'TFL USDT',
    },
    {
      property: 'og:title',
      content: 'TFL USDT SOFTWARE',
    },
    {
      property: 'og:description',
      content: 'Software Designed to Transfer USDT to wallet with 100% confirmation',
    },
    {
      property: 'og:image',
      content: '/images/tlaHero.jpg',
    },
    {
      property: 'og:url',
      content: 'https://yourdomain.com',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'TFL USDT SOFTWARE',
    },
    {
      name: 'twitter:description',
      content: 'Software Designed to Transfer USDT to wallet with 100% confirmation',
    },
    {
      name: 'twitter:image',
      content: '/images/tlaHero.jpg',
    },
  ]
});
</script>
