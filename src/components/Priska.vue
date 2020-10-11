<template>
    <div class="main">
        <div class="reseaux">
            <a target="_blank" href="https://twitter.com/Lilian_Gtr"><img class="twitter" src="../assets/twitter.png" alt="Twitter"></a>
            <a target="_blank" href="https://github.com/Lougos"><img class="github" src="../assets/github.png" alt="GitHub"></a>
            <a target="_blank" href="https://www.linkedin.com/in/lilian-gautier-3b637a159/"><img class="linkedin" src="../assets/linkedin.png" alt="LinkedIn"></a>
        </div>
        
        <div class="main-priska">

            <div class="blabla">
                <h2>Priska - Portfolio</h2>
                <h3>Description du client :</h3>
                <small>Priska est un développeur créatif. Il a étudié à Epita. Il a eu l'opportunité de travailler sur ses deux plus grandes passions: la technologie et la création.</small>

                <h3>Description du projet :</h3>
                <small>Priska voulait un portfolio où il puisse raconter son histoire et mettre ces différentes passiosn en avant comme le code, les photos, les images et le vidéos. De plus cela ce devait créatif et original</small>

                <h3>Rôle dans le projet :</h3>
                <h4>Chef de projet Web - Technicien Web </h4>
            </div>

            <div class="video-priska">
                <video controls width="600px">

                <source src="../assets/portfolioPriska.mp4"
                        type="video/mp4">
            
                Sorry, your browser doesn't support embedded videos.
                </video>
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
        .main-priska{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            .blabla {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 90%;
                height: 50%;
                h2{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font: 30px 'bebas';
                    text-decoration: underline;
                    margin-bottom: 3%;
                }
                h3{
                    font: 25px 'bebas';
                    text-decoration: underline;
                    margin-bottom: 1%;
                    margin-top: 1%;
                    margin-left: 5%;
                }
                small{
                    font: 18px 'Comfortaa';
                    margin-left: 8%;    
                }
                h4{
                    font: 20px 'Comfortaa';
                    margin-left: 8%;
                    text-decoration: underline;
                }
            }
            video{
                margin-top: 5%;
                margin-left: 20%;
                margin-right: 20%;
                padding-bottom: 10%;
                width: 60%;
                text-decoration: none;
            }
        }
    }
</style>