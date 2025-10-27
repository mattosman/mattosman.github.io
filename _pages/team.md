---
layout: page
permalink: /team/
title:
description:
nav: false
nav_order: 7
---

<div style="max-width: 600px; margin: 0 auto; padding: 30px;">

{% for person in site.data.members %}

<div id="{{ person.name | replace: ' ', '-' }}" style="overflow: hidden; padding-top: 60px; margin-top: -60px; margin-bottom: 40px;">

  <!-- Float image right and keep it close -->
  <img
    src="{{ person.image | prepend: '/assets/img/' | prepend: site.baseurl | prepend: site.url }}"
    alt="photo of {{ person.name }}"
    style="float: right; width: 175px; height: auto; margin-left: 20px; margin-bottom: 10px; border-radius: 4px;"
  >

  <!-- All content flows around the image -->
  <h4 style="margin-top: 0;">{{ person.name }}{% if person.degrees %}, {{ person.degrees }}{% endif %}</h4>
  <p style="margin: 0;">{{ person.position }}</p>

  {% if person.email %}
    <p style="margin: 0;">
      <i class="fa fa-envelope"></i> <em>{{ person.email }}</em>
    </p>
  {% endif %}

  {% if person.website %}
    <p style="margin: 0;">
      <i class="fa fa-globe"></i> <a href="{{ person.website }}" target="_blank">{{ person.website }}</a>
    </p>
  {% endif %}

  {% if person.github %}
    <p style="margin: 0;">
      <i class="fab fa-github"></i> <a href="https://github.com/{{ person.github }}" target="_blank">{{ person.github }}</a>
    </p>
  {% endif %}

  {% if person.scholar %}
    <p style="margin: 0;">
      <i class="ai ai-google-scholar"></i> <a href="http://scholar.google.com/citations?user={{ person.scholar }}" target="_blank">Scholar profile</a>
    </p>
  {% endif %}

  {% if person.orcid %}
    <p style="margin: 0;">
      <i class="ai ai-orcid"></i> <a href="http://{{ person.orcid }}" target="_blank">{{ person.orcid }}</a>
    </p>
  {% endif %}

  <!-- Description still part of this block so it wraps too -->
  <div style="margin-top: 12px;">
    {{ person.description | markdownify }}
  </div>
</div>
<hr>
{% endfor %}


<h2 style="margin-top: 2em;">alumni</h2>

<div style="margin-top: 1.5em; margin-bottom: 1.2em;">
  <p>
    <strong>Tom Woolley</strong><br>
    <em>previously:</em> Cambridge undergrad <br>
    <em>now:</em> MPhil in Polar Studies, Sheffield University <br>
  </p>
</div>

<div style="margin-top: 1.5em; margin-bottom: 1.2em;">
  <p>
    <strong>Marco Aquino-López (honourary!)</strong><br>
    <em>previously:</em> Research Associate <br>
    <em>now:</em> Researcher and Lecture, CIMAT <br>
    <i class="fa fa-globe"></i>
    <a href="https://www.cimat.mx/" target="_blank">
      https://www.cimat.mx/
    </a>
  </p>
</div>

<div style="margin-top: 1.5em; margin-bottom: 1.2em;">
  <p>
    <strong>Yu Huang</strong><br>
    <em>previously:</em> Cambridge QCES MPhil <br>
    <em>now:</em> Gates Cambridge PhD student, BAS & Cambridge <br>
  </p>
</div>

<div style="margin-top: 1.5em; margin-bottom: 1.2em;">
  <p>
    <strong>Emily Kraus</strong><br>
    <em>previously:</em> Gates Cambridge MPhil student <br>
    <em>now:</em> C3PO Research Assistant! <br>
  </p>
</div>

</div>
