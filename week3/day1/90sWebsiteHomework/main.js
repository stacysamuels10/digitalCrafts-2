function changeImgSystems() {
  var image = document.getElementById("systems");
  if (
    image.src ==
    "http://taco.com/assets/images/autogen/Systems___and_Networks_Ntaco2big.gif"
  ) {
    image.src =
      "http://taco.com/assets/images/autogen/Systems___and_Networks_Htaco2biga.gif";
  } else {
    image.src =
      "http://taco.com/assets/images/autogen/Systems___and_Networks_Ntaco2big.gif";
  }
}
