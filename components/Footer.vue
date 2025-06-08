<template>
  <div class="overall">


    <div class="container">

      <div class="layerOne">
        <div class="logoName">
          <img src="/images/logo.png" alt="The footer logo" />
          <h3>Welcome to TFL Software!</h3>
        </div>
        <p>
          We are here to help you get started with USDT Flashing. We offer a variety of license plans to suit your needs. <br> Get started today!
        </p>
      </div>
      <div class="layerOne">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#About">Operation</a></li>
          <li><a href="#Licensing">Licensing</a></li>
          <li><a href="contact">Contact Us</a></li>
        </ul>
      </div>

      <div class="layerOne">
        <ul>
          <li>
            <a href="tel:+46737134906"
              ><i class="fa fa-phone"></i></a
            >
          </li>
          <li>
            <a href="mailto:usdtflash6@gmail.com"
              ><i class="fa fa-envelope"></i></a
            >
          </li>
          <a href="https://wa.me/+46737134906"><i class="fa fa-whatsapp"></i></a>
          <a href="https://m.facebook.com/profile.php?id=100063475751682&name=xhp_nt_fbaction_open_user"><i class="fa fa-facebook"></i></a>
          <a href="https://t.me/tlafiles"><i class="fa fa-telegram"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
        </ul>
      </div>
    </div>



    <div class="footer-bottom">
      <p>
        &copy; {{ new Date().getFullYear() }} TLF USDT. All rights
        reserved.
      </p>
      <p>Designed by <a href="https://abtech-two.vercel.app">ABTech</a></p>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgb(193, 108, 16);
  padding: 5px;
}
h3 {
  color: rgb(193, 108, 16);
}
h4 {
  color: rgb(193, 108, 16);
}
li {
  list-style-type: none;
  cursor: pointer;
}
i {
  padding: 0 5px;
}
.overall {
  background-color: rgb(43, 32, 32);
}
.footer-bottom {
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px 5px;
  color: white;
  text-align: center;
}
@media (max-width: 844px) {
  .container {
    display: flex;
    flex-direction: column;
    color: white;
    padding: 10px 5px;
    margin-top: 10px;
  }
  .layerOne {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }
}



.logoName {
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
}

</style>
