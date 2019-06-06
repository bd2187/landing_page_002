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
        var section_el = document
            .getElementById(section_name)
            .scrollIntoView({ behavior: "smooth" });

        App.toggle_nav();
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
