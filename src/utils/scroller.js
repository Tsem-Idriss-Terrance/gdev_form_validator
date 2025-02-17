const toTop = (behaviour = "") => {
  if (behaviour === "smooth") {
    window.scrollTo({top: 0, behavior: "smooth"});
  } else {
    window.scrollTo(0, 0);
  }
};

export {toTop};
