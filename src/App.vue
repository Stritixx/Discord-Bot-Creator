<template>
  <div class="hidden">
    <vs-sidebar v-model="active" absolute open background="#0a0a0a">
      <template #logo>
        <img src="./assets/logo.png" alt="Logo" class="ms__sidebar__logo">
        <h1 class="ms__company__name">BotSpace</h1>
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="bx bx-home" />
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="tutorial">
        <template #icon>
          <i class="bx bx-grid-alt" />
        </template>
        Tutorial
      </vs-sidebar-item>
      <vs-sidebar-item id="status">
        <template #icon>
          <i class='bx bx-bar-chart-alt-2' ></i>
        </template>
        Status
      </vs-sidebar-item>
      <vs-sidebar-item id="discord">
        <template #icon>
          <i class='bx bxl-discord-alt' ></i>
        </template>
        Discord
      </vs-sidebar-item>
      <vs-sidebar-item id="news">
        <template #icon>
          <i class='bx bx-news' ></i>
        </template>
        News
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class='bx bx-terminal'></i>
            </template>
            Commands
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="embedCreator">
          <template #icon>
            <i class='bx bx-chevron-right'></i>
          </template>
          Embed Creator
        </vs-sidebar-item>

        <vs-sidebar-item id="mute">
          <template #icon>
            <i class='bx bx-chevron-right'></i>
          </template>
          Mute / Unmute
        </vs-sidebar-item>

        <vs-sidebar-item id="ban">
          <template #icon>
            <i class='bx bx-chevron-right'></i>
          </template>
          Ban / Unban
        </vs-sidebar-item>

        <vs-sidebar-item id="clear">
          <template #icon>
            <i class='bx bx-chevron-right'></i>
          </template>
          Clear
        </vs-sidebar-item>
        
        <vs-sidebar-item id="warn">
          <template #icon>
            <i class='bx bx-chevron-right'></i>
          </template>
          Warn
        </vs-sidebar-item>

        <vs-sidebar-item id="kick">
          <template #icon>
            <i class='bx bx-chevron-right'></i>
          </template>
          Kick
        </vs-sidebar-item>
        
        <vs-sidebar-item id="say">
          <template #icon>
            <i class='bx bx-chevron-right'></i>
          </template>
          Say
        </vs-sidebar-item>
        
      </vs-sidebar-group>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-code-alt" />
            </template>
            Functions
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="activity">
          <template #icon>
            <i class='bx bx-chevron-right'></i>
          </template>
          Bot Activity
        </vs-sidebar-item>

        <vs-sidebar-item id="tickets">
          <template #icon>
            <i class='bx bx-chevron-right'></i>
          </template>
          Tickets
        </vs-sidebar-item>

        <vs-sidebar-item id="lobby">
          <template #icon>
            <i class='bx bx-chevron-right'></i>
          </template>
          Lobby
        </vs-sidebar-item>

        <vs-sidebar-item id="verify">
          <template #icon>
            <i class='bx bx-chevron-right'></i>
          </template>
          Verify
        </vs-sidebar-item>
      </vs-sidebar-group>
    </vs-sidebar>
  </div>
</template>


<script>
  export default {
    name: 'App',
    data:() => ({
        active: 'home',
      })
  }
</script>

<script setup>
import { onMounted } from 'vue';
import { VsLoadingFn } from 'vuesax-alpha';

const openLoading = () => {
  const loadingInstance = VsLoadingFn({
    text: 'Loading...',
    className: 'ms__loader'
  });

  setTimeout(() => {
    const loaderElement = document.querySelector('.ms__loader');
    if (loaderElement) {
      loaderElement.classList.add('ms__loader-close');

      loaderElement.addEventListener(
        'animationend',
        () => {
          loadingInstance.close();
        },
        { once: true }
      );
    }
  }, 500);
};

onMounted(() => {
  openLoading();
});
</script>


<style>
.vs-sidebar-item {
  color: rgb(197, 197, 197) !important;
}


.vs-sidebar-item.is-active {
  color: rgba(var(--vs-color),1) !important
}


.ms__company__name {
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
  color: white;
  margin-left: 15px;
  font-size: 20px;
  font-weight: 600;
  text-shadow: 0px 0px 26px rgba(255, 255, 255, 1);
}


.vs-sidebar__logo {
  padding: 50px 0 !important;
}


.ms__sidebar__logo {
  filter: drop-shadow(0px 0px 15px #0062ff);
}


.vs-sidebar-item__icon {
  background: none !important;
}


.vs-sidebar {
  transition: none !important;
}


.vs-loading {
  background: rgba(0, 0, 0, 0.555) !important;
}



.ms__loader {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.ms__loader-close {
  -webkit-animation: closeLoader 1s both;
  animation: closeLoader 1s both;
}


@keyframes closeLoader {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.vs-loading__load {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    width: 100vw;
    background: rgba(0, 0, 0, 0.849);
    z-index: 9999;
    top: 0;
    transform: scale(1) !important;
}



</style>