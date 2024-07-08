window.onload = () => {
    const genreId = new URL(window.location.href).searchParams.get("genre");
    console.log(genreId)
    document
      .getElementById(`${genreId.toLowerCase()}-movies`)
      .scrollIntoView({ behavior: "smooth" });
}