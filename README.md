# Discourse Curated Home Plugin

Replaces Discourse home with a blog-style website with admin-selected topics.

 - Has sidebar plugin support (if installed).

![Example View from Create-Build-Execute.com with active sidebar view](https://raw.githubusercontent.com/ligthyear/discourse-curated-home/master/docs/blogindex.png)

## Installation

### Docker

To install in docker, add the following to your app.yml in the plugins section:

```
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/discourse/docker_manager.git
          - git clone https://github.com/ligthyear/discourse-curated-home.git curated-home
```

and rebuild docker via

```
cd /var/discourse
./launcher rebuild app
```

### Manual

From your main discourse do:

    cd plugins
    git clone https://github.com/ligthyear/discourse-curated-home.git curated-home   # clone the repo here
    cd ..


## Configuration:

### Make curated home the default home page:

In order to make "curated home" the default page to be loaded as the index/home page, add `curated` to the `top menu` site-setting and move it to the first position.

![top menu with curated as home](https://raw.githubusercontent.com/ligthyear/discourse-curated-home/master/docs/top_menu.png)

### Configure Sidebar

This plugin comes with only one site-setting `curated_home_show_sidebar` allowing you to configure whether the curated home should contain a sidebar. Click this ONLY if you have the sidebar plugin installed. Otherwise this will break your home page.


## Usage

As long as no topics have been marked as to be shown on the main-page, curated home is loading the `latest`-listings but shows them in the blog-style-view.

In order to "curate" the content of that page, navigate to the topic you want to have on the main page and open the admin menu. In it you'll now find a new "show on home"-toggle. Clicking it, the topic will be shown on home.

![Add to Homepage](https://raw.githubusercontent.com/ligthyear/discourse-curated-home/master/docs/add-to-homepage.png)

Through that trigger, the excerpt of the first post will be extracted and added to the topic, together with the first found image in the post. Both are what is shown on the main page.

To remove an entry from the home page, just go into the topics admin menu and click "remove from homepage".

![Remove from Homepage](https://raw.githubusercontent.com/ligthyear/discourse-curated-home/master/docs/remove-from-homepage.png)


## Changelog:

 * 2014-12-18:
   - first version to be published

## Known Issues:

 - (none)

## Authors:
Benjamin Kampmann <ben @ create-build-execute . com>

## License (BSD):
Copyright (c) 2014, Benjamin Kampmann
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
