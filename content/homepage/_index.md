---
title: 'Homepage'
type: 'blank'
---

Welcome to the *OpenStreetMap Routes Index*. In this site you can find all
route relations in OpenStreetMap, organized by country.

## Features

1. Static website powered by Hugo, supporting markdown and shortcode templates.
2. Route database are dumped to JSON files, per route type, per
   country. Use Javascript to make use of the database.
3. Route database is synced everyday.
4. Two type of shortcodes at the moment: 1) list routes based on a tag
   [[example: E-roads in the Netherlands](nl/road/e-roads),
   [source](https://github.com/tracestrack/osm-routes-index/blob/main/content/NL/road/E-roads.md?plain=1)]
   2) reference route tags in markdown [[example: Radial Expressways in Beijing](cn/road/国家高速公路分类汇总/首都放射/), [source](https://github.com/tracestrack/osm-routes-index/blob/main/content/CN/road/国家高速公路分类汇总/首都放射.md?plain=1)].

## Actively maintained subsites

### Asia

[CN](cn)

### Europe

[BE](be) [DE](de)  [FR](fr)  [NL](nl)

### North America

[US](us)

## How to contribute?

There are many ways to contribute to the projects.

### Creating markdown pages

1. Make more route lists. Some ideas: list routes with
  matching *network* or *ref*. Note the pattern matching is based on regular
  expression.
2. Make detailed pages referencing to tag values in the route database. Use the
   OSM route database as the ground truth and reference it.

### Adding missing route tags in OpenStreetMap

In route lists you may find empty tags like `from`, `to`, `wikidata`,
`wikipedia` etc. You can help by completing it in the OpenStreetMap website.

### Filing issues in Github

You can file issue reports or feature reqeusts in [Github Issues](https://github.com/tracestrack/osm-routes-index/issues)

### Contribute in code

You are very welcome to improve the codebase via Pull Requests. Some aspects to
be improved: theme, shortcode scripts etc.

## Credit

Data source: © OpenStreetMap contributors

Maintainer: [strongwillow](https://github.com/strongwillow)

Special thanks to [osmchina](https://osmchina.org) for some discussions and feedbacks.
