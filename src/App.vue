<template>
    <div class="ms__free__space"></div>
      <vs-sidebar v-model="active" fixed open background="rgb(2, 2, 2)">
        <template #logo>
          <RouterLink to="/" style="display: flex;">
            <img src="./assets/logo.png" alt="Logo" class="ms__sidebar__logo">
            <h1 class="ms__company__name">BotSpace</h1>
          </RouterLink>
        </template>
        <RouterLink to="/" class="ms__router__link__styles">
          <vs-sidebar-item id="home">
          <template #icon>
            <i class="bx bx-home" />
          </template>
          Home
        </vs-sidebar-item>
        </RouterLink>
        <RouterLink to="/tutorial" class="ms__router__link__styles">
          <vs-sidebar-item id="tutorial">
            <template #icon>
              <i class="bx bx-grid-alt" />
            </template>
            Tutorial
          </vs-sidebar-item>
        </RouterLink>

        <RouterLink to="/dashboard" class="ms__router__link__styles" @click="LoadDashboard">
          <vs-sidebar-item id="dashboard">
            <template #icon>
              <i class="bx bx-grid-alt" />
            </template>
            Dashboard
          </vs-sidebar-item>
        </RouterLink>
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
        <vs-sidebar-group v-if="isDashboard">
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i class='bx bx-terminal'></i>
              </template>
              Commands
            </vs-sidebar-item>
          </template>
  
          <vs-sidebar-item id="embedCreator" @click="EmbedCreatorActive = !EmbedCreatorActive">
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
        <vs-sidebar-group v-if="isDashboard">
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
  
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <vs-dialog v-model="EmbedCreatorActive" width="550px" not-center overlay-blur background="dark" class="ms__modal">
      <template #header>
        <h4 class="not-margin">Embed Creator</h4>
      </template>

      <div class="con-content">
        <p>
          Vuesax is a relatively new framework with a refreshing design and in
          the latest trends, vuesax based on vuejs which means that we go hand
          in hand with one of the most popular javascript frameworks in the
          world and with a huge community with which you will have all the help
          and documentation to create and make your project
        </p>
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button type="transparent" @click="EmbedCreatorActive = false"> Ok </vs-button>
        </div>
      </template>
    </vs-dialog>
  </template>
  
  





<script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router'; 
  import { VsLoadingFn } from 'vuesax-alpha';


  const route = useRoute();
  const EmbedCreatorActive = ref(false)

  const checkPage = () => {
    const path = window.location.pathname;
  
    if (path === '/dashboard') {
      return 'dashboard';
    } 
    else if (path === '/discord') {
      return 'discord';
    } 
    else if (path === '/tutorial') {
      return 'tutorial';
    } 
    else if (path === '/status') {
      return 'status';
    } 
    else if (path === '/news') {
      return 'news';
    }

    else {
      return 'home';
    }
  };


  let active = ref(checkPage()); 

  let isDashboard = ref(false);

  function checkDashboard() {
    isDashboard.value = route.path.includes('/dashboard');
  }



  onMounted(function() {
    const token = localStorage.getItem('token');

    if (token === null) {
      console.log('token nie istnieje')
    }
  });




  watch(
    () => route.path,
    () => {
      checkDashboard();
      active.value = checkPage();
    }, 
    { immediate: true }
  );
  
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
  

  const LoadDashboard = () => {
      const loadingInstance = VsLoadingFn({
      text: 'Loading Dashboard...',
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
    }, 150);
  };




  onMounted(() => {
    openLoading();
    active.value = checkPage(); 
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
    position: fixed;
    z-index: 99999;
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
      background: rgba(0, 0, 0, 0.918);
      z-index: 9999;
      top: 0;
      transform: scale(1) !important;
  }
  
  
  .ms__free__space {
    min-width: 260px;
  }
  
  
  .hidden {
    width: 300px;
  }
  
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s ease-in;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  input,
  textarea,
  button,
  select,
  a {
      -webkit-tap-highlight-color: transparent;
  }
  
  
  .ms__router__link__styles {
    width: 100%;
  }
  
  
  .vs-loading__load {
    scale: 1.4;
  }
  
  

  .vs-dialog--rebound {
    background-color: rgb(2, 2, 2) !important;
    color: rgba(255, 255, 255, 0.781) !important;
    padding: 15px !important;
  }
  </style>
