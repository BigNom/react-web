import styled from 'styled-components';


header.masthead {
  position: relative;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 100px;
  color: white;
  background: url("../assets/bg-pattern.png"), #7b4397;
  background: url("../assets/bg-pattern.png"), -webkit-linear-gradient(to left, #7b4397, #dc2430);
  background: url("../assets/bg-pattern.png"), linear-gradient(to left, #7b4397, #dc2430); }
  header.masthead .header-content {
    max-width: 500px;
    margin-bottom: 100px;
    text-align: center; }
    header.masthead .header-content h1 {
      font-size: 30px; }
  header.masthead .device-container {
    max-width: 325px;
    margin-right: auto;
    margin-left: auto; }
    header.masthead .device-container .screen img {
      border-radius: 3px; }
  @media (min-width: 992px) {
    header.masthead {
      height: 100vh;
      min-height: 775px;
      padding-top: 0;
      padding-bottom: 0; }
      header.masthead .header-content {
        margin-bottom: 0;
        text-align: left; }
        header.masthead .header-content h1 {
          font-size: 50px; }
      header.masthead .device-container {
        max-width: 325px; } }