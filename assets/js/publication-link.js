document.addEventListener("DOMContentLoaded", () => {
  const paperId = new URLSearchParams(window.location.search).get("paper");
  if (!paperId || !/^[a-zA-Z0-9_-]+$/.test(paperId)) return;

  const publication = document.getElementById(paperId);
  if (!publication) return;

  const publicationItem = publication.closest("li") || publication;
  publicationItem.classList.add("hj-publication-target");
  publication.scrollIntoView({ block: "center" });
  window.history.replaceState(null, "", `${window.location.pathname}#${paperId}`);
});
