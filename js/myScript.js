$(document).ready(function(){
  
    /** Sticky Header js **/
  
    var header = $('.sticky-header');
    // var topheader = $('.top-header');
    //var middle = $('.main-header');
      var win = $(window);
      win.on('scroll', function() {
          var scroll = win.scrollTop();
          if (scroll < 150){
              header.removeClass('stick');
            //   topheader.removeClass('hidesection');
              //middle.removeClass('hidesection');
          } else {
              header.addClass('stick');
            //   topheader.addClass('hidesection');
              //middle.addClass('hidesection');
          }
      });
  
      /** Sticky Header js **/


      /** @TerenceNdime **/
            // First Tab
            $(".list.one_list").click(function(){
              //list
            $(this).addClass("active");
            $(".two_list,.three_list,.four_list,.five_list,.six_list,.seven_list").removeClass("active");
            //panel
            $(".one_panel").removeClass("panelhide").addClass(".paneldisp");
            $(".two_panel,.three_panel,.four_panel,.five_panel,.six_panel,.seven_panel").removeClass(".paneldisp").addClass("panelhide");
            });

            // Second Tab
            $(".list.two_list").click(function(){
            //List
            $(this).addClass("active");
            $(".one_list,.three_list,.four_list,.five_list,.six_list,.seven_list").removeClass("active");
            //panel
            $(".two_panel").removeClass("panelhide").addClass(".paneldisp");
            $(".one_panel,.three_panel,.four_panel,.five_panel,.six_panel,.seven_panel").removeClass(".paneldisp").addClass("panelhide");
            });

            // third Tab
            $(".list.three_list").click(function(){
            //List
            $(this).addClass("active");
            $(".one_list,.two_list,.four_list,.five_list,.six_list,.seven_list").removeClass("active");
            //panel
            $(".three_panel").removeClass("panelhide").addClass(".paneldisp");
            $(".one_panel,.two_panel,.four_panel,.five_panel,.six_panel,.seven_panel").removeClass(".paneldisp").addClass("panelhide");
            });

            // Fourth Tab
            $(".list.four_list").click(function(){
            //List
            $(this).addClass("active");
            $(".one_list,.three_list,.two_list,.five_list,.six_list,.seven_list").removeClass("active");
            //panel
            $(".four_panel").removeClass("panelhide").addClass(".paneldisp");
            $(".one_panel,.three_panel,.two_panel,.five_panel,.six_panel,.seven_panel").removeClass(".paneldisp").addClass("panelhide");
            });

            // Fifth Tab
            $(".list.five_list").click(function(){
            //List
            $(this).addClass("active");
            $(".one_list,.three_list,.four_list,.two_list,.six_list,.seven_list").removeClass("active");
            //panel
            $(".five_panel").removeClass("panelhide").addClass(".paneldisp");
            $(".one_panel,.three_panel,.four_panel,.two_panel,.six_panel,.seven_panel").removeClass(".paneldisp").addClass("panelhide");
            });

            // Sixth Tab
            $(".list.six_list").click(function(){
            //List
            $(this).addClass("active");
            $(".one_list,.three_list,.four_list,.five_list,.two_list,.seven_list").removeClass("active");
            //panel
            $(".six_panel").removeClass("panelhide").addClass(".paneldisp");
            $(".one_panel,.three_panel,.four_panel,.five_panel,.two_panel,.seven_panel").removeClass(".paneldisp").addClass("panelhide");
            });

            // Seventh Tab
            $(".list.seven_list").click(function(){
            //List
            $(this).addClass("active");
            $(".one_list,.three_list,.four_list,.five_list,.six_list,.two_list").removeClass("active");
            //panel
            $(".seven_panel").removeClass("panelhide").addClass(".paneldisp");
            $(".one_panel,.three_panel,.four_panel,.five_panel,.six_panel,.two_panel").removeClass(".paneldisp").addClass("panelhide");
            });




  

    });



    function openNav() {
      document.getElementById("myNav").style.width = "100%";
    }
    
    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }