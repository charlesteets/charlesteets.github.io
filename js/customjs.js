// mobile detection
var isMobile = false; 
 
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

//on desktop, project details zoom is handled by function detecting whether projectdetails is in view
if (!isMobile) {
  var elements = document.getElementsByClassName("projectDetailsLink");
  for(var i=0; i<elements.length; i++) {
    elements[i].setAttribute("href","javascript:;");
  }
}

//if 


function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// Scroll to Top button
        var btn = $('#button');

        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });

        // DOM is ready
        $(function () {
            // Single Page Nav
            $('#tm-nav').singlePageNav({ speed: 600 });

            // Smooth Scroll (https://css-tricks.com/snippets/jquery/smooth-scrolling/)
            $('a[href*="#"]')
                // Remove links that don't actually link to anything
                .not('[href="#"]')
                .not('[href="#0"]')
                .click(function (event) {
                    // On-page links
                    if (
                        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                        &&
                        location.hostname == this.hostname
                    ) {
                        // Figure out element to scroll to
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        // Does a scroll target exist?
                        if (target.length) {
                            // Only prevent default if animation is actually gonna happen
                            event.preventDefault();
                            $('html, body').animate({
                                scrollTop: target.offset().top
                            }, 600, function () {
                                // Callback after animation
                                // Must change focus!
                                var $target = $(target);
                                $target.focus();
                                if ($target.is(":focus")) { // Checking if the target was focused
                                    return false;
                                } else {
                                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                    $target.focus(); // Set focus again
                                };
                            });
                        }
                    }
                });

            /* Isotope Gallery */

            // init isotope
            var $gallery = $(".tm-gallery").isotope({
                itemSelector: ".tm-gallery-item",
                layoutMode: "fitRows"
            });
            // layout Isotope after each image loads
            $gallery.imagesLoaded().progress(function () {
                $gallery.isotope("layout");
            });

            $(".filters-button-group").on("click", "a", function () {
                var filterValue = $(this).attr("data-filter");
                $gallery.isotope({ filter: filterValue });
            });

            $(".tabgroup > div").hide();
            $(".tabgroup > div:first-of-type").show();
            $(".tabs a").click(function (e) {
                e.preventDefault();
                var $this = $(this),
                    tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
                    others = $this
                        .closest("li")
                        .siblings()
                        .children("a"),
                    target = $this.attr("href");
                others.removeClass("active");
                $this.addClass("active");
            });
        });
        
        function displayProjectDetails(projectName) {
          
         var projDeets =  document.getElementById("projectDetails");
         projDeets.classList.add('fadeInAnim');
          setTimeout(function() {projDeets.classList.remove('fadeInAnim');}, 1900)

         if(!checkVisible(projDeets)){
               //attempting to do smooth scroll
              var target = $("#projectDetailsContainer");
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 600, function () {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                      return false;
                  } else {
                      $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                      $target.focus(); // Set focus again
                  };
              });
         }
                  
         if(projectName == 'bible') {
            projDeets.innerHTML = "<p>The Bible Study Challenge is an app I built using .NET, C#, Unity, and JSON. It has two modes, one where you can read the Bible verse-by-verse and another where a random verse is shown and you must guess which verse, chapter, and book it is from. Check out the full app <a href=\"https://simmer.io/@charlesteets/the-bible-study-challenge\"><u>here</u></a>.</p>";
         }
         else if(projectName == 'importantfiletracker') {
            projDeets.innerHTML = "<p>The Important File Tracker is an app I built using .NET, C#, WPF, and JSON. Its main purpose is to bookmark important files on your computer for quick and easy access, allow you to make notes about them, and back them up. Check out the full app <a href=\"https://github.com/charlesteets/ImportantFileTracker\"><u>here</u></a> or check out the devlog <a href=\"https://charlesteetsdevlog.blogspot.com/search/label/ImportantFileTracker\"><u>here</u></a>.</p>";
         }
          else if(projectName == 'hostsfileeditor') {
            projDeets.innerHTML = "<p>The Hosts File Editor is a console app I built using .NET and C#. It gives a user interface for modifying the Hosts file's DNS forwarding on a Windows computer. Check out the full app <a href=\"https://github.com/charlesteets/HostsFileEditor\"><u>here</u></a> or check out the devlog <a href=\"https://charlesteetsdevlog.blogspot.com/search/label/HostsFileEditor\"><u>here</u></a>.</p>";
         }
          else if(projectName == 'kkppsite') {
            projDeets.innerHTML = "<p>The Knick Knack Prep & Pack homepage is a website I built using HTML, CSS, PHP, JavaScript, and MySQL. It shows off examples of my company's previous work and reviews from past customers. It also allows clients to make reservations online which send all the details to our email and saves them in a MySQL database. Check out the full site <a href=\"https://www.kkprepandpack.com\"><u>here</u></a>.</p>";
         }
           else if(projectName == 'tgssite') {
            projDeets.innerHTML = "<p>The Team Gang Squad homepage is a website I built for a music collective based in Charlotte, NC using HTML, CSS, and JavaScript. It contains many embedded widgets to stream music from the artists, biographies, and links to their social media, along with a section for merchandise. Check out the full site <a href=\"http://www.teamgangsquad.com\"><u>here</u></a>.</p>";
         }

        }
