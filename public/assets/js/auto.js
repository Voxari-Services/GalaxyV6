const intervalId = setInterval(() => {
  const savedTitle = localStorage.getItem("pageTitle");
  const savedFavicon = localStorage.getItem("pageFavicon");
  if (savedTitle || savedFavicon) {
    if (savedTitle) document.title = savedTitle;
    if (savedFavicon) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = savedFavicon;
    }
  }
  backgroundURL = localStorage.getItem("backgroundURL");
  document.documentElement.style.setProperty(
    "--backgroundURL",
    `url(${backgroundURL})`
  );
  let stored = localStorage.getItem("glassToggleStore");

  if (stored === "true") {
    document.documentElement.style.setProperty(
      "--glassmorphismBG",
      "rgba(0,0,0,1)"
    );
  } else {
    document.documentElement.style.removeProperty("--glassmorphismBG");
  }
}, 100);

setTimeout(() => clearInterval(intervalId), 10000000000000);
