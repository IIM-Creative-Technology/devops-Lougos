<template>
    <div class="main">
        <div class="reseaux">
            <a target="_blank" href="https://twitter.com/Lilian_Gtr"><img class="twitter" src="../assets/twitter.png" alt="Twitter"></a>
            <a target="_blank" href="https://github.com/Lougos"><img class="github" src="../assets/github.png" alt="GitHub"></a>
            <a target="_blank" href="https://www.linkedin.com/in/lilian-gautier-3b637a159/"><img class="linkedin" src="../assets/linkedin.png" alt="LinkedIn"></a>
        </div>
        <div class="Projets">
            <div class="ligne1">
                <router-link :to="{name: 'Priska'}">
                    <a class="projet1">
                        <div class="intitule">
                            <p>Priska</p>
                            <small>Portfolio</small>
                        </div>
                        <img alt="Priska" src="../assets/priska.png">
                    </a>
                <router-link>
                <div class="blank"></div>
            </div>
            <div class="ligne1">
                <div class="blank"></div>
                <router-link :to="{name: 'Priska'}">
                    <a class="projet1">
                        <div class="intitule">
                            <p>Priska</p>
                            <small>Portfolio</small>
                        </div>
                        <img alt="Priska" src="../assets/priska.png">
                    </a>
                <router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

    .main{
        display: flex;
        flex-direction: row;
        height: 88%;
        width: 100%;
        background-color: none;
        .reseaux {
            display: flex;
            flex-direction: column-reverse;
            width: 10%;
            align-items: center;
            justify-content: center;
            height: 88vh;
            a{
                img {
                    width: 40px;
                    height: 40px;
                }
                .twitter:hover {
                    filter: invert(55%) sepia(78%) saturate(3079%) hue-rotate(162deg) brightness(96%) contrast(105%);
                }

                .linkedin:hover {
                    filter: invert(41%) sepia(15%) saturate(2569%) hue-rotate(156deg) brightness(91%) contrast(98%);
                }

                .github:hover {
                    filter: invert(22%) sepia(67%) saturate(7340%) hue-rotate(297deg) brightness(88%) contrast(127%);
                }
            }
        }

       .Projets {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 90%;
            height: 100%;
            .ligne1 {
                display: flex;
                justify-content: center;
                align-items: center;
                .projet1 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: black;
                    color: white;
                    width: 40%;
                    height: 70%;
                    text-decoration: none;
                    transition-duration: 500ms;
                    .intitule{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 20%;
                        height: 100%;
                        p {
                            font: 30px;
                        }
                        small {
                            margin-top: 5%;
                            font: 20px;
                        }
                        img{
                            width: 70%;
                            height: 100%;
                        }
                    }
                }
                .projet1:hover {
                    transition-duration: 500ms;
                    filter: invert(1);
                }
                .blank {
                    width: 45%;
                    height: 60%;
                }
            }
        } 

    }

</style>