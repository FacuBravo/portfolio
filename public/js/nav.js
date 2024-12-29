const navItems = document.querySelectorAll(".nav_item")
const active = document.getElementById("active")

getCurrentNavItem()
window.addEventListener("scroll", getCurrentNavItem)

function getCurrentNavItem() {
    if (window.scrollY < 870) {
        setNewActive(0)
    } else if (window.scrollY >= 870) {
        setNewActive(1)
    }
}

function setNewActive(nItem) {
    const { width } = navItems[nItem].getBoundingClientRect()
    active.style.width = `${width}px`
    let nLeft = 12

    for (let i = nItem - 1; i >= 0; i--) {
        const { width } = navItems[i].getBoundingClientRect()
        nLeft += width + 12
    }

    active.style.left = `${nLeft}px`
}