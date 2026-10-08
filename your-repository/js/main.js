document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".research-item");

  items.forEach((item) => {
    const trigger = item.querySelector(".research-trigger");
    const content = item.querySelector(".research-content");
    const icon = item.querySelector(".research-trigger__icon");

    if (!trigger || !content || !icon) {
      return;
    }

    /*
     * Set the initial visual state.
     */

    const initiallyExpanded =
      trigger.getAttribute("aria-expanded") === "true";

    content.hidden = !initiallyExpanded;
    icon.textContent = initiallyExpanded ? "−" : "+";


    /*
     * Open / close accordion.
     *
     * Only one research setting can remain open at a time.
     */

    trigger.addEventListener("click", () => {
      const isExpanded =
        trigger.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        closeAccordion(trigger, content, icon);
      } else {
        closeAllAccordions();
        openAccordion(trigger, content, icon);
      }
    });
  });


  /*
   * Open an accordion.
   */

  function openAccordion(trigger, content, icon) {
    trigger.setAttribute("aria-expanded", "true");
    content.hidden = false;
    icon.textContent = "−";
  }


  /*
   * Close an accordion.
   */

  function closeAccordion(trigger, content, icon) {
    trigger.setAttribute("aria-expanded", "false");
    content.hidden = true;
    icon.textContent = "+";
  }


  /*
   * Close all accordions.
   */

  function closeAllAccordions() {
    items.forEach((item) => {
      const trigger = item.querySelector(".research-trigger");
      const content = item.querySelector(".research-content");
      const icon = item.querySelector(".research-trigger__icon");

      if (!trigger || !content || !icon) {
        return;
      }

      closeAccordion(trigger, content, icon);
    });
  }
});
