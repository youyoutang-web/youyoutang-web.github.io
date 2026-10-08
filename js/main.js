/* =========================================================
   Research Accordion
   - Single-open behavior
   - Keyboard accessible
   - Escape closes the open item
   - aria-expanded state
   - Hidden panels
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".research-trigger");

  if (!triggers.length) {
    return;
  }

  function closeItem(trigger) {
    const panelId = trigger.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    const symbol = trigger.querySelector(".research-symbol");

    trigger.setAttribute("aria-expanded", "false");

    if (panel) {
      panel.hidden = true;
    }

    if (symbol) {
      symbol.textContent = "+";
    }
  }

  function openItem(trigger) {
    const panelId = trigger.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    const symbol = trigger.querySelector(".research-symbol");

    trigger.setAttribute("aria-expanded", "true");

    if (panel) {
      panel.hidden = false;
    }

    if (symbol) {
      symbol.textContent = "−";
    }
  }

  function toggleItem(trigger) {
    const isOpen = trigger.getAttribute("aria-expanded") === "true";

    triggers.forEach((otherTrigger) => {
      if (otherTrigger !== trigger) {
        closeItem(otherTrigger);
      }
    });

    if (isOpen) {
      closeItem(trigger);
    } else {
      openItem(trigger);
    }
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      toggleItem(trigger);
    });
  });

  /* ---------------------------------------------------------
     Escape closes the currently open item and returns focus
  --------------------------------------------------------- */
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    triggers.forEach((trigger) => {
      if (trigger.getAttribute("aria-expanded") === "true") {
        closeItem(trigger);
        trigger.focus();
      }
    });
  });
});
