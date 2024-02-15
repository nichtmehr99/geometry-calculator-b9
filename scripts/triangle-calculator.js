function calculateTriangleArea() {
  /* get base input and convert to number */
  const triangleBaseInput = document.getElementById("triangle-base");
  const baseInputText = triangleBaseInput.value;
  const base = parseFloat(baseInputText);

  /* get Height input and convert to number */
  const triangleHeightInput = document.getElementById("triangle-height");
  const heightInputText = triangleHeightInput.value;
  const height = parseFloat(heightInputText);
  /* this is my formula for triangle */
  const area = 0.5 * base * height
  
  const triangleAreaSpan = document.getElementById('area-text')
  triangleAreaSpan.innerText = area
  console.log('the triangle area is : ', area)
}
