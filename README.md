![logo](images/icon-128.png)
# Wikipedia Sticky Headers
_Make table headers sticky on Wikipedia_

I was looking at a long table on a [wikipedia article](https://en.wikipedia.org/wiki/List_of_solar_eclipses_in_the_21st_century) recently and realized I had to scroll alll the way up when I wondered _What does that column mean?_. It got me thinking: this definitely wasn't the first time I've run into this problem. But somebody else _must've_ run into it too! I knew there were a ton of browser extensions related to Wikipedia so I went looking; surely with all their fancy ways of "improving" the site they had this covered. But after a few fruitless result pages, I got that ol' feeling -- time to make my own!

When I went to go publish this baby for that somebody else who must've run into this, I learned I'd first have to pay $5 set up a Developer Account for the Chrome Web Store! I didn't really feel like doing that. Maybe I'll come around to it eventually. In the meantime, this repo contains everything you need to attach the extension locally to your own browser.

—Jason (March 2024)

## Set up

### Chrome
- Download this repo.
- Go to `chrome://extensions/` in your Chrome browser.
- You'll need to enable `Developer mode` in the top-right.
- Click `Load unpacked` and choose this folder.

And that ought to do it! You should now see the extension available in your Extensions and it should run only on Wikipedia pages.

### Firefox
_Note Manifest V3 extensions are only compatible with Firefox >=109 (Jan 2023)_

- Download this repo.
- Go to `about:debugging` in your Firefox browser. 
- Click "This Firefox".
- Click "Load Temporary Add-on" and select any file.

See [this page](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) on "Temporary installation" for more info

## Notes

There's a 1 second delay before it works on a page. See code comments for more details.
