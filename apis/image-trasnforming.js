const images = [
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80"
    ];

    const elA = document.getElementById("img0");
    const elB = document.getElementById("img1");
    let visible = 0;
    let nextIndex = 1;
    const intervalMs = 1000;

    function preload(list) {
      list.forEach(src => { const i = new Image(); i.src = src; });
    }

    preload(images);

    setInterval(() => {
      const showEl = visible === 0 ? elB : elA;
      const hideEl = visible === 0 ? elA : elB;
      showEl.src = images[nextIndex];
      showEl.classList.add("visible");
      hideEl.classList.remove("visible");
      visible = visible === 0 ? 1 : 0;
      nextIndex = (nextIndex + 1) % images.length;
    }, intervalMs);