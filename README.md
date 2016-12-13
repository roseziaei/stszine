# stszine
Suviving The System Zine

# stszine
Suviving The System Zine

# A guide to adding your material
[Part 1: github](#1-github)
[Part 2: adding your content](#2-your-content)
[Part 3: creating a pull request](#3-pulling-into-master)

### 1. Github

Github provides a system for multiple people to work on the same project at the same time. It does this through something called 'version control'. If you're interested you can read more about it but basically you can copy a repository (the place a project is stored) to your own computer and work on it yourself, and then publish the changes to Github when you are finished.

Everyone else can work on the project at the same time and make their own changes. It's a bit more complicated than this but the zine is not a very complicated project so it's unlikely anyone will have any problems.

You can use github from either the desktop app or with Git in the command line. If you are a beginner I would recommend the desktop app. You can find a [nice tutorial by Travis Neilsen](https://www.youtube.com/watch?v=BKr8lbx3uFY) on how to use Github desktop if you want.

Here is a step by step guide of what you need to do

1. Make an account on github.com
2. navigate to the [repository where the zine is](https://github.com/voicesthatshake/stszine).
3. In the top right hand corner of the window, underneath where your profile icon is, you will see a button labeled 'fork'. Click the button.
4. 'Fork'ing the repository will create a carbon copy of it in your own github profile.
5. Navigate to the copy of the repository in your github profile. The URL should be something like http://github.com/*your-username*/stszine
6. When you are in your forked copy of the repository click the *clone or download* button (in green) on the right of the page.
7. You can either download the folder or open it in the github desktop app. It's up to you how you want to do that,
8. Download a text editor. I use [atom](https://atom.io/). It's free and allows you to edit html, css files and more.
9. Move on to the next step to put your content in the zine...

### 2. Your Content

10. Your content may be text, a photo, video, or something else entirely.
11. If your content is a video (hosted on youtube or vimeo) you should be able to embed it with the site's sharing options.
12. If it's a poem / piece of text you can write it directly in the html.
13. If it's an image you will need to put a copy of the image in the     `img` folder in the repository. If you are taking a photo of some artwork you've made try to take the photo in natural light with flash off - on a table/chair near a window on a slightly cloudy day has always worked well for me. If you have problems getting the image to rotate correctly message me on facebook or tweet me @eleanombre and I can help you out.
14. To put it in the zine open up the `index.html` file in a text-editor (you will probably need to right click and open it).
15. The 'pages' of the zine are actually `divs` in the `body` of the html document. The cover, contents and back cover are images with names that match what they are. Most zine pages which are 'related' are next to each other and called similar names (eg. group poem 1, group poem 2)
16. I would suggest putting your content before the last page, to do so you should create a new `div` element like this:
17. `<div class="item">`
18. On the next line you should insert your content, if it's text you can just write it in directly. If it's a video you can copy the 'embed' link from the site it's hosted on. If it's an image you will need to create an `img` tag with an `src` property which is where your image file is located (eg. `img/flowers.png` would be a flowers.png file in the 'img' folder)
19. close your div with a closing tag `</div>`
20. Save your file and open it in an internet browser. You can see here if anything is wrong - eg. is your image/text/video showing up? If there are problems now is the time to fix them
21. If everything looks how you expect it to continue to the next section...

### 3. Pulling into Master
22. If you are using the Github desktop app, add a short message with details of what you did eg. `added new zine page` or `changed font styling` (this just makes it easier for people to see what changes you made when checking the code) and `commit` to master
23. You can then click the 'pull request' button. The main 'voices that shake' github can then pull the changes you made into their original repository and they will be displayed on the site!
