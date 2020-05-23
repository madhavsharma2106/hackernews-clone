import { shallow } from "enzyme";
import React from "react";
import FrontPage from "./container";
import FrontPageComponent from "./component";

const tableData = [
  {
    created_at: "2020-05-22T15:39:07.000Z",
    title: "MacOS Catalina: Slow by Design?",
    url: "https://sigpipe.macromates.com/2020/macos-catalina-slow-by-design/",
    author: "jrk",
    points: 1824,
    story_text: null,
    comment_text: null,
    num_comments: 909,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590161947,
    _tags: ["story", "author_jrk", "story_23273247", "front_page"],
    objectID: "23273247",
    _highlightResult: {
      title: {
        value: "MacOS Catalina: Slow by Design?",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value:
          "https://sigpipe.macromates.com/2020/macos-catalina-slow-by-design/",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "jrk",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T04:10:57.000Z",
    title:
      "Tell HN: Interviewed with Triplebyte? Your profile is about to become public",
    url: null,
    author: "winston_smith",
    points: 894,
    story_text:
      "Fortunately this email made it through my spam filter. Looks like they want to take on LinkedIn and are planning to seed it by making existing accounts public unless you opt OUT within the next week:<p>Hey [redacted],<p>I’m excited to announce that we are expanding the reach of your Triplebyte profile. Now, you can use your Triplebyte credentials on and off the platform. Just like LinkedIn, your profile will be publicly accessible with a dedicated URL that you can share anywhere (job applications, LinkedIn, GitHub, etc). When you do well on a Triplebyte assessment, your profile will showcase that achievement (we won’t show your scores publicly). Unlike LinkedIn, we aim to become your digital engineering skills resume — a credential based on actual skills, not pedigree.<p>The new profiles will be launching publicly in 1 week. This is a great opportunity to update your profile with your latest experience and preferences. You can edit your profile privacy settings to not appear in public search engines at any time.<p>Our mission is to build an open, valuable, and skills-based credential for all engineers. We believe that allowing Triplebyte engineers to publicly share their profiles and skills-based credentials will accelerate this mission.<p>Thanks,<p>Ammon\nCo-founder &amp; CEO, Triplebyte",
    comment_text: null,
    num_comments: 378,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590207057,
    _tags: ["story", "author_winston_smith", "story_23279837", "front_page"],
    objectID: "23279837",
    _highlightResult: {
      title: {
        value:
          "Tell HN: Interviewed with Triplebyte? Your profile is about to become public",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "winston_smith",
        matchLevel: "none",
        matchedWords: [],
      },
      story_text: {
        value:
          "Fortunately this email made it through my spam filter. Looks like they want to take on LinkedIn and are planning to seed it by making existing accounts public unless you opt OUT within the next week:<p>Hey [redacted],<p>I’m excited to announce that we are expanding the reach of your Triplebyte profile. Now, you can use your Triplebyte credentials on and off the platform. Just like LinkedIn, your profile will be publicly accessible with a dedicated URL that you can share anywhere (job applications, LinkedIn, GitHub, etc). When you do well on a Triplebyte assessment, your profile will showcase that achievement (we won’t show your scores publicly). Unlike LinkedIn, we aim to become your digital engineering skills resume — a credential based on actual skills, not pedigree.<p>The new profiles will be launching publicly in 1 week. This is a great opportunity to update your profile with your latest experience and preferences. You can edit your profile privacy settings to not appear in public search engines at any time.<p>Our mission is to build an open, valuable, and skills-based credential for all engineers. We believe that allowing Triplebyte engineers to publicly share their profiles and skills-based credentials will accelerate this mission.<p>Thanks,<p>Ammon\nCo-founder &amp; CEO, Triplebyte",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T02:01:22.000Z",
    title: "Netflix stops charging customers who never watch",
    url: "https://www.bbc.com/news/technology-52777365",
    author: "d99kris",
    points: 572,
    story_text: null,
    comment_text: null,
    num_comments: 412,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590199282,
    _tags: ["story", "author_d99kris", "story_23279160", "front_page"],
    objectID: "23279160",
    _highlightResult: {
      title: {
        value: "Netflix stops charging customers who never watch",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value: "https://www.bbc.com/news/technology-52777365",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "d99kris",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-22T07:55:12.000Z",
    title:
      "Gitlab phished its own work-from-home staff, and 1 in 5 fell for it",
    url: "https://www.theregister.co.uk/2020/05/21/gitlab_phishing_pentest/",
    author: "samizdis",
    points: 267,
    story_text: null,
    comment_text: null,
    num_comments: 158,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590134112,
    _tags: ["story", "author_samizdis", "story_23269661", "front_page"],
    objectID: "23269661",
    _highlightResult: {
      title: {
        value:
          "Gitlab phished its own work-from-home staff, and 1 in 5 fell for it",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value:
          "https://www.theregister.co.uk/2020/05/21/gitlab_phishing_pentest/",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "samizdis",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T09:55:52.000Z",
    title: "First Krita Beta for Android and ChromeOS in Play Store",
    url:
      "https://krita.org/en/item/first-krita-beta-for-android-and-chromeos-in-play-store/",
    author: "reddotX",
    points: 226,
    story_text: null,
    comment_text: null,
    num_comments: 90,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590227752,
    _tags: ["story", "author_reddotX", "story_23281634", "front_page"],
    objectID: "23281634",
    _highlightResult: {
      title: {
        value: "First Krita Beta for Android and ChromeOS in Play Store",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value:
          "https://krita.org/en/item/first-krita-beta-for-android-and-chromeos-in-play-store/",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "reddotX",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T11:13:06.000Z",
    title: "SQLite 3.32.0",
    url: "https://sqlite.org/releaselog/3_32_0.html",
    author: "nikbackm",
    points: 221,
    story_text: null,
    comment_text: null,
    num_comments: 86,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590232386,
    _tags: ["story", "author_nikbackm", "story_23281994", "front_page"],
    objectID: "23281994",
    _highlightResult: {
      title: {
        value: "SQLite 3.32.0",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value: "https://sqlite.org/releaselog/3_32_0.html",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "nikbackm",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T13:07:28.000Z",
    title:
      "Hacker Mods Old Calculator to Access the Internet, Casio Files DMCA Complaint",
    url:
      "https://torrentfreak.com/hacker-mods-old-calculator-to-access-the-internet-casio-files-dmca-complaint-200523/",
    author: "fraqed",
    points: 176,
    story_text: null,
    comment_text: null,
    num_comments: 44,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590239248,
    _tags: ["story", "author_fraqed", "story_23282607", "front_page"],
    objectID: "23282607",
    _highlightResult: {
      title: {
        value:
          "Hacker Mods Old Calculator to Access the Internet, Casio Files DMCA Complaint",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value:
          "https://torrentfreak.com/hacker-mods-old-calculator-to-access-the-internet-casio-files-dmca-complaint-200523/",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "fraqed",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T09:42:24.000Z",
    title: "Catalina is checking notarization of unsigned executables",
    url: "https://lapcatsoftware.com/articles/catalina-executables.html",
    author: "robenkleene",
    points: 154,
    story_text: null,
    comment_text: null,
    num_comments: 39,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590226944,
    _tags: ["story", "author_robenkleene", "story_23281564", "front_page"],
    objectID: "23281564",
    _highlightResult: {
      title: {
        value: "Catalina is checking notarization of unsigned executables",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value: "https://lapcatsoftware.com/articles/catalina-executables.html",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "robenkleene",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T06:09:54.000Z",
    title: "Herd of Fuzzy Green 'Glacier Mice' Baffles Scientists",
    url:
      "https://www.npr.org/2020/05/22/858800112/herd-like-movement-of-fuzzy-green-glacier-mice-baffles-scientists",
    author: "Xplor",
    points: 150,
    story_text: null,
    comment_text: null,
    num_comments: 37,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590214194,
    _tags: ["story", "author_Xplor", "story_23280378", "front_page"],
    objectID: "23280378",
    _highlightResult: {
      title: {
        value: "Herd of Fuzzy Green 'Glacier Mice' Baffles Scientists",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value:
          "https://www.npr.org/2020/05/22/858800112/herd-like-movement-of-fuzzy-green-glacier-mice-baffles-scientists",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "Xplor",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T03:48:50.000Z",
    title: "Common Rust Lifetime Misconceptions",
    url:
      "https://github.com/pretzelhammer/rust-blog/blob/master/posts/common-rust-lifetime-misconceptions.md",
    author: "donmcc",
    points: 141,
    story_text: null,
    comment_text: null,
    num_comments: 30,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590205730,
    _tags: ["story", "author_donmcc", "story_23279731", "front_page"],
    objectID: "23279731",
    _highlightResult: {
      title: {
        value: "Common Rust Lifetime Misconceptions",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value:
          "https://github.com/pretzelhammer/rust-blog/blob/master/posts/common-rust-lifetime-misconceptions.md",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "donmcc",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-22T12:19:52.000Z",
    title:
      "Show HN: React Native scrollable bottom sheet native animations gestures 60FPS",
    url: "https://github.com/rgommezz/react-native-scroll-bottom-sheet",
    author: "rgommezz",
    points: 134,
    story_text: null,
    comment_text: null,
    num_comments: 53,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590149992,
    _tags: [
      "story",
      "author_rgommezz",
      "story_23271298",
      "show_hn",
      "front_page",
    ],
    objectID: "23271298",
    _highlightResult: {
      title: {
        value:
          "Show HN: React Native scrollable bottom sheet native animations gestures 60FPS",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value: "https://github.com/rgommezz/react-native-scroll-bottom-sheet",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "rgommezz",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T11:56:19.000Z",
    title: "Show HN: LaTeX.css – Make your website look like a LaTeX document",
    url: "https://latex.now.sh",
    author: "doerig",
    points: 127,
    story_text: null,
    comment_text: null,
    num_comments: 43,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590234979,
    _tags: [
      "story",
      "author_doerig",
      "story_23282207",
      "show_hn",
      "front_page",
    ],
    objectID: "23282207",
    _highlightResult: {
      title: {
        value:
          "Show HN: LaTeX.css – Make your website look like a LaTeX document",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value: "https://latex.now.sh",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "doerig",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T15:48:11.000Z",
    title:
      "Show HN: A dependently-typed programming language with static memory management",
    url: "https://github.com/u2zv1wx/neut",
    author: "u2zv1wx",
    points: 127,
    story_text: null,
    comment_text: null,
    num_comments: 10,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590248891,
    _tags: [
      "story",
      "author_u2zv1wx",
      "story_23283880",
      "show_hn",
      "front_page",
    ],
    objectID: "23283880",
    _highlightResult: {
      title: {
        value:
          "Show HN: A dependently-typed programming language with static memory management",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value: "https://github.com/u2zv1wx/neut",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "u2zv1wx",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T09:38:03.000Z",
    title: "The Ten Commandments for C Programmers (1990)",
    url: "https://www.lysator.liu.se/c/ten-commandments.html",
    author: "ingve",
    points: 117,
    story_text: null,
    comment_text: null,
    num_comments: 47,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590226683,
    _tags: ["story", "author_ingve", "story_23281542", "front_page"],
    objectID: "23281542",
    _highlightResult: {
      title: {
        value: "The Ten Commandments for C Programmers (1990)",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value: "https://www.lysator.liu.se/c/ten-commandments.html",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "ingve",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-22T17:30:42.000Z",
    title: "What a typical serverless architecture looks like in AWS",
    url:
      "https://medium.com/serverless-transformation/what-a-typical-100-serverless-architecture-looks-like-in-aws-40f252cd0ecb",
    author: "prostoalex",
    points: 109,
    story_text: null,
    comment_text: null,
    num_comments: 114,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590168642,
    _tags: ["story", "author_prostoalex", "story_23274668", "front_page"],
    objectID: "23274668",
    _highlightResult: {
      title: {
        value: "What a typical serverless architecture looks like in AWS",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value:
          "https://medium.com/serverless-transformation/what-a-typical-100-serverless-architecture-looks-like-in-aws-40f252cd0ecb",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "prostoalex",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T13:32:54.000Z",
    title: "Stapelberg uses this: my 2020 desk setup",
    url: "https://michael.stapelberg.ch/posts/2020-05-23-desk-setup/",
    author: "secure",
    points: 103,
    story_text: null,
    comment_text: null,
    num_comments: 92,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590240774,
    _tags: ["story", "author_secure", "story_23282784", "front_page"],
    objectID: "23282784",
    _highlightResult: {
      title: {
        value: "Stapelberg uses this: my 2020 desk setup",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value: "https://michael.stapelberg.ch/posts/2020-05-23-desk-setup/",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "secure",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T12:12:13.000Z",
    title: "Ask HN: How do you brand yourself as a freelancer?",
    url: null,
    author: "bluewalt",
    points: 95,
    story_text:
      "I&#x27;ll quit my CTO position in a few months to become a Freelancer.\nI know personal branding is an important part of the job to get customers.<p>In short: what do you do for that?<p>* Where do you ensure to be visible? LinkedIn, personal website, etc?<p>* Do you create and post content (blog, LinkedIn groups, etc.)?<p>* What content about you do you emphasize to find leads?<p>* Do you use your own name, or a company name?<p>* Did you chose to brand yourself a generalist Freelancer (&quot;I&#x27;m a developper working with X and Y languages&quot;) or a specialist one (&quot;I can be a CTO as a service building your MVP for your startup and help recruiting and train your team&quot;)<p>Thanks for sharing your tips and experience.",
    comment_text: null,
    num_comments: 40,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590235933,
    _tags: [
      "story",
      "author_bluewalt",
      "story_23282278",
      "ask_hn",
      "front_page",
    ],
    objectID: "23282278",
    _highlightResult: {
      title: {
        value: "Ask HN: How do you brand yourself as a freelancer?",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "bluewalt",
        matchLevel: "none",
        matchedWords: [],
      },
      story_text: {
        value:
          "I'll quit my CTO position in a few months to become a Freelancer.\nI know personal branding is an important part of the job to get customers.<p>In short: what do you do for that?<p>* Where do you ensure to be visible? LinkedIn, personal website, etc?<p>* Do you create and post content (blog, LinkedIn groups, etc.)?<p>* What content about you do you emphasize to find leads?<p>* Do you use your own name, or a company name?<p>* Did you chose to brand yourself a generalist Freelancer (&quot;I'm a developper working with X and Y languages&quot;) or a specialist one (&quot;I can be a CTO as a service building your MVP for your startup and help recruiting and train your team&quot;)<p>Thanks for sharing your tips and experience.",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-22T08:02:14.000Z",
    title: "Python Generated Sequence Diagrams",
    url:
      "https://dragonquest64.blogspot.com/2020/05/python-generated-sequence-diagrams.html",
    author: "lipeltgm",
    points: 89,
    story_text: null,
    comment_text: null,
    num_comments: 17,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590134534,
    _tags: ["story", "author_lipeltgm", "story_23269697", "front_page"],
    objectID: "23269697",
    _highlightResult: {
      title: {
        value: "Python Generated Sequence Diagrams",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value:
          "https://dragonquest64.blogspot.com/2020/05/python-generated-sequence-diagrams.html",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "lipeltgm",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-23T11:56:26.000Z",
    title:
      "Researchers have achieved an internet speed of 44.2 terabits per second",
    url:
      "https://www.independent.co.uk/life-style/gadgets-and-tech/news/internet-speed-world-record-fastest-download-a9527236.html",
    author: "martonlanga",
    points: 87,
    story_text: null,
    comment_text: null,
    num_comments: 51,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590234986,
    _tags: ["story", "author_martonlanga", "story_23282209", "front_page"],
    objectID: "23282209",
    _highlightResult: {
      title: {
        value:
          "Researchers have achieved an internet speed of 44.2 terabits per second",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value:
          "https://www.independent.co.uk/life-style/gadgets-and-tech/news/internet-speed-world-record-fastest-download-a9527236.html",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "martonlanga",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
  {
    created_at: "2020-05-22T09:56:40.000Z",
    title: "Science Fiction Timeline of Inventions",
    url: "http://www.technovelgy.com/ct/ctnlistPubDate.asp",
    author: "raleighm",
    points: 82,
    story_text: null,
    comment_text: null,
    num_comments: 5,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1590141400,
    _tags: ["story", "author_raleighm", "story_23270334", "front_page"],
    objectID: "23270334",
    _highlightResult: {
      title: {
        value: "Science Fiction Timeline of Inventions",
        matchLevel: "none",
        matchedWords: [],
      },
      url: {
        value: "http://www.technovelgy.com/ct/ctnlistPubDate.asp",
        matchLevel: "none",
        matchedWords: [],
      },
      author: {
        value: "raleighm",
        matchLevel: "none",
        matchedWords: [],
      },
    },
  },
];
const pageInfo = {
  current: 0,
  total: 2,
};
describe("Front Page Component", () => {
  it("should render container without errors", () => {
    const wrapper = shallow(<FrontPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render component without errors", () => {
    const wrapper = shallow(
      <FrontPageComponent
        tableData={tableData}
        pageInfo={pageInfo}
        nextPage={() => {}}
        previousPage={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
