'use strict';

window.frameId = window.frameId || Math.random();

var meta = document.querySelector('meta[name="Keywords"]') ||
  document.querySelector('meta[name="keywords"]');
var description = document.querySelector('meta[name="Description"]') ||
  document.querySelector('meta[name="description"]');

({
  url: location.href,
  mime: document.contentType,
  lang: document.documentElement.lang,
  body: document.body.innerText,
  frameId: window.frameId,
  keywords: meta ? meta.content : '',
  title: document.title,
  description: description ? description.content : '',
  date: new Date(document.lastModified).toISOString().split('T')[0].replace(/-/g, '')
})
