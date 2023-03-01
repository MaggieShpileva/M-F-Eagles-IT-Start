import "./sass/styles.scss";
import imgBG from "./assets/images/bg-title-img.png";
import imgChair from "./assets/images/chair.png";
import imgMail from "./assets/images/envelope.png";
import logo from "./assets/images/logo.png";
import imgCar from "./assets/images/car.png";
import youtubeImg from "./assets/images/youtube.png";
import vkImg from "./assets/images/vk.png";
import fbImg from "./assets/images/facebook.png";
import instagramImg from "./assets/images/instagram.png";
const imgLogo = document.getElementById("logo");
imgLogo.src = logo;
const mainImg = document.getElementById("main-foto");
const offerTitleImgCar = document.getElementById("icon-car");
const productImg_1 = document.getElementById("img-chair-1");
const productImg_2 = document.getElementById("img-chair-2");
const productImg_3 = document.getElementById("img-chair-3");
const productImg_4 = document.getElementById("img-chair-4");
const youtubeIcon = document.getElementById("youtube-icon");
const vkIcon = document.getElementById("vk-icon");
const fbIcon = document.getElementById("fb-icon");
const instagramIcon = document.getElementById("inst-icon");
const mailImg = document.getElementById("mail-img");
mainImg.src = imgBG;
offerTitleImgCar.src = imgCar;
productImg_1.src = imgChair;
productImg_2.src = imgChair;
productImg_3.src = imgChair;
productImg_4.src = imgChair;
youtubeIcon.src = youtubeImg;
vkIcon.src = vkImg;
fbIcon.src = fbImg;
instagramIcon.src = instagramImg;
mailImg.src = imgMail;
const hello = require("./js/test");
