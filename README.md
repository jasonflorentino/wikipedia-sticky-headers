# Wikipedia Sticky Headers
_Make table headers sticky on Wikipedia_

I was looking at a long table on in [wikipedia article](https://en.wikipedia.org/wiki/List_of_solar_eclipses_in_the_21st_century) recently and realized I had to scroll all the way up to the top when I wondered "What does that column mean?". It got me thinking that this definitely wasn't the first time I ran into this problem. I knew there were a ton of browser extensions related to Wikipedia so I went looking. Surely with all their fancy ways of "improving" the site they had this covered. After a little bit of looking, I got that ol' feeling -- time to make my own!

When I went to go publish this baby for others to enjoy, I learned I'd have to pay $5 set up a Developer Account for the Chrome Web Store first! I didn't really feel like doing that. Maybe I'll come around to it eventually. In the meantime, this repo contains everything you need to attach the extension locally to your own browser.

—Jason (March 2024)

## Set up

- Download this repo.
- Go to `chrome://extensions/` in your Chrome browser.
- You'll need to enable `Developer mode` in the top-right.
- Click `Load unpacked` and choose this folder.

And that ought to do it! You should now see the extension available in your Extensions and it should run only on Wikipedia pages.

## Notes

There's a 1 second delay before it works on a page. See code comments for more details.
