const BookmarkList = [
  {
    dateAdded: 1607360987357,
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACb0lEQVQ4T4WT20uUQRjGf/MdVvdsuVZEggXdGIqZQYI3XhR1EwS5RHUTghLUv1Bbf0AXSYSClJ0IDYKupC68iQwyE0UpghKMKFtP+7m77n6HifnW3eoifWBgZt55n3nnfZ4RlNE/YRIM9WBvTNLdOk7XsM5I0vXD5fngZDtmdSv53AC9bbYKCVJSgxtQf7aJaHQKu5hmI3uG7pbXFXI1GZzqoDr8HDOQwLJaWHg2A9cRlUP3PtQgqu4SjJyjkFvGcbuQ+js/LtyjGPoIVaGd5NefIguXuXR4tVTBrTdBEjUp0M4jZRRBHN0EzwXXyfkEuhFC08G1QbKGEBZ4T0ivpgRDs7eJJa5iraiknLoO8BAIpDRKFQgHiQQ0hBpamOgOyCz3CYbmsuimhm2fxtPe+gkbrqRaF0RdlQSWLip7aq15xzDNF3i2K3j4SeI4azQsJujsdP5p3P8WY2MG87vSGEZcEXh4roWj7SM6nSPf9BIpJYXcKXqOlAgH3hsEgqNoGgRnTmA1hzC8b2h6VPDgo0R6FmtmHVFDEHDySAmFxRjdHZZPMDwboWhaCAFFI4jlSOL2LzQ9UibIIOy9fGnOs3/uFVJI5n+eJLX5pNSYQcPuUYQUfG08zoHpINL8Xqqg/ATdrOfiwQzDyoGw6cKyT6S/r5BMujz6HMO1F8oEpSaGG2tJ+hJuD0WWO7SErpr4t4xhOc6PgEbYlRUJy3RKyqwu2FP0yIr2koyOI7g/20dN3RXfSMp5QnVqCyiFlDOVkVbTd0pWro1fQxgXkF4M5NYECInQMkjvMUsrN/8c7p8IYURKjdoOzrpLb5v/T34DCugRJfb/n3sAAAAASUVORK5CYII=",
    iconUrl: "chrome://favicon/size/16@1x/https://www.bilibili.com/",
    id: "683",
    index: 0,
    parentId: "624",
    title: "哔哩哔哩",
    url: "https://www.bilibili.com/",
  },
  {
    dateAdded: 1589465847146,
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABYUlEQVQ4T2PkantxhIWJ2ZqBDPDn39+jjHwdr//D9DpLsjDsff6HJKPgBqjzMjGcyhJiiF/xkWHDw99EGwI3oMmSkyHXhouBkRGhl5GRkUGi+w3Di1IRDAP5O9+AxeAG3M0WYmjY9YVh7b1fDM9LRBhgCjiZGMAGiHVDNLAxMTA8KUbIo3jhxfd/DN/+MjC8KRNhEOl6w/D7PwMDzACYgexMDAyvSrEYgOzGj+WYLoAZwMoIsQDDC6cSBBjUxVkw/AoLA8GuNwz//jMwMDEyMLzHZgAhFxBtQIE+O0OjBy9DzbbPDJMv/4SHASxMQBYhexElIcEk1138zhCkz8lQtOkzw7KbP8GxQJQBgQqsDHND+RiEut8yOEmwMKyPF4CnA1CggWyGAYxAhNm+4NR3hvz9X8HqIpTZGFbc/YURcMjhBffCKj9ehnVXf4I1YAOg0AfFAjrACAOiMwFUISOl2RkApT+7ia5vP5AAAAAASUVORK5CYII=",
    iconUrl: "chrome://favicon/size/16@1x/https://www.zhihu.com/",
    id: "393",
    index: 1,
    parentId: "624",
    title: "知乎",
    url: "https://www.zhihu.com/",
  },
  {
    dateAdded: 1607361069174,
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACrklEQVQ4T32TT2hcVRjFf9+8vGQmM1BC/i4CmjaWaqFoqMYkBkRIlRYLlhIxWFwJlpR2IUgx2IULJSoustMk2E0VIlGsTdqaIqgtuEm6k7gxRhKSRZrUTJKZTN7cI/e9DLrywX33u3/Ovee75zsmqQ4YAfqBKvwnpTATksXjSmzmkPxMhDTBUv6iqVS6RhgOEEVlzDzAiLsEGv9TKQ+LYw/3LQC20DcWKTnSr6b2F/9F7h8To5xwDoq7RmnXsbWtcrEYmPvue2e7JVTYMSsUpHzebG0dypHizdvbsLaWxIWCKJWIW00NOCfTkWNJXtGeUdwV6Rrj8SNiadkoFqG6Bl45DRsbojZrBFUimzFm7oi/NzF19QoHujSINTWi6zewwfNw5X2Ym4PXB+DKEPz8Cyz+JV7sM/8mnHnV2NnB9ExPwuClE0ZLi5i7b7zzNlwegj/+hKYGeO9dOHQQfpuHni7x4bDx409xOqbO5xRT9bcefgxu3ob+s/DmW542DF2GtjZYWQEn4r2H2+HGNEzdwtTRKVqa4egTkMnAo4/Ay6dg8lt4sJ7c7F+/thY6noK796CxAaZvwe0ZTEefdLzwPPR0G7msOHXSmLrptYcfZmBzE070JXq2t8PsrHAyxq+KlGF6tlexVI0N4tOPjXu/is9Hja+/go8+gWwOzg3A2BfotX7sszE0/AF24RIsLWN6utvFFN84l8g4Om4EgTje4XvIb8HDh7C6KpqbjYUFUV9vvgbY9ioc7yoThka0B5aCpiZIVxuRS2oimyVO7cABUxhi9fVSdWiWy0mZDBbN/64gnS6TrTXS6RRhqDj/IPB6VzwR13+lxN1/Sz4vTebgTHnfDxUbmfeMc5Vhgk9s410qqqoC9va+NC0u1tHaOoJZYmfvxP+zc0IkAiaAi/8AFIk7xO3e3WIAAAAASUVORK5CYII=",
    iconUrl: "chrome://favicon/size/16@1x/https://www.toutiao.com/",
    id: "688",
    index: 2,
    parentId: "624",
    title: "今日头条",
    url: "https://www.toutiao.com/",
  },
  {
    dateAdded: 1607361021083,
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcUlEQVQ4T2O0mOj6/8SzMwzkAAspEwZGhnLB/+RohukBG+Ch7MSwPXUNSeZ4zg5h2HF3H8QFSrxyDDFG4SQZsOTcSoZ7nx8hvCDwn5MkA0CKPzB+RxhgLWnGcCR/B8P///8ZGBkZGbAFDCPUCpuJHgxHn58C8+CBCDPg7tv7DEWbyhh+//zKwMDCzgA26f9vBoZ//xgmh05lUBZWZIAZAHI1hgFPPr9g0GkyxuqdQyV7GfTENfAbAHJB8II4rAasTVhE2AXEhCRWL4D8Y65sybAjbQ3D3///GIy6bBk4WCEx8+P3d4aL5UcZvv3+wRA0P4bh5N3j4BhACQNYNJ4rP8YgJyDDIFwuh+KYD91PGe6/e8ig1GUI1oiSEpFVdns0MZQ45DBkripmWH56BVgq0jSCYXpYL0PPgSkMpTvqwGIwQ8CxMNmnkyHHJpUY78PVTDkymyF3SzkkGsN1Ahn8Nb1IMmDj9W0MK6+sZ2CkNDsDAKyHqTWN8w9JAAAAAElFTkSuQmCC",
    iconUrl: "chrome://favicon/size/16@1x/https://www.douban.com/",
    id: "685",
    index: 3,
    parentId: "624",
    title: "豆瓣",
    url: "https://www.douban.com/",
  },
  {
    dateAdded: 1607360969675,
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACm0lEQVQ4T6WTa0jTURjGn3eXZs4JzivlpuYfpxIlWo3cgvwwheUq6UL4zST64ucmkaESJWQ3CIkkSSKJEMWZCxHCBRkRRJHpko3NDAm2stzmZZf/GxsYigVCBw7nfHl+z+F9zkP4z0Vb1X+7g91yoFIC+N4vYKyqFcG4dsuAQBduiSJMRNjBjBgBDalNeLYJYBcExR6WnWHCfrA4onHPPI87cSskgUxUyoDZGHCWgeZoBPoNAG+hrkoG6hHBeUREzOzWuj8LcYCjYbumrGxlCFLeRYRaEKwcw48/gDmhpBHgewBk6+byCaDbANdAwmmkDt9POT6bL00R94LwioHzCcCsoDslAT1h5rhx3Dlx2XSCPyjrvjbLtCEdEZQMHKF3BQV5mVLFRwAqSlEi2VILhV4PaU42eHkZ4akpLPUPIurxxL1eJqdHLelvXIu+m9gnlyOV5gRdNzMakwyVpL5xnQMyKfX19bHP5yOLxcLl5eXEkQgvXLxEocGh+Mu+xxjH8t3OiUSMc0KxX5qTk549OgJ/MAi9Xg+v1wuJRJLY4+PjMBgMEIMhzB84CEQiiZlqXM7Da4DV5BN1cnXHVers7GSbzUb19fU8PDxMdrudW1paqK2tjRGL0XyFnnlpiRjimNY1U50AfBGKbdtKSyxZg/142NuL6elpmM1mmEwmiKIIh8MBo9GI4KPH+Nl+Ja4RGTBrXc7RBGAit2hnroJeKE+fLFJZL/Dljms0MDDAarWarFYrH62uoeCDHl6820Uci4UJ1KRxO7vXok7EOJShU1WkSaxQqc4lHTJmyfK0gCgi6vFiZeI1OBBYBcgW4HB7qds9ub4/G37iU0CaoS0sU0upBExKkTkaAXsmQ7/eNvr9gb8Vb8tl+ldrfwM2QRpY1M9hcgAAAABJRU5ErkJggg==",
    iconUrl: "chrome://favicon/size/16@1x/https://weibo.com/",
    id: "682",
    index: 4,
    parentId: "624",
    title: "微博",
    url: "https://weibo.com/",
  },
  {
    dateAdded: 1607361030243,
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADHElEQVQ4T12TS2xUZRTHf+feO4/YGWynneIgRUxDaNLEooKJwk58hIaEFksQdaE7W9wgexZQYwKpLgzRkIIxaWPUDaGK0VQpUR5BaKFq20hbm2JNHzNtrS0zvfd+x3wXXeBJvpzkPP45yff/iTvJAcelgyJZDAiIci9zf6jeq2jUSTJrQg6JN05BhArHd4xdMmIwCqqIzTYc2xCifRfH9tTEjKMwL94IKorxra6x05DAk5jj4YoTCYTG4BNQ0kD/m4k5WHlH4kOEvkF2pp7l9fI3yJCRtJvWtLNG4sSia30NWNZlXTSLUtC8dv3VRc/Sl8TsVc4gWiZlXHv0Jy7M99GzcE7/1iWZDCbx8VEUF5eMk7FPd61plH3VLTw59gQz4RzCTUyNt46Taz/k4J+tHMoeltpYLWeWOlkI5qn21pJyUlxavsTmxGZWghXdm3qJEwvHGfFvI3IdzbnVvF1xmJFghNbsW/TMnWNLeQPjxd+p9DLMrM5QX1bPQ16O9qmjvLvhOHvHmrh+tx/hGroxVsNHNaf4rPAp+ytf4fz8V2xLb2O0NMojiQ0cmTjC6NZxegu9tNxu5ufHhmj87UUGSoMIV9FNsVp6677jnTvH2JNp5nzha3ZUbGd4eZi6sjpaftnH0OO/cnruDB0zJ/hjyxQvDD/PzaIV+BHdlKjlQn0f7RNHeXN9G98UvqXKqyQf5GlIN7DzxnMMPNVP58xpTk5/wMLWRXYMbmegeAvhB8zDXo731r/PwbE2mlLNsquqkTtmkrOzZ1kXz/Fx/hPaqlq5vHKZG8V+7dx4ivbpY4z5E4hcRNOa4krD1ehvu6e6NPQDyXgV3PIHCdTnwWQ5buCSi+d0d3a37M+8zDMDTzNtZhHvImEYIk0P7OHV6tfIJqslnUgrqpLyUogIvgkITaD5UkHypbx+Mfs53UvdeJ410veoCCb0EUrgipAkKUkniUcssrKvqxS1yCqrGqiBOLjxyGOOOH0UgAovcIw6SIiJTK7h/2h0UUuGhcmOGO9fmOjjgOPRIXfJRpuC2CwWLougLVn8IggjmO/D+R/Im2d73vbKugAAAABJRU5ErkJggg==",
    iconUrl: "chrome://favicon/size/16@1x/https://www.iqiyi.com/",
    id: "686",
    index: 5,
    parentId: "624",
    title: "爱奇艺",
    url: "https://www.iqiyi.com/",
  }
];


(function (window, document, $) {
  window.onload = function() {
    $('[data-clock]').clock()
    $('[data-search-box]').searchBox()
    $('[data-bookmark-box]').bookmarkBox(BookmarkList)
    if ('serviceWorker' in window.navigator) {
      window.navigator.serviceWorker.register('service-worker.js').catch(err => {
        console.log('registration error ', err)
      })
    }
  }
})(window, document, window.jQuery);

