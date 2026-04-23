function trackDownload(resourceName) {
  if (typeof gtag !== "undefined") {
    gtag("event", "download", {
      event_category: "resource",
      event_label: resourceName,
      value: 1,
    });
  }
}

function trackOutboundLink(linkUrl) {
  if (typeof gtag !== "undefined") {
    gtag("event", "click", {
      event_category: "outbound",
      event_label: linkUrl,
      transport_type: "beacon",
    });
  }
}

function initDownloadTracking() {
  const pdfLinks = document.querySelectorAll("a[href*=\\.pdf]");

  pdfLinks.forEach((link) => {
    const resourceName = link.textContent.trim() || link.href.split("/").pop();
    link.addEventListener(
      "click",
      (e) => {
        trackDownload(resourceName);
      },
      false,
    );
  });

  const outboundLinks = document.querySelectorAll('a[href^=\"http\"]:not([href*=\"dsestarchaser\"])');

  outboundLinks.forEach((link) => {
    link.addEventListener(
      "click",
      (e) => {
        trackOutboundLink(link.href);
      },
      false,
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("samples")) {
    initDownloadTracking();
  }
});
