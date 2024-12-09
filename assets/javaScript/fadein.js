
$(function(){
  $('.mainScroll').addClass('active');
  var targets = [".information", ".about",".airport",".room",".embassy",".guide"];
    var flags = [true, true, true, true, true, true];
  $(window).on('load scroll', function() {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var minusPadding = scroll + height - 96;

    targets.forEach(function(target, index){
      var $target = $(target); // 対象要素を変数に格納
      if ($target.length > 0) { // 要素が存在するか確認
      
        var targetPosition = $(target).offset().top;
      if (minusPadding > targetPosition && flags[index]) {
				$(target).addClass('active');
        flags[index] = false;
      }
    }
    });
  });
});