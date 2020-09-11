const nextIndex = function(slide, offset) {
    let numberOfImgs = parseInt(slide.dataset.imgs, 10)
    let activeIndex = Number(slide.dataset.active)
    let i = (activeIndex + offset + numberOfImgs) % numberOfImgs
    return i
}

const bindEventSlide = function() {
    let selector = '.slide-button'
    bindAll(selector, 'click', function(event) {
        let self = event.target
        let slide = self.parentElement
        let offset = Number(self.dataset.offset)
        let index = nextIndex(slide, offset)
        showImageAtIndex(slide, index)
    })
}

const showImageAtIndex = function(slide, index) {
    let nextIndex = index
    slide.dataset.active = nextIndex
    let className = 'active'
    removeClassAll(className)
    let nextSelector = '#id-image-' + String(nextIndex)
    let img = e(nextSelector)
    img.classList.add(className)
    let indicatorClassName = 'white'
    removeClassAll(indicatorClassName)
    let indicatorSelector = '#id-indicator-' + String(nextIndex)
    let indicator = e(indicatorSelector)
    indicator.classList.add(indicatorClassName)
}

const bindEventIndicator = function() {
    let selector = '.slide-indi'
    bindAll(selector, 'mouseover', function(event) {
        let self = event.target
        let index = Number(self.dataset.index)
        let slide = self.closest('.slide')
        showImageAtIndex(slide, index)
    })
}

const bindEvents = function() {
    bindEventSlide()
    bindEventIndicator()
}

const playNextImage = function() {
    let slide = e('.slide')
    let index = nextIndex(slide, 1)
    showImageAtIndex(slide, index)
}

const autoPlay = function() {
    let interval = 2000
    setInterval(function() {
        playNextImage()
    }, interval)
}

const __main = function() {
    bindEvents()
    autoPlay()
}

__main()
