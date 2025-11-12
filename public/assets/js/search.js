      import {
        setTransport,
        setWisp,
        makeURL,
        getProxied,
      } from "../lithium.mjs";

      let protocol = location.protocol === "https:" ? "wss://" : "ws://";
      const host = location.host;
      setWisp(`${protocol}${host}/wisp/`);
      setTransport("epoxy");

      const input = document.getElementById("rogoisdabest");
      input.addEventListener("keyup", async (e) => {
        if (e.key === "Enter" || e.keyCode === 13) {
          const tabNumber = activeTabId.replace("tab", "");
          const iframe = document.getElementById("frame" + tabNumber);

          if (
            input.value.trim().includes(".") &&
            !input.value.trim().startsWith("http://") &&
            !input.value.trim().startsWith("https://")
          ) {
            input.value = "https://" + input.value;
          }
          console.log("Final URL:", input.value);

          const url = await getProxied(makeURL(input.value));
          iframe.src = url;
          input.value = getOriginalUrl(iframe.src);
          console.log("Loading URL in", iframe.id, ":", url);
          let currentTab = document.getElementById("tab" + tabNumber);
          let tabName = currentTab.querySelector(".tabName");
          console.log(".tabName" + tabNumber);
          tabName.textContent = getWebsiteName(input.value);
        }
      });
