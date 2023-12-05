export async function deleteCityes() {
  document
    .querySelector(".clearStorage")
    .addEventListener("click", async () => {
      localStorage.clear();
      document.querySelector("#weather").remove();
      location.reload();
    });
}
