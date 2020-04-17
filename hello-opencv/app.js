let imgElement = document.getElementById("imageSrc")
let inputElement = document.getElementById("fileInput")

// Show the input image
inputElement.addEventListener(
  "change",
  (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0])
  },
  false
)
imgElement.onload = function () {
  let mat = cv.imread(imgElement)
  cv.imshow("canvasOutput", mat)
  // Show the output image
  document.querySelectorAll(".inputoutput")[1].style.display = "inline-block"
  mat.delete()
}
