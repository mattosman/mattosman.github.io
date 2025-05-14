// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-i-class-fas-fa-house-i",
    title: "<i class="fas fa-house"></i>",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "(under construction)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "dropdown-about",
              title: "about",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/about_c3po/";
              },
            },{id: "dropdown-team",
              title: "team",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/team/";
              },
            },{id: "dropdown-join",
              title: "join",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/join/";
              },
            },{id: "dropdown-photos",
              title: "photos",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/photos/";
              },
            },{id: "dropdown-vita",
              title: "vita",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/assets/pdf/Osman_vita.pdf";
              },
            },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-paper-out-led-by-luke-trusel-along-with-sarah-das-myself-and-coauthors-in-nature-our-takeaway-greenland-melting-and-runoff-is-currently-off-the-charts",
          title: 'New paper out led by Luke Trusel, along with Sarah Das, myself and...',
          description: "",
          section: "News",},{id: "news-interested-in-atlantic-sector-climate-variability-and-its-discourse-with-humans-of-the-past-present-and-future-check-out-our-new-seminar-series-north-atlantic-climate-and-civilization-we-ve-a-fantastic-lineup-of-speakers-live-streamed-here-from-whoi-every-tuesday-1-30-2-30-et",
          title: 'Interested in Atlantic-sector climate variability, and its discourse with humans of the past,...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-nature-highlighting-ice-core-reconstructions-of-marine-productivity-changes-across-the-north-atlantic-mit-media-release-here",
          title: 'New paper out in Nature, highlighting ice core reconstructions of marine productivity changes...',
          description: "",
          section: "News",},{id: "news-copies-of-my-dissertation-greenlandic-ice-archives-of-north-atlantic-common-era-climate-available-upon-request-or-check-out-this-amazing-graphic-recording-of-my-dissertation-talk-created-in-real-time-by-carrie-heartwoodvisuals",
          title: 'Copies of my dissertation “Greenlandic Ice Archives of North Atlantic Common Era Climate”...',
          description: "",
          section: "News",},{id: "news-i-will-be-highlighting-exciting-new-results-on-reconstructing-global-temperatures-from-24-000-years-ago-to-present-in-upcoming-talks-at-quigs-and-agu-email-me-for-links",
          title: 'I will be highlighting exciting new results on reconstructing global temperatures from 24,000...',
          description: "",
          section: "News",},{id: "news-our-paper-on-reconstructing-global-temperatures-from-24-000-years-ago-to-present-has-now-been-submitted-check-out-the-pre-print-non-peer-reviewed-here",
          title: 'Our paper on reconstructing global temperatures from 24,000 years ago to present has...',
          description: "",
          section: "News",},{id: "news-new-paper-out-in-nature-geoscience-on-reconstructing-past-ice-cap-changes-from-coastal-greenland-ice-cores-see-press-release-here",
          title: 'New paper out in Nature Geoscience on reconstructing past ice cap changes from...',
          description: "",
          section: "News",},{id: "news-new-paper-out-today-in-pnas-on-understanding-past-changes-and-future-changes-in-the-north-atlantic-jet-stream-see-press-release-here",
          title: 'New paper out today in PNAS on understanding past changes and future changes...',
          description: "",
          section: "News",},{id: "news-congrats-to-sarah-das-whoi-whose-photograph-highlighting-our-greenland-ice-cap-coring-work-was-selected-for-the-cover-of-this-month-s-nature-geoscience-issue",
          title: 'Congrats to Sarah Das (WHOI) whose photograph (highlighting our Greenland ice cap coring...',
          description: "",
          section: "News",},{id: "news-new-paper-out-today-in-nature-on-reconstructing-the-global-climate-evolution-since-the-last-ice-age-24-000-years-ago-please-see-our-news-amp-amp-views-feature-written-by-shaun-marcott-and-jeremy-shakun-here-and-our-press-release-here",
          title: 'New paper out today in Nature on reconstructing the global climate evolution since...',
          description: "",
          section: "News",},{id: "news-road-tripping-for-the-holidays-check-out-the-following-nature-podcast-and-radio-ecoshock-episodes-for-interesting-discussions-on-our-recent-work",
          title: 'Road-tripping for the holidays? Check out the following Nature Podcast and Radio Ecoshock...',
          description: "",
          section: "News",},{id: "news-very-pleased-to-be-featured-in-a-recent-pbs-weathered-episode-on-21st-century-weather-extremes-seen-here",
          title: 'Very pleased to be featured in a recent PBS “Weathered” episode on 21st...',
          description: "",
          section: "News",},{id: "news-honored-to-have-been-named-a-2023-marie-skłodowska-curie-actions-fellow",
          title: 'Honored to have been named a 2023 Marie Skłodowska-Curie Actions fellow.',
          description: "",
          section: "News",},{id: "news-excited-to-announce-our-new-nsf-funded-proposal-to-reconstruct-global-warming-ice-sheet-collapse-and-sea-level-rise-during-the-last-interglacial-warm-period",
          title: 'Excited to announce our new NSF-funded proposal to reconstruct global warming, ice sheet...',
          description: "",
          section: "News",},{id: "news-how-have-ice-core-science-partnerships-and-parity-evolved-over-time-see-highlights-from-our-recent-presentation-at-the-3rd-international-partnerships-and-ice-cores-sciences-ipics-symposium-here",
          title: 'How have ice core science partnerships and parity evolved over time? See highlights...',
          description: "",
          section: "News",},{id: "news-interested-in-doing-globally-relevant-paleo-climate-glaciological-research-for-grad-school-curious-about-life-in-cambridge-uk-please-see-our-new-nerc-dpt-position-here-and-reach-out-if-interested",
          title: 'Interested in doing globally relevant paleo-climate/glaciological research for grad school? Curious about life...',
          description: "",
          section: "News",},{id: "news-welcome-to-our-new-lab-members-phd-students-sizhe-chen-and-peisong-zheng-read-more-about-their-work-here",
          title: 'Welcome to our new lab members, PhD students Sizhe Chen and Peisong Zheng!...',
          description: "",
          section: "News",},{id: "news-new-perspective-piece-out-in-nature-geoscience-today-on-fostering-women-participation-in-paleo-science-led-by-bess-koffman-and-myself",
          title: 'New Perspective piece out in Nature Geoscience today on fostering women participation in...',
          description: "",
          section: "News",},{id: "news-important-work-out-today-in-science-advances-led-by-vince-cooper-uw-controlling-for-pattern-effects-using-paleo-reconstructions-from-the-last-ice-age-reduce-climate-sensitivity-estimates",
          title: 'Important work out today in Science Advances led by Vince Cooper (UW): controlling...',
          description: "",
          section: "News",},{id: "news-congrats-to-mphil-student-crystal-fu-for-winning-the-prize-for-best-student-talk-at-this-year-s-palaeoarc-conference-in-stockholm",
          title: 'Congrats to MPhil student Crystal Fu for winning the prize for best student...',
          description: "",
          section: "News",},{id: "news-cambridge-undergrads-consider-taking-our-new-part-ii-course-on-data-analytics-in-climate-and-environmental-science-being-led-by-becky-dell-and-myself",
          title: 'Cambridge undergrads: consider taking our new Part II course on Data Analytics in...',
          description: "",
          section: "News",},{id: "news-a-hearty-welcome-to-our-new-lab-members-phd-students-crystal-fu-and-claudia-offner-and-mphil-student-emily-kraus-read-more-about-their-work-here",
          title: 'A hearty welcome to our new lab members, PhD students Crystal Fu and...',
          description: "",
          section: "News",},{id: "news-check-out-our-new-work-here-led-by-prof-jess-tierney-on-reconstructing-globally-resolved-pliocene-warm-period-3-4-ma-temperatures",
          title: 'Check out our new work, here, led by Prof. Jess Tierney on reconstructing...',
          description: "",
          section: "News",},{id: "news-congrats-to-crystal-fu-for-her-new-arctic-sea-ice-proxy-model-baysic-published-today-open-source-python-implementation-here",
          title: 'Congrats to Crystal Fu for her new Arctic sea ice proxy model, BaySIC,...',
          description: "",
          section: "News",},{id: "projects-circulation",
          title: 'circulation',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/circulation/";
            },},{id: "projects-ecosystems",
          title: 'ecosystems',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ecosystems/";
            },},{id: "projects-snow-and-ice",
          title: 'snow and ice',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/glaciers_and_ice/";
            },},{id: "projects-past-people",
          title: 'past people',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/past_people/";
            },},{id: "projects-proxy-systems",
          title: 'proxy systems',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/proxy_systems/";
            },},{id: "projects-temperature",
          title: 'temperature',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/temperature/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%6F%35%34%39@%63%61%6D.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mattosman", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5636-698X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=BkRV_TIAAAAJ", "_blank");
        },
      },];
