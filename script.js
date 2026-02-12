document.querySelector(".menu-btn").onclick = () => {
  const nav = document.querySelector(".nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "70px";
  nav.style.right = "20px";
  nav.style.background = "#fff";
  nav.style.padding = "20px";
  nav.style.borderRadius = "10px";
};
