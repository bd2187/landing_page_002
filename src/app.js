const App = {
    sections: ["aboutSection", "experienceSection", "skillsSection"],

    /**
     *  Adds event listeners on page load
     *  @param
     *  @return
     */
    init: function() {
        var hamburger_menu = document.getElementsByClassName(
            "hamburger-menu"
        )[0];

        if (hamburger_menu) {
            hamburger_menu.addEventListener("click", this.toggle_nav);
        }

        var nav_links = document.querySelectorAll(".nav-link a");
        nav_links.forEach(anchor => {
            anchor.addEventListener("click", this.scroll_section_into_view);
        });

        window.addEventListener(
            "scroll",
            this.highlight_nav_section.bind(this)
        );
    },

    /**
     *  Opens/closes the navigation menu by toggling the
     *  .header__nav--open class on the header__nav element
     *  @param
     *  @return
     */
    toggle_nav: function toggle_nav() {
        var header_nav = document.getElementsByClassName("header__nav")[0];
        header_nav.classList.toggle("header__nav--open");
    },

    /**
     *  Scrolls to particular section on webpage
     *  when user clicks on a nav link
     *  @param Object e
     *  @return
     */
    scroll_section_into_view: function scroll_section_into_view(e) {
        e.preventDefault();

        var section_name = this.getAttribute("href").replace(/#/, "");
        var target_el = document.getElementById(section_name);

        App.update_active_nav_link(this);

        if (target_el) {
            var target_pos = target_el.offsetTop;
            var start_pos = window.pageYOffset;
            var distance = target_pos - start_pos;
            var duration = 800;
            var start = null;

            var animate = function animate(timestamp) {
                if (!start) start = timestamp;
                var progress = timestamp - start;
                window.scrollTo(
                    0,
                    ease_in_out(progress, start_pos, distance, duration)
                );
                if (progress < duration) window.requestAnimationFrame(animate);
            };

            var ease_in_out = function ease_in_out(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t * t + b;
                t -= 2;
                return (c / 2) * (t * t * t + 2) + b;
            };

            window.requestAnimationFrame(animate);
            App.toggle_nav();
        }
    },

    /**
     *  Highlights nav link
     *  @param Object active_element
     *  @return
     */
    update_active_nav_link: function(active_element) {
        var nav_links = [...document.querySelectorAll(".nav-link a")];

        nav_links.forEach(function(link) {
            link.classList.remove("nav-link__active");
        });

        active_element.classList.add("nav-link__active");
    },

    highlight_nav_section: function highlight_nav_section() {
        // for (let i = 0; i < this.sections.length; i++) {
        //     let section = this.sections[i];
        //     let section_el = document.getElementById(section);
        //     if (section_el) {
        //         let rect = section_el.getBoundingClientRect();
        //         let top = rect.top;
        //         let bottom = rect.bottom;
        //         if (section === "experienceSection" && parseInt(top) === 0)
        //             console.warn(typeof top, top);
        //         // if (top == 0) {
        //         //     // highlight section and break
        //         //     var foo = document.querySelectorAll(
        //         //         `a[href='#${section}']`
        //         //     )[0];
        //         //     console.log(foo);
        //         //     break;
        //         // }
        //     }
        // }
        // // var about_section = document.getElementById("aboutSection");
        // // var rect = about_section.getBoundingClientRect();
        // // var top = rect.top;
        // // var bottom = rect.bottom;
        // // var isVisible = top >= 0;
        // // console.warn(isVisible);
        // // var isVisible = top >= 0 && bottom <= window.innerHeight;
        // // Partially visible elements return true:
        // // isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        // // console.warn(isVisible);
        // // return isVisible;
    }
};

App.init();
