"use strict"

$('.embassy_select li').on("click",function(){

  let contentsList = $(".embassyList");

  let indexList = $(".embassy_select li").index(this);

  contentsList.addClass('is-hidden');
  contentsList.eq(indexList).removeClass('is-hidden');
});
