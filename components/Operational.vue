<template>
  <div class="overall" id="operation">
    <div class="innerSection">
      <div class="head">
        <h3>Operational Video</h3>
      </div>

      <!-- https://vimeo.com/1091551364 -->
      <div class="videoTutorial" id="videoTutorial">
            <div class="videoss">
                <div class="videoHosted">
                    <iframe src="https://player.vimeo.com/video/1091551364?title=0&amp;
                        byline=0&amp;
                        portrait=0&amp;
                        badge=0&amp;
                        autopause=0&amp;
                        player_id=0&amp;
                        app_id=58479" 
                        width="200" 
                        height="200" 
                        frameborder="0" 
                        allow="fullscreen; 
                        picture-in-picture;"
                        title="Operation One">
                    </iframe>
                </div>
                <!-- https://vimeo.com/1091552092 -->
                <div class="videoHosted">
                    <iframe src="https://player.vimeo.com/video/1091552092?title=0&amp;
                        byline=0&amp;
                        portrait=0&amp;
                        badge=0&amp;
                        autopause=0&amp;
                        player_id=0&amp;
                        app_id=58479" 
                        width="200" 
                        height="200" 
                        frameborder="0" 
                        allow="fullscreen; 
                        picture-in-picture;"
                        title="Operation Two">
                    </iframe>
                </div>
            </div>
       </div>
    </div>
  </div>
</template>

<style scoped>
.head{
  margin-top: 10px;
  color: rgb(193, 108, 16);
}
.innerSection {
  display: flex;
  padding: 10px;
  padding: 20px 0;
  background-color: rgb(233, 242, 249);
}
.innerSection {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}


.videoTutorial h3{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 26px;
    margin: 20px ;
}


.videoss{
    display: grid;
    grid-template-columns: 50fr 50fr;
    align-items: center;
    gap: 20px;
    margin-left: 20px;
}
.videoHosted{
    margin-right: 20px;
    border: 2px solid gold;
}

iframe{
    margin: -30px;
    padding: 10px;
}
@media (max-width: 844px) {
  .innerSection {
    flex-direction: column;
    padding: 0 10px;
  }
  .textContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .textContent h3 {
    color: rgb(193, 108, 16);
  }
}
</style>
