const navItems = document.querySelectorAll(".nav_item")
const active = document.getElementById("active")

navItems.forEach(item => {
    item.addEventListener("click", moveToSection)
})

window.addEventListener("scroll", getCurrentNavItem)

function getCurrentNavItem() {
    if (window.scrollY < 612) {
        setNewActive(0)
    } else if (window.scrollY >= 612 && window.scrollY < 2344) {
        setNewActive(1)
    } else if (window.scrollY >= 2344) {
        setNewActive(2)
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

function moveToSection(e) {
    e.preventDefault()
    const { href } = e.currentTarget
    const arr = href.split("/")
    const id = arr[arr.length - 1].substring(1)
    const section = document.getElementById(id)

    if (section) {
        section.scrollIntoView({ behavior: "smooth" })
    }
}