---
layout: page
permalink: /tag/
title: "Tag Index"
last_modified_at: 2017-06-19T09:19:44-04:00
excerpt: "An archive of posts sorted by tag frequency."
share: false
---

{{ page.excerpt | markdownify }}

<ul class="entries-columns">
  {% assign sorted_tags = site.tags | sort_tags_by_name %}
  {% for tag in sorted_tags %}
    <li>
      <a href="/tag/{{ tag[0] | replace:' ','-' | downcase }}/">
        <strong>{{ tag[0] }}</strong> <span class="count">{{ tag[1] }}</span>
      </a>
    </li>
  {% endfor %}
</ul>
