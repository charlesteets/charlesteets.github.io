<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400" rel="stylesheet" />
    <link href="fontawesome/css/all.min.css" rel="stylesheet" />
    <link href="css/templatemo-comparto.css" rel="stylesheet" />
    <title>Charles Teets Coding Developer's Log</title>

    </head>

<body>
    <!-- Back to top button -->
    <a id="button"><i class="fas fa-angle-up fa-2x"></i></a>
  
  <?php
$id = $_GET['project'];
echo '<script type="text/JavaScript">  
     displayProjectDetails(' + $id + ');</script>'; 
?>
  
  
    <div class="container-fluid">
        <div class="tm-site-header tm-mb-1">
            <div class="aboutmesection">
                <nav class="tm-nav" id="tm-nav">
                    <ul>
                        <li class="tm-nav-item current">
                            <a href="index.html#about" class="tm-nav-link">
                                <span>About</span>
                            </a>
                        </li>
                        <li class="tm-nav-item">
                            <a href="index.html#projects" class="tm-nav-link">
                                <span>Projects</span>
                            </a>
                        </li>
                        <li class="tm-nav-item">
                            <a href="index.html#devlog" class="tm-nav-link">
                                <span>Dev Log</span>
                            </a>
                        </li>
                        <li class="tm-nav-item">
                            <a href="index.html#contact" class="tm-nav-link">
                                <span class="tm-nav-text">Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        
        <section class="tm-bg-color-1 tm-mb-1 tm-gallery-section" id="projects">
            <div class="tm-gallery-header">
                <h2 class="tm-mb-1 tm-gallery-filter">Projects</h2>
            </div>
            <div id="projectDetails" class="tm-gallery-header"></div>
            <div class="tm-gallery-outer">
                <div class="tm-gallery" id="tm-gallery">
                    <div class="tm-gallery-item nature">
                        <figure class="effect-bubba">
                            <img src="css/biblestudysplash.png" alt="Bible Quiz" class="tm-img-responsive" />
                            <figcaption>
                                <h2>Bible Study Challenge</h2>
                                <p>A game made with C#, Unity, and JSON.</p>
                                <a href="javascript:displayProjectDetails('bible')">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="tm-gallery-item animals">
                        <figure class="effect-bubba">
                            <img src="css/ift.png" alt="Important File Tracker" class="tm-img-responsive" />
                            <figcaption>
                                <h2>Important File Tracker</h2>
                                <p>A Windows application made with C#, WPF, and JSON.</p>
                                <a href="javascript:displayProjectDetails('importantfiletracker')">View more</a>
                            </figcaption>
                        </figure>
                    </div>
                  
                </div>
            </div>
        </section> <!-- Gallery -->
        <section id="contact" class="aboutmesection tm-bg-color-1">
            <h2 class="tm-contact-title">Contact</h2>
            
                <div style="padding: 15px;">
                        <p>I would love the opportunity to learn more about your company and whether we would be a good fit for each other.
                        <br>Please feel free to give me a call or email at your convenience.</p>
                        <p class="tm-mb-0"><a href="tel:8042956812">
                            
                            <i class="fas fa-phone tm-social-icon">
                                                                                 
                            <span style="
  font-family: 'Open Sans', Arial, sans-serif;">
                                
                                &nbsp; 804-295-6812
                                
                            </span>
                            
                            </i></a></p>
                    <br>
                        <p><a href="mailto:joeyteets@gmail.com"><i class="fas fa-envelope tm-social-icon">
                            
                            <span style="
  font-family: 'Open Sans', Arial, sans-serif;">
                                
                                
                            &nbsp; joeyteets@gmail.com
                                
                            </span></i></a></p>
            </div>
        </section>
    </div> <!-- .container -->
    <script src="js/jquery.min.js"></script> <!-- https://jquery.com/download/ -->
    <script src="js/imagesloaded.pkgd.min.js"></script> <!-- https://imagesloaded.desandro.com/ -->
    <script src="js/isotope.pkgd.min.js"></script> <!-- https://isotope.metafizzy.co/ -->
    <script src="js/jquery.singlePageNav.min.js"></script> <!-- https://github.com/ChrisWojcik/single-page-nav -->
    <script>

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
         if(projectName == 'bible') {
            document.getElementById("projectDetails").innerHTML = "The Bible Study Challenge is an app I built using .NET, C#, Unity, and JSON. It has two modes, one where you can read the Bible verse-by-verse and another where a random verse is shown and you must guess which verse, chapter, and book it is from. Check out the full app <a href=\"https://simmer.io/@charlesteets/the-bible-study-challenge\">here</a> or check out the devlog <a href=\"devlog.html?project=bible\">here</a>.";
         }
         else if(projectName == 'importantfiletracker') {
            document.getElementById("projectDetails").innerHTML = "The Important File Tracker is an app I built using .NET, C#, WPF, and JSON. Its main purpose is to bookmark important files on your computer for quick and easy access, allow you to make notes about them, and back them up. Check out the full app <a href=\"https://github.com/charlesteets/ImportantFileTracker\">here</a> or check out the devlog <a href=\"devlog.html?project=ift\">here</a>.";
         }
        }
    </script>
</body>
</html>