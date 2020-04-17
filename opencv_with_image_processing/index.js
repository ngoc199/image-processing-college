function convertColor() {
  let src = cv.imread("canvas_input")
  let dst = new cv.Mat()

  // Convert Color
  cv.cvtColor(src, dst, cv.COLOR_RGB2GRAY, 0)
  cv.imshow("canvas_output_convert_color", dst)

  // Delete output canvas value
  dst.delete()
}

function rotateImage() {
  let src = cv.imread("canvas_input")
  let dst = new cv.Mat()

  let dsize = new cv.Size(src.rows, src.cols)
  let center = new cv.Point(src.cols / 2, src.rows / 2)

  let M = cv.getRotationMatrix2D(center, -45, 1)
  cv.warpAffine(
    src,
    dst,
    M,
    dsize,
    cv.INTER_LINEAR,
    cv.BORDER_CONSTANT,
    new cv.Scalar()
  )
  cv.imshow("canvas_output_rotate_image", dst)
  dst.delete()
}

function imageThresholding() {
  let src = cv.imread("canvas_input")
  let dst = new cv.Mat()

  cv.threshold(src, dst, 177, 200, cv.THRESH_BINARY)
  cv.imshow("canvas_output_image_thresholding", dst)

  dst.delete()
}

function bilateralFiltering() {
  let src = cv.imread("canvas_input")
  let dst = new cv.Mat()

  cv.cvtColor(src, src, cv.COLOR_RGBA2RGB, 0)
  cv.bilateralFilter(src, dst, 9, 75, 75, cv.BORDER_DEFAULT)

  cv.imshow("canvas_output_bilateral_filter", dst)

  dst.delete()
}

function erosion() {
  let src = cv.imread("canvas_input")
  let dst = new cv.Mat()

  // Convert Image to Binary Image
  cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0)
  cv.threshold(src, src, 150, 255, cv.THRESH_BINARY)

  // Erode the Binary Image
  let M = cv.Mat.ones(5, 5, cv.CV_8U)
  let anchor = new cv.Point(-1, -1)
  cv.erode(
    src,
    dst,
    M,
    anchor,
    1,
    cv.BORDER_CONSTANT,
    cv.morphologyDefaultBorderValue()
  )
  cv.imshow("canvas_input_erosion", src)
  cv.imshow("canvas_output_erosion", dst)

  dst.delete()
  M.delete()
}

function laplacian() {
  let src = cv.imread("canvas_input")
  let dst = new cv.Mat()
  cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0)
  cv.Laplacian(src, dst, cv.CV_8U, 1, 1, 0, cv.BORDER_DEFAULT)
  cv.imshow("canvas_output_laplacian", dst)
  dst.delete()
}

function canny() {
  let src = cv.imread("canvas_input")
  let dst = new cv.Mat()
  cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0)
  cv.Canny(src, dst, 50, 100, 3, false)
  cv.imshow("canvas_output_canny", dst)
  dst.delete()
}

function pyrDown() {
  let src = cv.imread("canvas_input")
  let dst = new cv.Mat()
  cv.pyrDown(src, dst, new cv.Size(0, 0), cv.BORDER_DEFAULT)
  cv.imshow("canvas_output_pyrdown", dst)
  dst.delete()
}
