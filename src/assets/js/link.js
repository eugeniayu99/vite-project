export function link() {
  const anchors = document.querySelectorAll("a[href^='#']:not([href='#'])");

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = e.currentTarget.getAttribute("href");

      // 잘못된 href 방지
      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}