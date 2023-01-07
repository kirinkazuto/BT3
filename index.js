document.addEventListener('DOMContentLoaded', function () {
  const a = document.getElementById("a")
  const b = document.getElementById("b")
  const kq = document.getElementById("kq")

  document.getElementById("giai").addEventListener("click", () => {
    if (!a.value || isNaN(a.value)) {
      alert("Hệ số A phải là số")
    }
    if (!b.value || isNaN(b.value)) {
      alert("Hệ số B phải là số")
    } 
    const kqpt = -Number(b.value) / Number(a.value)
    kq.value = `Nhiệm x = ${kqpt}`
  })
})