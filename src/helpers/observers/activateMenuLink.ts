const menuLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
  "#header .menu .menu__item .menu__link"
);
const sections: NodeListOf<HTMLDivElement> =
  document.querySelectorAll(".section[id]");

function activateLink(id: string | null) {
  menuLinks.forEach((link) => {
    link.classList.remove("active");

    const activeLink = document.querySelector(`.menu__link[href*="${id}"]`)!;

    activeLink.classList.add("active");
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        activateLink(id);
      }
    });
  },
  {
    rootMargin: "0px 0px -90% 0px",
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

export {};
