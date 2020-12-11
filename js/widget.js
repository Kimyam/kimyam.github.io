const fixZeroFront = (num, len = 1) => {
  if (`${num}`.length >= len) {
    return num
  }
  return fixZeroFront(`0${num}`, len)
}

const getTimeString = (date, showSecond = false) => {
  const hour = date.getHours().toString()
  const minute = date.getMinutes().toString()
  const second = date.getSeconds().toString()
  let result = `${fixZeroFront(hour, 2)}:${fixZeroFront(minute, 2)}`
  if (showSecond) {
    result += `:${fixZeroFront(second, 2)}`
  }
  return result
}

const elementInPath = (event, el) => {
  return Array.isArray(event.path) && event.path.indexOf(el) >= 0
}

const selectorInPath = (event, selector) => {
  const $ = window.jQuery
  selector = $(selector)
  return Array.from(selector).some(el => elementInPath(event, el))
}

const delay = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

(function (window, document, $) {
  $.fn.clock = function() {
    let lastTime = ''
    const setTime = () => {
      const nowTime = getTimeString(new Date(), false)
      lastTime = this.text()
      if (nowTime !== lastTime) {
        this.text(nowTime)
      }
    }
    setTime()
    window.setInterval(setTime, 1000)
    return this
  }
  const SearchBoxOptions = {
    openInNewWindow: true,
    searchEngine: 'baidu'
  }

  $.fn.searchBox = function (options) {
    const option = {
      ...SearchBoxOptions,
      ...options,
    }
    return this.each(function () {
      const inputBox = $(this).find('.bs-search-input-box')
      const sugBox = $(this).find('.bs-search-suggestion-box')

      sugBox.hide()
      document.addEventListener('click', event => {
        if (selectorInPath(event, inputBox)) {
          sugBox.show()
        } else {
          setTimeout(() => {
            sugBox.hide()
          }, 0)
        }
      })

      let lastValue = ''
      let searchValue = ''
      let showSugs = false
      let sugData = []
      let delayTimer = null
      let inputFinished = true

      const $input = inputBox.find('input')

      $input.each(function () {
        this.addEventListener('compositionstart', function () {
          inputFinished = false
        })

        this.addEventListener('compositionend', function () {
          inputFinished = true
        })

        this.addEventListener('focus', function () {
          displaySugs()
        })
        this.addEventListener('input', function () {
          setTimeout(() => {
            if (inputFinished) {
              searchValue = $(this).val()
              if (delayTimer) {
                window.clearTimeout(delayTimer)
              }
              if (searchValue.length > 0) {
                delayTimer = setTimeout(() => {
                  // search.query({
                  //   word: searchValue,
                  //   from: option.searchEngine,
                  // }).then(response => {
                  //   const [res, err] = response
                  //   if (!err) {
                  //     if (res.data?.length > 0) {
                  //       sugData = res.data
                  //     } else {
                  //       sugData = []
                  //     }
                  //     displaySugs()
                  //   }
                  // })
                }, 300)
              } else {
                sugData = []
                sugBox.empty().hide()
                showSugs = false
              }
            }
          }, 0)
        })
      })

      const displaySugs = () => {
        const linkTarget = option.openInNewWindow ? '_blank' : '_top'
        showSugs = true
        sugBox.empty()
        if (sugData.length > 0 && showSugs) {
          sugData.forEach(sug => {
            sugBox.append(`
              <li data-search-box-value="${sug.id}">
                <a href="${sug.href || ''}" target="${linkTarget}">${sug.value}</a>
              </li>
            `)
          })
        }
        sugBox.show()
      }
    })
  }

  $.fn.bookmarkBox = function (bookmarks) {
    $(this).empty()
    this.each(function () {
      for (let i = 0; i < Math.min(bookmarks.length, 20); i++) {
        const b = bookmarks[i]
        const item = $(`
              <li class="bs-collection-item" data-bookmark-box-value="${b.id}">
                <a>
                  ${b.iconUrl ? `<i style="background-image: url('${b.icon}')"></i>` : `<i  class="iconfont iconfont-folder"></i>`}
                  <span>${b.title}</span>
                </a>
              </li>
            `)
        $(this).append(item)
      }
    })
  }
})(window, document, window.jQuery);
