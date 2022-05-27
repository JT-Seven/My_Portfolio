<template>
    <nav class="sidebar close">
        <header>
        <div class="image-text">
            <span class="image"><img class="logo" src="../../assets/logo.png" alt=""></span><div class="text header-text"><span class="name">Terneus Steven</span><span class="profession">Student</span></div>
        </div>
        <box-icon class="toggle" @click="closeSidebar" name='chevron-right' color='#ffffff' ></box-icon>
        </header>
        <div class="menu-bar">
        <div class="menu">
            <ul class="menu-links">
                <li class="nav-link">
                    <a href="#">
                        <router-link to="/home">
                            <i class='bx bx-home bx-flashing-hover icon' ></i>
                            <span class="text nav-text">Dashboard</span>
                        </router-link>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="#">
                        <router-link to="/about">
                            <i class='bx bx-user-pin bx-flashing-hover icon' ></i>
                            <span class="text nav-text">About</span>
                        </router-link>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="#">
                        <router-link to="/skills">
                            <i class='bx bx-book bx-flashing-hover icon' ></i>
                            <span class="text nav-text">Skills</span>
                        </router-link>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="#">
                        <router-link to="/works">
                            <i class='bx bx-briefcase-alt-2 bx-flashing-hover icon' ></i>
                            <span class="text nav-text">Works</span>
                        </router-link>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="#">
                        <router-link to="/hobbies">
                            <i class='bx bx-joystick bx-flashing-hover icon' ></i>
                            <span class="text nav-text">Hobbies</span>
                        </router-link>
                    </a>
                </li>
                <li class="nav-link">
                    <a href="#">
                        <router-link to="/contact">
                            <i class='bx bx-message-square-detail bx-flashing-hover icon' ></i>
                            <span class="text nav-text">Contact</span>
                        </router-link>
                    </a>
                </li>
                <div class="social-media">
                    <li class="nav-link">
                        <a href="https://github.com/JT-Seven" target="_blank">
                            <i class='bx bxl-github bx-flashing-hover icon'></i>
                            <span class="text nav-text">GitHub</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="https://www.youtube.com/channel/UCB8Q5i9sWiQbf5f1kCkRSxw" target="_blank">
                            <i class='bx bxl-youtube bx-flashing-hover icon'></i>
                            <span class="text nav-text">Youtube</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="https://www.linkedin.com/in/steven-terneus-426254208/" target="_blank">
                            <i class='bx bxl-linkedin bx-flashing-hover icon' ></i>
                            <span class="text nav-text">Linkedin</span>
                        </a>
                    </li>
                </div>
            </ul>
        </div>
        <div class="bottom-content">
            <ul>
            <li class="mode">
                <div class="sun-moon">
                    <i class='bx bx-moon icon moon'></i>
                    <i class='bx bx-sun icon sun'></i>
                </div>
                <span class="mode-text text">Dark Mode</span>
                <div class="toggle-switch">
                    <span class="switch" @click="toggleLightDark"></span>
                </div>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    <section class="model">
        <div class="bg-animated"></div>
        <div class="bg-animated2"></div>
        <div class="bg-animated3"></div>
        <div class="bg-animated4"></div>
        <div class="box-shape1"></div>
        <div class="box-shape2"></div>
        <div class="box-shape3"></div>
        <router-view></router-view>
        <div class="glass-container">
        </div>
    </section>
</template>
<script>
    import Home from '../home/Home.vue'
    export default {
        name: 'app',
        components: {
            Home
        },
        methods: {
            toggleLightDark() {
                const body = document.querySelector('body'),
                modeText = body.querySelector(".mode-text");

                body.classList.toggle("dark");
                
                if(body.classList.contains("dark")){
                    modeText.innerText = "Light mode";
                }else{
                    modeText.innerText = "Dark mode";
                }
            },
            closeSidebar() {
                console.log("clicked");
                const body = document.querySelector('body'),
                sidebar = body.querySelector('.sidebar'),
                toggle = body.querySelector(".toggle")

                sidebar.classList.toggle("close");
            }
        }
    }
</script>
<style src="./_app.css"></style>