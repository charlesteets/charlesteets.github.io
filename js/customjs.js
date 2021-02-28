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
            document.getElementById("projectDetails").innerHTML = "<p>The Bible Study Challenge is an app I built using .NET, C#, Unity, and JSON. It has two modes, one where you can read the Bible verse-by-verse and another where a random verse is shown and you must guess which verse, chapter, and book it is from. Check out the full app <a href=\"https://simmer.io/@charlesteets/the-bible-study-challenge\">here</a> or check out the devlog <a href=\"https://charlesteetsdevlog.blogspot.com/search/label/BibleStudy\">here</a>.</p>";
         }
         else if(projectName == 'importantfiletracker') {
            document.getElementById("projectDetails").innerHTML = "<p>The Important File Tracker is an app I built using .NET, C#, WPF, and JSON. Its main purpose is to bookmark important files on your computer for quick and easy access, allow you to make notes about them, and back them up. Check out the full app <a href=\"https://github.com/charlesteets/ImportantFileTracker\">here</a> or check out the devlog <a href=\"https://charlesteetsdevlog.blogspot.com/search/label/ImportantFileTracker\">here</a>.</p>";
         }
        }
